/** Script responsable index.html page*/
$(document).ready(function () {
    $('.btn-singin').click(function () {
        /** recover the variables*/
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
                dataType: 'json',
                success: function (response) {
                    if (response.status === 1) {
                        sessionStorage.setItem("user", response.user);
                        window.location.assign("./view/menu.html");
                    } else {
                        window.location.assign("index.html");
                    }
                }

            })
        } else {
            //alert('Campos vazios');
        }
    });
});

/** Script responsable menu.html*/
document.addEventListener("DOMContentLoaded", function () {
    /** Recovere the user session */
    const user = sessionStorage.getItem("user");
    if (user) {
        document.getElementById("name_user").textContent = user;
    }

    /** Button open Menu*/
    var openBtn = document.getElementById('open_btn');
    if (openBtn) {
        openBtn.addEventListener('click', function () {
            document.getElementById('sidebar').classList.toggle('open-sidebar');
        });
    }
    
    /** Button logout*/
    var logout = document.getElementById('logout');
    if (logout) {
        logout.addEventListener('click', function () {
            sessionStorage.clear(); 
            window.location.assign("../index.html");
        });
    }

    /** Check the button register is clicked */
    var registerCosts = document.getElementById('register');
    if (registerCosts) {
        registerCosts.addEventListener('click', function () {

            fetch('register_expensive.html')
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const registerContent = doc.querySelector('.register');

                    if (registerContent) {
                        const conteudoDiv = document.querySelector('.conteudo');
                        if (conteudoDiv) {
                            conteudoDiv.innerHTML = registerContent.innerHTML;

                            /** Update the name Url */
                            history.pushState({}, '', '/register_expensive.html');

                            /** Update the name page */
                            document.title = "Registro de Gastos";

                        }
                    }
                });
        });
    }

});