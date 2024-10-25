$(document).ready(function() {
    $('a.nav-link').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        const statusElement = $('#status');

        if (name && email && message) {
            // Simulação de envio com mensagem de sucesso
            statusElement.html('Enviando sua mensagem...').css('color', 'blue');
            
            setTimeout(() => {
                statusElement.html('Mensagem enviada com sucesso!').css('color', 'green');
                $('#contact-form')[0].reset(); // Limpar o formulário após envio
            }, 2000);


        } else {
            statusElement.html('Por favor, preencha todos os campos!').css('color', 'red');
        }
    });

    $('.card').hover(
        function() {
            $(this).addClass('animate__pulse');
        }, function() {
            $(this).removeClass('animate__pulse');
        }
    );
});