function parseToXML(listBox) {
    let listArr = strToArr(listBox);
    let xmlArr = [];
    xmlArr.push('&lt;' + 'root'+'&gt;'+'<br/>');
    for (let i =0;i < listArr.length;i++) {
        xmlArr.push('&lt;' + 'name'+'&gt;'+listArr[i][0]+'&lt;'+'&#47;'+'name'+'&gt;'+'&lt;' + 'value'+'&gt;'+listArr[i][1]+'&lt;'+'&#47;'+'value'+'&gt;'+'<br/>');
    }
    xmlArr.push('&lt;'+'&#47;' + 'root'+'&gt;');
    document.getElementById('error-box').style.display='none';
    document.getElementById('values-box').innerHTML = xmlArr.join("");
}