import React from "react";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Codeflix Blog",
    img: "public/codeflix.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Short Stack",
    img: "public/short-stack.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Google Book Search",
    img: "public/book-search.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Code Board",
    img:
      "public/codeBoard.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 5,
    title: "Weather App",
    img:
      "public/weatherapp.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 5,
    title: "Trivia Mind",
    img:
      "public/triviaMind.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={item.img} alt="" />
      </div>
      <div className="textContainer">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <button>Visit website</button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h1>My Work</h1>
      </div>
      <div className="cards">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
