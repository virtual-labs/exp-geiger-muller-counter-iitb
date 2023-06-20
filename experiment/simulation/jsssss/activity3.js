// var obtable_verified: boolean = false;
// // var button = `<button class="offcanvasbtn"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1"><i class="bi bi-gear offcanvasicon"></i></button>`;
// var ob_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="add_area_field();" style="
// position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
// var ob_btn_0 = `<button id="panel1_btn" class="btn btn-primary" onclick="activity4();" style="
// position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
// // pp.addtoleftpannel(table);
// // pp.addtoleftpannel("<br>");
// // pp.addtoleftpannel(table);
// // pp.addcanvas('activiy-1');
// // var canvas = pp.canvas;
// function activity3() {
//   pp.clearleftpannel();
// //   pp.addtoleftpannel(button);
//   pp.showdescription(
//     '<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;">You get  <br> 5 points for correct calculation <br> 4 points for second attempt <br> 3 points for third attempt</p>', 3
//   );
//   pp.showtitle("Select the Dimensions of the Setup", 3);
//   pp.showscore("100", 3);
//   var selection_table = `
// <br>
// <table class="table" style="height: 100%;">
//     <tbody id="first_table_body">
//       <tr>
//         <th style="font-size: calc(1.5vw + 10px); padding: 2%;" scope="row">Diameter of Test Speciment, d (cm)</th>
//         <td>
//         <select id="diameter" class="form-select" aria-label="Default select example">
//           <option selected>Open this select menu</option>
//         </select>
//         </td>
//       </tr>
//       <tr>
//       <th style="font-size: calc(1.5vw + 10px)" scope="row">Length of Heat Exchanger, L (cm)</th>
//       <td> 
//       <select id="ht_length" class="form-select" aria-label="Default select example">
//         <option selected>Open this select menu</option>
//        </select></td>
//     </tr>
//     <tr>
//     <th style="font-size: calc(1.5vw + 10px)" scope="row">Metal</th>
//     <td>
//     <select onchange="set_values();" id="metal" class="form-select" aria-label="Default select example">
//         <option selected>Open this select menu</option>
//     </select></td>
//   </tr>
//     </tbody>
//   </table>
// `;
//   pp.addtoleftpannel(selection_table);
//   load_options();
// }
// function set_values() {
//   pp.addtorightpannel(ob_btn, 3);
//   trigger_offcavnas();
// }
// function trigger_offcavnas() {
//   var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasRight3"));
//   bsOffcanvas.show();
// }
// function close_offcanvas() {
//   document.getElementById('hide_panel3').click();
// }
// function load_options() {
//   let first = document.getElementById('diameter');
//   let second = document.getElementById('ht_length');
//   let third = document.getElementById('metal');
//   first.innerHTML = ``;
//   second.innerHTML = ``;
//   third.innerHTML = ``;
//   for(let i=0; i<=d_set.length; i++) {
//     if(i == 0) {
//       let op = `<option selected>Select the Diameter</option>`;
//       first.innerHTML += op;
//     }else {
//       let op = `<option value="${d_set[i-1]}">${d_set[i-1]}</option>`;
//       first.innerHTML += op;
//     }
//   }
//   for(let i=0; i<=length_set.length; i++) {
//     if(i == 0) {
//       let op = `<option selected>Select the Length</option>`;
//       second.innerHTML += op;
//     }else {
//       let op = `<option value="${length_set[i-1]}">${length_set[i-1]}</option>`;
//       second.innerHTML += op;
//     }
//   }
//   for(let i=0; i<=metal_set.length; i++) {
//     if(i == 0) {
//       let op = `<option selected>Select the Metal</option>`;
//       third.innerHTML += op;
//     }else {
//       let op = `<option value="${metal_set[i-1]}">${metal_set[i-1]}</option>`;
//       third.innerHTML += op;
//     }
//   }
// }
// function add_area_field() {
//   document.getElementById('panel1_btn').remove();
//   pp.addtorightpannel(ob_btn_0, 3);
//   let first: HTMLSelectElement = <HTMLSelectElement> document.getElementById('diameter');
//   let second: HTMLSelectElement = <HTMLSelectElement>document.getElementById('ht_length');
//   let third: HTMLSelectElement = <HTMLSelectElement>document.getElementById('metal');
//   metal = third.value;
//   console.log(third.value);
//   ht_length = parseFloat(second.value);
//   diameter = parseFloat(first.value);
//   cs_area = 0.0012;
//   console.log("dia =" + diameter);
//   console.log(diameter, ht_length, diameter);
//   first.disabled = true;
//   second.disabled = true;
//   third.disabled = true;
//   close_offcanvas();
//   let tr:HTMLTableRowElement = <HTMLTableRowElement> document.createElement('tr');
//   tr.innerHTML = `
//   <th style="font-size: calc(1.5vw + 10px)" scope="row">Cross Sectional Area, A m<sup>2</sup></th>
//   <td><input disabled class="form-control" value="${cs_area}" type="text" name="" id="cs-area"></td>
//   `;
//   document.getElementById('first_table_body').append(tr);
// }
//# sourceMappingURL=activity3.js.map