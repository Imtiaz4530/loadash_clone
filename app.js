var _ = require('lodash');

//todo => Chunk
let split = _.chunk([1,2,3,4,5], 2)

// TODO => My Implementation
function chunk(arr, size) {
    if (!Array.isArray(arr) || size <= 0) {
        throw new Error("Invalid arguments. Expected an array and a positive number.")
    }
    let result = []
    for (let i = 0; i < arr.length; i += size) {
        const chunkArray = arr.slice(i, i + size)

        result.push(chunkArray)
    }

    return result
}

chunk([1,2,3,4,5], 2)



// todo ==> concat
var other = _.concat(7, 2, [3], [[4]]);

// TODO => My Implementation
function concat(...v) {
    let result = []

    for (let i = 0; i < v.length; i++) {
        let arg = v[i]

        if (Array.isArray(arg)) {
            for (let j = 0; j < arg.length; j++) {
                result.push(arg[j])
            }
        } else {
            result.push(v[i])
        }
    }

    return result
}
concat([1], 2, 3, [2], [[5]])




//TODO => Compact
let c = _.compact([0, 1, false, 2, '', 3, "Munna"]);

// TODO => My Implementation
function compact(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (!arr[j]) {
                arr[j] = arr[j + 1] 
                arr[j + 1] = undefined
            }
        }

        if (typeof arr[i] === "undefined") {
            count++
        }
    }

    arr.length -= count
    return arr
}

compact([0, 1, false, 2, '', 3, "Munna", null, undefined])