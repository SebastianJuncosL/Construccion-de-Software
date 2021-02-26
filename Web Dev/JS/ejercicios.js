// 1----------------------------

function unique(string) {
    var current;
    var indicator = false;
    for (let i = 0; i < string.length - 1; i++) {
        current = string[i];
        for (let j = i + 1; j < string.length; j++) {
            var curr = string[j];
            if (curr == current) {
                indicator = false;
                break;
            }
            else
                indicator = true;
        }
        if (indicator == true)
            break;
    }
    console.log(current);
}

// unique('abacddbec');

// 2----------------------------

function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// var arr = [1, 4, 6, 2, 15];
// arr = bubble_sort(arr);
// console.log(arr);

// 3----------------------------

function merge_sort(array) {
    return merge_aux(array, 0, array.length - 1);
}

function merge_aux(array, low, high) {
    let arr = [];
    if (low >= high) {
        return arr;
    }
    const mid = Math.floor((low + high) / 2);
    merge_aux(array, low, mid);
    merge_aux(array, mid + 1, high);
    arr = merge(array, low, mid, high);
    return arr;
}

function merge(array, low, mid, high) {
    const sizeA = mid - low + 1;
    const sizeB = high - mid;
    let copyA = [];
    let copyB = [];

    for (let i = 0; i < sizeA; i++) {
        copyA.push(array[low + i]);
    }

    for (let i = 0; i < sizeB; i++) {
        copyB.push(array[mid + i + 1]);
    }

    let indexA = 0;
    let indexB = 0;
    let indexArray = low;
    while (indexA < sizeA && indexB < sizeB) {
        if (copyA[indexA] < copyB[indexB]) {
            array[indexArray] = copyA[indexA];
            indexA++;
        }
        else {
            array[indexArray] = copyB[indexB];
            indexB++;
        }
        indexArray++;
    }
    while (indexA < sizeA) {
        array[indexArray] = copyA[indexA];
        indexA++;
        indexArray++;
    }
    while (indexB < sizeB) {
        array[indexArray] = copyB[indexB];
        indexB++;
        indexArray++;
    }
    return array;
}

// var arr = [1, 4, 6, 2, 15];
// arr = merge_sort(arr);
// console.log(arr);

// 4----------------------------

function invert_copy(array) {
    let arr = []
    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }
    return arr;
}

function invert_original(array) {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        array.unshift(array[(i * 2) - 1]);
    }
    length = array.length;
    for (let i = 0; i < (length / 2) - 1; i++) {
        array.pop();
    }
}

// var arr = [1, 4, 6, 2, 15];
// invert_original(arr);
// console.log(arr);

// 5----------------------------


// 8----------------------------

function cool_string(string) {
    let str = "";
    let dic = { a: "4", s: "5", r: "1", e: "3", i: "1", o: "0" };
    for (let i = 0; i < string.length; i++) {
        if (string[i] in dic) {
            str += dic[string[i]];
        }
        else
            str += string[i]

    }
    console.log(str);
}

// var str = 'javascript es divertido';
// cool_string(str);

// 10----------------------------

function duplicates(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (!arr.includes(array[i]))
            arr.push(array[i]);

    }
    return arr;
}

// let array = [1, 0, 1, 1, 0, 0, 2, 3, 3, 2, 1, 0, 3, 2];
// array = duplicates(array);
// console.log(array);