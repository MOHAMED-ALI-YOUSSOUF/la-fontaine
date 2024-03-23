import React from "react";
import "./testimonials.scss";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ballah",
      testimonial:
        "Vivamus scelerisque, ipsum sit amet vehicula fringilla, elit magna varius elit, vitae ultricies risus nisi id odio.",
      avatar: "1.jpg",
    },
    {
      id: 2,
      name: "Hadji",
      testimonial:
        "Vivamus scelerisque, ipsum sit amet vehicula fringilla, elit magna varius elit, vitae ultricies risus nisi id odio.",
      avatar: "2.jpg",
    },
    {
      id: 3,
      name: "Yesmo",
      testimonial:
        "Vivamus scelerisque, ipsum sit amet vehicula fringilla, elit magna varius elit, vitae ultricies risus nisi id odio.",
      avatar: "3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-center my-4 py-4">What Our Clients Say</h1>
      <div className="testimonials px-3">
        <Container>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <Card className="m-3 p-1 text-center ">
                  <Card.Img
                    variant="top"
                    src={`/images/testimonial/${testimonial.avatar}`}
                  />
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Body>
                    <Card.Text>{testimonial.testimonial}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
