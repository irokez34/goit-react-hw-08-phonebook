import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const HomeModal = () => {
  const [showModal, setShowModal] = useState(true);
  const ToggleModal = () => {
    setShowModal(false);
  };

  return <>{showModal && <Modal onClose={ToggleModal}></Modal>}</>;
};
