class User {
    constructor(nom, age) {
      this.nom = nom;
      this.age =age;
    }

    direBonjour(){
        console.log(`Bonjour: ${this.nom}`);
    }
  }

  var elyes = new User("elyes",22);
  var issa = new User("issa",23);
  elyes.direBonjour();
  issa.direBonjour();