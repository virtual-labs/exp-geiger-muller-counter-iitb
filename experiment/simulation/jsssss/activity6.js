var sum_y;
var sum_x1;
var sum_x2;
var A;
var B;
var C;
var obs_table = `


<table class="table" style="height: 100%">
<thead>
  <tr>
    <th scope="col"></th>
    <th scope="col">Temp (T)</th>
    <th scope="col">Concentration (X)</th>
    <th scope="col">ln(X) (Y)</th>
    <th scope="col">1/T (X1)</th>
    <th scope="col">ln(T) (X2)</th>
    <th id="act4-tab1-checked" scope="col">Check</th>
    
  </tr>
</thead>
<tbody id="table-1-body">
<tr>
    <td>0</td>
    <td>${T[0]}</td>
    <td>${X[0]}</td>
    <td><input  id="a6-inp1" type="number" name="" id=""></td>
    <td><input id="a6-inp2"  type="number" name="" id=""></td>
    <td><input id="a6-inp3"  type="number" name="" id=""></td>
    <td><input id="tab1-verify-btn" onclick="act6_verify_tab1();" class="btn btn-primary" value="Verify" type="button" name="" id=""></td>
</tr>
</tbody>
</table>
`;
var verify_summations_btn_2 = `<button id="panel1_btn" class="btn btn-primary" onclick="verify_summations();" style="position: absolute; bottom: 12vh; width: 90%;"> Display Observation Table</button>`;
// var ob_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="add_area_field();" style="
// position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
var act4_btn_1 = `<button id="panel1_btn" class="btn btn-primary" onclick="complete_tab1();" style="
position: absolute; bottom: 12vh; width: 90%;">Next</button>`;
var act4_btn_2 = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5();" style="
position: absolute; bottom: 12vh; width: 90%;">Next</button>`;
var plot_graph_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="draw_chart();" style="
position: absolute; bottom: 12vh; width: 90%;">Plot Graph</button>`;
function activity6() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    if (document.getElementById('panel1_btn')) {
        document.getElementById('panel1_btn').remove();
    }
    // pp.addtoleftpannel(button);
    // pp.addtoleftpannel(button);
    // pp.addtoleftpannel(button);
    pp.addoffcanvas(3);
    pp.showtitle("Observation Table", 3);
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.0vw;">Enter all the readings in the table columns</p>', 3);
    // document.getElementById('hide_panel3').click();
    pp.showscore(200, 3);
    pp.addtoleftpannel(obs_table);
    // complete_tab1();
}
function complete_tab1() {
    let table_body = document.getElementById('table-1-body');
    table_body.innerHTML = ``;
    // close_offcanvas();
    document.getElementById('panel1_btn').remove();
    pp.addtorightpannel(act4_btn_2, 3);
    document.getElementById('act4-tab1-checked').remove();
    for (let i = 0; i < T.length; i++) {
        let row = document.createElement('tr');
        // let val1 = Y[0];
        // let val2 = table_1[i][1];
        // let val3 = table_1[i][2];
        // ;
        // if(i == 0) {
        // val1 = Y[i];
        //  val2 = X1[i];
        //  val3 = X2[i];
        // }
        // table_1[i][0] = val1;
        // table_1[i][1] = val2;
        // table_1[i][2] = val3;
        // table_1[i][3] = val4
        row.innerHTML = `
        <td>${i + 1}</td>
        <td></td>
        <td>${T[i]}</td>
        <td>${X[i]}</td>
        <td>${X1[i].toFixed(5)}</td>
        <td>${X2[i].toFixed(2)}</td>
        `;
        table_body.append(row);
    }
    sum_y = 0;
    sum_x1 = 0;
    sum_x2 = 0;
    for (let i = 0; i < Y.length; i++) {
        sum_y += Y[i];
        sum_x1 += X1[i];
        sum_x2 += X2[i];
    }
    let all_properties = `

<div style="overflow-y: auto !important; max-height: 80%;">


  <br>

  <div class="row" style="font-size: calc(0.7vw + 8px);"> 

  <div class="col-6">&Sigma;Y </div>  
  <div class="col-6"><input type="text" name="" id="act6-tab3-inp1"></div>

  <br>

  <div class="col-6">&Sigma;X1</div>  
  <div class="col-6"><input type="text" id="act6-tab3-inp2"></div>

  <br>

  <div class="col-6">&Sigma;X2</div>  
  <div class="col-6"><input type="text" name="" id="act6-tab3-inp3"></div>

  </div>
  </div>
  

</div>


`;
    pp.showdescription(all_properties, 3);
    pp.addtorightpannel(verify_summations_btn_2, 3);
}
function act6_verify_tab1() {
    let val1 = document.getElementById('a6-inp1');
    let val2 = document.getElementById('a6-inp2');
    let val3 = document.getElementById('a6-inp3');
    if (!verify_values(parseFloat(val1.value), Y[0])) {
        alert('Y value is incorreect');
        return;
    }
    if (!verify_values(parseFloat(val2.value), X1[0])) {
        alert('X1 values is incorrect');
        return;
    }
    if (!verify_values(parseFloat(val3.value), X2[0])) {
        alert('X2 values is incorrect');
        return;
    }
    console.log('success');
    pp.showdescription('<p style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.0vw;">Great!! Values are correct. Click next to load complete table</p>', 3);
    pp.addtorightpannel(act4_btn_1, 3);
    //   trigger_offcavnas();
}
function verify_summations() {
    let val1 = document.getElementById("act6-tab3-inp1");
    let val2 = document.getElementById("act6-tab3-inp2");
    let val3 = document.getElementById("act6-tab3-inp3");
    console.log(parseFloat(val1.value));
    // console.log(Q.value, To.value, Ti.value, ti.value, to.value);
    if (!verify_values(parseFloat(val1.value), sum_y)) {
        console.log("please correct the summaton of Y values");
        return;
    }
    if (!verify_values(parseFloat(val2.value), sum_x1)) {
        console.log("please correct the summaton of X1 values");
        return;
    }
    if (!verify_values(parseFloat(val3.value), sum_x2)) {
        console.log("please correct the summaton of  X2 values");
        return;
    }
    // pp.addtorightpannel(act5_ob_btn, 3);
    document.getElementById('panel1_btn').remove();
    alert("all values are correct!");
    // var bsOffcanvas = new bootstrap.Offcanvas(
    //   document.getElementById("offcanvasRight3")
    // );
    // bsOffcanvas.show();
    complete_main_table_2();
}
function complete_main_table_2() {
    let pol = regression_linear_2variable(X1, X2, Y);
    A = pol[0];
    B = pol[1];
    C = pol[2];
    let formula = `
    <div>
    <p style="font-size: calc(0.7vw + 8px);">ln(x) = A + B/T + (C x ln(T))</p>
    <p>A = ${A}</p>
    <p>B = ${B}</p>
    <p>C = ${C}</p>
    </div>  
    `;
    pp.showdescription(formula, 3);
    pp.addtorightpannel(plot_graph_btn, 3);
}
activity6();
//# sourceMappingURL=activity6.js.map