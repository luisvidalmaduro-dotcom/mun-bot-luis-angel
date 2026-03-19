const base = [

/* =========================
   🔵 REGLAMENTO
========================= */

{
  categoria: "Reglamento",
  pregunta: "¿Qué es quórum?",
  keywords: ["quorum","quórum","cuantos delegados","minimo delegados","inicio sesion"],
  respuesta_corta: "Cantidad mínima de delegados.",
  respuesta_larga: "El quórum es el número mínimo de delegados necesarios para iniciar o continuar una sesión."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué significa presente y votando?",
  keywords: ["presente y votando","votar obligatorio","sin abstencion"],
  respuesta_corta: "No puedes abstenerte.",
  respuesta_larga: "Significa que el delegado debe votar obligatoriamente a favor o en contra."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es punto de orden?",
  keywords: ["punto orden","error reglamento","violacion reglas"],
  respuesta_corta: "Error en procedimiento.",
  respuesta_larga: "Se usa cuando un delegado considera que se violó el reglamento."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es punto de información?",
  keywords: ["punto informacion","hacer pregunta","preguntar delegado"],
  respuesta_corta: "Permite hacer preguntas.",
  respuesta_larga: "Permite a un delegado hacer una pregunta a otro durante el debate."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es derecho a réplica?",
  keywords: ["derecho replica","ofensa","responder ataque"],
  respuesta_corta: "Responder ofensa.",
  respuesta_larga: "Se utiliza cuando un delegado se siente personalmente ofendido."
},

/* =========================
   🟠 MOCIONES
========================= */

{
  categoria: "Mociones",
  pregunta: "¿Qué es una moción?",
  keywords: ["mocion","mociones","motion","propuesta debate"],
  respuesta_corta: "Propuesta de procedimiento.",
  respuesta_larga: "Es una solicitud formal para cambiar el curso del debate."
},

{
  categoria: "Mociones",
  pregunta: "¿Cómo hacer una moción?",
  keywords: ["hacer mocion","como hacer mocion","pedir mocion","decir mocion"],
  respuesta_corta: "Levanta la mano y propón.",
  respuesta_larga: "Debes decir claramente la moción cuando la mesa lo permita."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué es caucus moderado?",
  keywords: ["caucus moderado","debate corto","turnos"],
  respuesta_corta: "Debate con turnos.",
  respuesta_larga: "Los delegados hablan por turnos con tiempo limitado."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué es caucus informal?",
  keywords: ["caucus informal","debate libre","negociar"],
  respuesta_corta: "Debate libre.",
  respuesta_larga: "Permite negociar y redactar documentos libremente."
},

{
  categoria: "Mociones",
  pregunta: "¿Cómo cerrar debate?",
  keywords: ["cerrar debate","terminar debate","votar"],
  respuesta_corta: "Moción para cerrar.",
  respuesta_larga: "Se hace una moción para cerrar el debate y pasar a votación."
},

/* =========================
   🟢 DOCUMENTOS
========================= */

{
  categoria: "Documentos",
  pregunta: "¿Qué es un position paper?",
  keywords: ["position paper","posicion pais","documento inicial"],
  respuesta_corta: "Postura del país.",
  respuesta_larga: "Documento donde explicas la posición oficial de tu país."
},

{
  categoria: "Documentos",
  pregunta: "¿Qué es un working paper?",
  keywords: ["working paper","borrador","ideas"],
  respuesta_corta: "Documento inicial.",
  respuesta_larga: "Es un borrador de ideas que luego se convierte en resolución."
},

{
  categoria: "Documentos",
  pregunta: "¿Qué es una resolución?",
  keywords: ["resolucion","resolution","documento final"],
  respuesta_corta: "Documento final.",
  respuesta_larga: "Contiene las soluciones aprobadas por el comité."
},

{
  categoria: "Documentos",
  pregunta: "¿Qué son cláusulas operativas?",
  keywords: ["clausulas operativas","acciones"],
  respuesta_corta: "Acciones.",
  respuesta_larga: "Indican lo que se va a hacer en la resolución."
},

{
  categoria: "Documentos",
  pregunta: "¿Qué son cláusulas preambulatorias?",
  keywords: ["clausulas preambulatorias","introduccion"],
  respuesta_corta: "Contexto.",
  respuesta_larga: "Explican el contexto y razones del documento."
},

/* =========================
   🧠 ESTRATEGIA
========================= */

{
  categoria: "Estrategia",
  pregunta: "¿Cómo dominar un caucus?",
  keywords: ["dominar caucus","hablar caucus","control debate"],
  respuesta_corta: "Habla constante.",
  respuesta_larga: "Debes intervenir frecuentemente y proponer ideas claras."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo liderar un bloque?",
  keywords: ["liderar bloque","ser lider","dirigir grupo"],
  respuesta_corta: "Organiza ideas.",
  respuesta_larga: "Debes coordinar y mantener al grupo enfocado."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo ganar mejor delegado?",
  keywords: ["ganar mun","mejor delegado","ganar premio"],
  respuesta_corta: "Destaca en todo.",
  respuesta_larga: "Debes hablar bien, liderar y redactar documentos."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo hablar mejor?",
  keywords: ["hablar mejor","oratoria","hablar en mun"],
  respuesta_corta: "Habla claro.",
  respuesta_larga: "Organiza ideas simples y habla con seguridad."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo negociar?",
  keywords: ["negociar","convencer","aliados"],
  respuesta_corta: "Escucha y convence.",
  respuesta_larga: "Debes escuchar ideas y proponer soluciones que beneficien a otros."
},

/* =========================
   🔴 SITUACIONES
========================= */

{
  categoria: "Situaciones",
  pregunta: "Estoy nervioso",
  keywords: ["nervioso","miedo hablar","ansiedad"],
  respuesta_corta: "Respira.",
  respuesta_larga: "Empieza con ideas simples y gana confianza poco a poco."
},

{
  categoria: "Situaciones",
  pregunta: "Nadie me apoya",
  keywords: ["nadie me apoya","solo","sin aliados"],
  respuesta_corta: "Busca aliados.",
  respuesta_larga: "Acércate a delegados con ideas similares."
},

{
  categoria: "Situaciones",
  pregunta: "No entiendo el tema",
  keywords: ["no entiendo","confundido","tema dificil"],
  respuesta_corta: "Escucha.",
  respuesta_larga: "Escucha a otros y usa sus ideas."
},

{
  categoria: "Situaciones",
  pregunta: "Me quedé en blanco",
  keywords: ["en blanco","no se que decir"],
  respuesta_corta: "Pausa.",
  respuesta_larga: "Respira y retoma una idea básica."
},

{
  categoria: "Situaciones",
  pregunta: "Llegué tarde",
  keywords: ["llegue tarde","tarde comite"],
  respuesta_corta: "Infórmate rápido.",
  respuesta_larga: "Pregunta a otros delegados y únete al debate."
},

/* =========================
   🟣 COMPETENCIA
========================= */

{
  categoria: "Competencia",
  pregunta: "¿Qué evalúan los jueces?",
  keywords: ["evaluacion","jueces","puntaje"],
  respuesta_corta: "Oratoria y liderazgo.",
  respuesta_larga: "Evalúan participación, liderazgo, contenido y trabajo en equipo."
},

{
  categoria: "Competencia",
  pregunta: "¿Cómo destacar?",
  keywords: ["destacar","sobresalir","llamar atencion"],
  respuesta_corta: "Participa mucho.",
  respuesta_larga: "Habla frecuentemente y lidera soluciones."
},

{
  categoria: "Competencia",
  pregunta: "¿Cómo ganar en regional?",
  keywords: ["ganar regional","clasificar"],
  respuesta_corta: "Sé constante.",
  respuesta_larga: "Debes mantener alto nivel en todo el debate."
}

];