const name = {
    surname:'zhang',
    sayName(){
        console.log(this.surname)
    }
}

const age = {
    age:100
}

/* module.exports = {
    name,
    age
} */

exports.name = name
exports.age = age