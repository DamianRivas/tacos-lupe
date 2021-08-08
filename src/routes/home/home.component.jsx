import { h } from "preact";

import Hero from "../../components/hero/hero.component";
import ContentSection from "../../components/content-section/content-section.component";

import style from "./home.styles.scss";

const Home = () => {
  const sectionsData = [
    {
      title: "Real Mexican Tacos",
      body: `The best place to get genuine, Mexican cuisine in Arizona.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quae sapiente. Sed eveniet voluptas non accusantium dicta reprehenderit, veniam maiores minima ipsum omnis adipisci asperiores mollitia et, aliquam cum perferendis? Enim suscipit, exercitationem non sunt quia similique repudiandae iste ex cupiditate voluptatum facere, qui ratione?`,
      imageSrc: "/assets/images/food/tacos-al-pastor/tacos-al-pastor-l.jpg",
    },
    {
      title: "Classic Mexican Experience",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima iste suscipit repellendus labore illum, qui necessitatibus minus quia, error molestiae velit eaque, dicta vitae nulla dolorem ratione ipsum reprehenderit exercitationem adipisci? Eaque dolorem sit eligendi quas a minus architecto. Facere exercitationem corrupti non iste quam.",
      imageSrc: "/assets/images/food/carne-asada/carne-asada-xl.jpg",
    },
  ];

  return (
    <main class={style.home}>
      <Hero />
      {sectionsData.map((sData, i) => (
        <ContentSection key={i} {...sData} />
      ))}
    </main>
  );
};

export default Home;
