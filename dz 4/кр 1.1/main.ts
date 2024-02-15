/*На случайного количество эл-тов. Кол-во генерировать от 7 до 13
Занести случайные эл-ты, генерируя их в промежутке от -13 до 13 включительно
Отобразить массив с индексами
Отобразить отрицательные числа, которые находятся в диапазоне от 0 до 5 включительно
Просуммировать индексы отрицательных значений эл-тов массива
Расширить массив на 1 эл-т и добавить в него число 1313*/
const randomLength: number = Math.floor(Math.random()*7 + 7);
let array: number[] = [];
for(let i: number = 0; i < randomLength; i++){
    array.push(Math.floor(Math.random()* 27)-13);
}
console.log(array);

let str: string = "Числа от 0 до 5 - ";
for(let i: number = 0; i < randomLength; i++){
    if(array[i] >= 0 && array[i] <=5){
        str += String(array[i]) + " ";
    }
}
console.log(str);

let sumOfIndexes: number = 0;
for(let i: number = 0; i < randomLength; i++){
    if(array[i] < 0){
        sumOfIndexes += i;
    }
}
console.log(sumOfIndexes);

array.push(1313);

/*Создать функцию, которая позволить генерировать дробное число в заданном диапазоне, а также с указанной точностью после запятой*/
function generateRandomFloat(min: number, max: number, numOfDigits: number): void{
    let str: string = String(Math.floor(Math.random()*(max-min) + min)) + ".";
    for(let i: number = 0; i < numOfDigits; i++){
        str += String(Math.floor(Math.random()*9 + 1));
    }
    console.log(str);
}
generateRandomFloat(3,4,3);

/*В качестве третьего параметра принимать true/false, где true будет обозначать отображение массива на экране с индексами, а false — без*/
function displayArray(array: any[], isDisplayed: boolean): void{
    if(isDisplayed){
        console.log(array);
    }
}

/*Создать функцию, которая будет генерировать массив заданной в качесвте параметра длины из тех чисел, которые будут храниться в массиве, переданном ещё одним параметром*/
function createNewArrayFromOLdArray(len: number, oldArray: any[]): void{
    let newArray: any[] = [];
    for(let i: number = 0; i < len; i++){
        let index = Math.floor(Math.random()*oldArray.length);
        newArray.push(oldArray[index]);
    }
    console.log(newArray);
}
createNewArrayFromOLdArray(4, [1,2,9]);