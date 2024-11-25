//Table for numerical values
class Verify_Table {
    constructor(header, all_data, verify_row_index, verify_col, all_original_values, table_title, outer_div, update_values, after_verify) {
        this.header = [];
        this.verification_row = [];
        this.all_data = [];
        this.verify_col = [];
        this.verify_table = () => {
            console.log('verify button clicked');
            console.log(this.all_orignial_values);
            console.log(this.verify_col);
            if (this.all_orignial_values.length != this.verify_col.length) {
                alert('Enter the correct values');
                return;
            }
            console.log(this.all_orignial_values);
            for (let i = 0; i < this.verify_col.length; i++) {
                let val = (document.getElementById(`tab${this.tab_ind}inp${i}`));
                if (!verify_values(parseFloat(val.value), this.all_orignial_values[i])) {
                    alert(`Incorrect ${this.header[this.verify_col[i]]} value`);
                    return;
                }
            }
            alert('All Entered Values are Correct!!');
            if (this.update_values) {
                for (let j = 0; j < this.verify_col.length; j++) {
                    let val = (document.getElementById(`tab${this.tab_ind}inp${j}`));
                    this.all_data[this.row_ind][this.verify_col[j]] = parseFloat(val.value);
                }
            }
            this.load_full_table();
        };
        this.load_full_table = () => {
            let tab_body = (document.getElementById(`body${this.tab_ind}`));
            tab_body.innerHTML = ``;
            let lastcol = (document.getElementById(`tab${this.tab_ind}lastcol`));
            lastcol.remove();
            for (let i = 0; i < this.all_data.length; i++) {
                let new_row = tab_body.insertRow();
                for (let j = 0; j < this.verification_row.length; j++) {
                    let cell = new_row.insertCell(j);
                    cell.innerHTML = this.all_data[i][j].toString();
                }
            }
            if (this.after_verify) {
                this.after_verify();
            }
        };
        this.header = header;
        this.all_data = all_data;
        this.verification_row = this.all_data[verify_row_index];
        this.verify_col = verify_col;
        this.table_title = table_title;
        this.row_ind = verify_row_index;
        this.tab_ind = Verify_Table.tab_id;
        Verify_Table.tab_id++;
        this.outer_div = outer_div;
        this.update_values = update_values;
        this.all_orignial_values = all_original_values;
        this.after_verify = after_verify;
    }
    load_table() {
        let header_elements = `<tr>`;
        let vr_elements = `<tr>`;
        let input_count = 0;
        for (let i = 0; i < this.header.length; i++) {
            header_elements += `<th>${this.header[i]}</th>`;
        }
        header_elements += `<th id='tab${this.tab_ind}lastcol'>Check</th>`;
        header_elements += '</tr>';
        for (let i = 0; i < this.verification_row.length; i++) {
            if (this.verify_col.indexOf(i) == -1) {
                console.log(this.verify_col.indexOf(i));
                vr_elements += `<td>${this.verification_row[i]}</td>`;
            }
            else {
                vr_elements += `<td><input class='form-control' id='tab${this.tab_ind}inp${input_count++}' /></td>`;
            }
        }
        console.log(this.tab_ind);
        vr_elements += `<td><button id='tab${this.tab_ind}btn' class='btn btn-info fs-15px'>Verify</button></td>`;
        vr_elements += `</tr>`;
        let text = `
        <div class='table-responsive' id='tab${this.tab_ind}main'>
            <table class='table table-stripped'>
                <thead id='header${this.tab_ind}' class='table-dark' >${header_elements}</thead>
                <tbody id='body${this.tab_ind}'>${vr_elements}</tbody>
            </table>
        </div>
        `;
        this.outer_div.innerHTML += text;
        setTimeout(() => {
            let btn = (document.getElementById(`tab${this.tab_ind}btn`));
            btn.onclick = this.verify_table;
        }, 200);
    }
    update_table(new_data) {
        if (new_data[0].length == this.all_data[0].length) {
            this.all_data = new_data;
            let tab_body = (document.getElementById(`body${this.tab_ind}`));
            tab_body.innerHTML = ``;
            for (let i = 0; i < this.all_data.length; i++) {
                let new_row = tab_body.insertRow();
                for (let j = 0; j < this.verification_row.length; j++) {
                    let cell = new_row.insertCell(j);
                    cell.innerHTML = this.all_data[i][j].toString();
                }
            }
        }
    }
    get_table_element() {
        let ele = (document.getElementById(`tab${this.tab_ind}main`));
        return ele;
    }
}
Verify_Table.tab_id = 0;
class Verify_Rows_Cols extends Verify_Table {
    constructor(header, all_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify) {
        super(header, all_data, 0, [], [], table_title, outer_div, false, after_verify);
        this.rows_verification = [];
        this.original_values = [];
        this.rows_to_verify = 0;
        this.verify_rows = (e) => {
            console.log('verify button clicked');
            console.log(this.original_values);
            if (this.original_values.length != this.verify_col.length) {
                alert('Enter the correct values');
                return;
            }
            let button = e.target;
            let row = (button.parentNode.parentNode);
            let row_indx = row.getAttribute('data-index');
            let inps = row.querySelectorAll('input');
            let vals = Array.from(inps).map((inp) => inp.value);
            for (let i = 0; i < this.verify_col[row_indx].length; i++) {
                let val = (document.getElementById(`tab${this.tab_ind}inp${row_indx}${i}`));
                if (!verify_values(parseFloat(vals[i]), this.original_values[row_indx][i])) {
                    val.style.border = '1px solid red';
                    alert(`Incorrect value`);
                    return;
                }
                else {
                    val.style.border = '1px solid #ced4da';
                    val.disabled = true;
                }
            }
            //to check if all the cols of that row is verified,
            //if verified, then verify button will be disabled for that row.
            for (let i = 0; i < inps.length; i++) {
                if (!inps[i].disabled) {
                    return;
                }
            }
            button.disabled = true;
            this.rows_to_verify--;
            alert('Entered Correct Value for this row!!');
            if (this.rows_to_verify <= 0) {
                this.load_full_table();
                console.log(this.all_data);
            }
        };
        this.load_full_table = () => {
            let tab_body = (document.getElementById(`body${this.tab_ind}`));
            tab_body.innerHTML = ``;
            if (this.full_table_load) {
                if (this.header && this.header.length > 0) {
                    let lastcol = (document.getElementById(`tab${this.tab_ind}lastcol`));
                    lastcol.remove();
                }
                for (let i = 0; i < this.all_data.length; i++) {
                    let new_row = tab_body.insertRow();
                    for (let j = 0; j < this.verification_row.length; j++) {
                        let cell = new_row.insertCell(j);
                        cell.innerHTML = parseFloat(this.all_data[i][j].toFixed(3)).toString();
                    }
                }
            }
            if (this.after_verify) {
                this.after_verify();
            }
        };
        for (let i = 0; i < all_data.length; i++) {
            if (verify_row_index.indexOf(i) != -1) {
                this.rows_verification.push(all_data[i]);
            }
        }
        for (let i = 0; i < all_data.length; i++) {
            let ar = [];
            let indx = verify_row_index.indexOf(i);
            if (indx != -1) {
                for (let j = 0; j < all_data[i].length; j++) {
                    if (verify_col[indx].indexOf(j) != -1) {
                        ar.push(all_data[i][j]);
                    }
                }
                this.original_values.push(ar);
            }
        }
        this.verify_row_index = verify_row_index;
        this.show_data = show_data;
        this.full_table_load = full_table_load;
        this.verify_col = verify_col;
        this.rows_to_verify = verify_row_index.length;
    }
    load_table() {
        let vr_elements = `<tr data-index="0">`;
        let input_count = 0;
        let tab_head = '';
        let tab_body = '';
        console.log('all_data', this.all_data);
        console.log('ori_val', this.original_values);
        // Skip creating header if header array is empty or null
        if (this.header && this.header.length > 0) {
            let header_elements = `<tr>`;
            for (let i = 0; i < this.header.length; i++) {
                header_elements += `<th>${this.header[i]}</th>`;
            }
            header_elements += `<th id='tab${this.tab_ind}lastcol'>Check</th>`;
            header_elements += '</tr>';
            tab_head = `<thead id='header${this.tab_ind}' class='table-dark' >${header_elements}</thead>`;
        }
        for (let i = 0; i < this.rows_verification.length; i++) {
            input_count = 0;
            for (let j = 0; j < this.rows_verification[i].length; j++) {
                if (this.verify_col[i].indexOf(j) == -1) {
                    vr_elements += `<td>${this.show_data
                        ? parseFloat(this.rows_verification[i][j].toFixed(3))
                        : '--'}</td>`;
                }
                else {
                    vr_elements += `<td><input class='form-control' id='tab${this.tab_ind}inp${i}${input_count++}' /></td>`;
                }
            }
            vr_elements += `<td><button id='tab${this.tab_ind}btn' class='btn btn-info fs-15px'>Verify</button></td>`;
            vr_elements += `</tr>`;
            vr_elements += `<tr data-index="${i + 1}">`;
        }
        vr_elements += `</tr>`;
        tab_body = `<tbody id='body${this.tab_ind}'>${vr_elements}</tbody>`;
        let text = `
      <div class='table-responsive' id='tab${this.tab_ind}main'>
          <table class='table table-stripped'>
              ${tab_head}
              ${tab_body}
          </table>
      </div>
      `;
        this.outer_div.innerHTML += text;
        setTimeout(() => {
            let btn = document.querySelectorAll(`#tab${this.tab_ind}btn`);
            btn.forEach((ele) => (ele.onclick = this.verify_rows));
        }, 200);
    }
    get_table_element() {
        let ele = (document.getElementById(`tab${this.tab_ind}main`));
        return ele;
    }
}
//you can get toFixed(6) values
class Verify_Rows_Cols_6_decimal_places extends Verify_Rows_Cols {
    constructor(header, all_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify) {
        super(header, all_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify);
        this.precision = [];
        this.load_full_table = () => {
            let tab_body = (document.getElementById(`body${this.tab_ind}`));
            tab_body.innerHTML = ``;
            if (this.full_table_load) {
                if (this.header && this.header.length > 0) {
                    let lastcol = (document.getElementById(`tab${this.tab_ind}lastcol`));
                    lastcol.remove();
                }
                for (let i = 0; i < this.all_data.length; i++) {
                    let new_row = tab_body.insertRow();
                    for (let j = 0; j < this.verification_row.length; j++) {
                        let cell = new_row.insertCell(j);
                        cell.innerHTML = parseFloat(this.all_data[i][j].toFixed(6)).toString();
                    }
                }
            }
            if (this.after_verify) {
                this.after_verify();
            }
        };
    }
}
//you can add string values to the table data as well, but string can't be verified
//you can show any rows data without verification
//you can custom fix the decimal places
//data will only be shown if show_data is true
//-"verify_row_index" -> pass index of all the rows which you want to either verify or show data. index which are not included will not appear at the time of verficiation.
//-"verify_col" -> it will be a 2D array containing index of which cols to be verify
//eg- verify_col[0] will be an array containing index of cols that needs to be verified for verify_row_indx[0](this is a index for row) row
//if an empty array is there inside verify_col then it will show the data and verify button will not appear
class Verify_Rows_Cols_Custom_Fixed extends Verify_Rows_Cols {
    constructor(header, all_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify, custom_fix) {
        super(header, all_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify);
        this.verify_rows = (e) => {
            console.log('verify button clicked');
            console.log(this.original_values);
            if (this.original_values.length != this.verify_col.length) {
                alert('Enter the correct values');
                return;
            }
            let button = e.target;
            let row = (button.parentNode.parentNode);
            let row_indx = row.getAttribute('data-index');
            let inps = row.querySelectorAll('input');
            let vals = Array.from(inps).map((inp) => inp.value);
            for (let i = 0; i < this.verify_col[row_indx].length; i++) {
                let val = (document.getElementById(`tab${this.tab_ind}inp${row_indx}${i}`));
                if (!verify_values(parseFloat(vals[i]), parseFloat(this.original_values[row_indx][i].toFixed(this.custom_fix)))) {
                    val.style.border = '1px solid red';
                    alert(`Incorrect value`);
                    return;
                }
                else {
                    val.style.border = '1px solid #ced4da';
                    val.disabled = true;
                }
            }
            //to check if all the cols of that row is verified,
            //if verified, then verify button will be disabled for that row.
            for (let i = 0; i < inps.length; i++) {
                if (!inps[i].disabled) {
                    return;
                }
            }
            button.disabled = true;
            this.rows_to_verify--;
            alert('Entered Correct Value for this row!!');
            if (this.rows_to_verify <= 0) {
                this.load_full_table();
                console.log(this.all_data);
            }
        };
        this.load_full_table = () => {
            let tab_body = (document.getElementById(`body${this.tab_ind}`));
            tab_body.innerHTML = ``;
            if (this.full_table_load) {
                if (this.header && this.header.length > 0) {
                    let lastcol = (document.getElementById(`tab${this.tab_ind}lastcol`));
                    lastcol.remove();
                }
                for (let i = 0; i < this.all_data.length; i++) {
                    let new_row = tab_body.insertRow();
                    for (let j = 0; j < this.verification_row.length; j++) {
                        let cell = new_row.insertCell(j);
                        cell.innerHTML =
                            typeof this.all_data[i][j] == 'number'
                                ? parseFloat(this.all_data[i][j].toFixed(this.custom_fix)).toString()
                                : this.all_data[i][j];
                    }
                }
            }
            if (this.after_verify) {
                this.after_verify();
            }
        };
        this.custom_fix = custom_fix;
    }
    load_table() {
        let vr_elements = `<tr data-index="0">`;
        let input_count = 0;
        let tab_head = '';
        let tab_body = '';
        console.log('all_data', this.all_data);
        console.log('ori_val', this.original_values);
        // Skip creating header if header array is empty or null
        if (this.header && this.header.length > 0) {
            let header_elements = `<tr>`;
            for (let i = 0; i < this.header.length; i++) {
                header_elements += `<th>${this.header[i]}</th>`;
            }
            header_elements += `<th id='tab${this.tab_ind}lastcol'>Check</th>`;
            header_elements += '</tr>';
            tab_head = `<thead id='header${this.tab_ind}' class='table-dark' >${header_elements}</thead>`;
        }
        for (let i = 0; i < this.rows_verification.length; i++) {
            input_count = 0;
            for (let j = 0; j < this.rows_verification[i].length; j++) {
                if (this.verify_col[i].indexOf(j) == -1) {
                    vr_elements += `<td>${this.show_data
                        ? typeof this.rows_verification[i][j] == 'number'
                            ? parseFloat(this.rows_verification[i][j].toFixed(this.custom_fix))
                            : this.rows_verification[i][j]
                        : '--'}</td>`;
                }
                else {
                    vr_elements += `<td><input class='form-control' id='tab${this.tab_ind}inp${i}${input_count++}' /></td>`;
                }
            }
            if (this.verify_col[i].length != 0) {
                vr_elements += `<td><button id='tab${this.tab_ind}btn' class='btn btn-info fs-15px'>Verify</button></td>`;
            }
            vr_elements += `</tr>`;
            vr_elements += `<tr data-index="${i + 1}">`;
        }
        vr_elements += `</tr>`;
        tab_body = `<tbody id='body${this.tab_ind}'>${vr_elements}</tbody>`;
        let text = `
      <div class='table-responsive' id='tab${this.tab_ind}main'>
          <table class='table table-stripped'>
              ${tab_head}
              ${tab_body}
          </table>
      </div>
      `;
        this.outer_div.innerHTML += text;
        setTimeout(() => {
            let btn = document.querySelectorAll(`#tab${this.tab_ind}btn`);
            btn.forEach((ele) => (ele.onclick = this.verify_rows));
        }, 200);
    }
}
//solved verification bug from Verify_Rows_Cols_Custom_Fixed class
class Verify_Rows_Cols_Custom_Fixed_Update1 extends Verify_Rows_Cols_Custom_Fixed {
    constructor(header, all_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify, custom_fix) {
        super(header, all_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify, custom_fix);
        this.rows_to_verify = 0;
        for (let i = 0; i < this.verify_col.length; i++) {
            if (this.verify_col[i].length != 0)
                this.rows_to_verify++;
        }
    }
}
//class to display table with numbers only and it will be fixed to decimal 3 places
class Show_Table {
    constructor(header, body, outer_div) {
        this.header = [];
        this.body = [];
        this.header = header;
        this.body = body;
        this.outer_div = outer_div;
    }
    load_table() {
        let tab_head = '';
        let tab_body = '<tbody>';
        // Skip creating header if header array is empty or null
        if (this.header && this.header.length > 0) {
            let header_elements = `<tr>`;
            for (let i = 0; i < this.header.length; i++) {
                header_elements += `<th>${this.header[i]}</th>`;
            }
            header_elements += '</tr>';
            tab_head = `<thead  class='table-dark' >${header_elements}</thead>`;
        }
        for (let i = 0; i < this.body.length; i++) {
            let body_element = `<tr>`;
            for (let j = 0; j < this.body[i].length; j++) {
                body_element += `<td>${parseFloat(this.body[i][j].toFixed(3))}</td>`;
            }
            body_element += `</tr>`;
            tab_body += `${body_element}`;
        }
        tab_body += `</tbody>`;
        let text = `
        <div class='table-responsive' >
            <table class='table table-stripped'>
                ${tab_head}
                ${tab_body}
            </table>
         </div>
      `;
        this.outer_div.innerHTML += text;
    }
}
//to display table with numbers only and it will be custom fixed to decimal places
class Show_Table_Custom_Fixed extends Show_Table {
    constructor(header, body, outer_div, fixed) {
        super(header, body, outer_div);
        this.fixed = fixed;
    }
    load_table() {
        let tab_head = '';
        let tab_body = '<tbody>';
        // Skip creating header if header array is empty or null
        if (this.header && this.header.length > 0) {
            let header_elements = `<tr>`;
            for (let i = 0; i < this.header.length; i++) {
                header_elements += `<th>${this.header[i]}</th>`;
            }
            header_elements += '</tr>';
            tab_head = `<thead  class='table-dark' >${header_elements}</thead>`;
        }
        for (let i = 0; i < this.body.length; i++) {
            let body_element = `<tr>`;
            for (let j = 0; j < this.body[i].length; j++) {
                body_element += `<td>${parseFloat(this.body[i][j].toFixed(this.fixed))}</td>`;
            }
            body_element += `</tr>`;
            tab_body += `${body_element}`;
        }
        tab_body += `</tbody>`;
        let text = `
        <div class='table-responsive' >
            <table class='table table-stripped'>
                ${tab_head}
                ${tab_body}
            </table>
         </div>
      `;
        this.outer_div.innerHTML += text;
    }
}
//you can add string values to the table data as well
class Verify_Rows_Cols_Strings extends Verify_Table {
    constructor(header, num_string_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify) {
        super(header, [], 0, [], [], table_title, outer_div, false, after_verify);
        this.rows_verification = [];
        this.original_values = [];
        this.rows_to_verify = 0;
        this.total_column = 0;
        this.verify_rows = (e) => {
            console.log('verify button clicked');
            console.log(this.original_values);
            if (this.original_values.length != this.verify_col.length) {
                alert('Enter the correct values');
                return;
            }
            let button = e.target;
            let row = (button.parentNode.parentNode);
            let row_indx = row.getAttribute('data-index');
            let inps = row.querySelectorAll('input');
            let vals = Array.from(inps).map((inp) => inp.value);
            for (let i = 0; i < this.verify_col[row_indx].length; i++) {
                let val = (document.getElementById(`tab${this.tab_ind}inp${row_indx}${i}`));
                if (!verify_values(parseFloat(vals[i]), this.original_values[row_indx][i])) {
                    val.style.border = '1px solid red';
                    alert(`Incorrect value`);
                    return;
                }
                else {
                    val.style.border = '1px solid #ced4da';
                    val.disabled = true;
                }
            }
            //to check if all the cols of that row is verified,
            //if verified, then verify button will be disabled for that row.
            for (let i = 0; i < inps.length; i++) {
                if (!inps[i].disabled) {
                    return;
                }
            }
            button.disabled = true;
            this.rows_to_verify--;
            alert('Entered Correct Value for this row!!');
            if (this.rows_to_verify <= 0) {
                this.load_full_table();
                console.log(this.mixed_data);
            }
        };
        this.load_full_table = () => {
            let tab_body = (document.getElementById(`body${this.tab_ind}`));
            tab_body.innerHTML = ``;
            if (this.full_table_load) {
                if (this.header && this.header.length > 0) {
                    let lastcol = (document.getElementById(`tab${this.tab_ind}lastcol`));
                    lastcol.remove();
                }
                for (let i = 0; i < this.mixed_data.length; i++) {
                    let new_row = tab_body.insertRow();
                    for (let j = 0; j < this.total_column; j++) {
                        let cell = new_row.insertCell(j);
                        cell.innerHTML = `${this.set_num_string(this.mixed_data[i][j])}`;
                    }
                }
            }
            if (this.after_verify) {
                this.after_verify();
            }
        };
        this.mixed_data = num_string_data;
        for (let i = 0; i < num_string_data.length; i++) {
            if (verify_row_index.indexOf(i) != -1) {
                this.rows_verification.push(num_string_data[i]);
            }
        }
        for (let i = 0; i < num_string_data.length; i++) {
            let ar = [];
            let indx = verify_row_index.indexOf(i);
            if (indx != -1) {
                for (let j = 0; j < num_string_data[i].length; j++) {
                    if (verify_col[indx].indexOf(j) != -1) {
                        ar.push(num_string_data[i][j]);
                    }
                }
                this.original_values.push(ar);
            }
        }
        this.verify_row_index = verify_row_index;
        this.show_data = show_data;
        this.full_table_load = full_table_load;
        this.verify_col = verify_col;
        this.rows_to_verify = verify_row_index.length;
        this.verification_row = verify_row_index;
        this.total_column = num_string_data[0].length;
    }
    load_table() {
        let vr_elements = `<tr data-index="0">`;
        let input_count = 0;
        let tab_head = '';
        let tab_body = '';
        console.log('all_data', this.mixed_data);
        console.log('ori_val', this.original_values);
        // Skip creating header if header array is empty or null
        if (this.header && this.header.length > 0) {
            let header_elements = `<tr>`;
            for (let i = 0; i < this.header.length; i++) {
                header_elements += `<th>${this.header[i]}</th>`;
            }
            header_elements += `<th id='tab${this.tab_ind}lastcol'>Check</th>`;
            header_elements += '</tr>';
            tab_head = `<thead id='header${this.tab_ind}' class='table-dark' >${header_elements}</thead>`;
        }
        for (let i = 0; i < this.rows_verification.length; i++) {
            input_count = 0;
            for (let j = 0; j < this.rows_verification[i].length; j++) {
                if (this.verify_col[i].indexOf(j) == -1) {
                    vr_elements += `<td>${this.show_data
                        ? this.set_num_string(this.rows_verification[i][j])
                        : '--'}</td>`;
                }
                else {
                    vr_elements += `<td><input class='form-control' id='tab${this.tab_ind}inp${i}${input_count++}' /></td>`;
                }
            }
            vr_elements += `<td><button id='tab${this.tab_ind}btn' class='btn btn-info fs-15px'>Verify</button></td>`;
            vr_elements += `</tr>`;
            vr_elements += `<tr data-index="${i + 1}">`;
        }
        vr_elements += `</tr>`;
        tab_body = `<tbody id='body${this.tab_ind}'>${vr_elements}</tbody>`;
        let text = `
      <div class='table-responsive' id='tab${this.tab_ind}main'>
          <table class='table table-stripped'>
              ${tab_head}
              ${tab_body}
          </table>
      </div>
      `;
        this.outer_div.innerHTML += text;
        setTimeout(() => {
            let btn = document.querySelectorAll(`#tab${this.tab_ind}btn`);
            btn.forEach((ele) => (ele.onclick = this.verify_rows));
        }, 200);
    }
    set_num_string(val) {
        if (typeof val === 'string' || typeof val === 'boolean') {
            return val;
        }
        else {
            return parseFloat(val.toFixed(6));
        }
    }
    get_table_element() {
        let ele = (document.getElementById(`tab${this.tab_ind}main`));
        return ele;
    }
}
//class to display table with numbers as well as string.
//it does not have toFixed function
//if fixing is required, fix it while creating the data for body[]
class Display_Table {
    constructor(header, body, outer_div) {
        this.header = [];
        this.body = [];
        this.header = header;
        this.body = body;
        this.outer_div = outer_div;
    }
    load_table() {
        let tab_head = '';
        let tab_body = '<tbody>';
        // Skip creating header if header array is empty or null
        if (this.header && this.header.length > 0) {
            let header_elements = `<tr>`;
            for (let i = 0; i < this.header.length; i++) {
                header_elements += `<th>${this.header[i]}</th>`;
            }
            header_elements += '</tr>';
            tab_head = `<thead  class='table-dark' >${header_elements}</thead>`;
        }
        for (let i = 0; i < this.body.length; i++) {
            let body_element = `<tr>`;
            for (let j = 0; j < this.body[i].length; j++) {
                body_element += `<td>${this.body[i][j]}</td>`;
            }
            body_element += `</tr>`;
            tab_body += `${body_element}`;
        }
        tab_body += `</tbody>`;
        let text = `
        <div class='table-responsive' >
            <table class='table table-stripped'>
                ${tab_head}
                ${tab_body}
            </table>
         </div>
      `;
        this.outer_div.innerHTML += text;
    }
}
//Table for strings values
// class Verify_Table_String {
//     header: string[] = [];
//     verification_row: string[] = [];
//     all_data: string[][] = [];
//     verify_col = [];
//     table_title: string;
//     static tab_id: number = 0;
//     tab_ind: number;
//     outer_div: HTMLElement;
//     update_values: boolean;
//     row_ind: number;
//     constructor(header: string[], all_data: string[][], verify_row_index: number, verify_col: number[],
//         table_title: string, outer_div: HTMLElement, update_values: boolean) {
//             this.header = header;
//             this.all_data = all_data;
//             this.verification_row = this.all_data[verify_row_index];
//             this.verify_col = verify_col;
//             this.table_title = table_title;
//             this.row_ind = verify_row_index;
//             this.tab_ind = Verify_Table.tab_id;
//             Verify_Table.tab_id++;
//             this.outer_div = outer_div;
//             this.update_values = update_values;
//     }
//     load_table() {
//         let header_elements = `<tr>`;
//         let vr_elements = `<tr>`;
//         let input_count = 0;
//         for(let i=0; i<this.header.length; i++) {
//             header_elements += `<th>${this.header[i]}</th>`;
//         }
//         header_elements += '</tr>';
//         for(let i=0; i<this.verification_row.length; i++) {
//             if(this.verify_col.indexOf(i) == -1) {
//                 console.log(this.verify_col.indexOf(i));
//                 vr_elements += `<th>${this.verification_row[i]}</th>`;
//             } else {
//                 vr_elements += `<th><input class='form-control' id='tab${this.tab_ind}inp${input_count++}' /></th>`;
//             }
//         }
//         vr_elements += `</tr>`;
//         let text = `
//         <div class='table-responsive'>
//             <table class='table table-stripped'>
//                 <thead id='header${this.tab_ind}' class='table-dark' >${header_elements}</thead>
//                 <tbody id='body${this.tab_ind}'>${vr_elements}</tbody>
//             </table>
//         </div>
//         `;
//         this.outer_div.innerHTML += text;
//     }
//     verify_table(all_orignial_values) {
//         if(this.all_orignial_values.length != this.verify_col.length ) {
//             alert("Enter the correct values");
//             return;
//         }
//         console.log(this.all_orignial_values);
//         for(let i=0; i<this.verify_col.length; i++) {
//             let val: HTMLInputElement = <HTMLInputElement> document.getElementById(`tab${this.tab_ind}inp${i}`);
//             if(!verify_values(parseFloat(val.value), this.all_orignial_values[i])) {
//                 alert(`Incorrect ${this.header[this.verify_col[i]]} value`);
//                 return;
//             }
//         }
//         alert('All Entered Values are Correct!!');
//         if(this.update_values) {
//             for(let j=0; j<this.verify_col.length; j++) {
//                 let val: HTMLInputElement = <HTMLInputElement> document.getElementById(`tab${this.tab_ind}inp${j}`);
//                this.all_data[this.row_ind][this.verify_col[j]] = val.value;
//             }
//         }
//         this.load_full_table();
//     }
//     load_full_table() {
//         let tab_body: HTMLTableElement = <HTMLTableElement> document.getElementById(`body${this.tab_ind}`);
//         tab_body.innerHTML = ``;
//         for(let i=0; i<this.all_data.length; i++) {
//             let new_row = tab_body.insertRow();
//             for(let j=0; j<this.verification_row.length; j++) {
//                 let cell = new_row.insertCell(j);
//                 cell.innerHTML = this.all_data[i][j];
//             }
//         }
//     }
//     update_table(new_data) {
//         if(new_data[0].length == this.all_data[0].length) {
//             this.all_data = new_data;
//             let tab_body: HTMLTableElement = <HTMLTableElement> document.getElementById(`body${this.tab_ind}`);
//             tab_body.innerHTML = ``;
//             for(let i=0; i<this.all_data.length; i++) {
//                 let new_row = tab_body.insertRow();
//                 for(let j=0; j<this.verification_row.length; j++) {
//                     let cell = new_row.insertCell(j);
//                     cell.innerHTML = this.all_data[i][j];
//                 }
//             }
//         }
//     }
// }
//# sourceMappingURL=tables.js.map