function sortByName(listBox){
    let listArr = strToArr(listBox);
    //sort by name logic
    let sortedArr = listArr.sort(function(a, b) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    });
    let sortedByNameArr = arrToStr(sortedArr);
    document.getElementById('error-box').style.display='none';
    document.getElementById('values-box').innerHTML = sortedByNameArr.join("");
}
