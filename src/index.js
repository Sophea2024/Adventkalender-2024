//Funktion-Zeigtmesaage
function updateWindow(windowId, message) {
  const outputEl = document.querySelector(`#${windowId}`);
  if (outputEl) {
    outputEl.innerHTML = message;
    outputEl.style.fontSize = "12px";
    outputEl.style.backgroundColor = "rgb(124, 206, 206)";
  } else {
    console.error(`Element mit ID ${windowId} nicht gefunden.`);
  }
}

// Aufruf-Funktionen:
function window1() {
  updateWindow(
    "window1",
    "Tür auf, Tür zu – was wohl heute drin ist? Bleib gespannt und genieße den Moment!"
  );
}

function window2() {
  updateWindow("window2", "Der Weg ist das Ziel – bleib dran und mach weiter!");
}

function window3() {
  updateWindow(
    "window3",
    "Jeder Tag ist eine neue Chance, es besser zu machen."
  );
}

function window4() {
  updateWindow("window4", "Du bist stärker, als du denkst.");
}

function window5() {
  updateWindow(
    "window5",
    "Erfolg ist die Summe kleiner Anstrengungen, die jeden Tag wiederholt werden"
  );
}

function window6() {
  updateWindow(
    "window6",
    "Wenn du etwas willst, arbeite dafür und lass dich nicht abhalten."
  );
}

function window7() {
  updateWindow(
    "window7",
    "Manchmal ist das Aufgeben keine Option, sondern ein Neustart!"
  );
}

function window8() {
  updateWindow(
    "window8",
    "Glaube an dich – jeder andere Schritt kommt von selbst."
  );
}

function window9() {
  updateWindow("window9", "Hindernisse sind die Stufen zum Erfolg.");
}

function window10() {
  updateWindow("window10", "Das Beste kommt oft dann, wenn du weitermachst..");
}

function window11() {
  updateWindow("window11", "Jeder Fehler bringt dich näher an die Lösung.");
}

function window12() {
  updateWindow("window12", "Halte durch, das Ergebnis wird es wert sein.");
}

function window13() {
  updateWindow("window13", "Man wächst an seinen Herausforderungen.");
}

function window14() {
  updateWindow("window14", "Wo ein Wille ist, ist auch ein Weg.");
}

function window15() {
  updateWindow(
    "window15",
    "Die Zukunft gehört denen, die an ihre Träume glauben."
  );
}

function window16() {
  updateWindow("window16", "Auch im Sturm gibt es immer einen Weg zum Licht.");
}

function window17() {
  updateWindow(
    "window17",
    "Erfolg ist eine Treppe, keine Tür – geh Schritt für Schritt."
  );
}

function window18() {
  updateWindow("window18", "Träume groß, arbeite hart, bleib dem Ziel treu.");
}

function window19() {
  updateWindow(
    "window19",
    "Das Beste kommt, wenn du es am wenigsten erwartest"
  );
}

function window20() {
  updateWindow("window20", "In jedem Problem steckt eine neue Möglichkeit.");
}

function window21() {
  updateWindow(
    "window21",
    "Sei mutig genug, anders zu sein, und stark genug, zu bleiben.."
  );
}

function window22() {
  updateWindow(
    "window22",
    "Es gibt keine Grenzen – nur die, die du dir selbst setzt."
  );
}

function window23() {
  updateWindow(
    "window23",
    "Alles beginnt mit einer Entscheidung – triff die richtige für dich."
  );
}

function window24() {
  updateWindow("window24", "Sei stolz auf deinen Weg – du hast viel erreicht!");
}
