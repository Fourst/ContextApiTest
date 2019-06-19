import React,{Component} from 'react';



const MyContext = React.createContext();

class MyProvider extends Component{
  state={
    name:"Dima",
    age:32,
    id:0
  }
  render(){
    console.log(this.state.id);
    return(
      <MyContext.Provider value={{
        state: this.state,
        menyaiZnach: ()=> this.setState({
          age: this.state.age + 1
        }),
        getID: (e)=>this.setState({
          id: e.target.attributes.getNamedItem('id').value,
        }),
      }}>
        {
          this.props.children
        }
      </MyContext.Provider>
    )
  }
}

class Person extends Component{
  render(){
    return(
      <div>
        Title Person
        <MyContext.Consumer>
          {
            (context) =>(
              <div>
              <p>My Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <p>ID{ context.state.id}</p>
             
              <button onClick={context.menyaiZnach}>AppPerosn</button>
              </div>
            )
          }
        </MyContext.Consumer>
      </div>
    )
  }
}

const Family = (props)=>(
  <div>
    My family
    <Person/>
  </div>
)


export class App extends Component{
  state = {
    id: 0,
}
  // getID = (e) => {
    
  //   this.setState({
  //     id: e.target.attributes.getNamedItem('id'),
  //   });
  //   console.log( e.target)
  // }

  render(){
    return(
      <MyProvider >
        <div>
          <Family/>
          <MyContext.Consumer>
       
            {
              (context) =>(
                   <button onClick={context.getID} id="666" >AddBtn</button>
              )
            }
          </MyContext.Consumer>
        </div>
      </MyProvider>
    )
  }
}

