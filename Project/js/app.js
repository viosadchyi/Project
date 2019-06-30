var number = prompt('Введите число', undefined);
number 
if (number == 0) {
    console.log ('Null number');
} else if (number > 0) {
    console.log ('Positive number');
} else if (number < 0) {
    console.log ('Negative number');
} else {
    console.log (undefined);
}
if (Number.isInteger(+number) == true) {
    console.log ('Целое число');
} else {
    console.log ('Нецелое число');
}

