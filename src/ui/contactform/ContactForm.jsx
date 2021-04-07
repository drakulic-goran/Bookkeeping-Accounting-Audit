
import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import './ContactForm.css';

export const ContactForm = () => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [myFormRef, setMyFormRef] = useState()
    const [modalShow, setModalShow] = useState(false);

    const onSubmit = async (data) => {
        try {
            const templateParams = {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            };
            await emailjs.send(
                'service_accounting',
                'template_accounting',
                templateParams,
                'user_ZMnT7Tuz3vqiIbTqY3MIs'
            );
            setForm({});
            setErrors({})
        } catch (e) {
            console.log(e);
        }
    };

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    };

    const findFormErrors = () => {
        const { name, email, subject, message } = form
        const newErrors = {}
        if (!name || name === '') newErrors.name = 'Mora biti popunjeno!'
        else if (name.length > 50) newErrors.name = 'Ime je predugačko!'
        if (!email || email === '') newErrors.email = 'Mora biti popunjeno!'
        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) newErrors.email = 'E-mail je neispravan!'
        if (!subject || subject === '') newErrors.subject = 'Mora biti popunjeno!'
        else if (subject.length > 50) newErrors.subject = 'Naslov je predugačak!'
        if (!message || message === '') newErrors.message = 'Mora biti popunjeno!'
        else if (message.length > 500) newErrors.message = 'Poruka je predugačka!'

        return newErrors
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            onSubmit(form);
            setModalShow(true);
        }
    }


    return (
        <div className='d-flex flex-column align-items-center'>
            <h5 className="content-center" >Ukoliko imate neko pitanje ili zahtev, budite slobodni da nas kontaktirate.</h5>
            <Form
                className="content-left mt-3" style={{ width: '100%', maxWidth: '600px' }}
                ref={(el) => setMyFormRef(el)}
                onSubmit={(e) => handleSubmit(e)}
            >
                <Form.Group>
                    <Form.Label>Ime</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('name', e.target.value)}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('email', e.target.value)}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Naslov</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('subject', e.target.value)}
                        isInvalid={!!errors.subject}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.subject}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tekst poruke</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={10}
                        onChange={e => setField('message', e.target.value)}
                        isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="content-center" >
                    <Button type='submit'>Pošalji</Button>
                </div>
            </Form>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Hvala Vam za interesovanje
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Vaše pitanje će biti razmotreno u najkraćem mogućem vremenskom roku i odgovor na isto će Vam biti prosleđen.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { setModalShow(false); myFormRef.reset(); }}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </div >
    );

}

export default ContactForm;