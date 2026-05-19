import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({children}) {
    const [modal, setModal] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [type, setType] = useState("");

    const openModal = (type, item = null) => {
        setType(type);
        setEditItem(item);  // null = add mode, item = edit mode
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
        setEditItem(null); // clear on close
    }

    return (
        <ModalContext.Provider value={{editItem, modal, type, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);
