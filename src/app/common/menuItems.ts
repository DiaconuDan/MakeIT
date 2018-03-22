export default function menuItems() {
    return [{
        label: 'Login',
        href: '/login',
        shown: localStorage.getItem("isAuth") ? false : true,
        className: 'glyphicon glyphicon-log-in'
    }, {
        label: 'Signup',
        href: '/signup',
        shown: localStorage.getItem("isAuth") ? false : true,
        className: 'glyphicon glyphicon-user' 
    }, {
        label: 'Home',
        href: '/',
        shown: localStorage.getItem("isAuth") ? true : false,
        className: 'glyphicon glyphicon-home'
    }, {
        label: 'Logout',
        href: '/logout',
        shown: localStorage.getItem("isAuth") ? true : false,
        className : 'glyphicon glyphicon-log-out' 
    }];
}