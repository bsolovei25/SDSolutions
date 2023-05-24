function arrToStr(arrList) {
    // parser form arrToString format so it can be implied to values-box
    let singleItem = [];
    for (let i =0;i < arrList.length;i++) {
        singleItem.push(arrList[i][0]+'='+arrList[i][1]+'<br/>');
    }

    return singleItem;

}