import { Switch, Route, withRouter} from 'react-router-dom';
import Homepage from '../Components/homepage';
import Personal from '../Components/personal';
import Business from '../Components/business';
import AuthForm from '../Components/AuthForm';
import { authUser } from '../Store/Actions/auth';
import { connect } from 'react-redux'; 


const Main = props => {
    const { authUser, currentUser } = props;
    return(
        <Switch>
            <Route exact path ="/" render={props => <Homepage />} />

            <Route exact path ="/personal" render={props => <Personal currentUser={currentUser} />} />

            <Route exact path ="/business" render={props => <Business />} />

            <Route exact path ="/signin" render= {props => {
            return(
                <AuthForm onAuth={authUser}
                     {...props}
                />
            )
        }}/>
        </Switch>
    )
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {authUser})(Main);