import { BrowserRouter as Router} from 'react-router-dom';
import NavbarComponent from './Containers/navbar';
import Main from './Containers/main';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { configureStore } from './Store';

function App() {
  const store = configureStore()
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
