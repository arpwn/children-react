import React from 'react';

// Componente hijo
// Children es lo que se va a escribir dentro del componente Card
function Card ({ children }: { children: React.ReactNode }) {
    return(
        <div style={{ border: "1px solid black", padding: "10px" }}>
            {children}
        </div>
    );
}

export default Card;