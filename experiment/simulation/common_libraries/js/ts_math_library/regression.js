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
function regression_linear_1variable(x, y) {
    let sum_sqx = 0;
    let sumxy = 0;
    for (let i = 0; i < x.length; i++) {
        sum_sqx += Math.pow(x[i], 2);
        sumxy += x[i] * y[i];
    }
    return (sumxy / sum_sqx);
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
//# sourceMappingURL=regression.js.map