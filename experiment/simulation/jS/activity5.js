// var act5_table: Table;
// var act5_table_headings: string[] = [];
// var capillary_tube_dia = 0.3357;
// var capillary_tube_length = 18.4;
// var density_of_liquid = 1.11;
// var g = 9.81;
// var area_od_test_tank = 255;
// function activity5() {
//     pp.clearleftpannel();
//     pp.clearrightpannel();
//     pp.addoffcanvas(3);
//     load_act5_table();
//     pp.showtitle("To determine the diffusivity of one liquid in the other", 3);
//     let activity5_formulae = `
//         <p>Diameter of capillary tube (d) = 0.3357 cm</p>
//         <p>Length of the capillary tube (L) = 18.4 cm</p>
//         <p>Density of the liquid (&rho;) = 1.11 gm/ml</p>
//         <p>Gravitational Acceleration (g) = 9.81 m/sec<sup>2</sup></p>
//         <p>Area of the Tank = 255cm<sup>2</sup></p>
//     `;
//     show_panel(3);
//     pp.showdescription(activity5_formulae, 3);
// }
// function load_act5_table() {
//     act5_table_headings = ["Sr No.", "Time &Theta; (hr)", "C<sub>1</sub>(N)", "C<sub>2</sub>(N)", "C<sub>3</sub>(N)", "&Delta; C<sub>m</sub>", "D<sub>L</sub> x 10<sup>9</sup> (m<sup>2</sup>/sec)", "check"];
//     let verify_row = [["1", "25", "1", "0.73", "0.03", `<input type="text" id="inp-1">`, `<input type="text"  id="inp-2">`, `<input type="submit" class="btn btn-primary" onclick="verify_act5();">`]]
//     act5_table = new Table(act5_table_headings, verify_row);
//     pp.addtoleftpannel(act5_table.template);
//     act5_table.draw();
// }
// function verify_act5() {
//     let val1: HTMLInputElement = <HTMLInputElement> document.getElementById(`inp-1`);
//     let val2: HTMLInputElement = <HTMLInputElement> document.getElementById(`inp-2`);
//     if(!verify_values(parseFloat(val1.value), parseFloat(act5_table_data[0][5]))) {
//         alert(`please check ${act5_table_headings[5]}`);
//         return;
//     }
//     if(!verify_values(parseFloat(val2.value), parseFloat(act5_table_data[0][6]))) {
//         alert(`please check ${act5_table_headings[6]}`);
//         return;
//     }
//     alert("all values are right!!");
//     act5_table_headings.pop();
//     act5_table = new Table(act5_table_headings, act5_table_data);
//     act5_table.draw();
// }
var move_act7_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity7();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
var label = [];
var data = [];
var data1 = [];
function draw_chart() {
    document.getElementById('hide_panel3').click();
    pp.clearleftpannel();
    pp.addcanvas('myChart');
    if (document.getElementById('panel1_btn')) {
        document.getElementById("panel1_btn").remove();
    }
    for (let i = 0; i < main_data_table.length; i++) {
        label.push(main_data_table[i][1]);
        data.push(main_data_table[i][3]);
    }
    // calculate_y_datapoints();
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: label,
            datasets: [
                {
                    label: 'Experimental',
                    data: data,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true,
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                },
                // {
                //     label: 'Best Fit ln(X) = A + B/T + C x ln(T)',
                //     data: data1,
                //     fill: false,
                //     borderColor: 'red',
                //     tension: 0.5,
                //     showLine: true
                //     // yAxisID: 'A',
                //     // borderWidth: 1,
                //     // borderColor: "red",
                //     // backgroundColor: "rgba(255, 0, 0, 0.5)",
                // },
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Corrected Count',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Voltage',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Voltage vs Corrected Count`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    pp.addtorightpannel(move_act7_btn, 3);
}
//   function calculate_y_datapoints() {
//     // pol = regression_linear(label, data);
//     // console.log(pol);
//     for(let i=0; i<label.length; i++) {
//       data1.push(Math.exp(A + B/T[i] + C*Math.log(T[i])));
//     }
//   }
//   var pol;
//# sourceMappingURL=activity5.js.map