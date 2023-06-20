function verify_values(value, truevalue) {
    let calculated_value = (truevalue - value) / truevalue * 100;
    if (calculated_value <= 4 && calculated_value >= -4) {
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
function regression_linear(x, y) {
    let sumx = 0;
    let sumy = 0;
    let sumxy = 0;
    let sumxx = 0;
    let n = x.length;
    for (let i = 0; i < n; i++) {
        sumx += x[i];
        sumy += y[i];
        sumxy += x[i] * y[i];
        sumxx += x[i] * x[i];
    }
    let pol = [];
    pol[0] = (sumx * sumy - n * sumxy) / (Math.pow(sumx, 2) - n * sumxx);
    pol[1] = (sumy - pol[0] * sumx) / n;
    return (pol);
}
function ascending_random_array() {
    let arr = new Array();
    while (true) {
        let x = random1(0, 40);
        let found = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == x) {
                found = true;
            }
        }
        if (!found) {
            arr.push(x);
            if (arr.length == 5) {
                arr.sort(function (a, b) { return a - b; });
                return arr;
            }
        }
    }
}
function regression_linear_2variable(x1, x2, y) {
    let sumx1 = 0;
    let sumx2 = 0;
    let sumx1sq = 0;
    let sumx1x2 = 0;
    let sumx2sq = 0;
    let sumy = 0;
    let sumx1y = 0;
    let sumx2y = 0;
    let n = x1.length;
    for (let i = 0; i < n; i++) {
        sumx1 += x1[i];
        sumx2 += x2[i];
        sumx1sq += x1[i] * x1[i];
        sumx1x2 += x1[i] * x2[i];
        sumx2sq += x2[i] * x2[i];
        sumy += y[i];
        sumx1y += x1[i] * y[i];
        sumx2y += x2[i] * y[i];
    }
    let pol = [];
    let a = [[n, sumx1, sumx2], [sumx1, sumx1sq, sumx1x2], [sumx2, sumx1x2, sumx2sq]];
    let c = [sumy, sumx1y, sumx2y];
    // console.log(a);
    // console.log(c);
    pol = gauss(a, c);
    return (pol);
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
    return (x);
}
var T = [278.15, 283.15, 293.15, 303.15, 313.15, 323.15];
// var T = [278.15,
//     283.15,
//     293.15,
//     303.15,
//     313.15,
//     323.15]
var X = [0.128,
    0.139,
    0.166,
    0.196,
    0.234,
    0.276];
var X1 = [];
var X2 = [];
var Y = [];
for (let i = 0; i < T.length; i++) {
    X1.push(1 / T[i]);
    X2.push(Math.log(T[i]));
    Y.push(Math.log(X[i]));
}
console.log(regression_linear_2variable(X1, X2, Y));
// x1 = 1/T
// x2 = ln(P)/T
//y = ln(P)
//
function show_panel(id) {
    try {
        var bsOffcanvas = new bootstrap.Offcanvas(document.getElementById(`offcanvasRight${id}`));
        bsOffcanvas.show();
    }
    catch (error) {
        console.log(error);
    }
}
function hide_panel(id) {
    if (document.getElementById(`hide_panel${id}`)) {
        document.getElementById(`hide_panel${id}`).click();
    }
}
function generateRandomIntegers(n, min, max) {
    if (n <= 0 || min >= max) {
        return [];
    }
    const range = max - min + 1;
    if (n > range) {
        throw new Error("Cannot generate unique integers within the given range");
    }
    const result = [];
    while (result.length < n) {
        const randomNumber = Math.round(Math.random() * range) + min;
        if (result.indexOf(randomNumber) === -1) {
            result.push(randomNumber);
        }
    }
    return result.sort((a, b) => a - b);
}
function merge_arrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
}
function n_random_array(n, min, max) {
    if (n <= 0 || min >= max) {
        return [];
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.round(Math.random() * (max - min + 1)) + min;
        result.push(randomNumber);
    }
    return result;
}
function generate_random_values(step, first_min, first_max, second_min, second_max, third_max) {
    let random_data = [];
    for (let i = 0; i * step <= 100; i++) {
        random_data.push(0);
    }
    let arr2 = generateRandomIntegers(300 / step, first_min, first_max);
    random_data = merge_arrays(random_data, arr2);
    let arr3 = n_random_array(300 / step, second_min, second_max);
    random_data = merge_arrays(random_data, arr3);
    let arr4 = generateRandomIntegers(300 / step, second_max + 300, third_max);
    random_data = merge_arrays(random_data, arr4);
    return random_data;
}
function fix_for_interval_sixty(arr) {
    for (let i = 0; i < arr.length; i++) {
        let res = 0;
        if (arr[i] != 0) {
            res += Math.round(Math.random() * (5)) + arr[i];
        }
        arr[i] = res;
    }
    return arr;
}
function fix_for_interval_hundred(arr) {
    for (let i = 0; i < arr.length; i++) {
        let res = 0;
        if (arr[i] != 0) {
            res += Math.round(Math.random() * (5)) + arr[i] + 5;
        }
        arr[i] = res;
    }
    return arr;
}
//# sourceMappingURL=common.js.map