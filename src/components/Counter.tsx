import SlotCounter from "react-slot-counter";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineComputer, MdOutlineSentimentSatisfied } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { type ReactNode } from "react";

type CounterItem = {
  id: number;
  icon: ReactNode;
  value: number;
  text: string;
};

type Counters = CounterItem[];

const counters: Counters = [
  {
    id: 1,
    icon: <IoMdPerson className="text-lime-green text-2xl xl:text-3xl" />,
    value: 3,
    text: "Year Experience",
  },
  {
    id: 2,
    icon: <MdOutlineComputer className="text-lime-green text-2xl xl:text-3xl" />,
    value: 50,
    text: "Projects Completed",
  },
  {
    id: 3,
    icon: (
      <MdOutlineSentimentSatisfied className="text-lime-green text-2xl xl:text-3xl" />
    ),
    value: 95,
    text: "Satisfied Clients",
  },
  {
    id: 4,
    icon: <LiaAwardSolid className="text-lime-green text-2xl xl:text-3xl" />,
    value: 10,
    text: "Awards Winner",
  },
];

function Counter() {
  return (
    <section className="relative bg-dark-slate rounded-md border border-earthy-green py-10 px-5 my-5">
      <div className="absolute left-0 top-0 w-full h-full bg-checkered bg-cover bg-no-repeat bg-center invert-[1]"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {counters.map((item) => (
          <div
            key={item.id}
            className="lg:flex lg:justify-center dm-mono-medium text-white text-4xl xl:text-6xl"
          >
            <div className="flex flex-col gap-2">
              {item.icon}
              <div className="flex items-center gap-5">
                <SlotCounter
                  value={item.value}
                  animateOnVisible={{
                    triggerOnce: false,
                    rootMargin: "0px 0px -100px 0px",
                  }}
                  speed={1}
                  delay={1}
                />
                <span className="text-semi-transparent-white text-3xl xl:text-5xl">
                  {item.text === "Satisfied Clients" ? "%" : "+"}
                </span>
              </div>
              <span className="dm-mono-regular text-sm xl:text-lg">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
