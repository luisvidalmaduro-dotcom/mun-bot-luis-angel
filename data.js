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


/* =========================
   🟢 NIVEL 1: BÁSICO
========================= */

{
  categoria: "Reglamento",
  pregunta: "¿Qué es una delegación?",
  keywords: ["delegacion","delegado que es","pais representacion"],
  respuesta_corta: "Representación de un país.",
  respuesta_larga: "Una delegación es la representación de un país dentro del comité."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es la mesa?",
  keywords: ["mesa mun","presidium","quien dirige"],
  respuesta_corta: "Quienes dirigen el comité.",
  respuesta_larga: "La mesa está compuesta por los directores que moderan el debate."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es la agenda?",
  keywords: ["agenda tema","orden temas"],
  respuesta_corta: "Tema a debatir.",
  respuesta_larga: "La agenda define el tema que se discutirá en el comité."
},

{
  categoria: "Mociones",
  pregunta: "¿Para qué sirve una moción?",
  keywords: ["sirve mocion","funcion mocion"],
  respuesta_corta: "Controlar el debate.",
  respuesta_larga: "Permite modificar el curso del debate de forma organizada."
},

{
  categoria: "Documentos",
  pregunta: "¿Para qué sirve un position paper?",
  keywords: ["para que sirve position paper"],
  respuesta_corta: "Explicar postura.",
  respuesta_larga: "Sirve para mostrar la posición oficial del país sobre el tema."
},

/* =========================
   🟡 NIVEL 2: INTERMEDIO
========================= */

{
  categoria: "Mociones",
  pregunta: "¿Cuándo hacer una moción?",
  keywords: ["cuando mocion","momento mocion"],
  respuesta_corta: "Cuando la mesa lo permita.",
  respuesta_larga: "Debes hacer mociones cuando la mesa abra el espacio para ello."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué moción hacer si el debate está muerto?",
  keywords: ["debate muerto","nadie habla","activar debate"],
  respuesta_corta: "Caucus moderado.",
  respuesta_larga: "Un caucus moderado ayuda a reactivar la participación."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo empezar a hablar en comité?",
  keywords: ["empezar hablar","primera vez mun"],
  respuesta_corta: "Con ideas simples.",
  respuesta_larga: "Empieza con ideas claras y cortas para ganar confianza."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo hacer aliados?",
  keywords: ["hacer aliados","conseguir apoyo"],
  respuesta_corta: "Habla con otros.",
  respuesta_larga: "Acércate a delegados con ideas similares."
},

{
  categoria: "Documentos",
  pregunta: "¿Cuándo escribir un working paper?",
  keywords: ["cuando working paper"],
  respuesta_corta: "En caucus informal.",
  respuesta_larga: "Se redacta durante caucus informal."
},

/* =========================
   🟠 NIVEL 3: AVANZADO
========================= */

{
  categoria: "Estrategia",
  pregunta: "¿Cómo dominar un caucus moderado?",
  keywords: ["dominar caucus moderado","control turno"],
  respuesta_corta: "Habla seguido.",
  respuesta_larga: "Interviene frecuentemente y responde a otros delegados."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo destacar frente a muchos delegados?",
  keywords: ["destacar muchos delegados","competencia alta"],
  respuesta_corta: "Sé claro y constante.",
  respuesta_larga: "Habla con claridad y participa constantemente."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo hacer que la mesa me note?",
  keywords: ["mesa note","llamar atencion mesa"],
  respuesta_corta: "Participa bien.",
  respuesta_larga: "Habla con argumentos sólidos y frecuentes."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué pasa si mi moción es rechazada?",
  keywords: ["rechazan mocion","mocion negada"],
  respuesta_corta: "Puedes intentar otra.",
  respuesta_larga: "Puedes proponer otra moción diferente."
},

{
  categoria: "Documentos",
  pregunta: "¿Cómo mejorar una resolución?",
  keywords: ["mejorar resolucion","hacer resolucion mejor"],
  respuesta_corta: "Hazla clara.",
  respuesta_larga: "Debe ser clara, realista y bien estructurada."
},

/* =========================
   🔴 NIVEL 4: COMPETITIVO
========================= */

