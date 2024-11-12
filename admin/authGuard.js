// Verifica o estado de autenticação do usuário
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // Verifica se o uid do usuário corresponde ao valor esperado
        if (user.uid === 'LXhmmiDkIhUB9LKDykJCOAm8VE72') {
            // O usuário tem o uid esperado, então continua na página atual
        } else {
            // O usuário não tem o uid esperado, redireciona para a página home
            window.location.href = '../';
        }
    } else {
        // Usuário não está autenticado, redireciona para a página de login ou home
        window.location.href = '../';
    }
});