var randomArraySizeRange = [5, 15] // [min, max]
var randomArrayIntRange = [-25, 25] // [min, max]
var sourceArray;

function fillArray() {
    var inputString = document.getElementById('arrayInput').value;
    var inputArray = inputString.match(/-?\d+(?:\.\d+)?/g);

    if (inputArray != null) {
        sourceArray = getConverArray(inputArray);
        printArray(sourceArray + "    ", 'sourceArray');
    }
}
function randomFill() {
    var string = '';
    var arraySize = randomInteger(randomArraySizeRange[0], randomArraySizeRange[1]);

    for (var i = 0; i < arraySize; i++) {
        string += randomInteger(randomArrayIntRange[0], randomArrayIntRange[1]) + ' ';
    }

    document.getElementById('arrayInput').value = string;
    fillArray();
}

function sortArray() {
    if (sourceArray != null) {
        printArray(quickSort(sourceArray) + "    ", 'currentArray');
    }
}
