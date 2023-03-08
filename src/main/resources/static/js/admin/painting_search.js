window.onload = () => {
    PaintingService.getInstance().loadPaintingList();
    PaintingService.getInstance().loadCategories();
    ComponentEvent.getInstance().addClickEventSearchButton();
    ComponentEvent.getInstance().addClickEventDeleteButton();
    ComponentEvent.getInstance().addClickEventDeleteCheckAll();
}

let searchObj = {
    page : 1,
    category: "",
    searchValue : "",
    order : "paintingId",
    limit : "Y",
    count : 20,
}

class PaintingSearchApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new PaintingSearchApi();
        }
        return this.#instance;
    }

    getPaintingList(searchObj){
        let returnData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "http://localhost:8000/api/admin/paintings",
            data: searchObj,
            dataType: "json",
            success: response => {
                console.log(response);
                returnData = response.data;
            },
            error: error => {
                console.log(error);
            }
        });

        return returnData;
    }
    

    getPaintingTotalCount(searchObj){
        let returnData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "http://localhost:8000/api/admin/paintings/totalcount",
            data:{
                "category" : searchObj.category,
                "searchValue": searchObj.searchValue
            },
            dataType: "json",
            success: response => {
                console.log(response);
                returnData = response.data;
            },
            error: error =>{
                console.log(error);
            }
        });
        return returnData;
        }

        getCategories(){
            let responseData = null;

            $.ajax({
                async: false,
                type: "get",
                url: "http://localhost:8000/api/admin/categories",
                dataType: "json",
                success: response => {
                    console.log(response);
                    responseData = response.data;
                },
                error: error => {
                    console.log(error);
                }
            });

            return responseData;
        }

    deletePaintings(deleteArray){
        let returnFlag = false;

        $.ajax({
            async: false,
            type: "delete",
            url: "http://localhost:8000/api/admin/paintings",
            contentType: "application/json",
            data: JSON.stringify(
                {
                    userIds: deleteArray
                }
            ),
            dataType: "json",
            success: response => {
                returnFlag = true;
            },
            error: error => {
                console.log(error);
            }
        })
        return returnFlag;
    }
}

class PaintingService{
    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new PaintingService();
        }
        return this.#instance;
    }

    loadPaintingList(){
        const responseData = PaintingSearchApi.getInstance().getPaintingList(searchObj);
        const checkAll = document.querySelector(".delete-checkall");
        checkAll.checked = false;

        const paintingListBody = document.querySelector(".painting-table tbody");
        paintingListBody.innerHTML = "";

        responseData.forEach((data, index) => {
            paintingListBody.innerHTML += `
                <tr>
                    <td><input type="checkbox" class="delete-chekcbox"></td>
                    <td class="painting-id">${data.paintingId}</td>
                    <td>${data.paintingCode}</td>
                    <td>${data.paintingTitleName}</td>
                    <td>${data.exhibitionWorks}</td>
                    <td>${data.viewingTime}</td>
                    <td>${data.paintingName}</td>
                    <td>${data.author}</td>
                    <td>${data.paintingSize}</td>
                    <td>${data.year_of_Manufacture}</td>
                    <td>${data.material}</td>
                    <td><a href="/templates/admin/painting_edit.html?paintingCode=${data.paintingCode}"><i class="fa-solid fa-square-pen"></td>
                <tr>
            `;
        });
        
        this.loadSearchNumberList();
        ComponentEvent.getInstance().addClickEventDeleteCheckbox();
    }

    loadSearchNumberList() {
        const pageController = document.querySelector(".page-controller");

        const totalCount = PaintingSearchApi.getInstance().getPaintingTotalCount(searchObj);
        const maxPageNumber = totalCount % searchObj.count == 0
                            ? Math.floor(totalCount / searchObj.count)
                            : Math.floor(totalCount / searchObj.count) + 1;

        pageController.innerHTML = `
            <a href="javascript:void(0)" class="pre-button disabled">이전</a>
            <ul class="page-numbers">
            </ul>
            <a href="javascript:void(0)" class="next-button disabled">다음</a>
        `;

        if(searchObj.page != 1){
            const preButton = pageController.querySelector(".pre-button");
            preButton.classList.remove("disabled");

            preButton.onclick = () =>{
                searchObj.page--;
                this.loadPaintingList();
            }
        }

        if(searchObj.page != maxPageNumber){
            const nextButtone = pageController.querySelector(".next-button");
            nextButtone.classList.remove("disabled");

            nextButtone.onclick = () => {
                searchObj.page++;
                this.loadPaintingList();
            }
        }

        const startIndex = searchObj.page % 5 == 0
                        ? searchObj.page - 4
                        : searchObj.page - (searchObj.page % 5) + 1;

        const endIndex = startIndex + 4 <= maxPageNumber ? startIndex + 4 : maxPageNumber;
        const pageNumber = document.querySelector(".page-number");

        for(let i = startIndex; i <= endIndex; i++) {
            pageNumber.innerHTML += `
                <a href="javascript:void(0)"class="page-button ${i == searchObj.page ? "disabled" : ""}><li>${i}</li></a>
            `;
        }

        const pageButtons = document.querySelectorAll(".page-button");
        pageButtons.forEach(button => {
            
            const pageNumber = button.textContent;
            if(pageNumber != searchObj.page){
                button.onclick = () => {
                    searchObj.page = pageNumber;
                    this.loadPaintingList();
                }
            }
        });
    }  

    loadCategories(){
        const responseData = PaintingSearchApi.getInstance().getCategories();

        const categorySelect = document.querySelector(".category-select");
        categorySelect.innerHTML = `<option value="">전체조회</option>`;

        responseData.forEach(data => {
            categorySelect.innerHTML += `
            <option value="${data.category}">${data.category}</option>
            `
        })
    }

    removePaintings(deleteArray){
        let successFlag = PaintingSearchApi.getInstance().deletePaintings(deleteArray);

        if(successFlag){
            searchObj.page = 1;
            this.loadPaintingList();
        }
    }

}

