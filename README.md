# TP 2 : Gestion de l’état local et interactions utilisateurs avec React


Ce projet est le TP2 de React. Il approfondit les notions vues dans le TP1 en introduisant la gestion du state, les événements et les formulaires.

---

## Structure du projet

```
tp2/
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── Counter.js
│   ├── Form.js
│   ├── Toggle.js
│   └── ...
```

---

## Installation et lancement

1. Installer les dépendances :

```bash
npm install
```

2. Lancer l'application :

```bash
npm start
```

---

## 🧩 Composants du projet

### 🔹 Counter

Composant qui utilise le state pour gérer un compteur.

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={() => setCount(count - 1)}>Décrémenter</button>
    </div>
  );
}

export default Counter;
```

---

---

### 🔹 Form

Composant pour gérer un formulaire avec state.

```javascript
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nom : " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entrer votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Form;
```

---

### 🔹 App.js

Composant principal qui regroupe tous les composants.

```javascript
import './App.css';
import Counter from './Counter';
import Toggle from './Toggle';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <h1>TP2 React</h1>
      <Counter />
      <Toggle />
      <Form />
    </div>
  );
}

export default App;
```

---

### 🔹 index.js

Point d'entrée de l'application.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
---

## Captures 


## Objectifs du TP

- Comprendre le hook useState  
- Gérer les événements (onClick, onChange, onSubmit)  
- Manipuler des formulaires  
- Créer des composants interactifs  

---

## Technologies utilisées

- React  
- JavaScript (ES6)  
- HTML  
- CSS  

---

## Conclusion

Ce TP permet de passer d’une application statique à une application dynamique en utilisant le state et les interactions utilisateur.

---
