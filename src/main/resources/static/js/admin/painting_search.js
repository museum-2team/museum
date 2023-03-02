window.onload = () => {

}

let searchObj = {
    page : 1,
    category : "",
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

        const PaintingListBody = document.querySelector(".painting-table tbody");
        PaintingListBody.innerHTML = "";

        responseData.forEach((data, index) => {
            PaintingListBody.innerHTML += `
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
            `;
        });
        this.loadPaintingList();
        ComponentEvent.getInstance().addClickEventDeleteCheckbox();
    }

}








































