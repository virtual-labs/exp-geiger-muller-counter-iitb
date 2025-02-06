//style="margin: 1% 6.5% 1% 2%;" for id=panel
var mypannel = `<div id="panel" style="margin: 1% 6.5% 1% 2%;">
<div class="row">
<div id="leftpannel" style="border: 2px solid black; border-radius: 10px;" class="col-12"></div>

<div id="rightpannel" style="position:absolute;right:0px"></div>
`;
class Pannel {
    constructor(divpannelid) {
        this.divpannel = divpannelid;
        this.redraw();
        this.leftpannel = document.getElementById("leftpannel");
        this.rightpannel = document.getElementById("rightpannel");
        this.leftpannel.style.height = (window.innerHeight - 5).toString() + 'px';
        //this.rightpannel.style.height = (window.innerHeight - 5).toString() + 'px';
        // this.offcanvasRightLabel1 = <HTMLDivElement> document.getElementById('offcanvasRightLabel1');
    }
    redraw() {
        this.divpannel.innerHTML = mypannel;
    }
    addoffcanvas(id) {
        this.rightpannel.innerHTML += `
        <div class="offcanvas offcanvaselement offcanvas-end" tabindex="-1" id="offcanvasRight${id}"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header" style="display: flex !important; flex-direction: column !important;">

        <button id="hide_panel${id}" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h5 class="offcanvas-title" id="offcanvasRightLabel${id}"></h5>
           
        </div>
        <div id="pannel${id}" class="offcanvas-body">


        </div>
    </div>
    <button class="offcanvasbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight${id}" aria-controls="offcanvasRight${id}" style="width: 4%;"><i class="bi bi-arrow-bar-left" style="font-size: calc(1vw + 12px);"></i></button>
      <br>  `;
    }
    addcanvas(canvasid) {
        this.leftpannel.innerHTML = `<canvas id="${canvasid}"></canvas>`;
        this.canvas = document.getElementById(canvasid);
    }
    addtoleftpannel(component) {
        this.leftpannel.innerHTML += component;
    }
    addtorightpannel(component, id) {
        document.getElementById("pannel" + id).innerHTML += component;
    }
    clearleftpannel() {
        this.leftpannel.innerHTML = "";
    }
    clearrightpannel() {
        this.rightpannel.innerHTML = "";
    }
    showdescription(text, id) {
        document.getElementById("pannel" + id).innerHTML = `<div id="description">${text}</div>`;
    }
    showtitle(text, id) {
        document.getElementById("offcanvasRightLabel" + id).innerHTML = text;
    }
    showscore(text, id) {
        document.getElementById("pannel" + id).innerHTML += `<div style="width: 90%;"  id="score">Score: ${text}</div>`;
        // this.rightpannel.innerHTML+=`<div style=""  id="score">Score: ${text}</div>`
    }
}
//# sourceMappingURL=pannel.js.map