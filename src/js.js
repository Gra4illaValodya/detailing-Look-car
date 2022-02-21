

class Man {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}
class Man1 extends Man{
    constructor(name,age,sex) {
        super(name,age);
        this._sex = sex;
    }
    get sex(){
        return this._sex
    }
    set sex(q){
        this._sex = q
    }
}

let person = new Man1("Vova",25,"male")
console.log(person.sex)
person.sex = "Famale"
console.log(person.sex)
console.log(person)

// class Container {
//     constructor(h1,p) {
//         this.h1 = h1
//         this.p = p
//
//     }
//     render(id){
//         let out = ''
//         out += `<h1>${this.h1}</h1>`;
//         out += `<p>${this.p} </p>`;
//         document.getElementById(id).innerHTML = out
//
//     }
// }
// let div = new Container("Header 1 level"," Paragraph -<br><br>blaalbalblabldlflafewlfweflewlafwaefll")
// div.render('header')



// class Man {
//     constructor(height, weight, age, sex, name, passport, eye) {
//         this.height = height ;
//         this.weight = weight ;
//         this.age = age ;
//         this.sex = sex ;
//         this.name = name ;
//         this.passport = passport ;
//         this.eye = eye ;
//     }
//     render(x){
//         let out = '';
//         out += ``
//     }
// }
//
// let person = new Man(176,86,26,"Male","Vova","CD546332","green")
//
//
// console.log(person)

// class Header  {
//     constructor(img ,h1,h2) {
//         this.src = img ;
//         this.h1 = h1;
//         this.h2 = h2;
//
//     }
//     render(x){
//        let out = '';
//        out += `<img src="${this.src}">`;
//        out += `<h1>${this.h1}</h1>`;
//        out += `<h2>${this.h2}</h2>`;
//        document.getElementById(x).innerHTML = out;
//     }
// }
// const img = 'data:image/jpeg;base64,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' ;
//
// let header = new  Header(img,"Fuck this", 'World');
// console.log(header)
// header.render('header')