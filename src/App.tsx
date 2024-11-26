import { useState } from 'react';
import styles from './app.module.css';


const states = {
  Feliz: "Feliz",
  Triste: "Triste",
  Enojado:"Enojado",
  Somnoliento: "Somnoliento",
  Dormido: "Dormido",
  Inquieto: "Inquieto",
  Enfermo: "Enfermo"
};

const actionsObj = {
  Acariciar: "Acariciar",
  Pasear: "Pasear",
  Alimentar: "Alimentar",
  LlevarVeterinario: "Llevar al veterinario",
  Jugar: "Jugar",
  Pegar: "Pegar",
  Ignorar: "Ignorar",
  Abrazar: "Abrazar",
  Dormir: "Dormir",
};

const transitions = {
  [states.Feliz]: {
    [actionsObj.Acariciar]: states.Feliz,
    [actionsObj.Pasear]: states.Somnoliento,
    [actionsObj.Jugar]: states.Somnoliento,
    [actionsObj.Abrazar]: states.Feliz,
    [actionsObj.Dormir]: states.Dormido,
    [actionsObj.Alimentar]: states.Somnoliento,
    [actionsObj.LlevarVeterinario]: states.Enojado,
    [actionsObj.Ignorar]: states.Triste,
    [actionsObj.Pegar]: states.Triste,
  },
  [states.Triste]: {
    [actionsObj.Acariciar]: states.Feliz,
    [actionsObj.Pasear]: states.Feliz,
    [actionsObj.Jugar]: states.Feliz,
    [actionsObj.Abrazar]: states.Feliz,
    [actionsObj.Dormir]: states.Triste,
    [actionsObj.Alimentar]: states.Triste,
    [actionsObj.LlevarVeterinario]: states.Inquieto,
    [actionsObj.Ignorar]: states.Triste,
    [actionsObj.Pegar]: states.Enfermo,
  },
  [states.Enojado]: {
    [actionsObj.Acariciar]: states.Inquieto,
    [actionsObj.Pasear]: states.Inquieto,
    [actionsObj.Jugar]: states.Inquieto,
    [actionsObj.Abrazar]: states.Inquieto,
    [actionsObj.Dormir]: states.Enojado,
    [actionsObj.Alimentar]: states.Enfermo,
    [actionsObj.LlevarVeterinario]: states.Enojado,
    [actionsObj.Ignorar]: states.Enojado,
    [actionsObj.Pegar]: states.Enfermo,
  },
  [states.Somnoliento]: {
    [actionsObj.Acariciar]: states.Somnoliento,
    [actionsObj.Pasear]: states.Somnoliento,
    [actionsObj.Jugar]: states.Somnoliento,
    [actionsObj.Abrazar]: states.Dormido,
    [actionsObj.Dormir]: states.Dormido,
    [actionsObj.Alimentar]: states.Somnoliento,
    [actionsObj.LlevarVeterinario]: states.Enojado,
    [actionsObj.Ignorar]: states.Somnoliento,
    [actionsObj.Pegar]: states.Enojado,
  },
  [states.Dormido]: {
    [actionsObj.Acariciar]: states.Dormido,
    [actionsObj.Pasear]: states.Dormido,
    [actionsObj.Jugar]: states.Dormido,
    [actionsObj.Abrazar]: states.Dormido,
    [actionsObj.Dormir]: states.Dormido,
    [actionsObj.Alimentar]: states.Inquieto,
    [actionsObj.LlevarVeterinario]: states.Triste,
    [actionsObj.Ignorar]: states.Feliz,
    [actionsObj.Pegar]: states.Enojado,
  },
  [states.Inquieto]: {
    [actionsObj.Acariciar]: states.Feliz,
    [actionsObj.Pasear]: states.Feliz,
    [actionsObj.Jugar]: states.Feliz,
    [actionsObj.Abrazar]: states.Feliz,
    [actionsObj.Dormir]: states.Inquieto,
    [actionsObj.Alimentar]: states.Feliz,
    [actionsObj.LlevarVeterinario]: states.Enojado,
    [actionsObj.Ignorar]: states.Triste,
    [actionsObj.Pegar]: states.Enojado,
  },
  [states.Enfermo]: {
    [actionsObj.Acariciar]: states.Enfermo,
    [actionsObj.Pasear]: states.Enfermo,
    [actionsObj.Jugar]: states.Enfermo,
    [actionsObj.Abrazar]: states.Enfermo,
    [actionsObj.Dormir]: states.Enfermo,
    [actionsObj.Alimentar]: states.Enfermo,
    [actionsObj.LlevarVeterinario]: states.Inquieto,
    [actionsObj.Ignorar]: states.Enfermo,
    [actionsObj.Pegar]: states.Enfermo,
  },
};


function App() {

  const [state, setState] = useState<string>(states.Feliz);

  const handleAction = (action: string) => {
    const newState = transitions[state]?.[action];
    if (newState) {
      setState(newState);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1>{state}</h1>
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

export default App
