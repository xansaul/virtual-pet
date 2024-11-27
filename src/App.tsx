import { useState } from "react";
import styles from "./app.module.css";

const states = {
  Feliz: "Feliz",
  Triste: "Triste",
  Enojado: "Enojado",
  Somnoliento: "Somnoliento",
  Dormido: "Dormido",
  Inquieto: "Inquieto",
  Enfermo: "Enfermo",
};

const actionsObj = {
  Acariciar: "Acariciar",
  Pasear: "Pasear",
  Jugar: "Jugar",
  Abrazar: "Abrazar",
  Dormir: "Dormir",
  Alimentar: "Alimentar",
  LlevarVeterinario: "Llevar al veterinario",
  Ignorar: "Ignorar",
  Pegar: "Pegar",
};

const outs = {
  MueveCola: "Mueve la cola",
  SeEmociona: "Se emociona",
  Come: "Come",
  MiraFeo: "Te mira feo",
  Chilla: "Chilla",
  Duerme: "Duerme",
  TeIgnora: "Te ignora",
  Ladra: "Ladra",
};

const transitions = {
  [states.Feliz]: {
    [actionsObj.Acariciar]: { state: states.Feliz, out: outs.MueveCola },
    [actionsObj.Pasear]: { state: states.Somnoliento, out: outs.SeEmociona },
    [actionsObj.Jugar]: { state: states.Somnoliento, out: outs.SeEmociona },
    [actionsObj.Abrazar]: { state: states.Feliz, out: outs.MueveCola },
    [actionsObj.Dormir]: { state: states.Dormido, out: outs.Duerme },
    [actionsObj.Alimentar]: { state: states.Somnoliento, out: outs.Come },
    [actionsObj.LlevarVeterinario]: { state: states.Enojado, out: outs.MiraFeo },
    [actionsObj.Ignorar]: { state: states.Triste, out: outs.Ladra },
    [actionsObj.Pegar]: { state: states.Triste, out: outs.Chilla },
  },
  [states.Enojado]: {
    [actionsObj.Acariciar]: { state: states.Inquieto, out: outs.MiraFeo },
    [actionsObj.Pasear]: { state: states.Inquieto, out: outs.TeIgnora },
    [actionsObj.Jugar]: { state: states.Inquieto, out: outs.TeIgnora },
    [actionsObj.Abrazar]: { state: states.Inquieto, out: outs.MueveCola },
    [actionsObj.Dormir]: { state: states.Enojado, out: outs.TeIgnora },
    [actionsObj.Alimentar]: { state: states.Enfermo, out: outs.Come },
    [actionsObj.LlevarVeterinario]: { state: states.Enojado, out: outs.MiraFeo },
    [actionsObj.Ignorar]: { state: states.Enojado, out: outs.MiraFeo },
    [actionsObj.Pegar]: { state: states.Enfermo, out: outs.Ladra },
  },
  [states.Triste]: {
    [actionsObj.Acariciar]: { state: states.Feliz, out: outs.MueveCola },
    [actionsObj.Pasear]: { state: states.Feliz, out: outs.SeEmociona },
    [actionsObj.Jugar]: { state: states.Feliz, out: outs.SeEmociona },
    [actionsObj.Abrazar]: { state: states.Feliz, out: outs.MueveCola },
    [actionsObj.Dormir]: { state: states.Triste, out: outs.Chilla },
    [actionsObj.Alimentar]: { state: states.Triste, out: outs.Come },
    [actionsObj.LlevarVeterinario]: { state: states.Inquieto, out: outs.Chilla },
    [actionsObj.Ignorar]: { state: states.Triste, out: outs.Chilla },
    [actionsObj.Pegar]: { state: states.Enfermo, out: outs.Chilla },
  },
  [states.Somnoliento]: {
    [actionsObj.Acariciar]: { state: states.Somnoliento, out: outs.MueveCola },
    [actionsObj.Pasear]: { state: states.Somnoliento, out: outs.MueveCola },
    [actionsObj.Jugar]: { state: states.Somnoliento, out: outs.MueveCola },
    [actionsObj.Abrazar]: { state: states.Dormido, out: outs.Duerme },
    [actionsObj.Dormir]: { state: states.Dormido, out: outs.Duerme },
    [actionsObj.Alimentar]: { state: states.Somnoliento, out: outs.TeIgnora },
    [actionsObj.LlevarVeterinario]: { state: states.Enojado, out: outs.MiraFeo },
    [actionsObj.Ignorar]: { state: states.Somnoliento, out: outs.MiraFeo },
    [actionsObj.Pegar]: { state: states.Enojado, out: outs.Chilla },
  },
  [states.Dormido]: {
    [actionsObj.Acariciar]: { state: states.Dormido, out: outs.MueveCola },
    [actionsObj.Pasear]: { state: states.Dormido, out: outs.Duerme },
    [actionsObj.Jugar]: { state: states.Dormido, out: outs.Duerme },
    [actionsObj.Abrazar]: { state: states.Dormido, out: outs.MueveCola },
    [actionsObj.Dormir]: { state: states.Dormido, out: outs.Duerme },
    [actionsObj.Alimentar]: { state: states.Inquieto, out: outs.Come },
    [actionsObj.LlevarVeterinario]: { state: states.Triste, out: outs.Chilla },
    [actionsObj.Ignorar]: { state: states.Feliz, out: outs.Duerme },
    [actionsObj.Pegar]: { state: states.Enojado, out: outs.Chilla },
  },
  [states.Inquieto]: {
    [actionsObj.Acariciar]: { state: states.Feliz, out: outs.MueveCola },
    [actionsObj.Pasear]: { state: states.Feliz, out: outs.SeEmociona },
    [actionsObj.Jugar]: { state: states.Feliz, out: outs.SeEmociona },
    [actionsObj.Abrazar]: { state: states.Feliz, out: outs.MueveCola },
    [actionsObj.Dormir]: { state: states.Inquieto, out: outs.Ladra },
    [actionsObj.Alimentar]: { state: states.Feliz, out: outs.Come },
    [actionsObj.LlevarVeterinario]: { state: states.Enojado, out: outs.Ladra },
    [actionsObj.Ignorar]: { state: states.Triste, out: outs.Ladra },
    [actionsObj.Pegar]: { state: states.Enojado, out: outs.Ladra },
  },
  [states.Enfermo]: {
    [actionsObj.Acariciar]: { state: states.Enfermo, out: outs.TeIgnora },
    [actionsObj.Pasear]: { state: states.Enfermo, out: outs.TeIgnora },
    [actionsObj.Jugar]: { state: states.Enfermo, out: outs.MueveCola },
    [actionsObj.Abrazar]: { state: states.Enfermo, out: outs.TeIgnora },
    [actionsObj.Dormir]: { state: states.Enfermo, out: outs.TeIgnora },
    [actionsObj.Alimentar]: { state: states.Enfermo, out: outs.TeIgnora },
    [actionsObj.LlevarVeterinario]: { state: states.Inquieto, out: outs.Chilla },
    [actionsObj.Ignorar]: { state: states.Enfermo, out: outs.Chilla },
    [actionsObj.Pegar]: { state: states.Enfermo, out: outs.MiraFeo },
  },

};

function App() {
  const [state, setState] = useState<string>(states.Feliz);
  const [out, setOut] = useState<string>("");

  const handleAction = (action: string) => {
    const transition = transitions[state]?.[action];
    if (transition) {
      setOut(transition.out || "");
      setTimeout(() => { setState(transition.state); }, 1000);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <img
        src={`pet/${state}.png`}
        className={styles.img}
        alt={`Estado actual: ${state}`}
      />
      <div className={styles.divOut}>
        {out && <p>Pug: {out}</p>}
      </div>
      <div className={styles.divButtons}>
        {Object.entries(actionsObj).map(([key, action]) => (
          <button
            key={key}
            className={styles.button}
            onClick={() => handleAction(action)}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;