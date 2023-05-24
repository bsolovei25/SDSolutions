let globalArray = [];

function onAddButtonClick() {
    let nameValueBox = document.getElementById('input-pairs-box').value;
    if (validateNameValue(nameValueBox)){
        document.getElementById('error-box').style.display='none';
        document.getElementById('values-box').innerHTML = globalArray.join("");
    }
    else {
        document.getElementById('error-box').style.display='block';
    }

}

function validateNameValue(nameValue) {
    let nameArr = [];
    let valueArr = [];
    if(!equelsSymbolsCheck(nameValue)){
        return false;
    }
    for (let i =0;i< nameValue.length;i++){
        if(nameValue[0] === '=' || !(/^[a-zA-Z0-9_=]+$/g.test(nameValue[i]))){
            return false;
        }
        if(nameValue[i] === '=') {
            break;
        }
        if(nameValue[i] !== '=') {
            nameArr.push(nameValue[i])
        }
    }
    nameArr.push('=');
    for (let i =nameValue.length-1;i>= 0;i--){
        if(!(/^[a-zA-Z0-9_=]+$/g.test(nameValue[i]))){
            return false;
        }
        if(nameValue[i] === '=') {
            if (!nameValue[i+1]){
                return false;
            }
            else {
                break;
            }
        }
        if(nameValue[i] !== '=') {
            valueArr.push(nameValue[i])
        }
    }
    valueArr = valueArr.reverse();
    valueArr.push('<br/>')
    valueArr = valueArr.join('');
    nameArr = nameArr.join('');
    globalArray.push(nameArr.concat(valueArr));
    return true;

}

function equelsSymbolsCheck(nameValue) {
    let count = (nameValue.match(/=/g) || []).length;
    if (count !== 1){
        return false;
    }
    return true;

}

function deleteInfo() {
    document.getElementById('values-box').innerHTML = '';
    globalArray = [];
}