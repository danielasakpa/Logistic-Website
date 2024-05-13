import React from "react";
import Carousel from "./Carousel";

import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { quotes } from "@/constants";
import Image from "next/image";

const Quotes = () => {
  return (
    <Carousel>
      {quotes.map((quote, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="w-[450px] p-8 cursor-grab bg-black bg-opacity-60 hover:bg-opacity-70 text-blue3 hover:text-white border-none text-left">
              <CardContent className="flex flex-col aspect-square items-start justify-center gap-8">
                <Image
                  src={`/assets/images/client-${quote.img}.svg`}
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <span className="p-regular-18 font-semibold ">
                  {quote.name}
                </span>
                <span className="p-medium-24 font-semibold text-gray3">
                  {quote.quote}
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Quotes;
