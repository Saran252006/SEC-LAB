
let current=new Date("2024-08-08");
let day=current.getDay();
console.log(current);
console.log(current.toString());
console.log(day);

class Sample{
       constructor(personname){
        this.personname=personname;
        console.log(personname);
       }
}
let result=new Sample("saran")
 

class Bank{
    constructor(initialamount=0){
        this._balance=initialamount;
    }
    get balance(){
        return this._balanced;
    }
    set balance(amount){
        if(amount>0){
            this._balanced+=amount;
            console.log(amount);
        }
    }
}
let b=new Bank(20)
console.log(b);
