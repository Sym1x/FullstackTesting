import { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState("");

  const handleClick = () => {
    alert(`Buon giornooo, ${nom} !`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <button onClick={handleClick}>Dire bonjour</button>
    </div>
  );
}

export default Formulaire;
