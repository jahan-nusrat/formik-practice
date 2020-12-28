import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/Login/LoginForm";
import BasicTable from "./components/React-Table/BasicTable";
import RegistrationForm from "./components/Registration/RegistrationForm";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: FormikContainer,
        exact : true
    },
    {
        path: '/login',
        name: 'Login Component',
        component: LoginForm,
        exact : true
    },
    {
        path: '/register',
        name: 'Register Component',
        component: RegistrationForm,
        exact : true
    },
    {
        path: '/table',
        name: 'Table Component',
        component: BasicTable,
        exact : true
    },
]

export default routes;