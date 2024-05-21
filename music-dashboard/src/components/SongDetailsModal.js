import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SongDetailsModal = ({ show, onHide, song }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Song Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {song && (
          <div>
            {Object.entries(song).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SongDetailsModal;
