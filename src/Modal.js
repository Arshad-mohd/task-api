import React from "react";
import { Modal, Button } from 'react-bootstrap';

function CustomModal({ show, handleClose, selectedRow }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Details : </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedRow && (
                    <div>
                        
                        <p>Name: {selectedRow.attributes.name}</p>
                        <p>Difficulty: {selectedRow.attributes.difficulty}</p>
                        <p>Effect: {selectedRow.attributes.effect}</p>
                        <p>Characteristics: {selectedRow.attributes.characteristics}</p>
                        <p>Inventors: {selectedRow.attributes.inventors}</p>
                        <p>Ingredients: {selectedRow.attributes.ingredients}</p>
                        <p>Side Effects: {selectedRow.attributes.side_effects}</p>
                        <p>Time to make: {selectedRow.attributes.time}</p>
                        <a href= {selectedRow.attributes.wiki}>Wiki</a>
                        
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;
