import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Privacy.css';
const PrivacyStatementModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <footer>
                {/* This link triggers the modal */}
                <a href="#!" onClick={handleShow} style={{ textAlign: "center" }} className="blinking-link">
                 <h2>  Privacy Statement </h2>
                </a>
            </footer>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Statement for Virtual Try-On</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>At Haute-U AR Technologies, we are committed to protecting your privacy and ensuring a secure environment for all our users.</h3>
                    <p>This Privacy Statement outlines our practices regarding the collection, use, and safeguarding of your information through our web and mobile applications (collectively referred to as the "App").</p>

                    <h3>Information Collection and Use</h3>
                    <p><strong>User-Provided Information:</strong> When you use our App, we may ask you to provide personal information, such as your email address or username, to create and manage your account. Additionally, our App allows you to upload photographs for processing by our generative AI technologies.</p>

                    <h3>Photos and AI Processing</h3>
                    <p>Our App uses advanced generative AI to process the photos you upload. This process involves analyzing the images to generate or enhance content based on your input. Here's how we handle this process:</p>
                    <ul>
                        <li><strong>Temporary Storage:</strong> Photos uploaded by you are temporarily stored on our servers for processing. This storage is strictly for the time necessary to deliver the AI-generated results to you.</li>
                        <li><strong>No Permanent Storage:</strong> We do not store your photos permanently. All images are automatically deleted from our temporary storage after the processing is completed and the generated content is delivered to your app interface.</li>
                        <li><strong>Privacy by Design:</strong> Our AI processes are designed with privacy in mind, ensuring that your photos are not used for any other purposes than what you have explicitly requested.</li>
                    </ul>

                    <h3>Data Security</h3>
                    <p>We employ robust security measures to protect the data you provide from unauthorized access, alteration, disclosure, or destruction. Our security practices include, but are not limited to, encryption, firewalls, and secure server facilities.</p>

                    <h3>Changes to This Privacy Statement</h3>
                    <p>We may update this Privacy Statement from time to time. We will notify you of any changes by posting the new Privacy Statement on this page. You are advised to review this Privacy Statement periodically for any changes.</p>

                    <h3>Contact Us</h3>
                    <p>If you have any questions about this Privacy Statement or our privacy practices, please contact us at info@hauteuar.com.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PrivacyStatementModal;
