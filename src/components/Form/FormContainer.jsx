import React from "react";

function FormContainer({ children }) {
  return (
    <div
      className="w-full h-screen flex place-items-center gap-2
		justify-between 
		"
    >
      {children}
    </div>
  );
}

export default FormContainer;
