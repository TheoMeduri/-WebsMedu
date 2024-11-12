/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

firebase.auth().onAuthStateChanged(user => {
    if (user){
        const logoutLi = document.getElementById('logout')
        const loginLi = document.getElementById('login');
        const loginTrue = document.getElementById('loginTrue');

        loginLi.style.display = 'none';

        logoutLi.style.display = 'block';
        loginTrue.style.display = 'block';
    } else {
        const logoutLi = document.getElementById('logout');
        const loginLi = document.getElementById('login');
        const loginTrue = document.getElementById('loginTrue');

        loginLi.style.display = 'block';

        logoutLi.style.display = 'none';
        loginTrue.style.display = 'none';
    }
});

function logout(){
    firebase.auth().signOut().then(() =>{
        window.location.href = '../../';
    }).catch(() => {
        alert('Erro ao fazer Logout.')
    })
};
