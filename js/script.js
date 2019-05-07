// Вставка
function  insert(num) {
    document.form.textView.value = document.form.textView.value + num;
}
// Операции
//Сумма
function equal() {
    let exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
}
//Очистка
function clean() {
    document.form.textView.value = '';
}

function back() {
    let exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length - 1);
}

