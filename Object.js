let person ={
    id : 4725,
    name : "Saravanan R",
    age : 23,
    address : {
        city : "Salem",
        state : "Tamil Nadu",
        country : "India"
    },
    details : function(){
        return `Id: ${this.id} Name: ${this.name} Age: ${this.age} city: ${this.address.city} state: ${this.address.state} country: ${this.address.country}`;
    } 

}
console.log(person.details());
console.log(`Id: ${person.id} Name: ${person.name} Age: ${person.age} city: ${person.address.city} state: ${person.address.state} country: ${person.address.country}`);