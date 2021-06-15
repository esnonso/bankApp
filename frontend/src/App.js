import { BrowserRouter as Router} from 'react-router-dom';
import NavbarComponent from './Containers/navbar';
import Main from './Containers/main';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { configureStore } from './Store';
import { setAuthorizationToken, setCurrentUser } from "./Store/Actions/auth";
import jwtDecode from 'jwt-decode';

function App() {
  const store = configureStore();
  if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken)
    //prevent someone from manually tampering with the key in local storage
    try{
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    }catch(e){
      store.dispatch(setCurrentUser({}));
    } 
  }
  return (
    <Provider store={store}>
    <Router>
        <div className="Container">
              <NavbarComponent />
              <Main />
              <Footer />
        </div>
    </Router>
    </Provider>
    
  );
}

export default App;
