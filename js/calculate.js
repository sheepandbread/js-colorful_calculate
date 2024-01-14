//数据
let calcSymbol;
let result;

// 方法
// 点击数字按钮
function addNumber(num) {
    let currentNumber = document.getElementById('total').innerHTML;
    // 判断当前数字是否为0且不含小数点
    if(currentNumber == 0 && currentNumber.indexOf('.')==-1){
        document.getElementById('total').innerHTML = num;
    }else{
        document.getElementById('total').innerHTML += num;
    }
}
// 点击符号按钮
function calcAction(symbol) {
    let currentNumber = document.getElementById('total').innerHTML;
    if (currentNumber[currentNumber.length - 1] == '.') {
        currentNumber = currentNumber.substring(0, -1);
        console.log(currentNumber)
    }
    if (currentNumber != '') {
        //有输入数值时才可继续计算
        if (result) {
            calculate(Number(currentNumber))
        } else {
            //输入的第一个数存入result中
            result = Number(currentNumber)
            console.log('result=', result)
            calcSymbol = symbol;
        }
        calcSymbol = symbol;
        //页面回显
        document.getElementById('total').innerHTML = '';
        document.getElementById('display_process').innerHTML += currentNumber + symbol;
    }
}
// 点击等于符号，显示计算结果
function calcResult() {
    if (result) {
        //计算
        let currentNumber = document.getElementById('total').innerHTML;
        calculate(Number(currentNumber));
        document.getElementById('total').innerHTML = result;
    }

    //清空
    document.getElementById('display_process').innerHTML = '';
    result = 0;
}
// 变更数字正负
function changeSign() {
    let currentNumber = document.getElementById('total').innerHTML;
    if (currentNumber[0] == '-') {
        currentNumber = currentNumber.substring(1);
    } else {
        currentNumber = '-' + currentNumber;
    }
    document.getElementById('total').innerHTML = currentNumber;
}
//清空
function calcClear() {
    document.getElementById('total').innerHTML = '';
    document.getElementById('display_process').innerHTML = '';
    calcSymbol = ''
    result = null;
}
// 小数点
function addDot() {
    let currentNumber = document.getElementById('total').innerHTML;
    // 若当前数字有值，且不存在小数点，才可添加
    if (currentNumber && currentNumber.indexOf('.') == -1) {
        currentNumber += '.'
    }
    document.getElementById('total').innerHTML = currentNumber;
}
// 运算
function calculate(num) {
    switch (calcSymbol) {
        case '+':
            result += num
            console.log('+', num)
            break;
        case '-':
            result -= num
            console.log('-', num)
            break;
        case '×':
            result *= num
            console.log('*', num)
            break;
        case '/':
            result /= num
            console.log('/', num)
            break;
        case '%':
            result %= num
            console.log('%', num)
            break;
        default:
            break;
    }
}
