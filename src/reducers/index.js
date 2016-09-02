import {combineReducers} from 'redux';
import user from './userReducer';
import routesPermissions from './routesPermissionsReducer';
import auth from './authReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import  userProfile from "./userProfileReducer";
import usersList from "./usersListReducer";
import clinicProfile from "./clinicProfileReducer";
import clinicsList from "./clinicsListReducer";
import agenda from "./agendaReducer";
import patientProfile from "./patientProfileReducer";
import patientList from "./patientListReducer";


const rootReducer = combineReducers({
  patientProfile,
  patientList,
  agenda,
  clinicProfile,
  clinicsList,
  usersList : usersList,
  userProfile : userProfile,
  routing: routerReducer,
  routesPermissions,
  form: formReducer,
  user,
  auth,
  ajaxCallsInProgress
});

export default rootReducer;
