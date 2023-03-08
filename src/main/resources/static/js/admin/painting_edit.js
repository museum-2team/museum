window.onload = () => {
    PaintingEditService.getInstance().setPaintingCode();
    // PaintingEditService.getInstance().loadCategories();
    PaintingEditService.getInstance().loadPaintingAndImageData();
    
    ComponentEvent.getInstance().addClickEventEditButton();
    ComponentEvent.getInstance().addClickEventImgAddButton();
    ComponentEvent.getInstance().addChangeEventImgFile();
    ComponentEvent.getInstance().addClickEventEditButton();
    ComponentEvent.getInstance().addClickEventImgCancelButton();
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

const imgObj = {
    imageId: null,
    paintingCode: null,
    saveName: null,
    originName: null
}

const fileObj = {
    files: new Array(),
    formData: new FormData()
}

class PaintingEditApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new PaintingEditApi();
        }
        return this.#instance;   
    }

    getPaintingAndImage(){
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: `http://localhost:8000/api/admin/painting/${paintingObj.paintingCode}`,
            dataType: "json",
            success: response =>{
                responseData =  response.data;
            },
            error: error => {
                console.log(error);
            }
        });
        return responseData;
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

    modifyPainting() {
        let successFlag = false;

        $.ajax({
            async: false,
            type: "put",
            url: `http://localhost:8000/api/admin/painting/${paintingObj.paintingCode}`,
            contentType: "application/json",
            data: JSON.stringify(paintingObj),
            dataType: "json",
            success: response => {
                successFlag = true;
            },
            error: error => {
                console.log(error);
                PaintingEditService.getInstance().setErrors(error.responseJSON.data);
            }
        });
        return successFlag;
    }

    removeImg(){
        let successFlag = false;

        $.ajax({
            async: false,
            type: "delete",
            url: `http://localhost:8000/api/admin/painting/${paintingObj.paintingCode}/image/${imgObj.imageId}`,
            dataType: "json",
            success: response => {
                successFlag = true;
            },
            error: error => {
                console.log(error);
            }
        });

        return successFlag;
    }

    addImg() {
        
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
                alert("이미지가 수정 되었습니다.");
                location.reload();
            },
            error: error => {
                console.log(error);
            }
        })
    }
}

