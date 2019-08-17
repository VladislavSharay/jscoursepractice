//TASK1
let myArray = [1, 2, 3, 4, 5, 6, 7];
let [elem1, elem2, elem3, ...arr] = myArray;
console.log('TASK 1')
console.log('elem1= ' + elem1)
console.log('elem2= ' + elem2)
console.log('elem3= ' + elem3)
console.log('arr= ' + arr)

//TASK2
let myObject = {
    name: 'Петр',
    'surname': 'Петров',
    // 'age': '20 лет'
}
let {
    name = 'Аноном', surname = 'анонимович', age = '? лет'
} = myObject;
console.log('TASK 2')
console.log('name= ' + name);
console.log('surname= ' + surname);
console.log('age= ' + age);

//TASK3
myArr = [1, 2, 3];
myArr.reverse();
console.log('TASK 3 ( myArr=[1, 2, 3])');
for (let value of myArr) {
    console.log(value);
}

//TASK4
var myStr = 'Дана строка. С помощью for...of подсчитайте количество букв "о" в ней.';
let counter = 0;
for (let letter of myStr) {
    if (letter == 'о') {
        counter++;
    }
}
console.log('TASK 4');
console.log('Количество o:' + counter);

//TASK5
function myFunc(name = 'Аноним') {
    console.log('Привет ' + name);
}
console.log('TASK 5');
myFunc();
myFunc('Имя');

//TASK6
let inputs = document.querySelectorAll('input');
let map = new Map;

for (let input of inputs) {
    input.setAttribute('lustKeyPress', '0');
    map.set(input, {
        values: [],
        key: -1
    });

    input.addEventListener('blur', function () {
        let {
            values,
            key
        } = map.get(this);
        input.setAttribute('lustKeyPress', '0');

        if (key < this.valueAsNumber.length - 1) {
            values.splice(key, values.length - key);
            key--;
        }

        map.set(this, {
            values,
            key: key + 1
        });
        values.push(this.value);
        this.value = '';
        console.log(map.get(this));
    });

    //TASK6 
    input.addEventListener('keydown', function (event) {
            if (event.key == 'ArrowLeft') {
                event.preventDefault();
                let {
                    values,
                    key
                } = map.get(this);

                if (key > 0) {
                    if (input.getAttribute('lustKeyPress') === '0') {
                        this.value = values[key];
                    } else {
                        key--;
                        map.set(this, {
                            values,
                            key: key
                        });
                        this.value = values[key];
                    }
                    input.setAttribute('lustKeyPress', 'ArrowLeft');
                } else if (key === 0) {
                    this.value = values[key];
                    input.setAttribute('lustKeyPress', 'ArrowLeft');
                }
            }
            if (event.key == 'ArrowRight') {
                    event.preventDefault();
                    let {
                        values,
                        key
                    } = map.get(this);

                    if (key < values.length - 1) {
                        key++;
                        map.set(this, {
                            values,
                            key: key
                        });
                        this.value = value = values[key];
                        input.setAttribute('lustKeyPress', 'ArrowRight');
                    }
                }
    })
    }