import{ createStackNavigator } from 'react-navigation';
import Profile from '../../Components/Main/Profile/Profile'; 

const LoggedInNavigator = createStackNavigator({
    Profile: {
      screen: Profile
    }
  });
  
  export default LoggedInNavigator