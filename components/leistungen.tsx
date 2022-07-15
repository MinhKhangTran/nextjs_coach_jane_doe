import Image from "next/image";

import yogaPic from "../public/images/homepage/yoga.jpg";
import musclePic from "../public/images/homepage/fahrrad-fahren.jpg";
import gesundPic from "../public/images/homepage/gesundes-essen.jpg";
const leistungArray = [
  {
    id: 1,
    thumb: yogaPic,
    altText: "Eine Frau auf einem Berg. Sie macht Yoga",
    title: "Yoga",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
  {
    id: 2,
    thumb: musclePic,
    altText: "Ein Mann auf dem Fahrrad",
    title: "Ausdauertraining + Muskelaufbau",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
  {
    id: 3,
    thumb: gesundPic,
    altText: "Gesundes Essen",
    title: "Ernährungsberatung",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
];

const Leistungen = () => {
  return (
    <section id="leistungen" aria-label="Leistung Abschnitt">
      {leistungArray.map((leistung) => {
        return (
          <div
            key={leistung.id}
            className="d-flex | leistung__wrapper flex-column flex-md-row"
          >
            <div className="w-md-50 w-100">
              <Image
                src={leistung.thumb}
                alt={leistung.altText}
                className="img-fluid"
                placeholder="blur"
                priority
              />
            </div>
            <div className="w-md-50 w-100 d-flex flex-column justify-content-center">
              <h2 className="heading-2 text-center text-warning">
                {leistung.title}
              </h2>
              <p className="text-center pt-3">{leistung.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Leistungen;
