$(document).ready(function () {
    $('.btn-singin').click(function () {
        /*recover the variables*/
        var getUser = document.getElementById('input-user').value;
        var getPassword = document.getElementById('input-password').value;

        if (getUser && getPassword) {
           $.ajax({
                type: 'POST',
                url: './controller/validation.php',
                data: {
                    passUser: getUser,
                    passPassword: getPassword
                },
                success: function(response){
                    var getResponse = Number(response.trim());

                    if (getResponse === 1){
                        window.location.assign("../view/menu.php");
                    } else{
                        window.location.assign("index.html");
                    }
                }

           })
        } else {
            //alert('Campos vazios');
        }
    });
});   