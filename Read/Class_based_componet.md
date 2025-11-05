Refre About.js ---> UserClass.js

Functional compoenet ---> function that reqturns peice of jsx


calss based compoenet -->which extends react.compoenet and it has render method which return peice of jsx 
this jsx which will be converted into html and renderd into webpage 


How to send props ==>
For functional compoenet we used to do like this 
<UserClass name={Archana}/>

and we recive it like 
const UserClass =({name}) =>{

}

now for class based compoenet 
we need to crate concrtuctor which will recive the props and also we need to use keyword super(props)

The constructor is a special method in JavaScript classes that's called when a component is created. In React, we use it mainly to:

Initialize state

Bind event handlers (if not using arrow functions)

Why do we need super(props)?

In a class that extends another class, you must call super() in the constructor before using this.

In React, your component class extends React.Component, so:

If you're using props inside the constructor (like setting initial state with props), you must call super(props) to make this.props available.

If you don’t need to use props in the constructor, you could technically just call super().

constructor(props) {
  super(props); // so you can use this.props
  this.state = { name: props.name };
}
❌ Incorrect:
constructor(props) {
  this.state = { name: props.name }; // ERROR: 'this' is not defined
}

Do I always need a constructor?

No. If you're:

Not initializing state in the constructor
Using class fields syntax (state = {} outside the constructor)
Using arrow functions for handlers
…then you can skip the constructor entirely.

Example without constructor:
class MyComponent extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}



~~~~~~~~~~~ State 
in functional compoenet to mantian state we use hook , useState 

for class based compoenet when were we create the instance of the class 
state was crated when ever instance of class in created 

ex: if you say rendering fun compoenet , on webpage we are mounting that function , invoking the function 
in same way if we are loading class based compoenet that  means we are careting instance of the class 
whenever the instance of class is created constructer of the class is called , so inside construtor is bast place to carte state variable and recive the props.
we use this.state to create state
so state is big object we can carte any number of state varibale inside this object 

---updating sate compoent 
in functional compoenet we use the useState function set to update the state 
coant [count, setCount]= useStae(0)
setCount helps in updating count value 

updating state varibale in class -->
we cant do like this 
   <button onClick={()=> this.state.count1 = this.state.count1+1}/>
   we cant update state varibale directly like this 

instead this is how we do
     <button onClick={()=> this.setState({count:this.state.count+1})}>Count</button>
when ever cikc on count button count incraeses and compoenet reandes 

if we want to update 2 state compoenet 
do do this 
          <button onClick={()=> this.setState({count:this.state.count+1});
          this.setState({count:this.state.count+1})}>Count</button>

state is single object so setStae function is acting on that object if we need to update 2 variables inside same setSate
     <button onClick={()=> this.setState({count:this.state.count+1}, {count2:this.state.count2+1})}>Count</button>


~~~ Life cycle of react class based compoenet ~~~~

when parent function based compoent call child class based compoent 
parent loads to webpage wnd when it encountors child compoenet call it loads child componet . child class compoent class gets intialised and cunstructor of the class is called and then render method of the calss is called .

when parent class based compoent calls child class absed componenet 
parent loads to webpage and custortuor of parent class is called and then render of parent is called inside render function when it encountors child compoenet call it loads child componet .  child class compoent class gets intialised and cunstructor of the class is called and then render method of the calss is called .

Class based compoenet has another function called ComponetDidMount 
this is called once render function is finished and then componenetdidmount is called .
if there is call based parent compoenet than componenetdidmount is called only after all childern  is finsihed rendering and ComponetDidMount is done for all children 
 parent construtor 
    parent render 
        child custroctor 
            child render 
                child compoentdidMount
        Child Custro

#### What is use of ComponetDidmount #####
to make api call in class based compoenet [useEffect in Functaion based componet , like useeffct is called after the compoent is loaded then we call api call to get data ]
similar in class based compoent api call is called inside ComponetDidmount so will call api call after the compoent is renderd and then fill data to ui . so we dont need to wait untill the data comes back. UI is loaded and then data is filled 

if the parent has 2 child this is how lifecycle of class compoenet will be 
 parent construtor 
    parent render 
        child1 custroctor 
            child1 render 
        Child2 Custroctor 
            Child2 Cunstroctor 
        Child1 ComponetDidMount
         Child2 ComponetDidMount
     Parent ComponetDidMount


we have one more function called CompoentUnmount 
we use this to clear the timer /intervale or some sttate 
componentDidUpdate(){
    this.timer = setInterval(()=>{
        console.log("Timer")
    }, 1000)
} increase timer evry min 
if we dont not clare this the timer will be called everymin and if we navigate to diffrent page and come back second setinterval will start and it will keep incaresing on every page vist 
so to get rid of this kind of state variables we need to use 

componetUnmount(){
    clearInterval(this.timer)
}

//// its same in funcation compoenet useEffect as well 
so to do unMounting in functaion compoenet we need add the retrun funtion 

useEffect(()=>{
    console.log("useeffcet")
    return () =>{
        console.log('ReturnFunction')
    }
}, [])
console.log('render')

oredr its called
--- render 
--- useeffcet
-- ReturnFunction --> this we called only when we moved to diffrent page like unmount 

example with timer 

useEffect(()=>{
    const timer = setInterval(()=>{
        console.log('Timer')
    },1000)
  
    return () =>{
        clearInterval(timer)
        console.log('ReturnFunction')
    }
}, [])
console.log('render')