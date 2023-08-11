var first_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="generate_table_data();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var plot_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="draw_chart();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var sel_step_up_voltage;
var sel_source;
var sel_interval;
var ve;
var vs;
var cvs;
var cve;
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    let right_panel_text = `
        <h4>- Click on the digital displays (dropdowns) to set the values<h4>
        <h4>- Click on the next button only after selecting <span style='color: blue;'>all four</span> values<h4> 

    `;
    //drops downs
    let show_input_fields = `
    <div style='position: absolute;'>
    <div>
        <select name="source" id="source" style='position: absolute; left: 44vw; top: 18.5vw; border: none; background: inherit; font-family: digital; font-size: 2.4vw; color: #000FFC; font-weight: 600;'>
            <option value='' >Select Source</option>
            <option value="Sr">Strontium (Sr)</option>
            <option value="Ce">Cerium (Ce)</option>
            <option value="Ba">Barium (Ba)</option>
            <option value="Ca">Calcium (Ca)</option>
        </select>
    </div>



    <br>

    <div>
        
        <select name="step" onchange='load_start_voltage();' id="step" style='position: absolute; left: 65.6vw; top: 27.70vw; border: none; background: inherit; font-family: digital; font-size: 2vw; color: #000FFC; font-weight: 600;'>
            <option value=''>Select</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    </div>

    <br>

    <div>
        <select disabled name="step" id="start-v" style='position: absolute; left: 43vw; top: 27.70vw; border: none; background: inherit; font-family: digital; font-size: 2vw; color: #000FFC; font-weight: 600;'>
            
        </select>
    </div>

    <br>

    <div>
        
        <select name="interval" id="interval" style='position: absolute; left: 66vw; top: 16.6vw; border: none; background: inherit; font-family: digital; font-size: 2vw; color: #000FFC; font-weight: 600;'>
            <option value=''>Select</option>
            <option value="30">30 sec</option>
            <option value="60">60 sec</option>
            <option value="100">100 sec</option>
        </select>
    </div>

    <div>
        <button class="btn btn-primary" style='position: absolute; left: 55.8vw; top: 33.5vw; padding: 1vw 2vw; font-size: 1.2vw;' id='values-btn'>Start</button>
    </div>
</div>
    `;
    pp.addtorightpannel(right_panel_text, 3);
    pp.addtoleftpannel(show_input_fields);
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
    pp.addcanvas('mycanvas');
    pp.showtitle(`<p id="exp-title">Simulate with the Experimental Setup</p>`, 3);
    canvas = pp.canvas;
    context = canvas.getContext('2d');
    // add rect and scene
    canvas.style.cursor = "crosshair";
    rect = canvas.getBoundingClientRect();
    scene = new Scene();
    let img1 = new Chemistry.Custome_image(assembly, new Chemistry.Point(900, 480), 1500, 829, canvas);
    scene.add(img1);
    // add canvas sizing
    window.onload = a2_windowresize;
    window.onresize = a2_windowresize;
    a2_windowresize();
}
function load_start_voltage() {
    let ele = document.getElementById('start-v');
    let step = document.getElementById('step');
    ele.innerHTML = `<option>Select</option>`;
    let btn = document.getElementById('values-btn');
    let v = parseInt(step.value);
    if (v) {
        for (let i = 0; i * v <= 1000; i++) {
            ele.innerHTML += `<option value='${i * v}'>${i * v}</option>`;
        }
        ele.disabled = false;
        btn.onclick = set_selected_values;
    }
    else {
        ele.disabled = true;
        btn.onclick = null;
    }
}
function set_selected_values() {
    let step = document.getElementById('step');
    sel_step_up_voltage = parseInt(step.value);
    let ele = document.getElementById('start-v');
    console.log(ele.value);
    selected_start_voltage = parseInt(ele.value);
    if (sel_step_up_voltage == 20) {
        vs = 420;
        ve = 700;
    }
    else if (sel_step_up_voltage == 50) {
        vs = 450;
        ve = 700;
    }
    else if (sel_step_up_voltage == 100) {
        vs = 500;
        ve = 700;
    }
    let source = document.getElementById('source');
    sel_source = source.value;
    let inteval = document.getElementById('interval');
    sel_interval = parseInt(inteval.value);
    var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
    bsOffcanvas.show();
    pp.addtorightpannel(first_btn, 3);
}
function populate_main_data_table(arr, steps, num) {
    let arr2 = [];
    for (let i = 0; i * steps <= 1000; i++) {
        arr2.push(arr[i]);
        if (arr[i] > 50 || (i > 400 && i < 700)) {
            arr2[i] = arr2[i] - num;
        }
        main_data_table.push([i + 1, i * steps, arr[i], arr2[i]]);
    }
}
function generate_table_data() {
    let total_steps = 1000 / sel_step_up_voltage;
    total_steps++; // starts from zero
    switch (sel_source) {
        case 'Sr':
            gm_table = generate_random_values(sel_step_up_voltage, 0, 4700, 4990, 5010, 10000);
            if (sel_interval == 30) {
                gm_table;
            }
            else if (sel_interval == 60) {
                fix_for_interval_sixty(gm_table);
            }
            else if (sel_interval == 100) {
                fix_for_interval_hundred(gm_table);
            }
            break;
        case 'Ce':
            gm_table = generate_random_values(sel_step_up_voltage, 0, 2700, 2990, 3010, 8000);
            if (sel_interval == 30) {
                gm_table;
            }
            else if (sel_interval == 60) {
                fix_for_interval_sixty(gm_table);
            }
            else if (sel_interval == 100) {
                fix_for_interval_hundred(gm_table);
            }
            break;
        case 'Ba':
            gm_table = generate_random_values(sel_step_up_voltage, 0, 49700, 49990, 50010, 100000);
            if (sel_interval == 30) {
                gm_table;
            }
            else if (sel_interval == 60) {
                fix_for_interval_sixty(gm_table);
            }
            else if (sel_interval == 100) {
                fix_for_interval_hundred(gm_table);
            }
            break;
        case 'Ca':
            gm_table = generate_random_values(sel_step_up_voltage, 0, 79700, 79990, 80010, 100000);
            if (sel_interval == 30) {
                gm_table;
            }
            else if (sel_interval == 60) {
                fix_for_interval_sixty(gm_table);
            }
            else if (sel_interval == 100) {
                fix_for_interval_hundred(gm_table);
            }
            break;
        default: break;
    }
    console.log(gm_table);
    let random_number = Math.round(Math.random() * 20) + 1;
    console.log(random_number);
    // pp.addButtonToRightPanel("Next", generate_table_data, "panel1_btn")
    populate_main_data_table(gm_table, sel_step_up_voltage, random_number);
    show_main_table();
}
function show_main_table() {
    pp.clearleftpannel();
    let table_headings = ["Sr No.", "Voltage", `Count per ${sel_interval} seconds for ${sel_source}`, "Corrected Count"];
    let updated_data = [];
    let c = 0;
    let set = true;
    for (let i = 0; i < main_data_table.length; i++) {
        console.log(main_data_table[i][1], selected_start_voltage);
        if (main_data_table[i][1] >= selected_start_voltage) {
            if (set) {
                c = i;
                set = false;
            }
            updated_data.push([(main_data_table[i][0] - c).toString(), main_data_table[i][1].toString(), main_data_table[i][2].toString(), main_data_table[i][3].toString()]);
        }
    }
    let act4_table = new Table(table_headings, updated_data);
    pp.addtoleftpannel(act4_table.template);
    act4_table.draw();
    pp.showdescription("Click next to plot Voltage vs Corrected Count", 3);
    pp.addtorightpannel(plot_btn, 3);
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
//# sourceMappingURL=activity4.js.map