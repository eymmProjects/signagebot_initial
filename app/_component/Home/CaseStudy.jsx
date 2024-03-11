import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const features = [
  {
    name: "AI",
    description:
      "Unlock the future of efficiency and innovation with our state-of-the-art AI solutions. Dive into stories of how artificial intelligence is not just a buzzword but a transformative force, driving businesses forward with predictive analytics, machine learning, and smart automation.",
    icon: CloudArrowUpIcon,
  },
  {
    name: " Education",
    description:
      "Discover how our digital solutions are reinventing learning environments. From interactive whiteboards to customized learning platforms, we're enhancing engagement and empowering educators and students with technology that adapts to every unique educational need.",
    icon: LockClosedIcon,
  },
  {
    name: "Dynamic",
    description:
      "Step into the world of dynamic digital solutions, where adaptability meets precision. Explore case studies showcasing how flexible, real-time responsive technology has revolutionized customer experiences and operational agility in ever-changing markets.",
    icon: ArrowPathIcon,
  },
  {
    name: "Intelligent",
    description:
      "Intelligence goes beyond data processing. It's about making smart decisions. Our intelligent systems learn from patterns to improve workflows, automate complex processes, and elevate your business intelligence to new heights.",
    icon: FingerPrintIcon,
  },
  {
    name: "Displays in retail",
    description:
      "Reimagine the retail experience with our immersive digital displays. See how businesses are capturing attention and driving sales with stunning visuals and interactive screens that bring products to life and make shopping a memorable event.",
    icon: FingerPrintIcon,
  },
  {
    name: "Healthcare",
    description:
      "Healthcare is personal, and so is our technology. Delve into success stories where our tailored healthcare displays have improved patient engagement, streamlined care delivery, and supported medical professionals in their mission to heal.",
    icon: FingerPrintIcon,
  },
];

const caseStudy = () => {
  return (
    <div className="bg-primary py-14">
      <div className="mx-auto max-w-5xl ">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mx-auto text-5xl max-w-[460px] pt-20 tracking-tight text-white sm:text-6xl mb-10">
            Innovative Success Stories
          </h1>
        </div>

        <div className="mx-auto max-w-7xl  lg:text-center">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore how businesses and organizations have transformed their
            spaces with our AI, IoT, and robotics-enabled digital signage
            solutions. Witness the impact of dynamic, intelligent displays in
            retail, healthcare, education, and more.
          </p>
        </div>
      </div>

      {/*  */}
      <div className=" bg-primary sm:py-32">
        <div className="mx-auto max-w-5xl ">
          <div className="mx-auto max-w-2xl sm:mt-10 lg:mt-5 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand_blue">
                    <feature.icon
                      className="h-5 w-5 flex-none text-brand_violet"
                      aria-hidden="true"
                    />
                    <h1 className="text-white">{feature.name}</h1>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6"></p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default caseStudy;