{
  categoria: "Estrategia",
  pregunta: "¿Cómo liderar un bloque sin ser agresivo?",
  keywords: ["lider sin agresivo","liderar bloque bien"],
  respuesta_corta: "Escucha y guía.",
  respuesta_larga: "Debes escuchar ideas y organizar al grupo."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo competir contra un delegado fuerte?",
  keywords: ["delegado fuerte","competencia fuerte"],
  respuesta_corta: "Sé constante.",
  respuesta_larga: "Participa constantemente y responde con argumentos sólidos."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo recuperar control si pierdo influencia?",
  keywords: ["perder influencia","recuperar control"],
  respuesta_corta: "Habla y propón.",
  respuesta_larga: "Retoma el liderazgo proponiendo soluciones claras."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo dividir un bloque rival?",
  keywords: ["dividir bloque","romper grupo rival"],
  respuesta_corta: "Ofrece alternativas.",
  respuesta_larga: "Convierte miembros del bloque con ideas más atractivas."
},

{
  categoria: "Competencia",
  pregunta: "¿Cómo ganar mejor delegado?",
  keywords: ["ganar mejor delegado","ganar mun"],
  respuesta_corta: "Destaca en todo.",
  respuesta_larga: "Debes liderar, hablar bien y redactar documentos."
},

/* =========================
   🔥 NIVEL 5: ÉLITE (REAL)
========================= */

{
  categoria: "Situaciones",
  pregunta: "Nadie me escucha en caucus, ¿qué hago?",
  keywords: ["nadie escucha caucus","ignorado caucus"],
  respuesta_corta: "Habla firme.",
  respuesta_larga: "Levanta la voz con seguridad y entra en conversaciones activas."
},

{
  categoria: "Situaciones",
  pregunta: "Tengo una idea pero nadie me apoya",
  keywords: ["idea sin apoyo","nadie apoya idea"],
  respuesta_corta: "Véndela mejor.",
  respuesta_larga: "Explica beneficios claros para otros delegados."
},

{
  categoria: "Situaciones",
  pregunta: "Estoy en blanco durante mi turno",
  keywords: ["en blanco turno","no se que decir"],
  respuesta_corta: "Respira.",
  respuesta_larga: "Retoma una idea básica del tema."
},

{
  categoria: "Situaciones",
  pregunta: "Me atacaron en debate, ¿qué hago?",
  keywords: ["ataque debate","responder ataque"],
  respuesta_corta: "Responde con calma.",
  respuesta_larga: "Contesta con argumentos, no emociones."
},

{
  categoria: "Competencia",
  pregunta: "¿Qué evalúan los jueces realmente?",
  keywords: ["evaluacion jueces","que miran jueces"],
  respuesta_corta: "Todo.",
  respuesta_larga: "Evalúan oratoria, liderazgo, contenido y actitud."
}

/* =========================
   🟢 REGLAMENTO (20)
========================= */

{
  categoria: "Reglamento",
  pregunta: "¿Qué pasa si llego tarde al comité?",
  keywords: ["llegar tarde","tarde mun"],
  respuesta_corta: "Te integras rápido.",
  respuesta_larga: "Debes informarte del debate y adaptarte lo antes posible."
},

{
  categoria: "Reglamento",
  pregunta: "¿Quién controla el tiempo?",
  keywords: ["tiempo quien controla","cronometro"],
  respuesta_corta: "La mesa.",
  respuesta_larga: "La mesa es responsable de controlar los tiempos del debate."
},

{
  categoria: "Reglamento",
  pregunta: "¿Se puede interrumpir a otro delegado?",
  keywords: ["interrumpir delegado"],
  respuesta_corta: "No.",
  respuesta_larga: "Solo mediante puntos permitidos por el reglamento."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué pasa si rompo el protocolo?",
  keywords: ["romper protocolo","error mun"],
  respuesta_corta: "Advertencia.",
  respuesta_larga: "La mesa puede llamarte al orden o sancionarte."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es lista de oradores?",
  keywords: ["lista oradores"],
  respuesta_corta: "Orden de discursos.",
  respuesta_larga: "Es la lista de delegados que hablarán en el debate formal."
},

{
  categoria: "Reglamento",
  pregunta: "¿Se puede cambiar la agenda?",
  keywords: ["cambiar agenda"],
  respuesta_corta: "Sí.",
  respuesta_larga: "Mediante moción y votación."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es mayoría simple?",
  keywords: ["mayoria simple"],
  respuesta_corta: "Mitad +1.",
  respuesta_larga: "Se necesita más de la mitad de votos."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es mayoría calificada?",
  keywords: ["mayoria calificada"],
  respuesta_corta: "Mayoría alta.",
  respuesta_larga: "Generalmente dos tercios de los votos."
},

{
  categoria: "Reglamento",
  pregunta: "¿Qué es abstención?",
  keywords: ["abstencion"],
  respuesta_corta: "No votar.",
  respuesta_larga: "El delegado decide no votar a favor ni en contra."
},

