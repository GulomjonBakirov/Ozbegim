import React, { Component } from "react";
import { blogsData } from "../data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./blog.css";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    blog: blogsData,
  };

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    let settings = {
      dot: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {},
      ],
    };

    return (
      <section id="blog" className="content about">
        <div>
          <h2 className="title aboutTitle">Blog</h2>
        </div>
        <Slider
          ref={(c) => (this.slider = c)}
          {...settings}
          className="blogSlider"
        >
          {blogsData.map((blog, blogIndex) => {
            const { id, image, description, title, date } = blog;

            return (
              <div className="card-wrapper">
                <div className="card-image">
                  <img src={image} className="blogImg" alt={image} />
                </div>
                <div className="details">
                  <a href="#blog" className="title blogTitle">
                    {title}
                  </a>
                  <p className="text blogDescription">{description}</p>
                  <p className="text date">{date}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="blogSlideDivider">
          <button className=" prev blogPrev" onClick={this.previous}>
            <img src="/images/prev.png" className="prevBlogImg" alt="prev" />
          </button>

          <button className=" next blogNext nextIndicator" onClick={this.next}>
            <img src="/images/next.png" className="nextBlogImg" alt="prev" />
          </button>
        </div>
      </section>
    );
  }
}
