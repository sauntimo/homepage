import React, { PropsWithChildren, useRef } from "react";

import { useClickAway } from "react-use";

interface ModalProps {
  buttonText: string;
  buttonStyles: string;
  modalTitle?: string;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  modalTitle,
  buttonText,
  buttonStyles,
  active,
  setActive,
  children,
}) => {
  const ref = useRef(null);
  const [showModal, setShowModal] = React.useState(false);

  const show = setActive ?? setShowModal;
  const status = active ?? showModal;

  useClickAway(ref, () => {
    show(false);
  });

  return (
    <>
      <button className={buttonStyles} type="button" onClick={() => show(true)}>
        {buttonText}
      </button>
      {status && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div ref={ref} className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold">{modalTitle}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => show(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black">&nbsp;</div>
        </>
      )}
    </>
  );
};
