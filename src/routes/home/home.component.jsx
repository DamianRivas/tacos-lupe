import { h } from "preact";

import Hero from "../../components/hero/hero.component";

import style from "./home.styles.scss";

// const sectionsData = [
//   {
//     title: "Real Mexican Tacos",
//     body: "The best place to get genuine, Mexican cuisine in Arizona.",
//     imageSrc: "assets/images/food/carne-asada/carne-asada-xl.jpg",
//   },
// ];

const Home = () => (
  <div class={style.home}>
    <Hero />
    <div class="container">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ut voluptas
      consectetur autem rem quam, natus ipsum, nulla ducimus recusandae,
      repudiandae aperiam assumenda magni? Nulla odio ducimus voluptas aliquid?
      Excepturi!
    </div>
  </div>
);

export default Home;
