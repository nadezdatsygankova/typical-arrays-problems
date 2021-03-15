
exports.min = function min(array) {
    if (array === undefined) {
        return 0;
    }
    else if (array.length != 0) {
        return Math.min.apply(Math, array);
    }
    else {
        return 0;
    }

}

exports.max = function max(array) {
    if (array === undefined) {
        return 0;
    }
    else if (array.length === 0) {
        return 0;
    }
    else {
        return Math.max.apply(Math, array);
    }
}

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0;
    }
    else if (array.length === 0) {
        return 0;
    }
    else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let average = sum / array.length;
        return average;
    }
}
