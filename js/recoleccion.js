function getLocation() {
    var locationSelect = document.getElementById("locationSelect");
    var selectedLocation = locationSelect.value;
  
    // Lógica para determinar los días de recolección según la ubicación y el día
    var diaBasura;
    var diaOrganica;

    if (selectedLocation === "zona1") {
        diaBasura = "Martes";
        diaOrganica = "No existe ruta";
    } else if (selectedLocation === "zona2") {
        diaBasura = "Miercoles";
        diaOrganica = "No existe ruta";
    } else if (selectedLocation === "zona3") {
        diaBasura = "Martes, Jueves";
        diaOrganica = "No existe ruta";
    }else if (selectedLocation === "zona4") {
        diaBasura = "Martes";
        diaOrganica = "Lunes";
    }else if (selectedLocation === "zona5") {
        diaBasura = "Miercoles";
        diaOrganica = "Lunes";
    }else if (selectedLocation === "zona6") {
        diaBasura = "Jueves";
        diaOrganica = "No existe ruta";
    }else if (selectedLocation === "zona7") {
        diaBasura = "Jueves";
        diaOrganica = "Miercoles";
    }else if (selectedLocation === "zona8") {
        diaBasura = "Lunes";
        diaOrganica = "Martes";
    }else if (selectedLocation === "zona9") {
        diaBasura = "Lunes";
        diaOrganica = "Martes";
    }else if (selectedLocation === "zona10") {
        diaBasura = "Viernes";
        diaOrganica = "Jueves";
    }else if (selectedLocation === "zona11") {
        diaBasura = "Miercoles";
        diaOrganica = "Viernes";
    }else if (selectedLocation === "zona12") {
        diaBasura = "Miercoles";
        diaOrganica = "No existe ruta";
    }

    var outputBasura = document.getElementById("outputBasura");
    outputBasura.innerHTML = "<p>Día de recolección basura organica: " + "</p><br><p>" + diaOrganica +"</p>";
    var outputReciclaje = document.getElementById("outputReciclaje");
    outputReciclaje.innerHTML = "Día de recolección basura inorganica: " + "</p><br><p>" + diaBasura +"</p>";
}
