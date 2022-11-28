var numero = document.getElementById('res').value;
var cont = 0;
var func = 0;
var oper = '';
var reset = 0;
var n1 = 0.0, n2 = 0.0, res = 0.0;
function funcevent(f) {
    console.log('Função pressionada');

    if (func == 0 && cont != 0) {
        func++;
        oper = f;
        add(f);
    } else {
        alert('[ERROR]Não foi possível adicionar uma função!')
    }

}

function numevent(num) {
    console.log('Número pressionado');
    if (reset == 1) {
        clean();
        reset = 0;
    }
    if (numero.length < 13) {
        add(num);
        cont++;
    } else {
        alert("[ERROR]Não foi possível adicionar um número")
    }

    if (func == 0) {
        n1 = n1 + num;
    } else {
        n2 = n2 + num;
    }

}

function add(n) {

    if (cont == 0) {
        document.getElementById('res').value = n;
    } else {
        document.getElementById('res').value += n;
    }
    cont++;
}

function clean() {
    document.getElementById('res').value = 0;
    cont = 0;
    func = 0;
    n1 = 0;
    n2 = 0;

}

function calcular() {
    var num1 = Number(n1);
    var num2 = Number(n2);
    res = 0.0;
    if (oper == '+') {
        res = num1 + num2;
    } else if (oper == '-') {
        res = num1 - num2;
    } else if (oper == '*') {
        res = num1 * num2;
    } else if (oper == '/') {
        res = num1 / num2;
    } else {
        alert('[ERROR]Não foi possível realizar a operação!');;
    }
    reset = 1;
    clean();
    add(res);
}

function decimal(d) {
    if (func == 0) {
        n1 = n1 + d;
    } else {
        n2 = n2 + d;
    }
    add(d);
}

function apaga() {
    var res = document.getElementById('res').value;
    document.getElementById('res').value = res.substring(0, res.length - 1);

    if (func == 0) {
        n1 = n1.slice(0, -1);
    } else {
        n2 = n2.slice(0, -1);
    }
}

document.addEventListener("keypress", function (e) {
    /*if (e.key === '7') {
        var btn = document.getElementById('sete');
        btn.click();
    }*/
    switch (e.key) {
        case '0':
            var btn = document.getElementById('zero');
            btn.click();
            break;
        case '1':
            var btn = document.getElementById('um');
            btn.click();
            break;
        case '2':
            var btn = document.getElementById('dois');
            btn.click();
            break;
        case '3':
            var btn = document.getElementById('tres');
            btn.click();
            break;
        case '4':
            var btn = document.getElementById('quatro');
            btn.click();
            break;
        case '5':
            var btn = document.getElementById('cinco');
            btn.click();
            break;
        case '6':
            var btn = document.getElementById('seis');
            btn.click();
            break;
        case '7':
            var btn = document.getElementById('sete');
            btn.click();
            break;
        case '8':
            var btn = document.getElementById('oito');
            btn.click();
            break;
        case '9':
            var btn = document.getElementById('nove');
            btn.click();
            break;
        case 'c':
            var btn = document.getElementById('C');
            btn.click();
            break;
        case 'a':
            var btn = document.getElementById('apagar');
            btn.click();
            break;
        case 'd':
            var btn = document.getElementById('div');
            btn.click();
            break;
        case 'x':
            var btn = document.getElementById('mult');
            btn.click();
            break;
        case 'u':
            var btn = document.getElementById('sub');
            btn.click();
            break;
        case 's':
            var btn = document.getElementById('soma');
            btn.click();
            break;
        case 'p':
            var btn = document.getElementById('ponto');
            btn.click();
            break;
        case 'Enter':
            var btn = document.getElementById('igual');
            btn.click();
            break;
    }
});