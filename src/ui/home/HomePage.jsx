
import React from 'react';

// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'

import './HomePage.css';

export const HomePage = () => {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };

    return (
        <div>
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-sm-12 content-center">
                        <h3>Pozovite nas i unapredite vaše poslovanje!</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="/img/bookkeeping.jpg?img=1"
                                    alt="First slide"
                                    thumbnail
                                />
                                <Carousel.Caption>
                                    <h3>Precizne i ažurne knjigovodstvene, računovodstvene i revizorske usluge</h3>
                                    <p>Odgovornost za poveren posao, pouzdanost, ljubaznost.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="/img/tax.jpg?img=1"
                                    alt="Second slide"
                                    thumbnail
                                />
                                <Carousel.Caption>
                                    <h3>Poresko savetovanje</h3>
                                    <p>Obračun PDV-a. Zastupanje pred organima Poreske uprave. Korespodencija sa Poreskom Upravom.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="/img/employees.jpg?img=1"
                                    alt="Third slide"
                                    thumbnail
                                />
                                <Carousel.Caption>
                                    <h3>Radni odnos</h3>
                                    <p>Prijave, odjave radnika kao i priprema svih ugovora i obrazaca vezanih za radne odnose. Obračun zarada i naknada zarada. Izradu M-4 obrazaca, PPP obrazaca. Upis radnog staža.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomePage;