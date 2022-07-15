import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";

import janeDoe from "../public/images/homepage/jane-doe.png";

const heroContent = {
  altText: "Ein Bild von Jane Doe",
  title: "Professionelle Fitnessberatung aus Ulm",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  btnText: "Jetzt beraten lassen!",
};

const socials = [
  {
    id: 1,
    image: "youtube.svg",
    title: "Youtube",
    url: "https://www.youtube.com/",
  },
  {
    id: 2,
    image: "instagram.svg",
    title: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    image: "tik-tok.svg",
    title: "Tik Tok",
    url: "https://www.tiktok.com/",
  },
];

const Hero = () => {
  return (
    <section className="wrapper" id="hero" aria-label="hero Abschnitt">
      <Row>
        <Col className="order-3 order-lg-1" lg={6}>
          <h1 className="text-warning | heading-1">{heroContent.title}</h1>
          <p className="text-dark | body-lg pt-3 pb-4">{heroContent.text}</p>
          <Link href="/kontakt" passHref>
            <Button size="lg" variant="primary">
              {heroContent.btnText}
            </Button>
          </Link>
        </Col>
        <Col
          lg={5}
          className="d-flex justify-content-center order-1 order-lg-2"
        >
          <Image
            src={janeDoe}
            alt="Ein Bild über Jane Doe"
            className="img-fluid"
            placeholder="blur"
            priority
            width="350"
            height="350"
          />
        </Col>
        <Col className="order-2 order-lg-3" lg={1}>
          <div className="socials | d-flex flex-column justify-content-center align-items-center h-100 ">
            {socials.map((social) => {
              return (
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={social.id}
                  href={social.url}
                >
                  <picture>
                    <img
                      src={`/images/${social.image}`}
                      alt={`${social.title} icon`}
                    />
                  </picture>
                </a>
              );
            })}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
