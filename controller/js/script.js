$(document).ready(function () {

    /*recover the variables*/
    var user = document.getElementsByName('input-user').innerHTML;
    var password = document.getElementsByName('input-password').innerHTML;

    if(user && password) {
        $('.btn-singin').click(function () {
            alert('cliquei');
        });
    }
});   