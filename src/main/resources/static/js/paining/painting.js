window.onload = () => {
    PaintingDetailService.getInstance().loadPaintingDetail();
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
        const paintingTitleName = document.querySelector(".paining-title-name");
        const exhibitionWorks = document.querySelector(".exhibition-works");
        const viewingTime = document.querySelector(".viewing-time");
        const paintingName = document.querySelector(".painting-name");
        const author = document.querySelector(".author");
        const paintingSize = document.querySelector(".painting-size");
        const year_of_Manufacture = document.querySelector(".year-of-manufacture");
        const material = document.querySelector(".material");

        paintingTitleName.textContent = responseData.TitleName;
        exhibitionWorks.textContent = responseData.ExhibitionWorks;
        viewingTime.textContent =  responseData.ViewingTime;
        paintingName.textContent = responseData.PaintingName;
        author.textContent = responseData.Author;
        paintingSize.textContent = responseData.PaintingSize;
        year_of_Manufacture.textContent = responseData.Year_Of_Manufacture;
        material.textContent = responseData.Material;

    }
}