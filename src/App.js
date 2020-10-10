import React, { Component } from 'react';
import {connect} from "react-redux"
import {latestNews , othernews} from "./actions/index"
import {bindActionCreators} from "redux";
import Home from "./components/fixcomponent/home "


class App extends Component {


  render() {
    return (
      <div>
       <Home />
      </div>
    )
  }
}




// function mapStateToProps(state){

//   return{
//       articles:state.articles
//   }
// }




// function mapDispatchToProps(dispatch){
// return bindActionCreators({latestNews,othernews},dispatch)
// }


export default App