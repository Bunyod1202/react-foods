import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ModalEditProvider, ModalProvider, UserProvider } from "./context/ModalContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <UserProvider>
      <ModalProvider>
        <ModalEditProvider>
          <App />
        </ModalEditProvider>
      </ModalProvider>
    </UserProvider>
  </BrowserRouter>
)
