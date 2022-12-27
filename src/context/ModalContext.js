import {  createContext, useState } from "react";

export const ModalContext = createContext();
export const ModalContextAdd = createContext();
export const ModalContextEdit = createContext();


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
export const ModalProvider = ({children}) => {
  const [modalAdd, setModalAdd] = useState(false);

  return (
    <ModalContextAdd.Provider
      value={{
        modalAdd,
        setModalAdd,
      }}
    >{children}</ModalContextAdd.Provider>
  );  
}
export const ModalEditProvider = ({ children }) => {
  const [modalEdit, setModalEdit] = useState(false);

  return (
    <ModalContextEdit.Provider
      value={{
        modalEdit,
        setModalEdit,
      }}
    >{children}</ModalContextEdit.Provider>
  );  
}