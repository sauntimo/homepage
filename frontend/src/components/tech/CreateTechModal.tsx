import React, { useState } from "react";
import { TechForm } from "../form/Form";
import { Modal } from "../Modal";
export const CreateTechModal: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Modal
        buttonText="+"
        buttonStyles="btn btn-primary btn-circle btn-lg text-2xl fixed bottom-20 right-20"
        modalTitle="Create new tech item"
        active={active}
        setActive={setActive}
      >
        <TechForm onSubmit={() => setActive(false)} />
      </Modal>
    </div>
  );
};
