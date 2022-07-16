import Image from "next/image";

import aboutPic from "../public/images/homepage/ueber-mich.jpg";

const aboutObject = {
  image: aboutPic,
  altText: "Ein Bild von Jane Doe",
  title: "Über mich",
  text: "<p class='text-center pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit acaliquet morbi accumsan, arcu ullamcorper purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.</p><p class='text-center pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class='text-center pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
};

const About = () => {
  return (
    <section id="ueber-mich" aria-label="about abschnitt">
      <div className="d-flex | ueber__wrapper  flex-column flex-md-row">
        <div className="image__wrapper w-md-50 w-100">
          <Image
            src={aboutObject.image}
            alt={aboutObject.altText}
            className="img-fluid"
            placeholder="blur"
            priority
          />
        </div>
        <div className="text__wrapper w-md-50 w-100 d-flex flex-column justify-content-center pt-1 py-md-4 py-lg-0">
          <h2 className="heading-2 text-center text-warning">
            {aboutObject.title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: aboutObject.text }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
