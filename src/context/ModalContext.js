import {  createContext, useState } from "react";

export const ModalContext = createContext();


export const UserProvider = ({children}) => {
  const [modalPayments, setModalPayment] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        modalPayments,
        setModalPayment,
      }}
    >{children}</ModalContext.Provider>
  );  
}