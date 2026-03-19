// =============================
// 🔗 URL DE TU BACKEND (RENDER)
// =============================
const URL_BACKEND = "https://mun-ai-server.onrender.com/chat"; // 👈 CAMBIA SI TU LINK ES DIFERENTE

// =============================
// 🚀 FUNCIÓN PRINCIPAL
// =============================
async function enviarMensaje() {
  const input = document.getElementById("pregunta");
  const respuesta = document.getElementById("respuesta");

  let mensaje = input.value.trim();

  if (mensaje === "") {
    respuesta.innerHTML = "⚠️ Escribe una pregunta.";
    return;
  }

  // Mostrar carga
  respuesta.innerHTML = "🤖 Pensando...";

  try {
    const res = await fetch(URL_BACKEND, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: mensaje
      })
    });

    const data = await res.json();

    if (data.reply) {
      respuesta.innerHTML = data.reply;
    } else {
      respuesta.innerHTML = "❌ No se recibió respuesta.";
    }

  } catch (error) {
    respuesta.innerHTML = "❌ Error de conexión con el servidor.";
  }

  input.value = "";
}

// =============================
// ⌨️ ENTER PARA ENVIAR
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("pregunta");

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      enviarMensaje();
    }
  });
});

// =============================
// ⚡ BOTONES RÁPIDOS
// =============================
function auto(texto) {
  document.getElementById("pregunta").value = texto;
  enviarMensaje();
}

// =============================
// 🎓 MODO ENTRENAMIENTO (JUEZ IA)
// =============================
let modoEntrenamientoActivo = false;

function activarEntrenamiento() {
  modoEntrenamientoActivo = true;

  document.getElementById("respuesta").innerHTML =
    "🎓 <b>Modo Entrenamiento Activado</b><br><br>" +
    "La mesa dice:<br><br>" +
    "<i>'Se abre la sesión. ¿Alguna moción en el piso?'</i><br><br>" +
    "👉 Escribe tu respuesta como delegado.";
}

// =============================
// 🧠 INTERCEPTAR MENSAJES
// =============================
async function enviarMensaje() {
  const input = document.getElementById("pregunta");
  const respuesta = document.getElementById("respuesta");

  let mensaje = input.value.trim();

  if (mensaje === "") {
    respuesta.innerHTML = "⚠️ Escribe algo.";
    return;
  }

  respuesta.innerHTML = "🤖 Pensando...";

  try {
    let prompt;

    if (modoEntrenamientoActivo) {
      prompt = `
Eres un juez experto de Modelos de Naciones Unidas en República Dominicana.

Evalúa esta intervención de un delegado en comité.

Debes dar:
1. Qué hizo bien
2. Qué hizo mal
3. Cómo mejorar
4. Ejemplo correcto de respuesta

Respuesta del delegado:
"${mensaje}"
      `;
    } else {
      prompt = mensaje;
    }

    const res = await fetch(URL_BACKEND, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: prompt
      })
    });

    const data = await res.json();

    respuesta.innerHTML = data.reply;

  } catch (error) {
    respuesta.innerHTML = "❌ Error conectando con el servidor.";
  }

  input.value = "";
}