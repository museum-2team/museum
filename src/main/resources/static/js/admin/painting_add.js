window.onload = () => {

}

const paintingObj = {
    paintingCode: "",
    paintingTitleName: "",
    viewingTime: "",
    exhibitionWorks: "",
    exhibitionPeriod: "",
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

class PaintingaddApi{
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new PaintingaddApi();
        }
        return this.#instance;
    }

    addPainting() {
        let successFlag = false;

        $.ajax({
            async: false,
            url: "http://localhost:8000/api/admin/painting",
            contentType: "application/json",
            data: JSON.stringify(paintingObj),
            dataType: "json",
            success: response => {
                successFlag = true;
            },
            error: error => {
                console.log(error);
                PaintingaddApi.getInstance().setErrors(error.responseJSON.data);
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
        paintingObj.viewingTime = addInputs[2].value;
        paintingObj.exhibitionWorks = addInputs[3].value;
        paintingObj.exhibitionPeriod = addInputs[4].value;
        paintingObj.paintingName = addInputs[5].value;
        paintingObj.author = addInputs[6].value;
        paintingObj.paintingSize = addInputs[7].value;
        paintingObj.year_of_Manufacture = addInputs[8].value;
        paintingObj.material = addInputs[9].value;

    }

    setErrors(errors) {
        const errorMessages = document.querySelectorAll(".error-message");
        this.clearErrors();

        Object.keys(erorrs).forEach(key => {
            if(key == "paintingCode"){
                errorMessages[0].innerHTML = errors[key];
            }else if(key == "paintingTitleName"){
                errorMessages[1].innerHTML = errors[key];
            }else if(key == "viewingTime"){
                errorMessages[2].innerHTML = errors[key];
            }else if(key == "exhibitionWorks"){
                errorMessages[3].innerHTML = errors[key];
            }else if(key == "exhibitionPeriod"){
                errorMessages[4].innerHTML = errors[key];
            }else if(key == "paintingSize"){
                errorMessages[7].innerHTML = errors[key];
            }else if(key == "material"){
                errorMessages[9].innerHTML = errors[key];
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
            paintingImg.src = e.target.result
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
            PaintingaddService.getInstance.setPaintingObjValues();
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

    add
}