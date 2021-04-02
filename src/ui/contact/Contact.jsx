
import React from 'react';

import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ContactForm from '../contactform/ContactForm'

// import './Contact.css';

export const Contact = () => {

    return (
        <div>
            <Jumbotron className="mt-4" fluid>
                <Container className="flex-column">
                    <ContactForm />
                </Container>
            </Jumbotron>
            <Jumbotron className="content-center mt-4" fluid>
                <Container>
                    <h5>Ili nas pronađite na drugi način!</h5>
                    <div className="content-center">
                        <p>Adresa: Matice srpske 999, 21101 Novi Sad</p>
                        <p>Radno vreme: pon-pet. 08-16h</p>
                        <p>Telefon: 021/00-00-000</p>
                        <p>Mobilni telefon: 064/000-00-00</p>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )

}

export default Contact;