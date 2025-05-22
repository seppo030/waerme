import React, { useState } from 'react';

const questions = [
  { id: 1, text: 'Wie groß ist Ihre Wohnfläche?', options: ['< 100 m²', '100–150 m²', '150–200 m²', '> 200 m²'] },
  { id: 2, text: 'Wie alt ist das Gebäude?', options: ['Vor 1970', '1970–1990', '1990–2010', 'Nach 2010'] },
  { id: 3, text: 'Welche Heizart nutzen Sie aktuell?', options: ['Gas', 'Öl', 'Strom', 'Fernwärme', 'Wärmepumpe', 'Andere'] },
  { id: 4, text: 'Ist eine Fußbodenheizung vorhanden?', options: ['Ja', 'Nein', 'Teilweise'] },
  { id: 5, text: 'Ist das Haus gedämmt?', options: ['Gut', 'Teilweise', 'Schlecht', 'Keine Ahnung'] },
  { id: 6, text: 'Wie hoch ist Ihre jährliche Heizkostenabrechnung (ca.)?', options: ['< 1.000 €', '1.000–2.000 €', '2.000–3.000 €', '> 3.000 €'] },
  { id: 7, text: 'Möchten Sie eine Förderung nutzen?', options: ['Ja', 'Nein', 'Weiß nicht'] },
  { id: 8, text: 'Sind Sie Eigentümer:in der Immobilie?', options: ['Ja', 'Nein'] },
  { id: 9, text: 'Wie schnell möchten Sie wechseln?', options: ['Sofort', 'Innerhalb 3 Monate', 'In 6–12 Monaten', 'Unverbindlich informieren'] },
  { id: 10, text: 'Wo steht die Immobilie?', input: true }
];

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[step].id]: value });
    setStep(step + 1);
  };

  const handleInput = (e) => {
    setAnswers({ ...answers, [questions[step].id]: e.target.value });
  };

  if (step >= questions.length) {
    return (
      <div className="container">
        <h1>Vielen Dank!</h1>
        <p>Basierend auf Ihren Angaben ist eine Wärmepumpe bei Ihnen möglich.</p>
        <p>Bitte hinterlassen Sie Ihre Kontaktdaten, um ein unverbindliches Angebot zu erhalten.</p>
        <form className="form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-Mail" required />
          <input type="tel" placeholder="Telefonnummer" required />
          <button type="submit">Angebot anfordern</button>
        </form>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="container">
      <h1>Frage {step + 1} von {questions.length}</h1>
      <p>{q.text}</p>
      {q.input ? (
        <div>
          <input type="text" onChange={handleInput} placeholder="Postleitzahl" />
          <button onClick={() => setStep(step + 1)}>Weiter</button>
        </div>
      ) : (
        q.options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)}>{opt}</button>
        ))
      )}
    </div>
  );
}