{
  categoria: "Reglamento",
  pregunta: "¿Se puede abstener en todo?",
  keywords: ["abstener siempre"],
  respuesta_corta: "No siempre.",
  respuesta_larga: "Depende de si estás presente y votando."
},

/* =========================
   🟠 MOCIONES (20)
========================= */

{
  categoria: "Mociones",
  pregunta: "¿Qué moción hacer para debatir soluciones?",
  keywords: ["debatir soluciones","mocion soluciones"],
  respuesta_corta: "Caucus moderado.",
  respuesta_larga: "Permite discutir soluciones con orden."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué moción usar para negociar?",
  keywords: ["negociar mocion"],
  respuesta_corta: "Caucus informal.",
  respuesta_larga: "Permite interacción libre entre delegados."
},

{
  categoria: "Mociones",
  pregunta: "¿Cuánto tiempo debe durar un caucus?",
  keywords: ["tiempo caucus"],
  respuesta_corta: "Depende.",
  respuesta_larga: "Debe ser suficiente pero estratégico."
},

{
  categoria: "Mociones",
  pregunta: "¿Cómo hacer una moción estratégica?",
  keywords: ["mocion estrategica"],
  respuesta_corta: "Piensa en el objetivo.",
  respuesta_larga: "Debe ayudar a avanzar tu estrategia."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué pasa si nadie apoya mi moción?",
  keywords: ["nadie apoya mocion"],
  respuesta_corta: "Se rechaza.",
  respuesta_larga: "Necesitas apoyo para que pase."
},

{
  categoria: "Mociones",
  pregunta: "¿Se puede repetir una moción?",
  keywords: ["repetir mocion"],
  respuesta_corta: "Sí.",
  respuesta_larga: "Si la situación lo permite."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué es moción para votar?",
  keywords: ["mocion votar"],
  respuesta_corta: "Ir a votación.",
  respuesta_larga: "Cierra debate y pasa a votar."
},

{
  categoria: "Mociones",
  pregunta: "¿Cómo mejorar mis mociones?",
  keywords: ["mejorar mocion"],
  respuesta_corta: "Sé claro.",
  respuesta_larga: "Incluye tiempo y propósito claros."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué moción usar al inicio?",
  keywords: ["inicio mocion"],
  respuesta_corta: "Caucus.",
  respuesta_larga: "Para iniciar el debate."
},

{
  categoria: "Mociones",
  pregunta: "¿Qué moción usar al final?",
  keywords: ["final mocion"],
  respuesta_corta: "Cerrar debate.",
  respuesta_larga: "Para pasar a votación."
},

/* =========================
   🟢 DOCUMENTOS (20)
========================= */

{
  categoria: "Documentos",
  pregunta: "¿Quién redacta la resolución?",
  keywords: ["quien hace resolucion"],
  respuesta_corta: "Los delegados.",
  respuesta_larga: "En conjunto durante el debate."
},

{
  categoria: "Documentos",
  pregunta: "¿Cuántas personas deben firmar?",
  keywords: ["firmas resolucion"],
  respuesta_corta: "Varias.",
  respuesta_larga: "Depende del reglamento."
},

{
  categoria: "Documentos",
  pregunta: "¿Qué hace un firmante?",
  keywords: ["firmante que hace"],
  respuesta_corta: "Apoya discusión.",
  respuesta_larga: "No implica apoyo total."
},

{
  categoria: "Documentos",
  pregunta: "¿Qué hace un patrocinador?",
  keywords: ["patrocinador"],
  respuesta_corta: "Defiende documento.",
  respuesta_larga: "Lidera la resolución."
},

{
  categoria: "Documentos",
  pregunta: "¿Cómo hacer cláusulas claras?",
  keywords: ["clausulas claras"],
  respuesta_corta: "Sé específico.",
  respuesta_larga: "Evita ambigüedad."
},

{
  categoria: "Documentos",
  pregunta: "¿Qué errores evitar en documentos?",
  keywords: ["errores resolucion"],
  respuesta_corta: "Ser ambiguo.",
  respuesta_larga: "Evita ideas vagas."
},

{
  categoria: "Documentos",
  pregunta: "¿Cómo hacer propuestas realistas?",
  keywords: ["propuestas realistas"],
  respuesta_corta: "Sé lógico.",
  respuesta_larga: "Debe ser viable."
},

{
  categoria: "Documentos",
  pregunta: "¿Cómo destacar en redacción?",
  keywords: ["destacar redaccion"],
  respuesta_corta: "Sé claro.",
  respuesta_larga: "Usa lenguaje preciso."
},

