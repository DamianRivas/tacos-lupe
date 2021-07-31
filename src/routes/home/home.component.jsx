import { h } from "preact";
import style from "./home.styles.scss";

import ComingSoon from "../../components/coming-soon/coming-soon.component";

const Home = () => (
  <div class={style.home}>
    <ComingSoon />
  </div>
);

export default Home;
