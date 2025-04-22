"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialData } from "./TestinmomialsDataInterface";
import TestimonialCard from "./TestinomialCard";

interface TestimonialSliderProps {
  testimonials: TestimonialData[];
  variant?: "card" | "quote";
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  variant = "card",
}) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: variant === "card", // Show dots for card variant
    infinite: true,
    speed: 500,
    slidesToShow: variant === "card" ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: variant === "card" ? 2 : 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="testimonial-slider">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <TestimonialCard testimonial={testimonial} variant={variant} />
            </div>
          ))}
        </Slider>
      </div>

      {variant === "quote" && (
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === activeSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {variant === "card" && (
        <div className="flex justify-center mt-8 gap-4"></div>
      )}
    </div>
  );
};

export default TestimonialSlider;