{
  categoria: "Documentos",
  pregunta: "¿Qué hace una buena resolución?",
  keywords: ["buena resolucion"],
  respuesta_corta: "Soluciona problemas.",
  respuesta_larga: "Debe ser clara y efectiva."
},

{
  categoria: "Documentos",
  pregunta: "¿Cómo convencer para firmar?",
  keywords: ["convencer firmar"],
  respuesta_corta: "Explica beneficios.",
  respuesta_larga: "Haz ver ventajas."
},

/* =========================
   🧠 ESTRATEGIA (20)
========================= */

{
  categoria: "Estrategia",
  pregunta: "¿Cómo ser más persuasivo?",
  keywords: ["ser persuasivo"],
  respuesta_corta: "Argumenta bien.",
  respuesta_larga: "Usa lógica y ejemplos."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo hablar con confianza?",
  keywords: ["confianza hablar"],
  respuesta_corta: "Practica.",
  respuesta_larga: "La repetición mejora seguridad."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo estructurar un discurso?",
  keywords: ["estructura discurso"],
  respuesta_corta: "Inicio, idea, cierre.",
  respuesta_larga: "Debe ser claro y ordenado."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo responder preguntas?",
  keywords: ["responder preguntas"],
  respuesta_corta: "Sé claro.",
  respuesta_larga: "Responde directo."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo usar datos?",
  keywords: ["usar datos"],
  respuesta_corta: "Apoya ideas.",
  respuesta_larga: "Refuerzan argumentos."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo ganar respeto?",
  keywords: ["ganar respeto"],
  respuesta_corta: "Sé serio.",
  respuesta_larga: "Actitud profesional."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo evitar errores?",
  keywords: ["evitar errores"],
  respuesta_corta: "Prepárate.",
  respuesta_larga: "Estudia el tema."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo mejorar cada ronda?",
  keywords: ["mejorar ronda"],
  respuesta_corta: "Aprende.",
  respuesta_larga: "Corrige errores."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo ser consistente?",
  keywords: ["ser consistente"],
  respuesta_corta: "Participa siempre.",
  respuesta_larga: "Mantén nivel alto."
},

{
  categoria: "Estrategia",
  pregunta: "¿Cómo cerrar fuerte?",
  keywords: ["cerrar fuerte"],
  respuesta_corta: "Resume.",
  respuesta_larga: "Refuerza ideas clave."
},

/* =========================
   🔴 SITUACIONES (20)
========================= */

{
  categoria: "Situaciones",
  pregunta: "Estoy cansado en comité",
  keywords: ["cansado mun"],
  respuesta_corta: "Mantente activo.",
  respuesta_larga: "Participar te mantiene enfocado."
},

{
  categoria: "Situaciones",
  pregunta: "Estoy confundido con reglas",
  keywords: ["confundido reglas"],
  respuesta_corta: "Pregunta.",
  respuesta_larga: "Consulta a la mesa."
},

{
  categoria: "Situaciones",
  pregunta: "No sé qué decir",
  keywords: ["no se que decir"],
  respuesta_corta: "Empieza simple.",
  respuesta_larga: "Usa ideas básicas."
},

{
  categoria: "Situaciones",
  pregunta: "Hablan muy rápido",
  keywords: ["hablan rapido"],
  respuesta_corta: "Escucha clave.",
  respuesta_larga: "Capta ideas principales."
},

{
  categoria: "Situaciones",
  pregunta: "Me da miedo hablar",
  keywords: ["miedo hablar"],
  respuesta_corta: "Inténtalo.",
  respuesta_larga: "El miedo se reduce hablando."
},

{
  categoria: "Situaciones",
  pregunta: "Me ignoraron",
  keywords: ["ignorado"],
  respuesta_corta: "Insiste.",
  respuesta_larga: "Vuelve a intentar."
},

{
  categoria: "Situaciones",
  pregunta: "Estoy perdido",
  keywords: ["perdido mun"],
  respuesta_corta: "Observa.",
  respuesta_larga: "Aprende de otros."
},

{
  categoria: "Situaciones",
  pregunta: "Me equivoco mucho",
  keywords: ["errores hablar"],
  respuesta_corta: "Corrige.",
  respuesta_larga: "Aprende de errores."
},

{
  categoria: "Situaciones",
  pregunta: "No entiendo documentos",
  keywords: ["no entiendo resolucion"],
  respuesta_corta: "Lee ejemplos.",
  respuesta_larga: "Practica lectura."
},

{
  categoria: "Situaciones",
  pregunta: "Estoy nervioso al hablar",
  keywords: ["nervioso hablar"],
  respuesta_corta: "Respira.",
  respuesta_larga: "Controla ritmo."
}



];