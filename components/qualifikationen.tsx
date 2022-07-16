import { Col, Row } from "react-bootstrap";

const qualiArray = [
  {
    id: 1,
    icon: "dumbbell.svg",
    title: "Fitnesstrainer B-Lizenz",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
  {
    id: 2,
    icon: "diet.svg",
    title: "Ernährungsberater",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
  {
    id: 3,
    icon: "buddhist-yoga-pose.svg",
    title: "Yoga Lehrer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
];

const Qualifikationen = () => {
  return (
    <section
      id="qualifikationen"
      aria-label="quali Abschnitt"
      className="wrapper"
    >
      <h2 className="heading-2 text-center text-warning">
        Sie profitieren von meinen Qualifikationen
      </h2>
      <Row>
        {qualiArray.map((quali) => {
          return (
            <Col key={quali.id} md={4} className="">
              <div className="image__wrapper | d-flex justify-content-center">
                <div className="image__wrapper--bubble | d-flex align-items-center justify-content-center">
                  <picture>
                    <img
                      src={`/images/${quali.icon}`}
                      alt={`${quali.title} icon`}
                      aria-hidden="true"
                    />
                  </picture>
                </div>
              </div>
              <h3 className="text-warning text-center">{quali.title}</h3>
              <p className="text-center">{quali.text}</p>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Qualifikationen;
