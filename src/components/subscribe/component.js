import React, { useState } from 'react';
import Button from 'components/button';
import Modal from 'components/modal';

const Subscribe = () => {
  const [isOpen, setState] = useState(false);

  const toggleModal = () => {
    setState(!isOpen);
  };

  return (
    <div className="c-subscribe">
      <Button className="-border-color-1" onClick={toggleModal}>
        Subscribe
      </Button>

      <Modal isOpen={isOpen} onRequestClose={() => toggleModal(false)} title="Subscribe">
        <div className="subscribe-modal">
          <h3 color="#000">Get notified on new data upload</h3>
          <form
            id="subForm"
            className="js-cm-form"
            action="https://www.createsend.com/t/subscribeerror?description="
            method="post"
            data-id="30FEA77E7D0A9B8D7616376B900632311575FF58C7FD4C075C647EC7597F0FF1C0CE23F946F83D490D28C03B0F54880317A2210127DE612A79F4E709C3675BF2"
          >
            <div>
              <div className="form-fields">
                <label>Name </label>
                <input aria-label="Name" id="fieldName" maxLength="200" name="cm-name" required />
              </div>
              <div className="form-fields">
                <label>Email </label>
                <input
                  autoComplete="Email"
                  aria-label="Email"
                  className="js-cm-email-input qa-input-email"
                  id="fieldEmail"
                  maxLength="200"
                  name="cm-wjtuhy-wjtuhy"
                  required
                  type="email"
                />
              </div>
              <div className="form-fields">
                <label>Country </label>
                <input aria-label="Country" id="fieldtjdudju" maxLength="200" name="cm-f-tjdudju" />
              </div>
            </div>
            <div className="button">
              <Button className="-color-1" type="submit">
                Notify me
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Subscribe;