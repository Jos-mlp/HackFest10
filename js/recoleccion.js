function getLocation() {
    var locationSelect = document.getElementById("locationSelect");
    var selectedLocation = locationSelect.value;
  
    // Lógica para determinar los días de recolección según la ubicación y el día
    var garbageDay;
    var recyclingDay;

    if (selectedLocation === "zona1") {
        garbageDay = "Martes";
        recyclingDay = "No existe ruta";
    } else if (selectedLocation === "zona2") {
        garbageDay = "";
        recyclingDay = "No existe ruta";
    } else if (selectedLocation === "zona3") {
        garbageDay = "Martes, Jueves";
        recyclingDay = "No existe ruta";
    }else if (selectedLocation === "zona4") {
        garbageDay = "";
        recyclingDay = "Lunes";
    }else if (selectedLocation === "zona5") {
        garbageDay = "Miercoles";
        recyclingDay = "Lunes";
    }else if (selectedLocation === "zona6") {
        garbageDay = "";
        recyclingDay = "No existe ruta";
    }else if (selectedLocation === "zona7") {
        garbageDay = "";
        recyclingDay = "Miercoles";
    }else if (selectedLocation === "zona8") {
        garbageDay = "Lunes";
        recyclingDay = "Martes";
    }else if (selectedLocation === "zona9") {
        garbageDay = "Lunes";
        recyclingDay = "Martes";
    }else if (selectedLocation === "zona10") {
        garbageDay = "Lunes";
        recyclingDay = "Jueves";
    }else if (selectedLocation === "zona11") {
        garbageDay = "Miercoles";
        recyclingDay = "Viernes";
    }else if (selectedLocation === "zona12") {
        garbageDay = "Miercoles";
        recyclingDay = "No existe ruta";
    }

    var outputBasura = document.getElementById("outputBasura");
    outputBasura.innerHTML = "<p>Día de recolección basura organica: " + "</p><br><p>" + recyclingDay +"</p>";
    var outputReciclaje = document.getElementById("outputReciclaje");
    outputReciclaje.innerHTML = "Día de recolección basura inorganica: " + "</p><br><p>" + garbageDay +"</p>";
}
