window.onload = () => {
    const paintingAList = document.querySelectorAll(".painting-a");
    paintingAList.forEach(paintingA => {
        paintingA.onmouseover = () => {
            const infoWrap = paintingA.querySelector(".info-wrap");
            infoWrap.classList.add("visibility");
        }
        paintingA.onmouseout = () => {
            const infoWrap = paintingA.querySelector(".info-wrap");
            infoWrap.classList.remove("visibility");
        }
    })
}