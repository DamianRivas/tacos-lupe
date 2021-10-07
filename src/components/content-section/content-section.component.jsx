import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import style from "./content-section.styles.scss";

const ContentSection = ({
  title,
  body,
  imageSrc = null,
  webp = null,
  isEven,
}) => {
  const imageRef = useRef(null);
  const bodyRef = useRef(null);
  const pRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        toggleActions: "restart resume none none",
      },
      opacity: 0,
      duration: 1.5,
    });
    gsap.from(pRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        toggleActions: "restart resume none none",
      },
      x: isEven ? "-10vw" : "10vw",
      opacity: 0,
    });
    ScrollTrigger.matchMedia({
      "(max-width: 1199.99px)": function () {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            toggleActions: "restart resume none none",
          },
          x: isEven ? "10vw" : "-10vw",
          opacity: 0,
        });
      },
      "(min-width: 1200px)": function () {
        gsap.fromTo(
          headingRef.current,
          {
            opacity: 0,
            x: 0,
          },
          {
            scrollTrigger: {
              trigger: headingRef.current,
              toggleActions: "restart resume none none",
            },
            x: isEven ? "-10vw" : "10vw",
            opacity: 1,
          }
        );
      },
    });
  }, []);

  return (
    <section class={style["c-split"]}>
      {imageSrc ? (
        <div class={style["img-container"]}>
          <picture>
            <source sizes="" srcset={webp} type="image/webp" />
            <img
              src={imageSrc}
              alt="Image of food served at Tacos Lupe"
              width="160"
              height="90"
              ref={imageRef}
            />
          </picture>
        </div>
      ) : null}
      <div class={style["content-body"]} ref={bodyRef}>
        <h2 ref={headingRef}>{title}</h2>
        <p ref={pRef}>{body}</p>
      </div>
    </section>
  );
};

export default ContentSection;
