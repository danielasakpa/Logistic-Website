import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { blogs, experience, fleets, services } from "@/constants";
import Quotes from "@/components/shared/Quotes";
import Blog from "@/components/shared/Blog";

export default function Home() {
  return (
    <>
      <section className="py-5 md:py-10 bg-cover">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-large text-blue2">
              Flexible <span className="text-yellow">Freight</span> Services.
            </h1>
            <p className="p-regular-20 md:p-regular-24 text-blue3">
              Our transportation division offers reliable and efficient
              solutions for all your transportation needs.
            </p>
            <div className="flex items-center gap-5">
              <Button
                size="lg"
                asChild
                className="button2 w-full sm:w-fit rounded-sm"
              >
                <Link href="#events">Discover containers</Link>
              </Button>
              <span className="p-regular-18 cursor-pointer text-blue3 hover:text-yellow">
                Get a quote
              </span>
            </div>
          </div>

          <Image
            src="/assets/images/bg-banner1.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section className="wrapper my-8 flex flex-col items-center gap-8 md:gap-20">
        <span className="p-semibold-20 text-blue2">
          We’ve worked on over 200 projects{" "}
          <span className="text-purple">with 150+ clients</span>
        </span>

        <div className="flex w-full flex-col gap-5 md:flex-row justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src={`/assets/images/logo-${index + 1}.svg`}
              alt="Logo"
              width={100}
              height={100}
            />
          ))}
        </div>
      </section>

      <section className="wrapper flex flex-col justify-center items-center text-center mt-32">
        <div className="max-w-[50rem] flex flex-col items-center gap-4">
          <span className="flex justify-center items-center py-1 px-2 text-blue2 bg-yellow rounded-sm w-[max-content]">
            SERVICES
          </span>
          <h2 className="h2-bold text-blue2">Worldwide Shipping.</h2>
          <p className="p-regular-20 md:p-regular-24 text-blue3">
            Logistics Hub delivers world class infrastructure solutions to
            customers and stakeholders across a broad range of industry sectors.
          </p>
        </div>

        <div className="w-full mt-28 flex flex-wrap gap-2">
          {services.map((service, index) => (
            <div key={index} className="w-[392px] h-[236px] text-start p-3">
              <div
                className="w-[max-content] p-4 rounded-full bg-yellow mb-5"
                dangerouslySetInnerHTML={{ __html: service.logo }}
              ></div>
              <p className="p-bold-24 mb-4 text-blue2">{service.title}</p>
              <p className="p-regular-18 text-blue3">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrapper flex flex-col justify-center items-center text-center mt-24">
        <div className="max-w-[50rem] flex flex-col items-center gap-4">
          <span className="flex justify-center items-center py-1 px-2 text-blue2 bg-yellow rounded-sm w-[max-content]">
            FLEET
          </span>
          <h2 className="h2-bold text-blue2">Freight Services.</h2>
          <p className="p-regular-20 md:p-regular-24 text-blue3">
            Our transportation division offers reliable and efficient solutions
            for all your transportation needs.
          </p>
        </div>

        <div className="w-full mt-28 flex flex-wrap justify-center gap-6">
          {fleets.map((fleet, index) => (
            <div
              key={index}
              className="flex items-end rounded-md w-[392px] h-[236px] text-blue2 text-start p-3 relative bg-gray2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div
                className="w-20 absolute top-4 right-4"
                dangerouslySetInnerHTML={{ __html: fleet.logo }}
              ></div>
              <h5 className="h5-bold mb-4">{fleet.title}</h5>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <div className="wrapper grid grid-cols-1 gap-5 lg:gap-16 md:grid-cols-2 2xl:gap-0">
          <div className="relative h-[500px]">
            <Image
              src="/assets/images/route-1.svg"
              alt=""
              className="absolute bottom-0 left-0 z-20"
              width={600}
              height={600}
            />
            <Image
              src="/assets/images/vehicle.png"
              alt=""
              className="absolute bottom-14 left-0"
              width={600}
              height={600}
            />
            <Image
              src="/assets/images/pins.svg"
              alt=""
              className="absolute bottom-6 left-0 z-30"
              width={600}
              height={600}
            />
          </div>
          <div className="text-left flex flex-col gap-6">
            <span className="flex justify-center items-center py-1 px-2 text-blue2 bg-yellow rounded-sm w-[max-content]">
              EXPERIENCE
            </span>
            <h1 className="h1-bold text-blue2 mb-4">
              Trusted <br />
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple relative inline-block">
                <span className="relative text-white">experience.</span>
              </span>
            </h1>
            <p className="p-regular-20 text-blue3 mb-4">
              Our team has a wealth of experience in managing every aspect of
              the supply chain, from procurement to distribution. We use
              advanced technology to optimize each step of the process, ensuring
              that our clients' goods are delivered on time and within budget.
            </p>

            <div className="flex gap-5 justify-between">
              {experience.map((exp, index) => (
                <div key={index} className="flex flex-col text-start mb-6">
                  <h2 className="h2-bold text-blue2">{exp.num}</h2>
                  <p className="p-regular-20 text-blue3">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-28 p-8 bg-blue2 bg-dotted-pattern bg-contain"
        style={{ backgroundImage: 'url("/assets/images/pattern.png")' }}
      >
        <div className="wrapper flex flex-col justify-center items-center text-center">
          <div className="max-w-[50rem] flex flex-col items-center gap-4 mb-12">
            <span className="flex justify-center items-center py-1 px-2 text-blue2 bg-yellow rounded-sm w-[max-content]">
              QUOTES
            </span>
            <h2 className="h2-bold text-white">International Partners.</h2>
            <p className="p-regular-20 md:p-regular-24 text-blue3">
              Our transportation division offers reliable and efficient
              solutions for all your transportation needs.
            </p>
          </div>

          <Quotes />
          <span className="p-medium-14 text-blue3 mt-16 py-1 px-4 rounded-full border border-blue3">
            Have a project in mind? You’re welcome to send a{" "}
            <span className="text-yellow underline underline-yellow underline-offset-1">
              message
            </span>{" "}
            or{" "}
            <span className="text-yellow underline underline-yellow underline-offset-1">
              give us a call.
            </span>
          </span>
        </div>
      </section>

      <section className="wrapper flex flex-col justify-center items-center text-center mt-24">
        <div className="max-w-[50rem] flex flex-col items-center gap-4">
          <span className="flex justify-center items-center py-1 px-2 text-blue2 bg-yellow rounded-sm w-[max-content]">
            BLOG
          </span>
          <h2 className="h2-bold text-blue2">Latest News</h2>
          <p className="p-regular-20 md:p-regular-24 text-blue3">
            Our transportation division offers reliable and efficient solutions
            for all your transportation needs.
          </p>
        </div>

        <div className="flex flex-row gap-5 item-center px-12 mt-12">
          {
            blogs.map((blog, index) => (
              <Blog key={index} blog={blog}/>
            ))
          }
        </div>
      </section>
    </>
  );
}
