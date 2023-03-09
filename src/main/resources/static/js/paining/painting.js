window.onload = () => {
    
}

class PaintingApi{
    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new PaintingApi();
        }
        return this.#instance;
    }

    getPainting(){
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: `http://localhost:8000/api/painting/${paintingCode}`,
            dataType: "json",
            success: response => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });
        return responseData;
    }
}

class PaintingDetailService{
    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new PaintingDetailService();
        }
        return this.#instance;
    }
    
    loadPaintingDetail(){
        const responseData = PaintingApi.getInstance().getPainting();
        console.log(responseData);
        this.getPaintingImg(responseData.imgNames);
        this.getPaintingInfo(responseData);
    }

    getPaintingImg(imgNames){
        const paintingImages = document.querySelector(".collection-img-change");
        imgNames.forEach(imgName => {
            paintingImages.innerHTML += `
                <img src="http://localhost:8000/image/painting/${data.saveName != null ? data.saveName : "no_img.png"}" class="img-size">
            `
        });
    }

    getPaintingInfo(responseData){
        const paintingTitleName = document.querySelector
    }
}