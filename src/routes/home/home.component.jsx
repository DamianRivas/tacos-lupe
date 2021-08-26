import { h } from "preact";

import Hero from "../../components/hero/hero.component";
import ContentSection from "../../components/content-section/content-section.component";

import style from "./home.styles.scss";

const Home = () => {
  const sectionsData = [
    {
      title: "Real Mexican Tacos",
      body: [
        <strong key="home-section-1">
          The best place to get genuine, Mexican cuisine in Arizona.
        </strong>,
        ` Enjoy authentic, homemade tacos from your local taqueria in Mesa, AZ! Tacos Lupe creates delicious meals using fresh ingredients and real Mexican recipes, never cutting corners. We take pride in our tacos, and we know once you visit our taqueria, you'll never go anywhere else.`,
      ],
      imageSrc:
        "/assets/images/food/tacos-con-chile/tacos-con-chile-l-16x9.jpg",
    },
    {
      title: "Classic Mexican Experience",
      body: `Unlike a lot of "Mexican" restaurants, our menu consists of real, Mexican favorites from our home south of the border. Passed down over generations and threaded throughout our culture, our authentic tacos are loved by everyone who tries them. We refuse to cut corners or make concessions for costs because our customer satisfaction is always the top priority. Visit your local taqueria today for a Mexican experience you'll never forget!`,
      imageSrc:
        "/assets/images/food/tacos-al-pastor/tacos-al-pastor-l-16x9.jpg",
    },
    {
      title: "Freshest Ingredients",
      body: [
        <strong key="home-section-2">
          At Tacos Lupe, we understand that the key to great tacos lies in the
          ingredients.
        </strong>,
        ` We use high-quality meats and produce in our meals, ensuring there is a burst of flavor in every bite. Each taco, quesadille, and chimichanga is handcrafted for the perfect flavor experience. No matter your tastes, rest assured that you'll find something to love at your local taqueria!`,
      ],
      imageSrc: "/assets/images/food/carne-asada/carne-asada-l-16x9.jpg",
    },
  ];

  return (
    <main class={style.home}>
      <Hero />
      <div class={style["home-body"]}>
        {sectionsData.map((sData, i) => (
          <ContentSection key={sData.title + i} {...sData} />
        ))}
      </div>
    </main>
  );
};

export default Home;
