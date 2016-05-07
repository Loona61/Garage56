function Person(firstName, lastName, age , sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
    
    this.able = function(firstName, lastName, age, sex) {
        sexe = (this.sex == 'm') ? 'il':'elle';
        tooOld = (this.age > 40 || this.age < 18 ) ? ' et '+ sexe +' n\'a pas l\'age requis puisqu\''+ sexe +' a ':' malgré un age cohérent puisqu\''+ sexe +' a ';
        unique = (this.age > 1) ? ' Ans. ':' An. ';
        swal('Oups ...', this.firstName + ' ' + this.lastName + ' n\'est pas un bon choix pour cette formation' + tooOld + this.age + unique, 'error');
    };
    
    this.winner = function(firstName, lastName, age, sex) {
        unique = (this.age > 1) ? ' Ans. ':' An. ';
        swal('Bien joué !', this.firstName + ' ' + this.lastName + ' est le choix parfait pour cette formation, et je suis sur que vous n\'avez pas hesité une seconde, en plus il a l\'age parfait: ' + this.age + unique, 'success');
        document.getElementsByClassName("choice")[0].innerHTML = this.firstName + ' a été choisi. Appelez le vite pour le prevenir, il n\'attend que ca.';
    };
}

var aurelien = new Person('Aurélien', 'Chevallier', 28, 'm');
var jean = new Person('Jean', 'Meurdesoif', 19, 'm');
var larry = new Person('Larry', 'Bambelle', 112, 'm');
var anne = new Person('Anne', 'Oraque', 1, 'w');