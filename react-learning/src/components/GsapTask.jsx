import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const GsapTask = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let value = gsap.timeline({});
    value.to(".x", {
      scale: 1.9,
      duration: 3,
      scrollTrigger: {
        trigger: ".para",
        start: "20% top",
        end: "70% 20%",
        scrub: 2,
        // markers: true,
      },
    });
  });
  return (
    <>
      <div className="h-screen container mt-11">
        <p className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
      </div>
      <div className="h-screen container">
        <p className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          blanditiis minus ratione dolorum cumque, cum ad veritatis consequuntur
          porro enim hic iste, id sint recusandae autem, ex aliquid. Nisi,
          ipsam!
        </p>
      </div>
    </>
  );
};

export default GsapTask;
