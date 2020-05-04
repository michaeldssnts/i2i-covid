import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import Button from 'components/button';
import Modal from 'components/modal';
import Select from 'components/select';
import Spinner from 'components/spinner';
import { fetchCountries } from 'services/countries';

const Subscribe = () => {
  const [isOpen, setState] = useState(false);
  const [{ data, loading }] = useAxios(fetchCountries());
  const countries = data && data.rows ? data.rows : null;

  const toggleModal = () => {
    setState(!isOpen);
  };

  const countryOptions = countries
    ? countries.map(({ country, iso }) => {
        return {
          label: country,
          value: iso,
        };
      })
    : [];

  return (
    <div className="c-subscribe">
      <Button className="-border-color-1 btn" onClick={toggleModal}>
        Subscribe
      </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        title="Subscribe"
        actionsComponent={() => (
          <div className="c-filters-action-buttons">
            <Button className="-border-color-1" type="submit" onClick={toggleModal}>
              Notify me
            </Button>
          </div>
        )}
      >
        <div className="subscribe-modal">
          <h3>Get notified on new data upload</h3>
          {!data && loading && <Spinner />}
          {data && !loading && (
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
                  <Select
                    name="cm-f-tjdudju"
                    aria-label="Country"
                    id="fieldtjdudju"
                    maxLength="200"
                    options={countryOptions}
                    placeholder="Subscribe to an specific country"
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Subscribe;
