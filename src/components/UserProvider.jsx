import React, { createContext, useState } from 'react';

// Création du contexte utilisateur
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'john cena', connected: true });

  // Fonction pour changer le statut de connexion
  const toggleConnection = () => {
    setUser(prev => ({ ...prev, connected: !prev.connected }));
  };

  return (
    <UserContext.Provider value={{ user, toggleConnection }}>
      {children}
    </UserContext.Provider>
  );
}
