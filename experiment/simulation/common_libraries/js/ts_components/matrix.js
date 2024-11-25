//This class is for showing 2D array in matrix form.
//2D array is a must
//It uses mathjax
class Matrix {
    constructor(variable, ar, outer_div) {
        this.variable = variable;
        this.ar = ar;
        this.outer_div = outer_div;
        this.rows = this.ar.length;
        this.cols = this.ar[0].length;
    }
    load_matrix() {
        let mat = `<div style="width:100%; height:100%; overflow-x:auto; overflow-y:hidden;">$$ ${this.variable} = \\begin{bmatrix}`;
        for (let i = 0; i < this.rows; i++) {
            let el = '';
            for (let j = 0; j < this.cols; j++) {
                el +=
                    j == this.cols - 1
                        ? `${parseFloat(this.ar[i][j].toFixed(3))}`
                        : `${parseFloat(this.ar[i][j].toFixed(3))} &`;
            }
            mat += i == this.rows - 1 ? `${el}` : `${el} \\\\`;
        }
        mat += `\\end{bmatrix} $$ </div>`;
        this.outer_div.innerHTML += mat;
        // MathJax.typeset();
        setTimeout(() => MathJax.typeset(), 100);
    }
}
//in this class variable can be empty  if it is not needed to display in the matrix
//we can also fix the decimal point for values, default is 3
class Matrix_Without_String extends Matrix {
    constructor(variable, ar, outer_div, fixed = 3) {
        super(variable, ar, outer_div);
        this.fixed = fixed;
    }
    load_matrix() {
        let mat = `<div style="width:100%; height:100%; overflow-x:auto; overflow-y:hidden;">$$ ${this.variable === '' ? '' : `${this.variable}=`} \\begin{bmatrix}`;
        for (let i = 0; i < this.rows; i++) {
            let el = '';
            for (let j = 0; j < this.cols; j++) {
                el +=
                    j == this.cols - 1
                        ? `${parseFloat(this.ar[i][j].toFixed(this.fixed))}`
                        : `${parseFloat(this.ar[i][j].toFixed(this.fixed))} &`;
            }
            mat += i == this.rows - 1 ? `${el}` : `${el} \\\\`;
        }
        mat += `\\end{bmatrix} $$ </div>`;
        this.outer_div.innerHTML += mat;
        // MathJax.typeset();
        setTimeout(() => MathJax.typeset(), 100);
    }
}
// below function can be used to get html code for matrix provided
function get_matrix_html(num_of_rows, num_of_columns, matrix, display_property = '', width = '60%') {
    //contraints
    if (matrix.length == 0) {
        console.log('Matrix cannot be zero');
        return '';
    }
    if (matrix.length != num_of_rows) {
        console.log('Number of rows did not match');
        return '';
    }
    if (matrix[0].length != num_of_columns) {
        console.log('Number of columns did not match');
        return '';
    }
    //css props
    let html_code = '';
    let dsp = 'block';
    if (dsp != '') {
        dsp = display_property;
    }
    let col_areas = '';
    for (let j = 0; j < num_of_columns; j++) {
        col_areas += ' 1fr';
    }
    let grid_style = `display: grid; grid-template-column: ${col_areas};`;
    //html code
    html_code = `
        <div style="display: ${dsp}; width: ${width} !important;">
            <div style='${grid_style}'>
    `;
    for (let i = 0; i < num_of_rows; i++) {
        let row_html = '';
        for (let j = 0; j < num_of_columns; j++) {
            html_code += `<div style='border: 2px solid black; padding: 0; margin: 0; text-align: center; grid-column: ${j + 1}; grid-row: ${i + 1};'>${matrix[i][j]}</div>`;
        }
    }
    html_code += `
        </div>
    </div>
    `;
    return html_code;
}
// you can also add title here
function get_matrix_html_with_title(num_of_rows, num_of_columns, matrix, title, display_property = '', width = '60%') {
    //contraints
    if (matrix.length == 0) {
        console.log('Matrix cannot be zero');
        return '';
    }
    if (matrix.length != num_of_rows) {
        console.log('Number of rows did not match');
        return;
    }
    if (matrix[0].length != num_of_columns) {
        console.log('Number of columns did not match');
        return;
    }
    //css props
    let html_code = '';
    let dsp = 'block';
    if (dsp != '') {
        dsp = display_property;
    }
    let col_areas = '';
    for (let j = 0; j < num_of_columns; j++) {
        col_areas += ' 1fr';
    }
    let grid_style = `display: grid; grid-template-column: ${col_areas};`;
    //html code
    html_code = `
        <div style="display: ${dsp}; width: ${width} !important;">
            <div style='text-align: center;'>${title}</div>
            <div style='${grid_style}'>
    `;
    for (let i = 0; i < num_of_rows; i++) {
        let row_html = '';
        for (let j = 0; j < num_of_columns; j++) {
            html_code += `<div style='border: 2px solid black; padding: 0; margin: 0; text-align: center; grid-column: ${j + 1}; grid-row: ${i + 1};'>${matrix[i][j]}</div>`;
        }
    }
    html_code += `
        </div>
    </div>
    `;
    return html_code;
}
//to convert from 2d matrix to 1d vector
function convert_2d_to_1d_vector(m) {
    if (m[0].length > 1) {
        console.log('Size of your 2d matrix is not convertible');
        return [];
    }
    let mat = m;
    m = [];
    for (let i = 0; i < mat.length; i++) {
        m.push(mat[i][0]);
    }
    return m;
}
//to convert form 1d vector to 2d vector
function convert_1d_to_2d_matrix(m) {
    if (m.length == 0) {
        console.log('Size of your 2d matrix is not convertible');
        return [];
    }
    let mat = m;
    m = [];
    for (let i = 0; i < mat.length; i++) {
        m.push([mat[i]]);
    }
    return m;
}
//# sourceMappingURL=matrix.js.map