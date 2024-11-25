

function activity7() {
    console.log("hello");
    

    for(let i=0; i<main_data_table.length; i++) {
        if(main_data_table[i][1] == vs) {
            cvs = main_data_table[i][3];
        } 

        if(main_data_table[i][1] == ve) {
            cve = main_data_table[i][3];
            break;
        }
    }

    let text_boxes = `
    <div>

    <div>
        <label for="">Enter Vs value</label>
        <input class="form-control" type="text" name="" id="vs-inp">
    </div>

    <br>

    <div>
        <label for="">Enter Ve value</label>
        <input class="form-control" type="text" name="" id="ve-inp">
    </div>

    <br>

    <div>
        <label for="">Enter Optimum operating voltage => (Vs + Ve) / 2</label>
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

    calculated_slope = (cve - cvs)/(ve - vs);

    console.log(vs, ve, (vs + ve)/2, cvs, cve, calculated_slope);
    
}

let calculated_slope: number;

function verify_act7_tb() {
    let val1: HTMLInputElement = <HTMLInputElement>document.getElementById("vs-inp");
    let val2: HTMLInputElement = <HTMLInputElement>document.getElementById("ve-inp");
    let val3: HTMLInputElement = <HTMLInputElement>document.getElementById("op-inp");
    let val4: HTMLInputElement = <HTMLInputElement>document.getElementById("cvs-inp");
    let val5: HTMLInputElement = <HTMLInputElement>document.getElementById("cve-inp");
    let val6: HTMLInputElement = <HTMLInputElement>document.getElementById("m-inp");

    
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

    if (!verify_values(parseFloat(val3.value), (vs+ve)/2)) {
    
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


  

  

  