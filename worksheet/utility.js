function add(a,b) {
  return a+b;
}

function compare(arr1, arr2) {
    if (!arr1 || !arr2) return false;
    if (arr1.length != arr2.length) {
        return false;
    }
    for (i = 0; i < arr1.length; i++){
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

function largest(arr) {
    return arr.reduce((p, v) => {
        return (p > v ? p : v);
    });
}

module.exports.add = add;
module.exports.compare = compare;
module.exports.largest = largest;
