import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/Login/LoginForm";
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
]

export default routes;