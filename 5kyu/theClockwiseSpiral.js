// Do you know how to make a spiral ? Let's test it!
// Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

// Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two - dimensional array with numbers 1 through NxN represented as a clockwise spiral.

// Return an empty array if N < 1 or N is not int / number

function createSpiral(N) {
    let arr = new Array();
    if (N <= 0 || !Number.isInteger(N)) {
        return [];
    }
    for (let i = 0; i < N; i++) {
        let temp = new Array(N).fill(0);
        arr.push(temp);
    }

    let x = 0,
        num = 1;

    while (0 < N) {
        if (N === 1) {
            arr[x][x] = num;
        } else {
            for (let i = 0; i < N - 1; i++) {
                arr[x][x + i] = num + i;
                arr[x + i][x + N - 1] = (N - 1) + num + i;
                arr[x + N - 1][x + N - 1 - i] = 2 * (N - 1) + num + i;
                arr[x + N - 1 - i][x] = 3 * (N - 1) + num + i;
            }
            num = arr[x + 1][x] + 1;
        }
        N -= 2;
        x++;
    }

    return arr;
}

console.log(createSpiral(1), [[1]]);
console.log(createSpiral(), []);
console.log(createSpiral(3), [[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
console.log(createSpiral(4), [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]);
console.log(createSpiral(5), [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]);