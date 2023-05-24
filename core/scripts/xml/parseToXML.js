function parseToXML(listBox) {
    let listArr = strToArr(listBox);
    let xmlArr = [];
    xmlArr.push('&lt;' + 'root'+'&gt;'+'<br/>');
    for (let i =0;i < listArr.length;i++) {
        xmlArr.push('&lt;' + 'name'+'&gt;'+listArr[i][0]+'&lt;'+'name'+'&#47;'+'&gt;'+'&lt;' + 'value'+'&gt;'+listArr[i][1]+'&lt;'+'value'+'&#47;'+'&gt;'+'<br/>');
    }
    xmlArr.push('&lt;' + 'root'+'&#47;'+'&gt;');
    document.getElementById('error-box').style.display='none';
    document.getElementById('values-box').innerHTML = xmlArr.join("");
}