// var act4_table: Table;
// var act4_table_headings: string[] = [];
// function activity4() {
//     pp.clearleftpannel();
//     pp.clearrightpannel();
//     pp.addoffcanvas(3);
//     load_act4_table();
//     pp.showtitle("To determine viscosity using Stokes law", 3);
//     let activity5_formulae = `
//         <p>Length of Column (L) = 100 cm</p>
//         <p>Density of Steel Balls (pp) = 7.8 gm/cc</p>
//         <p>Density of Castor Liquid (pf) = 0.9 gm/cc</p>
//         <p>Density of lubricating oil (pf) = 0.9gm/cc</p>
//         <p>Ut = L/T</p>
//     `;
//     show_panel(3);
//     pp.showdescription(activity5_formulae, 3);
// }
// function load_act4_table() {
//     act4_table_headings = ["Sr No.", "Length of the column L (cm)", "Diameter of the steel ball Dp (cm)", "Time of travel between tow marks (t)", "Ultimate setting velocity Ut (cm/sec)", "Viscosity &mue; (poise)", "check"];
//     let verify_row = [["1", "100", "0.30", "5.52", `<input type="text"  id="inp-1">`, `<input type="text"  id="inp-2">`, `<input type="submit" class="btn btn-primary" onclick="verify_act4();">`]];
//     act4_table = new Table(act4_table_headings, verify_row);
//     pp.addtoleftpannel(act4_table.template);
//     act4_table.draw();
// }
// function verify_act4() {
//     let val1: HTMLInputElement = <HTMLInputElement> document.getElementById(`inp-1`);
//     let val2: HTMLInputElement = <HTMLInputElement> document.getElementById(`inp-2`);
//     if(!verify_values(parseFloat(val1.value), parseFloat(act4_table_data[0][4]))) {
//         alert(`please correct Ut value!!`);
//         return;
//     }
//     if(!verify_values(parseFloat(val2.value), parseFloat(act4_table_data[0][5]))) {
//         alert(`please correct the Viscosity of liquid value!!`);
//         return;
//     }
//     alert("Calculation is right!!");
//     act4_table_headings.pop();
//     act4_table = new Table(act4_table_headings, act4_table_data);
//     act4_table.draw();
// }
var first_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="generate_table_data();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var plot_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="draw_chart();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var sel_step_up_voltage;
var sel_source;
var sel_interval;
var ve;
var vs;
var cvs;
var cve;
activity4();
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle("To study Geiger Muller counter its opearating voltage and dead time", 3);
    let show_input_fields = `
    <div>
    <div>
        <h3>Select the Radiation Source</h3>
        <select class="form-select" name="source" id="source">
            <option value="Sr">Strontium (Sr)</option>
            <option value="Ce">Cerium (Ce)</option>
            <option value="Ba">Barium (Ba)</option>
            <option value="Ca">Calcium (Ca)</option>
        </select>
    </div>

    <br>

    <div>
        <h3>Select the Step-up Voltage</h3>
        <select class="form-select" name="step" id="step">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    </div>

    <br>

    <div>
        <h3>Select the time interval</h3>
        <select class="form-select" name="interval" id="interval">
            <option value="30">30 sec</option>
            <option value="60">60 sec</option>
            <option value="100">100 sec</option>
        </select>
    </div>

    <div>
        <button class="btn btn-primary" onclick="set_selected_values();">Next</button>
    </div>
</div>
    `;
    pp.addtoleftpannel(show_input_fields);
}
function set_selected_values() {
    let step = document.getElementById('step');
    sel_step_up_voltage = parseInt(step.value);
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
    // pp.addButtonToRightPanel("Next", generate_table_data, "panel1_btn")
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
    let temp = [];
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
    populate_main_data_table(gm_table, sel_step_up_voltage, random_number);
    show_main_table();
}
function show_main_table() {
    pp.clearleftpannel();
    let table_headings = ["Sr No.", "Voltage", `Count per ${sel_interval} seconds for ${sel_source}`, "Corrected Count"];
    let act4_table = new Table(table_headings, main_data_table);
    pp.addtoleftpannel(act4_table.template);
    act4_table.draw();
    pp.showdescription("Click next to plot Voltage vs Corrected Count", 3);
    pp.addtorightpannel(plot_btn, 3);
}
//# sourceMappingURL=activity4.js.map