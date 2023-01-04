import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ModalEditProvider, ModalProvider, PutIdEditProvider, UserProvider } from "./context/ModalContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <UserProvider>
      <ModalProvider>
        <ModalEditProvider>
          <PutIdEditProvider>
          <App />
          </PutIdEditProvider>
        </ModalEditProvider>
      </ModalProvider>
    </UserProvider>
  </BrowserRouter>
)
