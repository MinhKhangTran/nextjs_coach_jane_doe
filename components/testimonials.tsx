import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testiArray = [
  {
    id: 1,
    title: "Bob Andrews",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
  {
    id: 2,
    title: "Justus Jonas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
  {
    id: 3,
    title: "Peter Shaw",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit ac aliquet morbi accumsan, arcu ullamcorper purus.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section
      id="testimonials"
      aria-label="testimonials Abschnitt"
      className="wrapper"
    >
      <Slider {...settings}>
        {testiArray.map((testi) => {
          return (
            <div key={testi.id}>
              <div className="d-flex justify-content-center">
                <picture>
                  <img src="/images/quote.svg" aria-hidden="true" alt="quote" />
                </picture>
              </div>
              <p className="text-center">{testi.text}</p>
              <h2 className="heading-3 text-warning text-center">
                {testi.title}
              </h2>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Testimonials;
