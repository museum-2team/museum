window.onload = () => {
    
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
            url: `http://localhost:8000/api/admin/painting/${paintingObj.paintingCode}/image/${imgObj.imageId}`;
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

    setPainting(){
        const URLSearch = new URLSearchParams(location.search);
        paintingObj.paintingCode = URLSearch.get("paintingCode");
    }

    setPaintingObjValues() {
        const editInputs = document.querySelectorAll(".edit-input");

    }
}