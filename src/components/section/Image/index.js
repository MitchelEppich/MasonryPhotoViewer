import React, { useState } from "react";

import Modal from "../Modal";

const Image = props => {
  let { object } = props;

  let [showModal, setModalVisiblity] = useState(false);

  const toggleModal = () => setModalVisiblity(!showModal);

  return (
    <div className="image" onClick={toggleModal}>
      <img src={object.urls.thumb} alt={object.alt_description} />
      {showModal ? (
        <Modal>
          <div className="image__modal-backdrop" />
          <div className="image__modal-content">
            <img src={object.urls.regular} alt={object.alt_description} />
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Image;
