import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { StoreCreator, createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './component/App';
import rootReducer from './reducer';

//  this is the consept of currying 
// function logger (obj, next , action )
// logger(obj)(next)(action)

// const logger= function({dispatch,getState}){
//   return function(next){
//     return function (action){
//       // middleware code 
//       console.log("ACTION TYPE=",action.type);
//       next(action)
//     }
//   }
// }

const logger= ({dispatch,getState}) => (next) => (action) => {
  // if(action!=="function"){
  //   console.log("ACTION TYPE=",action.type);

  // }
  // console.log("ACTION TYPE=",action.type);
  next(action)
}

export const storeContex=createContext();

// class Provider extends React.Component{
//   render(){
//     const{store}=this.props;
//     return (
//       <storeContex.Provider value={store}>
//       {this.props.children}
//       </storeContex.Provider>
//     )}
// }

// making the connect function
//const connectedComponent=connect(callback)(App)
// export function connect (callback) {

//   return function (Component){
//     class ConnectedComponent extends React.Component {
//       constructor(props){
//         super(props);
//        this.unsubscribe= this.props.store.subscribe(()=>this.forceUpdate() )
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//            const {store}=this.props
//           const state=store.getState();
//           const dataToBePassAsProps=callback(state)
//         return(
//           <Component {...dataToBePassAsProps}
//           dispatch={store.dispatch}/>
//         )

//         }}
    
//     class ConnectedComponentWrapper extends React.Component{

//       render(){
//         return(
//           <storeContex.Consumer>
//             {(store)=> <ConnectedComponent store={store} />}
//           </storeContex.Consumer>
//         )
//       }
//     }

//     return ConnectedComponentWrapper;
//   }
     
  
// }

const store=createStore(rootReducer,applyMiddleware(logger,thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

