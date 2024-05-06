import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Flipkart Home Page",
    image: ImageOne,
    link: "https://samsritha63.github.io/FlipCart_homePage_clone/",
  },
  {
    id: 2,
    name: "Calculator App",
    link: "https://samsritha63.github.io/Calculator-App/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Music Player",
    image: ImageThree,
    link: "https://samsritha63.github.io/Music-Player/",
  },
  {
    id: 2,
    name: "To-do",
    image: ImageFour,
    link: "https://samsritha63.github.io/To-Do-List/",
  },
  {
    id: 2,
    name: "Personal Note Creator",
    image: ImageOne,
    link: "https://github.com/Samsritha63/Personal_Note_Creator",
  },
  {
    id: 2,
    name: "Campus Connect",
    image: ImageTwo,
    links: [
      "https://github.com/Samsritha63/Campus_Connect_Frontend",
      "https://github.com/Samsritha63/Campus_Connect_Backend"
    ]
  },
  {
    id: 3,
    name: "App Designs Dark",
    image: ImageFive,
    link: "https://www.figma.com/file/gE2Bw6FddqHUx6jS9c3m58/Untitled?type=design&node-id=0%3A1&mode=design&t=9qF16uGF7O01H1Mo-1",
  },
  {
    id: 3,
    name: "App Designs Bright",
    image: ImageFive,
    link: "https://www.figma.com/file/tntPwbDABT27QjTnLVllO7/Doctorspectra-Bright?type=design&mode=design&t=9qF16uGF7O01H1Mo-1",
  },
  {
    id: 3,
    name: "App Designs Color",
    image: ImageFive,
    link: "https://www.figma.com/file/9CAcHulCm8O6adc9Tp4WdL/Doctorspectra-UI-Design?type=design&node-id=806%3A2&mode=design&t=9qF16uGF7O01H1Mo-1",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link || item.links[0]} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {item.links ? (
                      item.links.map((link, i) => (
                        <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                          <button>Visit Link {i + 1}</button>
                        </a>
                      ))
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <button>Visit</button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
