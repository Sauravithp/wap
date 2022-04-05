const user = {
    salute: "",
    greet: function() {
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = function(newSalute) { //inner function
            this.salute = newSalute; };
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour??
    }
};
user.greet(); //Hello  Hello  ??