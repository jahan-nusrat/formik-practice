import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/Login/LoginForm";
import BasicTable from "./components/React-Table/BasicTable";
import GlobalFiltering from "./components/React-Table/GlobalFiltering";
import GroupedColTable from "./components/React-Table/GroupedColTable";
import SortingTable from "./components/React-Table/SortingTable";
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
    {
        path: '/table/grouped',
        name: 'Grouped Column Component',
        component: GroupedColTable,
        exact : true
    },
    {
        path: '/table/sorting-table',
        name: 'Sorting Table Component',
        component: SortingTable,
        exact : true
    },
    {
        path: '/table/filter',
        name: 'Global Filtering',
        component: GlobalFiltering,
        exact : true
    },
]

export default routes;