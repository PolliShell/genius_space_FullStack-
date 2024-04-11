import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToDoForm } from "../ToDoForm/ToDoForm";

export const useModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return { modalIsOpen, openModal, closeModal };
};

export const ModalComponent = ({ modalIsOpen, closeModal, children }) => {
    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            {children}
        </Modal>
    );
};