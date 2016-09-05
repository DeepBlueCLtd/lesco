import React, {Component} from 'react'
import {Router,IndexRoute,Route} from 'react-router';
import MainLayout from './components/views/mainlayout';
import LoginLayout from './components/views/loginLayout';
const routes = () => {
  return (
    <Route path="/">
      <IndexRoute component={LoginLayout}/>
      <Route path="/analysis" component={MainLayout}>
      </Route>
    </Route>
  );
}
     

export default   class App extends Component{
    render(){
         const { history } = this.props;
 return (
      <Router routes={routes()} history={history} />
    );
    }
} 

