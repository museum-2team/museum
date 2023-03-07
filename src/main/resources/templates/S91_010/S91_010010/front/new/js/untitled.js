window.onload = () => {
    const paintingAList = document.querySelectorAll(".change-painting");
    paintingAList.forEach(paintingA => {
        paintingA.onclick = () => {
            const imgsize = document.querySelector(".img-size");
            const changePic = paintingA.querySelector(".change-pic");
            imgsize.src = changePic.src;
        }
    })
}