function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function similitud(a, b) {
  let palabrasA = a.split(" ");
  let palabrasB = b.split(" ");
  let coincidencias = palabrasA.filter(p => palabrasB.includes(p));
  return coincidencias.length;
}

function buscar() {
  let input = document.getElementById("pregunta").value;
  let limpio = limpiarTexto(input);

  let mejorResultado = null;
  let mejorPuntaje = 0;

  base.forEach(item => {
    let pregunta = limpiarTexto(item.pregunta);

    let puntaje = similitud(limpio, pregunta);

    if (item.keywords) {
      item.keywords.forEach(k => {
        if (limpio.includes(limpiarTexto(k))) {
          puntaje += 2;
        }
      });
    }

    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejorResultado = item;
    }
  });

  if (mejorResultado && mejorPuntaje > 0) {
    document.getElementById("respuesta").innerHTML =
      `<b>📚 Categoría:</b> ${mejorResultado.categoria}<br><br>
       <b>🧠 Respuesta corta:</b><br>${mejorResultado.respuesta_corta}<br><br>
       <b>📖 Explicación:</b><br>${mejorResultado.respuesta_larga}`;
  } else {
    document.getElementById("respuesta").innerHTML =
      "❌ No encontré respuesta.<br><br>Intenta con: mocion, quorum, caucus, resolucion...";
  }
}

function auto(texto) {
  document.getElementById("pregunta").value = texto;
  buscar();
}
let estado = "normal";

function modoEntrenamiento() {
  estado = "inicio";

  document.getElementById("respuesta").innerHTML =
    "🎓 <b>Modo Entrenamiento Activado</b><br><br>" +
    "La mesa dice: 'Se abre la sesión. ¿Alguna moción?'";
}

function buscar() {
  let input = document.getElementById("pregunta").value.toLowerCase();

  if (estado !== "normal") {
    manejarEntrenamiento(input);
    return;
  }

  // BOT NORMAL (lo que ya tienes)
  let limpio = limpiarTexto(input);

  let mejorResultado = null;
  let mejorPuntaje = 0;

  base.forEach(item => {
    let pregunta = limpiarTexto(item.pregunta);

    let puntaje = similitud(limpio, pregunta);

    if (item.keywords) {
      item.keywords.forEach(k => {
        if (limpio.includes(limpiarTexto(k))) {
          puntaje += 2;
        }
      });
    }

    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejorResultado = item;
    }
  });

  if (mejorResultado && mejorPuntaje > 0) {
    document.getElementById("respuesta").innerHTML =
      `<b>📚 Categoría:</b> ${mejorResultado.categoria}<br><br>
       ${mejorResultado.respuesta_corta}<br><br>
       ${mejorResultado.respuesta_larga}`;
  } else {
    document.getElementById("respuesta").innerHTML =
      "❌ No encontré respuesta.";
  }
}
function manejarEntrenamiento(input) {

  if (estado === "inicio") {

    if (input.includes("mocion")) {
      estado = "caucus";

      document.getElementById("respuesta").innerHTML =
        "✅ Buena moción.<br><br>" +
        "La mesa acepta. Entramos a caucus moderado.<br><br>" +
        "🎤 Tienes 30 segundos. Expón tu idea.";
    } else {
      document.getElementById("respuesta").innerHTML =
        "❌ Debes proponer una moción correctamente.";
    }

  }

  else if (estado === "caucus") {

    estado = "feedback";

    document.getElementById("respuesta").innerHTML =
      "🧠 Evaluación:<br><br>" +
      "✔ Participaste<br>" +
      "✔ Intentaste argumentar<br><br>" +
      "💡 Mejora: sé más claro y directo.<br><br>" +
      "¿Quieres intentar otra vez? escribe 'reiniciar'";
  }

  else if (estado === "feedback") {

    if (input.includes("reiniciar")) {
      modoEntrenamiento();
    } else {
      document.getElementById("respuesta").innerHTML =
        "Escribe 'reiniciar' para practicar otra vez.";
    }

  }
}