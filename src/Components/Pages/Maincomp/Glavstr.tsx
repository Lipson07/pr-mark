import React, { useEffect, useRef } from "react";
import glstr from "../../../Styles/Glavstr.module.scss";
import { skidki, skidki1, arrback, arrgo } from "../../../Assets/Main";
import Glavstrmain from "./Glavstrcomp/Glavstrmain";
import Footer from "../Footer";
const Glavstr = () => {
  const imgs1 = useRef<HTMLImageElement>(null);
  const imgs2 = useRef<HTMLImageElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const dot1 = useRef<HTMLDivElement>(null);
  const arr1 = useRef<HTMLDivElement>(null);
  const arr2 = useRef<HTMLDivElement>(null);
  const arrbacks = useRef<HTMLDivElement>(null);
  const arrgos = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = React.useState(0);
  document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  
  useEffect(() => {
    if (slide === 0) {
      imgs1.current!.style.opacity = "1";
      imgs2.current!.style.opacity = "0";
      arr1.current!.style.display = "none";
      arr2.current!.style.display = "flex";
      dot.current!.style.width = "70px";
      dot1.current!.style.width = "30px";
    }
    if (slide === 1) {
      imgs1.current!.style.opacity = "0";
      imgs2.current!.style.opacity = "1";
      arr1.current!.style.display = "flex";
      arr2.current!.style.display = "none";
      dot.current!.style.width = "30px";
      dot1.current!.style.width = "70px";
    }
  });
  return (
    <>
      <div className={glstr.glavstr}>
        <section>
          <img src={skidki} alt="" className={glstr.img} ref={imgs1} />
          <img src={skidki1} alt="" className={glstr.img1} ref={imgs2} />
          <div ref={arr1} onClick={() => setSlide(0)} className={glstr.arr}>
            <div className={glstr.leftarrow}></div>

            <div className={glstr.arrback} ref={arrbacks}>
              <img src={arrback} />
            </div>
          </div>
          <div ref={arr2} onClick={() => setSlide(1)} className={glstr.arr1}>
            <div className={glstr.rightarrow}></div>
            <div className={glstr.arrgo} ref={arrgos}>
              <img src={arrgo} />
            </div>
          </div>
          <div className={glstr.dots}>
            <div className={glstr.dot} ref={dot}></div>
            <div className={glstr.dot1} ref={dot1}></div>
          </div>
        </section>
        <Glavstrmain />
      </div>
      <Footer dv={1} />
    </>
  );
};

export default Glavstr;
