function strToArr(listBox) {
    // parser form string to array format so it can be sorted afterwards
    let parsedArray = [];
    let nameArr = [];
    let valueArr = [];
    let isEqualReached = false;
    for (let i =0; i < listBox.length; i++){
        for (let j = 0; j < listBox[i].length; j++){
            if (listBox[i][j] === '=') {
                isEqualReached = true;
                continue;
            }
            if(listBox[i][j] !== '=' && !isEqualReached) {
                nameArr.push(listBox[i][j]);
            }
            if(isEqualReached) {
                valueArr.push(listBox[i][j]);
            }
            if (listBox[i][j+1] === '<'){
                valueArr = valueArr.join('');
                nameArr = nameArr.join('');
                parsedArray.push([nameArr,valueArr]);
                break;
            }
        }
        isEqualReached = false;
        nameArr = [];
        valueArr = [];
    }

    return parsedArray;

}