import React,{Component} from 'react';
import CompOne,{ThemeContex} from './CompOne';

// export class ThemedButton extends React.Component {
//     state={
//         id:11
//     }
//     render() {
//       return <button theme={this.state.theme} />
//     }
//   }



export  class CompTwo extends Component{
    
    state={
        id:2
    }
  render(){
    return(
        <div style={{background:'red',width:"100px",height:"100px"}}>
        {/* <i>Comp2 + state({this.state.id})</i> */}
            <ThemeContext.Provider value={this.state.id}>
    
          </ThemeContext.Provider>
      </div>
    )
  }
}


