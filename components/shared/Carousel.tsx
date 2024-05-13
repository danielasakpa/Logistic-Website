import * as React from "react";

import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Carousel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CarouselUI
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="gap-8">{children}</CarouselContent>
      <CarouselPrevious className="w-10 h-10" />
      <CarouselNext className="w-10 h-10" />
    </CarouselUI>
  );
}
 
export default Carousel;
