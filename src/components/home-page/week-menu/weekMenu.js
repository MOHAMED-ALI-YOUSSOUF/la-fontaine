import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import weekMenus from "../../../helpers/data/week-menu.json";
import { CiStar } from "react-icons/ci";
import "./weekMenu.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeekMenu = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
          slidesToShow: 2,
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

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<CiStar key={i} className="star-icon" />);
    }
    return stars;
  };

  return (
    <>
      <h1 className="text-center">Spécialités de la semaine</h1>
      <Container>
        <div className="slider-container px-3">
          <Slider {...settings}>
            {weekMenus.map((weekMenu) => (
              <div key={weekMenu.id} className="carte">
                <Card className="shadow ">
                  <Card.Img
                    variant="top"
                    src={`/images/weekMenus/${weekMenu.image}`}
                  />
                  <Card.Body>
                    <Card.Title>{weekMenu.title}</Card.Title>
                    <Card.Text>{renderStars(weekMenu.rate)}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant="danger">20min</Button>
                      <Button variant="danger">Commander</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default WeekMenu;
