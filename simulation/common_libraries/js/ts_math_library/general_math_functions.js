function verify_values(value, truevalue) {
    if (truevalue == 0 && value == truevalue) {
        return true;
    }
    let calculated_value = Math.abs(((truevalue - value) / truevalue) * 100);
    if (calculated_value <= 1) {
        return true;
    }
    else {
        return false;
    }
}
function random(min, max) {
    let num = (max - min) * Math.random() + min;
    return num;
}
function random1(min, max) {
    let num = (max - min) * Math.random() + min;
    return parseInt(num);
}
function std_deviation(num) {
    let std = num / 100.0;
    let dev = num - random(-std, std);
    return dev;
}
function gauss(a, c) {
    let n = c.length;
    let x = [];
    for (let i = 0; i < n - 1; i++) {
        for (let k = i + 1; k < n; k++) {
            let m = a[k][i] / a[i][i];
            for (let j = 0; j < n; j++) {
                a[k][j] = a[k][j] - m * a[i][j];
            }
            c[k] = c[k] - m * c[i];
        }
        x[i] = 0;
    }
    for (let i = n - 1; i >= 0; i--) {
        let sum = c[i];
        for (let j = i + 1; j < n; j++) {
            sum = sum - x[j] * a[i][j];
        }
        x[i] = sum / a[i][i];
    }
    return x;
}
// for showing offcanvas
// function show_panel(id: number) {
//     var bsOffcanvas = new bootstrap.Offcanvas(
//         document.getElementById(`offcanvasRight${id}`)
//       );
//       bsOffcanvas.show();
// }
// for hiding offcanvas
function hide_panel(id) {
    let ele = document.getElementById(`hide_panel${id}`);
    ele.click();
}
// x1 = 1/T
// x2 = ln(P)/T
//y = ln(P)
function inverse_matrix(ar) {
    // let a=[[10,1,1],[1,10,4],[5,3,11]];
    let a = [];
    for (let i = 0; i < ar.length; i++) {
        let temp = [];
        for (let j = 0; j < ar[i].length; j++) {
            temp.push(ar[i][j]);
        }
        a.push(temp);
    }
    let b = new Array(a.length).fill(0).map(() => Array(a[0].length).fill(0));
    for (let i = 0; i < b.length; i++) {
        b[i][i] = 1;
    }
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a.length; k++) {
            if (i != k) {
                let temp = a[k][i] / a[i][i];
                for (let j = 0; j < a[0].length; j++) {
                    a[k][j] = a[k][j] - temp * a[i][j];
                    b[k][j] = b[k][j] - temp * b[i][j];
                }
            }
        }
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            b[i][j] = parseFloat((b[i][j] / a[i][i]).toFixed(3));
        }
    }
    console.log(b);
    return b;
}
function matrix_multiplication(a, b) {
    let rows = a.length;
    let cols_a = a[0].length;
    let cols = b[0].length;
    let c = [];
    for (let i = 0; i < rows; i++) {
        c[i] = [];
        for (let k = 0; k < cols; k++) {
            let sum = 0;
            for (let j = 0; j < cols_a; j++) {
                sum += a[i][j] * b[j][k];
            }
            c[i][k] = parseFloat(sum.toFixed(3));
        }
    }
    return c;
}
function transpose_matrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = parseFloat(matrix[j][i].toFixed(3));
        }
    }
    return result;
}
function matrix_multiplication_8decimal(a, b) {
    let rows = a.length;
    let cols_a = a[0].length;
    let cols = b[0].length;
    let c = [];
    for (let i = 0; i < rows; i++) {
        c[i] = [];
        for (let k = 0; k < cols; k++) {
            let sum = 0;
            for (let j = 0; j < cols_a; j++) {
                sum += a[i][j] * b[j][k];
            }
            c[i][k] = parseFloat(sum.toFixed(8));
        }
    }
    return c;
}
function adjoint_2x2_matrix(mat) {
    let b = [[mat[1][1], -mat[1][0]], [-mat[0][1], mat[0][0]]];
    return b;
}
// Recursive function to find determinant
function find_deteminant(mat, n) {
    if (n === 1) {
        return mat[0][0];
    }
    let det = 0;
    let sign = 1;
    for (let i = 0; i < n; i++) {
        let submatrix = createSubmatrix(mat, i, n);
        det += sign * mat[0][i] *
            find_deteminant(submatrix, n - 1);
        sign = -sign;
    }
    return det;
}
// Function to find sub-matrices of different orders
function createSubmatrix(mat, colToRemove, n) {
    let submatrix = [];
    for (let i = 1; i < n; i++) {
        let newRow = [];
        for (let j = 0; j < n; j++) {
            if (j !== colToRemove) {
                newRow.push(mat[i][j]);
            }
        }
        submatrix.push(newRow);
    }
    return submatrix;
}
//
function get_Submatrix(mat, colToRemove, rowToRemove, n) {
    let submatrix = [];
    for (let i = 1; i < n; i++) {
        let newRow = [];
        for (let j = 0; j < n; j++) {
            if (j !== colToRemove && i !== rowToRemove) {
                newRow.push(mat[i][j]);
            }
        }
        submatrix.push(newRow);
    }
    return submatrix;
}
//# sourceMappingURL=general_math_functions.js.map