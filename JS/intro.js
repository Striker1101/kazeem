//Type of object creation
//class 
//functional 

// literal object
// this is a literal object used to save multiple data type 
const car = { 
    color:"Red",
    drive: ()=>{console.log('car in motion')}
}


const age = 5
const secons_age = Number(5)

const name  = "sarah"
const second_name = String("sarah")


//how to create object 

// class method
class Car {
    //initialise propertise
    constructor(color, name) {
        this.color = color  
        this.name = name      
    }
    drive(){
        console.log(`${this.name} is in motion` )
    }
}

// functional method
function CarFunction(name, color){
  const drive = function(){
    console.log(`${name} is in motion`)
  }
  return {name, color, drive}
}

const newCarOne = new Car("black", "jaguar")

console.group(newCarOne, second_name, secons_age)