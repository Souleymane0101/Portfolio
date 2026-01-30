// Script principal du portfolio de Souleymane Tall

document.addEventListener('DOMContentLoaded', function () {
    // Inclusion dynamique du header et du footer sur toutes les pages
    function includeHTML(id, file) {
        var el = document.getElementById(id);
        if (el) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    el.innerHTML = data;
                    // Exécuter les scripts inclus (si jamais il y en a dans le header/footer)
                    var scripts = el.querySelectorAll('script');
                    scripts.forEach(function(script) {
                        var newScript = document.createElement('script');
                        if (script.src) {
                            newScript.src = script.src;
                        } else {
                            newScript.textContent = script.textContent;
                        }
                        document.body.appendChild(newScript);
                        script.remove();
                    });
                });
        }
    }
    includeHTML('header-include', 'header.html');
    includeHTML('footer-include', 'footer.html');

    // Gestion du formulaire de contact
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Message envoyé !');
            contactForm.reset();
        });
    }
});