class PaintingEditService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new PaintingEditService();
        }
        return this.#instance;
    }

    setPaintingCode(){
        const URLSearch = new URLSearchParams(location.search);
        paintingObj.paintingCode = URLSearch.get("paintingCode");
    }

    setPaintingObjValues() {
        const editInputs = document.querySelectorAll(".edit-input");

        paintingObj.paintingCode = editInputs[0].value;
        paintingObj.paintingTitleName = editInputs[1].value;
        paintingObj.exhibitionWorks = editInputs[2].value;
        paintingObj.viewingTime = editInputs[3].value;
        paintingObj.paintingName = editInputs[4].value;
        paintingObj.author = editInputs[5].value;
        paintingObj.paintingSize = editInputs[6].value;
        paintingObj.year_of_Manufacture = editInputs[7].value;
        paintingObj.material = editInputs[8].value;

    }

    loadPaintingAndImageData(){
        const responseData = PaintingEditApi.getInstance().getPaintingAndImage();

        if(responseData.paintingMst == null){
            alert("해당 작품코드는 등록되지 않은 코드입니다.");
            history.back();
            return;
        }

        const editInputs = document.querySelectorAll(".edit-input");
        editInputs[0].value = responseData.paintingMst.paintingCode;
        editInputs[1].value = responseData.paintingMst.paintingTitleName;
        editInputs[2].value = responseData.paintingMst.exhibitionWorks;
        editInputs[3].value = responseData.paintingMst.viewingTime;
        editInputs[4].value = responseData.paintingMst.paintingName;
        editInputs[5].value = responseData.paintingMst.author;
        editInputs[6].value = responseData.paintingMst.paintingSize;
        editInputs[7].value = responseData.paintingMst.year_of_Manufacture;
        editInputs[8].value = responseData.paintingMst.material;

        if(responseData.paintingImage != null){
            imgObj.imageId = responseData.paintingImage.imageId;
            imgObj.paintingCode = responseData.paintingImage.paintingCode;
            imgObj.saveName = responseData.paintingImage.saveName;
            imgObj.originName = responseData.paintingImage.originName;

            const paintingImage = document.querySelector(".painting-img");
            paintingImage.src = `http://localhost:8000/image/painting/${responseData.paintingImage.saveName}`;
        }
    }

    loadCategories(){
        const responseData = PaintingEditApi.getInstance().getCategories();

        const categorySelect = document.querySelector(".category-select");

        categorySelect.innerHTML = `<option value="">전체조회</option>`

        responseData.forEach(data => {
            categorySelect.innerHTML += `
                <option value = "${data.category}">${data.category}</option>
            `;
        });
    }

    setErrors(error){
        const errorMessages = document.querySelectorAll(".error-message");
        this.clearErrors();

        Object.keys(errors).forEach(key => {
            if(key == "paintingCode") {
                errorMessages[0].innerHTML = errors[key];
            }else if(key == "paintingTitmeName") {
                errorMessages[1].innerHTML = errors[key];
            }else if(key == "exhibitionWorks") {
                errorMessages[2].innerHTML = errors[key];
            }else if(key == "viewingTime") {
                errorMessages[3].innerHTML = errors[key];
            }else if(key == "paintingName") {
                errorMessages[4].innerHTML = errors[key];
            }else if(key == "paintingSize") {
                errorMessages[6].innerHTML = errors[key];
            }else if(key == "material") {
                errorMessages[7].innerHTML = errors[key];
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
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new ImgFileService();
        }
        return this.#instance;
    }

    getImgPreview(){
        const painitngImg = document.querySelector(".painting-img");

        const reader = new FileReader();

        reader.onload = (e) => {
            painitngImg.src = e.target.result;
        }

        reader.readAsDataURL(fileObj.files[0]);
    }
}

class ComponentEvent{
    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new ComponentEvent
        }
        return this.#instance;
    }

    addClickEventEditButton(){
        const editButton = document.querySelector(".edit-button");

        editButton.onclick = () =>{
            PaintingEditService.getInstance().setPaintingObjValues();
            const successFlag = PaintingEditApi.getInstance().modifyPainting();

            if(!successFlag){
                return;
            }

            PaintingEditService.getInstance().clearErrors();

            if(confirm("이미지를 수정하시겠습니까?")){
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

        addButton.onload = () => {
            imgFile.click();
        }
    }

    addChangeEventImgFile(){
        const imgFile = document.querySelector(".img-file");

        imgFile.onchange = () =>{
            const formData = new FormData(document.querySelector(".img-form"));
            let changeFlag = false;

            fileObj.files.pop();

            formData.forEach(value => {
                fileObj.files.push(value);
                changeFlag = true;
            });

            if(changeFlag){
                const imgEditButton = document.querySelector(".img-edit-button");
                imgEditButton.disabled = false;

                ImgFileService.getInstance().getImgPreview();
                imgFile.value = null;
            }
        }
    }

    addClickEventImgEditButton(){
        const imgEditButton = document.querySelector(".img-edit-button");

        imgEditButton.onclick = () =>{
            fileObj.formData.append("files", fileObj.files[0]);

            let successFlag = true;

            if(imgObj.imageId != null){
                successFlag = PaintingEditApi.getInstance().removeImg();
            }

            if(successFlag){
                PaintingEditApi.getInstance().addImg();
            }
        }
    }
    
    addClickEventImgCancelButton(){
        const imgCancelButton = document.querySelector(".img-cancel-button");

        imgCancelButton.onclick = () =>{
            if(confirm("이미지를 수정하시겠습니까?")){
                location.reload();
            }
        }
    }
}



















































