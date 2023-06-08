// declare var Chart;
// var main_table_element: HTMLDivElement;
// var delta_h_values: number[] = [];
// var p1: number = 100.8;
// var rho: number = 13.6 * 1000;
// var g = 9.81;
// // var A, B, C;
// // function load_delta_h_values() {
// //   for(let i=1; i<main_table_data.length; i++) {
// //     main_table_data[i][1] = parseInt(std_deviation(t_values[i]));
// //     main_table_data[i][0] = parseFloat(std_deviation(main_table_data[i][0]));
// //   }
// // }
// var act5_ob_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="complete_main_table();" style="
// position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
// var act5_plot_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity6();" style="
// position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
// var main_table = `
// <div id="act5-main-table" class="table-responsive">
// <table  class="table" style="height: 100vh !important;">
//     <thead>
//       <tr>
//         <th scope="col">Comp</th>
//         <th scope="col">T (&#8451;)</th>
//         <th scope="col">Liquid Sample</th>
//         <th scope="col">Vapour Sample</th>
//         <th scope="col" id="a5-temp">Check</th>
//       </tr>x
//     </thead>
//     <tbody id="table-5-body">
//       <tr>
//           <td>${main_table_data[0][0]}</td>
//           <td><input id="inp-1" type="text"></td>
//           <td>${main_table_data[0][2]}</td>
//           <td>${main_table_data[0][3]}</td>
//           <td><input id="a5-temp-btn" value="Verify" type="button" class="btn btn-primary" onclick="act5_verify_obtable();"></td>
//       </tr>
//     </tbody>
//     </table>
//     </div>
// `;
// var all_properties = `
// <div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.0vw;">
//   <div class="row" style="font-size: calc(0.7vw + 12px);"> 
//   <div class="col-12"><h4>Use these formlae for calculation</h4></div>
//   <div class="col-12"><span style="font-weight: 600;">&rho;</span> (kg/m<sup>3</sup>)= 13.6 x 1000</div>
//   <div class="col-12"><span style="font-weight: 600;">g</span> (m/s<sup>2</sup>)= 9.81</div>
//   <div class="col-12"><span style="font-weight: 600;">P<sub>2</sub></span> (KPa)= P<sub>1</sub> - (&rho; x g x &Delta;H)/(1000 x 1000)</div>  
//   </div>
//   </div>
// </div>
// `;
// var chart_bn = `<button id="panel1_btn" class="btn btn-primary" onclick="draw_chart();" style="
// position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
// function activity7() {
//   pp.clearleftpannel();
//   pp.clearrightpannel();
//   pp.addoffcanvas(3);
//   pp.showdescription(
//     '<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Now, Click on next to see Density and Heat capacity values</p>',
//     3
//   );
//   // pp.addtorightpannel(ob_btn_5, 3);
//   pp.showscore("300", 3);
//   pp.showtitle("Calculation for 1/T, ln(P<sub>2</sub>) and ln(P<sub>2</sub>)/T", 3);
//   // document.getElementById('hide_panel1').click();
//   // load_delta_h_values();
//   pp.addtoleftpannel(main_table);
//   pp.showdescription(all_properties, 3);
//   // var bsOffcanvas = new bootstrap.Offcanvas(
//   //     document.getElementById("offcanvasRight3")
//   //   );
//   //   bsOffcanvas.show();
// }
// var act5_ob2_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="table_calculations();" style="
// position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
// function act5_show_values() {
//     document.getElementById('panel1_btn').remove();
//     let tbody = document.getElementById('act5-table-2');
//     let tr1 = document.createElement('tr');
//     let tr2 = document.createElement('tr');
//     tr1.innerHTML = `
//     <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Density, &rho; (kg/m<sup>-3</sup>)</td>
//     <td style="padding: 2% 2% !important; font-size: 2.2vw;" colspan="2">1000</td>
//     `;
//     tr2.innerHTML = `
//     <td style="padding: 2% 2% !important; font-size: 2.2vw;" scope="row">Heat Capacity, C<sub>p</sub> (J/kg-K)</td>
//     <td style="padding: 2% 2% !important; font-size: 2.2vw;" colspan="2">4186.8</td>
//     `;
//     tbody.append(tr1);
//     tbody.append(tr2);
//     pp.showdescription(
//         '<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">Click next to start the calculations</p>',
//         3
//       );
//       pp.addtorightpannel(act5_ob2_btn, 3);
// }
// var all_properties_without_table = `
// <div id="left-props" class="row" style="font-size: calc(2vw + 5px);">
//     <div class="col-4">Diamneter of Test Specimen, d (cm)</div>
//     <div class="col-2">${diameter}</div>
//     <div class="col-4">Length of Heat Exchanger, L (cm)</div>
//     <div class="col-2">${ht_length}</div>
// </div>
// <br>
// <div class="row" style="font-size: calc(2vw + 5px);">
//     <div class="col-4">Metal</div>
//     <div class="col-2">${metal}</div>
//     <div class="col-4">Cross Sectional Area, A (cm<sup>2</sup>)</div>
//     <div class="col-2">${cs_area}</div>
// </div>
// <br>
// <div class="row" style="font-size: calc(2vw + 5px);">
//     <div class="col-4">Density, &rho (kg/m<sup>-3</sup>)</div>
//     <div class="col-2">${density}</div>
//     <div class="col-4">Heat Capacity, C<sub>p</sub> (J/kg-K)</div>
//     <div class="col-2">${cp}</div>
// </div>
// <br>
// <br>
// <div class="row" style="font-size: calc(2vw + 5px);">
// <div class="col-3">m = (v x $rho;) / (1000 x 60)</div>
// <div class="col-3"> &Delta;T = T - ((t<sub>i</sub> + t<sub>o</sub>)/2)</div>
// <div class="col-3">Q = m x C<sub>p</sub> x (t<sub>o</sub> - t<sub>i</sub>)</div>
// </div>
// <div class="col-3">K = (Q x (L/100))/(&Delta;T x A)</div>
// </div>
// `;
// function table_calculations() {
//   pp.clearleftpannel();
//   pp.clearrightpannel();
//   pp.addoffcanvas(3);
//   pp.showtitle('Calculate K</p>', 3);
//   pp.addtorightpannel(all_properties, 3);
//   pp.addtoleftpannel(main_table);
// //   pp.addtoleftpannel(all_properties_without_table);
// }
// function act5_verify_obtable() {
//     let val1: HTMLInputElement = <HTMLInputElement>document.getElementById("inp-1");
//     console.log(parseFloat(val1.value));
//     // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
//     if (!verify_values(parseFloat(val1.value), t_values[0][0])) {
//       console.log("please correct the P2 value");
//       return;
//     }
//     pp.addtorightpannel(act5_ob_btn, 3);
//     var bsOffcanvas = new bootstrap.Offcanvas(
//       document.getElementById("offcanvasRight3")
//     );
//     bsOffcanvas.show();
//   }
//   function complete_main_table() {
//     //document.getElementById('hide_panel3').click();
//     pp.clearleftpannel();
//     pp.addtoleftpannel(main_table);
//     let tb = document.getElementById('table-5-body');
//     tb.innerHTML= ``;
//     document.getElementById('a5-temp').remove();
//     for(let i=0; i<6; i++) {
//         let row = document.createElement('tr');
//         // main_table_data[i] = [];
//         // main_table_data[i][0] = i+1;
//         // main_table_data[i][1] = table_1[i][0];
//         // main_table_data[i][2] = p1 - ((rho * g * main_table_data[i][1])/(1000 * 1000));
//         // main_table_data[i][3] = main_table_data[i][0] + 273;
//         // main_table_data[i][4] = 1/main_table_data[i][3];
//         // main_table_data[i][5] = Math.log(main_table_data[i][2]);
//         // main_table_data[i][6] = main_table_data[i][5] * main_table_data[i][4];
//         // console.log(main_table_data[i][6]);
//         // main_table_data[i][8] = ((main_table_data[i][6] * ht_length)/100)/(main_table_data[i][7] * cs_area);
//         if(i != 0) {
//           main_table_data[i][1] = std_deviation(t_values[i][0]).toFixed(1);
//         }
//         row.innerHTML = `
//         <td>${main_table_data[i][0]}</td>
//         <td>${main_table_data[i][1]}</td>
//         <td>${main_table_data[i][2]}</td>
//         <td>${main_table_data[i][3]}</td>
//         `;
//         tb.append(row);
//     }
//     console.log(main_table_data);
//     document.getElementById('panel1_btn').remove();
//     main_table_element = <HTMLDivElement> document.getElementById('act5-main-table');
//     pp.addtorightpannel(act5_plot_btn, 3);
//     // let x1: number[] = [];
//     // let x2: number[] = [];
//     // let y: number[] = [];
//     // for(let i=0; i<main_table_data.length; i++) {
//     //   x1.push(main_table_data[i][4]);
//     //   x2.push(main_table_data[i][6]);
//     //   y.push(main_table_data[i][5]);
//     // }
//     // let pol = regression_linear_2variable(x1, x2, y);
//     // A = pol[0];
//     // C = -pol[2];
//     // B = A * C - pol[1];
//     // let pr = Math.exp(A - (B/(C + 96.6)));
//     // console.log(pr);
//     // pp.showtitle("Table Completed!!", 3);
//     // pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 1.7vw;">Now Click Next to plot T vs P<sub>2<sub></p>', 3);
//     // pp.addtorightpannel(chart_bn, 3);
//   }
//   function draw_chart() {
//     document.getElementById('hide_panel3').click();
//     pp.clearleftpannel();
//     pp.addcanvas('myChart');
//     if(document.getElementById('panel1_btn')) {
//         document.getElementById("panel1_btn").remove();
//     }
//     pp.addButtonToRightPanel("hello", print_hello, 3);
//     for(let i=0; i<main_table_data.length; i++) {
//         label.push(T[i]);
//         data.push(X[i]);
//     }
//     calculate_y_datapoints();
//     var ctx = document.getElementById('myChart');
//     ctx.style.backgroundColor = "white";
//     ctx.style.marginTop = "5px";
//     ctx.style.marginLeft = "10%";
//     ctx.style.padding = "10px";
//     ctx.style.borderRadius = "8px";
//     if(typeof chart!='undefined')
//     {
//         chart.destroy();
//     }
//     // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
//     // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
//     // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
//     var chart = new Chart(ctx, {
//         type: 'scatter',
//         data: {
//         labels: label,
//         datasets: [
//         {
//             label: 'Experimental',
//             data: data,
//             fill: false,
//             borderColor: 'blue',
//             tension: 0.5,
//             showLine: false,
//             // yAxisID: 'A',
//             // borderWidth: 1,
//             // borderColor: "green",
//             // backgroundColor: "rgba(34, 139, 34, 0.5)",
//         },
//         {
//             label: 'Best Fit ln(X) = A + B/T + C x ln(T)',
//             data: data1,
//             fill: false,
//             borderColor: 'red',
//             tension: 0.5,
//             showLine: true
//             // yAxisID: 'A',
//             // borderWidth: 1,
//             // borderColor: "red",
//             // backgroundColor: "rgba(255, 0, 0, 0.5)",
//         },
//         ]
//         },
//         options: {
//             maintainAspectRatio: true,
//             scales: {
//               y: {
//                 title: {
//                     display: true,
//                     text: 'X',
//                     font:{size:14,weight:'bold'}
//                   }
//               },
//               x: {
//                 title: {
//                     display: true,
//                     text: 'T (K)',
//                     font:{size:14,weight:'bold'}
//                   }
//               }
//             },
//             plugins: {
//                 title: {
//                   display: true,
//                   text: `T vs P`,
//                   font: {size: 18},
//                 },
//                 legend:{labels:{font:{size:14,weight:'bold'}}}
//             },
//         }
//     });
//   }
//   function calculate_y_datapoints() {
//     // pol = regression_linear(label, data);
//     // console.log(pol);
//     for(let i=0; i<label.length; i++) {
//       data1.push(Math.exp(A + B/T[i] + C*Math.log(T[i])));
//     }
//   }
//   var label = [];
//   var data = [];
//   var data1 = [];
// //   var pol;
// //   activity5();
// var column = ['Sr No.', "test-1", "test-2", "test-3"];
// function print_hello() {
//     console.log("hello");
//     // pp.button.remove();
//     pp.clearleftpannel();
//     // var data = [["1", "<input type='text' id='val-0-0' />", "<input type='text' id='val-0-1' />", "<input value='verify' type='button' class='btn btn-primary' onclick='myverify(0);' />"], ["2","<input type='text' id='val-1-0' />", "<input type='text' id='val-1-1' />", "<input value='verify' type='button' class='btn btn-primary' onclick='myverify(1);' />"]];
//     // var table = new Table(column, data);
//     // pp.addtoleftpannel(table.template);
//     // let arr = [2, 3];
//     // table.draw();
//     // table.load_with_inputs(arr);
// }
// var verify_variable = [[1, 2], [3, 4]];
// function myverify(i) {
//     for(let j=0; j<=1; j++) {
//         let ele: HTMLInputElement = <HTMLInputElement> document.getElementById(`val-${i}-${j}`);
//         if(!verify_values(parseFloat(ele.value), verify_variable[i][j])) {
//             alert(`please check ${column[j+1]}`);
//             return;
//         }
//     }
// }
function activity7() {
    console.log("hello");
    for (let i = 0; i < main_data_table.length; i++) {
        if (main_data_table[i][1] == vs) {
            cvs = main_data_table[i][3];
        }
        if (main_data_table[i][1] == ve) {
            cve = main_data_table[i][3];
            break;
        }
    }
    let text_boxes = `
    <div>

    <div>
        <label for="">Enter vs value</label>
        <input class="form-control" type="text" name="" id="vs-inp">
    </div>

    <br>

    <div>
        <label for="">Enter ve value</label>
        <input class="form-control" type="text" name="" id="ve-inp">
    </div>

    <br>

    <div>
        <label for="">Enter Optimum operating voltage => (vs + ve) / 2</label>
        <input class="form-control" type="text" name="" id="op-inp">
    </div>

    <br>

    <div>
        <label for="">Enter cvs value</label>
        <input class="form-control" type="text" name="" id="cvs-inp">
    </div>

    <br>

    <div>
        <label for="">Enter cve value</label>
        <input class="form-control" type="text" name="" id="cve-inp">
    </div>

    <br>

    <div>
        <label for="">Enter Slope</label>
        <input class="form-control" type="text" name="" id="m-inp">
    </div>

    <br>

    <div>
    <button class="btn btn-primary" onclick="verify_act7_tb();">Verify</button>
    </div>
    </div>

    `;
    pp.showdescription(text_boxes, 3);
    calculated_slope = (cve - cvs) / (ve - vs);
    console.log(vs, ve, (vs + ve) / 2, cvs, cve, calculated_slope);
}
let calculated_slope;
function verify_act7_tb() {
    let val1 = document.getElementById("vs-inp");
    let val2 = document.getElementById("ve-inp");
    let val3 = document.getElementById("op-inp");
    let val4 = document.getElementById("cvs-inp");
    let val5 = document.getElementById("cve-inp");
    let val6 = document.getElementById("m-inp");
    console.log(parseFloat(val1.value));
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (!verify_values(parseFloat(val1.value), vs)) {
        console.log("please correct the vs value");
        return;
    }
    if (!verify_values(parseFloat(val2.value), ve)) {
        console.log("please correct the ve value");
        return;
    }
    if (!verify_values(parseFloat(val3.value), (vs + ve) / 2)) {
        console.log("please correct the optimum operating voltage value");
        return;
    }
    if (!verify_values(parseFloat(val4.value), cvs)) {
        console.log("please correct the cvs value");
        return;
    }
    if (!verify_values(parseFloat(val5.value), cve)) {
        console.log("please correct the cve value");
        return;
    }
    if (!verify_values(Math.abs(parseFloat(val6.value)), Math.abs(calculated_slope))) {
        console.log("please correct the slope value");
        return;
    }
    // pp.addtorightpannel(act5_ob_btn, 3);
    alert('all entered values are correct!!');
    // var bsOffcanvas = new bootstrap.Offcanvas(
    //   document.getElementById("offcanvasRight3")
    // );
    // bsOffcanvas.show();
}
//# sourceMappingURL=activity7.js.map