import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Render it to device
AppRegistry.registerComponent(appName, () => App);
