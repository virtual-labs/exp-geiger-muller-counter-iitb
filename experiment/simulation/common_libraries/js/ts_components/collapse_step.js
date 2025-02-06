function show_step(id) {
    $(document).ready(function () {
        $(`#${id}`).collapse("show");
    });
}
function hide_step(id) {
    $(document).ready(function () {
        $(`${id}`).collapse("hide");
    });
}
function get_collapse_btn_text(text, id) {
    let str = `
    <br>
    <p class="d-inline-flex gap-1">
        <a class="btn btn-primary coll" data-bs-toggle="collapse" href="#${id}" role="button" aria-expanded="false" aria-controls="collapseExample">${text}</a>
    </p>
    `;
    return str;
}
function get_collapse_btn_element(text, id) {
    let para = document.createElement('p');
    para.setAttribute('class', 'd-inline-flex gap-1');
    para.innerHTML = `
        <br>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#${id}" role="button" aria-expanded="false" aria-controls="collapseExample">${text}</a>
    `;
    return para;
}
function hide_all_steps() {
    setTimeout(() => {
        $('.collapse').collapse("hide");
    }, 150);
}
//# sourceMappingURL=collapse_step.js.map