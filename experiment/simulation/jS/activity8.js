// var act6_ob_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="complete_table_3();" style="position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
// var act6_ob_btn_1 = `<button id="panel1_btn" class="btn btn-primary" onclick="draw_chart();" style="position: absolute; bottom: 8vh; width: 85%;">Plot Graph</button>`;
// var act6_tab3_btn = `<button id="panel1_btn"  class="btn btn-primary" onclick="add_tab3();" style="position: absolute; bottom: 8vh; width: 85%;">Next</button>`;
// function first_solution(index: number) {
//   for(let i=0; i<3; i++) {
//     let ele = <HTMLTableCellElement> document.getElementsByClassName(`sol${index}`)[i];
//     ele.style.display = 'inline';
//   }
//   if(index == 3) {
//     let btn: HTMLButtonElement  = <HTMLButtonElement> document.getElementById("panel1_btn");
//     btn.style.display = 'block';
//   }
// }
// var k_values = '<p>K values = [<span id="k-values"></span>]</p>';
// function activity8() {
//     pp.clearleftpannel();
//     pp.clearrightpannel();
//     pp.addoffcanvas(3);
//     pp.showtitle("Table for Average Conductivity", 3);
//     pp.showdescription(' <p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(0.7vw + 12px);">Calculate and input the K_Avg value. <br>  K_avg = (K<sub>1</sub> + K<sub>2</sub> + K<sub>3</sub> + ..... K<sub>n</sub>) / n</p>', 3);
//     // var bsOffcanvas = new bootstrap.Offcanvas(
//     //     document.getElementById("offcanvasRight3")
//     //   );
//     //   bsOffcanvas.show();
//     // pp.addtoleftpannel(k_values);
//     // load_k_values();
//     add_std_dev_tab2();
//     var obs_table_2 = `
// <table class="table" style="height: 35%">
// <thead>
//   <tr>
//     <th rowspan="2">Sample</th>
//     <th colspan="3">Mass (gm)</th>
//     <th></th>
//     <th></th>
//     <th  colspan="3">Area of GC</th> 
//     <th></th>
//     <th></th>
//   </tr>
//   <tr>
//   <th>Comp_1</th>
//   <th>Comp_2</th>
//   <th>External Std</th>
//   <th>Comp-1</th>
//   <th>Comp-2</th>
//   <th>External Std</th>
// </tr>
// </thead>
// <tbody id="obt3-body">
// <tr>
//     <td><button class="btn btn-primary" onclick="first_solution(0);">Cal_1</button></td>
//     <td>${table_2_data[0][0].toFixed(4)}</td>
//     <td>${table_2_data[0][1].toFixed(4)}</td>
//     <td>${table_2_data[0][2].toFixed(4)}</td>
//     <td ><span style="display: none;" class="sol0">${table_2_data[0][3].toFixed(4)}</span></td>
//     <td ><span style="display: none;" class="sol0">${table_2_data[0][4].toFixed(4)}</span></td>
//     <td ><span style="display: none;" class="sol0">${table_2_data[0][5].toFixed(4)}</span></td>
// </tr>
// <tr>
//     <td><button class="btn btn-primary"  onclick="first_solution(1);">Cal_2</button></td>
//     <td>${table_2_data[1][0].toFixed(4)}</td>
//     <td>${table_2_data[1][1].toFixed(4)}</td>
//     <td>${table_2_data[1][2].toFixed(4)}</td>
//     <td ><span style="display: none;" class="sol1">${table_2_data[1][3].toFixed(4)}</span></td>
//     <td ><span style="display: none;" class="sol1">${table_2_data[1][4].toFixed(4)}</span></td>
//     <td ><span style="display: none;" class="sol1">${table_2_data[1][5].toFixed(4)}</span></td>
// </tr>
// <tr>
//     <td><button class="btn btn-primary"  onclick="first_solution(2);">Cal_3</button></td>
//     <td>${table_2_data[2][0].toFixed(4)}</td>
//     <td>${table_2_data[2][1].toFixed(4)}</td>
//     <td>${table_2_data[2][2].toFixed(4)}</td>
//     <td ><span style="display: none;" class="sol2">${table_2_data[2][3].toFixed(4)}</span></td>
//     <td ><span style="display: none;" class="sol2">${table_2_data[2][4].toFixed(4)}</span></td>
//     <td ><span style="display: none;" class="sol2">${table_2_data[2][5].toFixed(4)}</span></td>
// </tr>
// <tr>
//     <td><button class="btn btn-primary" onclick="first_solution(3);">Cal_4</button></td>
//     <td>${table_2_data[3][0].toFixed(4)}</td>
//     <td>${table_2_data[3][1].toFixed(4)}</td>
//     <td>${table_2_data[3][2].toFixed(4)}</td>
//     <td ><span style="display: none;" class="sol3">${table_2_data[3][3].toFixed(4)}</span></td>
//     <td ><span style="display: none;" class="sol3">${table_2_data[3][4].toFixed(4)}</span></td>
//     <td ><span style="display: none;" class="sol3">${table_2_data[3][5].toFixed(4)}</span></td>
// </tr>
// </tbody>
// </table>
// `;
//     pp.addtoleftpannel(obs_table_2);
//     calculate_tab3_data();
//     pp.addtorightpannel(act6_tab3_btn, 3);
//     let btn: HTMLButtonElement  = <HTMLButtonElement> document.getElementById("panel1_btn");
//     btn.style.display = 'none';
// }
// function add_std_dev_tab2() {
//   for(let i=0; i<table_2_data.length; i++) {
//     for(let j=0; j<table_2_data[i].length; j++) {
//       table_2_data[i][j] = std_deviation(table_2_data[i][j]);
//     }
//   }
// }
// function calculate_tab3_data() {
//   for(let i=0; i<table_2_data.length; i++) {
//       table_3[i] = [];
//       table_3[i][0] = table_2_data[i][0] / table_2_data[i][2];
//       table_3[i][1] = table_2_data[i][1] / table_2_data[i][2];
//       table_3[i][2] = table_2_data[i][3] / table_2_data[i][4];
//       table_3[i][3] = table_2_data[i][4] / table_2_data[i][5];
//   }
// }
// function add_tab3() {
//   document.getElementById('panel1_btn').remove();
//   var tab3 = `
//   <table class="table" style="height: 35%">
//   <thead>
//     <tr>
//       <th id="act6-check" rowspan="2">Check</th>
//       <th colspan="2">Mass (gm)</th>
//       <th></th>
//       <th  colspan="2">Area of GC</th> 
//       <th></th>
//     </tr>
//     <tr>
//     <th>Comp_1/External Std.</th>
//     <th>Comp_2/External Std.</th>
//     <th>Comp-1/External Std.</th>
//     <th>Comp-2/External Std.</th>
//   </tr>
//   // 
//   </thead>
//   <tbody id="obt4-body">
//   <tr>
//       <td><button class="btn btn-primary" onclick="verify_tab3();">Verify</button></td>
//       <td><input type="text" name="" id="act6-inp1"></td>
//       <td><input type="text" name="" id="act6-inp2"></td>
//       <td><input type="text" name="" id="act6-inp3"></td>
//       <td><input type="text" name="" id="act6-inp4"></td>
//   </tr>
//   </tbody>
//   </table>
//   `;
//   // pp.addtoleftpannel(tab3);
// }
// function verify_tab3() {
//     let val1: HTMLInputElement = <HTMLInputElement>document.getElementById("act6-inp1");
//     let val2: HTMLInputElement = <HTMLInputElement>document.getElementById("act6-inp2");
//     let val3: HTMLInputElement = <HTMLInputElement>document.getElementById("act6-inp3");
//     let val4: HTMLInputElement = <HTMLInputElement>document.getElementById("act6-inp4");
//     console.log(parseFloat(val1.value));
//     // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
//     if (!verify_values(parseFloat(val1.value), table_3[0][0])) {
//       console.log("please input the correct Comp_1/External Std value for mass");
//       return;
//     }
//     if (!verify_values(parseFloat(val2.value), table_3[0][1])) {
//       console.log("please input the Comp_2/External Std value for mass");
//       return;
//     }
//     if (!verify_values(parseFloat(val3.value), table_3[0][2])) {
//       console.log("please input the second correct Comp_1/External Std value for area of GC");
//       return;
//     }
//     if (!verify_values(parseFloat(val4.value), table_3[0][3])) {
//       console.log("please input the second correct Comp_2/External Std value for area of GC");
//       return;
//     }
//     pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(0.7vw + 12px);">Click next to complete the table</p>', 3);
//     pp.addtorightpannel(act6_ob_btn, 3);
//     // var bsOffcanvas = new bootstrap.Offcanvas(
//     //   document.getElementById("offcanvasRight3")
//     // );
//     // bsOffcanvas.show();
//     complete_table_3();
// }
// // function load_k_values() {
// //     let ele = document.getElementById('k-values');
// //     for(let i=0; i<main_table_data.length; i++) {
// //         ele.innerText += `${main_table_data[i][8] + ", "}`
// //     }
// // }
// function complete_table_3() {
//     let table_body = document.getElementById('obt4-body');
//     document.getElementById('act6-check').remove();
//    // document.getElementById('act6-verify-btn').remove();
//     table_body.innerHTML = ``;
//     // close_offcanvas();
//     document.getElementById('panel1_btn').remove();
//     pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(0.7vw + 12px);">Table with all the calculated values</p>', 3);
//     pp.addtorightpannel(act6_ob_btn_1, 3);
//     for(let i=0; i<table_3.length; i++) {
//         let row = document.createElement('tr');
//         let val1 = table_3[i][0].toFixed(4).toString(4);
//         let val2 = table_3[i][1].toFixed(4);
//         let val3 = table_3[i][2].toFixed(4);
//         let val4 = table_3[i][3].toFixed(4);
//         row.innerHTML = `
//         <td>${val1}</td>
//         <td>${val2}</td>
//         <td>${val3}</td>
//         <td>${val4}</td>
//         `;
//         table_body.append(row);
//     }
// }
//# sourceMappingURL=activity8.js.map