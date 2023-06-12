
/* Constantes*/
var tiempo = 30;
var tiempo_preparacion = 3;

/* Variables */
var puntuacion = 0;
var mayor_puntuacion = 0;
var total_basura_generada = 0;
var tiempo_restante = 0;


var sub_tiempo;

$(document).ready(function () {

    redimencionando();
    //changeViewportMeta();

    $('.basurero').droppable({
        accept: '#basura div',
        hoverClass: 'basura_seleccionada',
        drop: basuraCorrecta
    });

});

$(window).resize(function () {
  //  redimencionando();
});

function iniciarPreparacion() {
    $('#mensage_inicio').addClass('esconder');
    $('#mensage_fin').addClass('esconder');
    $('#arriba').removeClass('esconder');
    $('#preparar').removeClass('esconder');
    i = 3;
    $("#preparar").html('<p>Preparate...</p><h1>' + i + '</h1>');
    sub_tiempo = setInterval(function () {
        preparacion()
    }, 1000);

}


function preparacion() {
    i--;

    if (i == 0) {
        $("#preparar").html('<p style="font-size:30px;">Iniciando...</p>');
    }
    else {
        $("#preparar").html('<p>Preparate...</p><h1>' + i + '</h1>');
    }

    if (i < 0) {
        clearInterval(sub_tiempo);
        i = 3;
        iniciarJuego();
        return;
    }


}


function iniciarJuego() {
    puntuacion = 0;
    mostrarPuntuacion();
    
    $('.box').addClass('esconder');
    $('#arriba').removeClass('esconder');
    $('#juego').removeClass('esconder');
    generaBasura();
    iniciarContador();
}


function iniciarContador() {
    i = tiempo;
    $("#tablero_tiempo").html("<p>" + i + "</p>");
    sub_tiempo = setInterval(function () {
        verificaContador()
    }, 1000);
}

function verificaContador() {
    i--;
    $("#tablero_tiempo").html("<p>" + i + "</p>");

    if (i <= 0) {
        terminarContador();
        finJuego();
    }
}

function terminarContador() {
    clearInterval(sub_tiempo);
    i = tiempo;
}


function finJuego() {

    if (mayor_puntuacion < puntuacion) {
        mayor_puntuacion = puntuacion;
        $("#mejor_puntuacion").html("<p>" + mayor_puntuacion + "</p>");
    }

    $('#mensage_fin').removeClass('esconder');
    $('#juego').addClass('esconder');

    puntuacion = 0;
}


function redimencionando() {

}

function changeViewportMeta() {

    if ($(window).width() <= 320) {
        $('meta[name=viewport]').attr('content', 'width='+$(window).width()+', ,user-scalable=no, initial-scale=0.25');
    } else if ($(window).width() <= 480) {
        $('meta[name=viewport]').attr('content', 'width='+$(window).width()+', ,user-scalable=no, initial-scale=0.3');
    } else if ($(window).width() <= 768) {
        $('meta[name=viewport]').attr('content', 'width='+$(window).width()+', ,user-scalable=no, initial-scale=0.35');
    } else if ($(window).width() <= 900) {
        $('meta[name=viewport]').attr('content', 'width='+$(window).width()+', ,user-scalable=no, initial-scale=0.4');
    }
    else {
        $('meta[name=viewport]').attr('content', 'width=device-width, ,user-scalable=no, initial-scale=1');
    }

     alert($(window).width()+" | " + $(window).height());
}




function generaBasura() {
    total_basura_generada++;
    var id_basura = 'lixo-' + total_basura_generada;
    var tipo_lixo = basuraAleatoria();
    var dados = '<div id="' + id_basura + '" tipo_basura="' + tipo_lixo + '" class="lixo lixo_' + tipo_lixo + '"></div>';
    $('#basura').html(dados);
    posicionAleatoria(id_basura);
    $('#' + id_basura).draggable({
        //containment: 'body',
        cursor: 'move',
        revert: true
    });
}


function posicionAleatoria(id) {
    var max_width = 700;
    var min_height = 75;

    var left = Math.floor(Math.random() * (max_width - 0 + 1)) + 0;
    var top = Math.floor(Math.random() * (min_height - 0 + 1)) + 0;

    $('#' + id).css('left', left);
    $('#' + id).css('top', top);
}


function basuraAleatoria() {
    var valor = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

    var tipo_lixo = [
        "papel",
        "plastico",
        "vidro",
        "metal",
        "organico"];

    return tipo_lixo[valor];
}


function limpiarBasura() {
    $(".lixo").draggable("destroy");
    $('#basura').html("");
}


function basuraCorrecta(event, ui) {

    var tipo_lixo = ui.draggable.attr("tipo_basura");
    var classe_busca = "basurero_" + tipo_lixo;

    // Verifica si la basura es correcta
    if ($(this).hasClass(classe_busca)) {
        sumarPuntuacion();
        limpiarBasura();
        generaBasura();
    }

}


function sumarPuntuacion() {
    puntuacion++;
    $("#tablero_reciclaje").html("<p>" + puntuacion + "</p>");
}

function mostrarPuntuacion() {
    $("#tablero_reciclaje").html("<p>" + puntuacion + "</p>");
}