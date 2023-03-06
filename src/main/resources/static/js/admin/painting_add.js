window.onload = () => {
    PaintingAddService.getInstance().loadCategories();

    ComponentEvent.getInstance().addChangeEventImgFile();
    ComponentEvent.getInstance().addClickEventAddButton();
    ComponentEvent.getInstance().addClickEventImgAddButton();
    ComponentEvent.getInstance().addClickEventImgCancelButton();
    ComponentEvent.getInstance().addClickEventImgAddButton();
}

const paintingObj = {
    paintingCode: "",
    paintingTitleName: "",
    exhibitionWorks: "",
    viewingTime: "",
    paintingName: "",
    author: "",
    paintingSize: "",
    year_of_Manufacture: "",
    material: ""
}

const fileObj = {
    files : new Array(),
    formData: new FormData()
}

class PaintingAddApi{
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new PaintingAddApi();
        }
        return this.#instance;
    }

    addPainting() {
        let successFlag = false;

        $.ajax({
            async: false,
            type: "post",
            url: "http://localhost:8000/api/admin/painting",
            contentType: "application/json",
            data: JSON.stringify(paintingObj),
            dataType: "json",
            success: response => {
                successFlag = true;
            },
            error: error => {
                console.log(error);
                PaintingAddService.getInstance().setErrors(error.responseJSON.data);
            }
        });
        return successFlag;
    }

    paintingImg(){

        $.ajax({
            async: false,
            type: "post",
            url: `http://localhost:8000/api/admin/painting/${paintingObj.paintingCode}/images`,
            encType: "multipart/form-data",
            contentType: false,
            processData: false,
            data: fileObj.formData,
            dataType: "json",
            success: response => {
                alert("전시 이미지 등록 완료.");
                location.reload();
            },
            error: error => {
                console.log(error);
            }
        });
    }

    getCategories() {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "http://localhost:8000/api/admin/categories",
            dataType: "json",
            success: response => {
                responseData = response.data;
            },
            error: error => {
                console.log(error);
            }
        });

        return responseData;
    }
}

class PaintingAddService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new PaintingAddService();
        }
        return this.#instance;
    }

    setPaintingObjValues(){
        const addInputs = document.querySelectorAll(".add-input");

        paintingObj.paintingCode = addInputs[0].value;
        paintingObj.paintingTitleName = addInputs[1].value;
        paintingObj.exhibitionWorks = addInputs[2].value;
        paintingObj.viewingTime = addInputs[3].value;
        paintingObj.paintingName = addInputs[4].value;
        paintingObj.author = addInputs[5].value;
        paintingObj.paintingSize = addInputs[6].value;
        paintingObj.year_of_Manufacture = addInputs[7].value;
        paintingObj.material = addInputs[8].value;

    }

    loadCategories() {
        const responseData = PaintingAddApi.getInstance().getCategories();

        const categorySelect = document.querySelector(".category-select");
        categorySelect.innerHTML = `<option value="">전체조회</option>`;

        responseData.forEach(data => {
            categorySelect.innerHTML += `
                <option value="${data.category}">${data.category}</option>
            `;
        });
    }

    setErrors(errors) {
        const errorMessages = document.querySelectorAll(".error-message");
        this.clearErrors();

        Object.keys(erorrs).forEach(key => {
            if(key == "paintingCode"){
                errorMessages[0].innerHTML = errors[key];
            }else if(key == "paintingTitleName"){
                errorMessages[1].innerHTML = errors[key];
            }else if(key == "exhibitionWorks"){
                errorMessages[2].innerHTML = errors[key];
            }else if(key == "viewingTime"){
                errorMessages[3].innerHTML = errors[key];
            }else if(key == "paintingSize"){
                errorMessages[6].innerHTML = errors[key];
            }else if(key == "material"){
                errorMessages[8].innerHTML = errors[key];
            }
        })
    }
    clearErrors(){
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => {
            error.innerHTML = "";
        })
    }
}

class ImgFileService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new ImgFileService();
        }
        return this.#instance;
    }

    getImgPreview(){
        const paintingImg = document.querySelectorAll(".painting-img");

        const reader = new FileReader ();

        reader.onload = (e) => {
            paintingImg.src = e.target.result;
        }

        reader.readAsDataURL(fileObj.files[0]);
    }
}

class ComponentEvent {
    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new ComponentEvent();
        }
        return this.#instance;
    }

    addClickEventAddButton(){
        const addButton = document.querySelectorAll(".add-button");

        addButton.onclick = () => {
            PaintingAddService.getInstance.setPaintingObjValues();
            const successFlag = PaintingAddService.getInstance().addPainting();

            if(!successFlag){
                return;
            }

            if(confirm("전시 작품을 등록하시겠습니까?")){
                const imgAddButton = document.querySelector(".img-add-button");
                const imgCancelButton = document.querySelector(".img-cancel-button");

                imgAddButton.disabled = false;
                imgCancelButton.disabled = false;
            }else{
                location.reload();
            }
        }
    }

    addClickEventImgAddButton(){
        const imgFile = document.querySelector(".img-file");
        const addButton = document.querySelector(".img-add-button");

        addButton.onclick = () => {
            imgFile.click();
        }
    }

    addChangeEventImgFile(){
        const imgFile = document.querySelector(".img-file");

        imgFile.onchange = () => {
            const formData = new FormData(document.querySelector(".img-form"));
            let changeFlag = false;

            fileObj.files.pop();

            formData.forEach(value => {
                console.log(value);

                if(value.size != 0){
                    fileObj.files.push(value);
                    changeFlag = true;
                }
            });

            if(changeFlag){
                const imgAddButton = document.querySelector(".img-add-button");
                imgAddButton.disabled = false;

                ImgFileService.getInstance().getImgPreview();
                imgFile.value = null;
            }
        }
    }

    addClickEventImgAddButton(){
        const imgAddButton = document.querySelector(".img-add-button");

        imgAddButton.onclick = () => {
            fileObj.formData.append("files", fileObj.files[0]);
            PaintingAddApi.getInstance().addImg();
        }
    }

    addClickEventImgCancelButton() {
        const imgCancelButton = document.querySelector(".img-cancel-button");

        imgCancelButton.onclick = () => {
            if(confirm("정말로 이미지 등록을 취소하시겠습니까?")) {
                location.reload();
            }
        }
    }

}