class ComponentEvent{
    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new ComponentEvent();
        }
        return this.#instance;
    }
    addClickEventSearchButton(){
        const categorySelect = document.querySelector(".category-select");
        const searchInput = document.querySelector(".search-input");
        const searchButton = document.querySelector(".search-button");
        
        searchButton.onclick = () => {
            searchObj.category = categorySelect.value;
            searchObj.searchValue = categorySelect.value;
            searchObj.page = 1;
            
            PaintingService.getInstance().loadPaintingList();
        }

        searchInput.onkeyup = () => {
            if(window.event.keyCode == 13){
                searchButton.onclick();
            }
        }
    }

    addClickEventDeleteButton(){
        const deleteButton = document.querySelector(".delete-button");
        deleteButton.onclick = () => {
            if(confirm("삭제하시겠습니까?")){
                const deleteArray = new Array();

                const deleteCheckboxs = document.querySelectorAll(".delete-checkbox");

                deleteCheckboxs.forEach((deleteCheckbox, index) => {
                    if(deleteCheckbox.checked){
                        const paintingIds = document.querySelectorAll(".painting-id");
                        deleteArray.push(paintingIds[index].textContent);
                    }
                });

                PaintingService.getInstance().removePaintings(deleteArray);
            }
        }
    }

    addClickEventDeleteCheckAll(){
        const checkAll = document.querySelector(".delete-checkall");
        checkAll.onclick = () => {
            const deleteCheckboxs = document.querySelectorAll(".delete-checkbox");
            deleteCheckboxs.forEach(deleteCheckbox => {
                deleteCheckbox.checked = checkAll.checkedl;
            });
        }
    }

    addClickEventDeleteCheckbox() {
        const deleteCheckboxs = document.querySelectorAll(".delete-checkbox");
        const checkAll = document.querySelector(".delete-checkall");

        deleteCheckboxs.forEach(deleteCheckbox => {
            deleteCheckbox.onclick = () => {
                const deleteCheckedCheckboxs = document.querySelectorAll(".delete-checkbox:checked");

                if(deleteCheckedCheckboxs.length == deleteCheckboxs.length){
                    checkAll.checked = true;
                }else{
                    checkAll.checked = false;
                }
            }
        })
    }
}