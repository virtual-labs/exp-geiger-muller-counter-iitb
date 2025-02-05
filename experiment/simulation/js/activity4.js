var first_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="generate_table_data();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var second_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="show_main_table();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var plot_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="draw_chart();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var repeat_count = 0;
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
        <h4>- First select Source, Step-up time and Step-up voltage to enable starting voltage dropdown<h4>
        <h4>- Then select Starting Voltage<h4>

    `;
    //drops downs
    let show_input_fields = `
    <div style='position: absolute;'>
    <div>
        <select name="source" id="source" style='position: absolute; left: 44vw; top: 18.5vw; border: none; background: inherit; font-family: digital; font-size: 2.4vw; color: #000FFC; font-weight: 600;' onchange='enable_btn();'>
            <option value='' >Select Source</option>
            <option value="Sr">Strontium-90</option>
            <option value="Ce">Cerium-144</option>
            <option value="Ba">Barium-130</option>
            <option value="Ca">Caesium-137 (Ca)</option>
        </select>
    </div>

    <div>
        <input type='text' style='position: absolute; left: 67.5vw; top: 22.7vw; font-family: digital; font-size: 1.9vw; color: #000FFC; font-weight: 600; width: 9vw; border: none; background: inherit;' disabled id='dsp-cd'></input>
    </div>



    <br>

    <div>
        
        <label for='step' style='position: absolute; top: 8vw; left: 40vw; width: 30vw; font-size: 1.8vw;'>Select Step Up voltage</label>
        <select name="step" onchange='load_start_voltage();' id="step" style='position: absolute; left: 65vw; top: 8vw; font-size: 2vw; font-weight: 600;'>
            <option value=''>Select</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    </div>

    <br>

    <div>
        <select disabled name="step" id="start-v" style='position: absolute; left: 43vw; top: 28.70vw; border: none; background: inherit; font-family: digital; font-size: 2vw; color: #000FFC; font-weight: 600;'>
            
        </select>
    </div>

    <br>

    <div>
        
        <select name="interval" id="interval" style='position: absolute; left: 65.6vw; top: 29.5vw; border: none; background: inherit; font-family: digital; font-size: 2vw; color: #000FFC; font-weight: 600;'>
            <option value=''>Select</option>
            <option value="30">30 sec</option>
            <option value="60">60 sec</option>
            <option value="100">100 sec</option>
        </select>
    </div>

    <div>
        <input type='text' style='position: absolute; left: 66vw; top: 16vw; font-family: digital; font-size: 1.9vw; color: #000FFC; font-weight: 600; width: 9vw; background: inherit; border: none;' disabled id='dsp-count'></input>
    </div>

    <div>
        <button class="btn btn-primary" disabled style='position: absolute; left: 55.8vw; top: 33.5vw; padding: 1vw 2vw; font-size: 1.2vw;' id='values-btn'>Start</button>
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
function enable_btn() {
    let ele = document.getElementById('start-v');
    let btn = document.getElementById('values-btn');
    let step_ele = document.getElementById('step');
    let source_ele = document.getElementById('source');
    if (ele.value != 'd_o' && step_ele.value != '' && source_ele.value != '') {
        btn.disabled = false;
    }
    else if (ele.value == 'd_o' || step_ele.value == '' || source_ele.value == '') {
        btn.disabled = true;
    }
}
function load_start_voltage() {
    let ele = document.getElementById('start-v');
    let step = document.getElementById('step');
    ele.innerHTML = `<option value='d_o'>Select</option>`;
    let btn = document.getElementById('values-btn');
    let v = parseInt(step.value);
    ele.onchange = enable_btn;
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
    enable_btn();
}
function set_selected_values() {
    let step = document.getElementById('step');
    sel_step_up_voltage = parseInt(step.value);
    let ele = document.getElementById('start-v');
    console.log(ele.value);
    if (repeat_count < 3) {
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
        pp.showdescription(`
    <p>- You to have to take 3 readings and get average of the count reading for good approximation</p>
    <p>- Click Start and wait for ${sel_interval} seconds for each reading</p>
    <p>- Note down readings in each repeatation</p>

    `, 3);
        // var bsOffcanvas = new bootstrap.Offcanvas(
        //   document.getElementById("offcanvasRight3")
        // );
        // bsOffcanvas.show();
        // pp.addtorightpannel(first_btn , 3);
        generate_table_data();
    }
    else if (repeat_count >= 3) {
        pp.showdescription('Now Take average of all the count readings', 3);
        var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
        bsOffcanvas.show();
    }
}
function populate_main_data_table(arr, steps, num) {
    if (main_data_table.length == 0) {
        let arr2 = [];
        for (let i = 0; i * steps <= 1000; i++) {
            arr2.push(arr[i]);
            if (arr[i] > 50 || (i > 400 && i < 700)) {
                arr2[i] = arr2[i] - num;
            }
            main_data_table.push([i + 1, i * steps, arr[i], arr2[i]]);
        }
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
    let dsp_cd = document.getElementById("dsp-cd");
    let dsp_count = document.getElementById("dsp-count");
    let btn = document.getElementById('values-btn');
    let tt = sel_interval;
    let c_start = 0;
    let c_end = 0;
    for (let i = 0; i < main_data_table.length; i++) {
        if (selected_start_voltage == main_data_table[i][1]) {
            c_end = main_data_table[i][2];
        }
    }
    let inc_unit = (c_end - c_start) / (sel_interval + 1);
    let final_reading = 0;
    console.log(`Sel_ind: ${sel_interval}`, `tt: ${tt}`, `c_end: ${c_end}`, `inc: ${inc_unit}`);
    let interval = setInterval(() => {
        btn.disabled = true;
        dsp_cd.value = tt.toString();
        tt--;
        final_reading += inc_unit;
        dsp_count.value = Math.round(final_reading).toString();
        console.log(`tt: ${tt}`, `final-reading: ${final_reading}`);
        if (tt < 0) {
            clearInterval(interval);
            btn.innerHTML = 'Repeat';
            btn.disabled = false;
            if (repeat_count == 3) {
                btn.disabled = true;
                pp.showdescription('Now, Take average of all the readings', 3);
                pp.addtorightpannel(second_btn, 3);
                var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
                bsOffcanvas.show();
            }
        }
    }, 100);
    repeat_count++;
    //show_main_table();
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
    let act4_table = new Table2(table_headings, updated_data);
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