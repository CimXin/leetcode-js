
function quickSort(arr: number[]) {
    return sort(arr, 0, arr.length - 1);
}

function sort(arr: number[], left: number, right: number) {
    if (left >= right) {
        return;
    }
    let pivot = arr[left];
    let i = left;
    let j = right;
    while (i < j) {
        if (i < j && arr[i] < pivot) {
            i++;
        }
        if (i < j && arr[j] > pivot) {
            j--;
        }

        if (arr[i] == arr[j] && i < j) {
            i++;
        } else {
            swap(arr, i, j);
        }
    }
    if()
}