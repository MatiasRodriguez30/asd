$(document).ready(function () {
    // Al cargar la página, ocultamos las cortinas
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').click(function () {
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            // Ocultar elementos dentro de .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Hacer visible la carta con una animación ondulante
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            }); // Animación de ondulación
        });
    });
}); 

$(document).ready(function () {
    $('.valentines-day').click(function () {
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            // Ocultar elementos dentro de .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Hacer visible la carta con una animación ondulante
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            });

            // Crear lluvia de emojis
            createEmojiRain();
        });
    });

    function createEmojiRain() {
        const emojis = ['🐇', '🐹'];
        const container = $('#emoji-rain');
        container.removeClass('hidden');

        for (let i = 0; i < 50; i++) {
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            const span = $('<span class="emoji">' + emoji + '</span>');

            const x = Math.random() * 100; // Posición aleatoria en el eje X
            const duration = 3 + Math.random() * 3; // Duración aleatoria para la animación
            const size = 1 + Math.random() * 2; // Tamaño aleatorio

            span.css({
                left: x + '%',
                animationDuration: duration + 's',
                fontSize: size + 'rem'
            });

            container.append(span);
        }
    }
});
<script>
function toggleMusic() {
    var audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
</script>
