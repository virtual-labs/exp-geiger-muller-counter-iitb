function activity2() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.addcanvas('mycanvas');
    pp.showtitle(`<p id="exp-title">Simulate with the Experimental Setup</p>`, 3);
    canvas = pp.canvas;
    context = canvas.getContext('2d');
    // add rect and scene
    canvas.style.cursor = "crosshair";
    rect = canvas.getBoundingClientRect();
    scene = new Scene();
    let img1 = new Chemistry.Custome_image(assembly, new Chemistry.Point(900, 500), 1000, 553.88, canvas);
    scene.add(img1);
    // add canvas sizing
    window.onload = a2_windowresize;
    window.onresize = a2_windowresize;
    a2_windowresize();
}
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //draw scene
    scene.draw();
}
function a2_canvas_size() {
    //resizing
    canvas.width = window.innerWidth * 0.91;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
    //canvas mapping
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
activity2();
//# sourceMappingURL=activity2.js.map