import { TypeAnimation } from "react-type-animation";
import SkillsSlider from "../components/SkillsSlider";
import { FiDownload } from "react-icons/fi";

import Counter from "../components/Counter";

function Home() {
  return (
    <>
      <section className="bg-dark-slate rounded-md border border-earthy-green py-10 lg:py-20 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
          <div className="flex items-center justify-center">
            <figure className="relative">
              <img src="/profile.png" alt="Profile" loading="lazy" />
              <img
                src="/anglebracketsProfile.svg"
                alt="Angle Brackets Profile"
                loading="lazy"
                className="absolute -bottom-8 left-[calc(50%-40px)]"
              />
            </figure>
          </div>
          <div>
            <p className="dm-mono-regular text-white text-base">
              <span className="text-soft-pink">{`<span>`}</span>
              <TypeAnimation
                sequence={["Hey, I'm Javad", 2000]}
                wrapper="span"
                speed={{ type: "keyStrokeDelayInMs", value: 250 }}
                repeat={Infinity}
              />
              <span className="text-soft-pink">{`</span>`}</span>
            </p>
            <h1 className="dm-mono-medium text-lime-green text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl my-5 leading-normal sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal">
              <span className="text-white">Junior</span>
              {`{`}Frontend Developer{`}`}
              <span className="text-white">
                React & Next{" "}
                <TypeAnimation
                  sequence={["developer", 2000, "engineer", 2000]}
                  wrapper="span"
                  speed={{ type: "keyStrokeDelayInMs", value: 250 }}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="dm-mono-regular text-white text-base">
              <span className="text-soft-pink">{`<p>`}</span>With expertise in
              cutting-edge technologies such as{" "}
              <span className="text-soft-pink">React</span>,{" "}
              <span className="text-soft-pink">Next</span>... I deliver web
              solutions that are both innovative and robust.
              <span className="text-soft-pink">{`</p>`}</span>
            </p>
            <div className="w-full my-10">
              <SkillsSlider />
            </div>
            <a
              href="#"
              className="flex items-center gap-2 dm-mono-medium text-lime-green text-base"
            >
              <FiDownload className="text-xl" /> {"["}Download my CV{"]"}
            </a>
          </div>
        </div>
      </section>
      <Counter />
    </>
  );
}

export default Home;
