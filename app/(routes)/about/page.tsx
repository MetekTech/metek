import { Container } from "@/components/container";
import { ContactDialog } from "@/components/navbar/contact-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Suspense } from "react";

export default function About() {
  return (
    <Container>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-bold text-4xl">
            Welcome to Our Website
          </CardTitle>
          <CardDescription>
            Discover amazing products and services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
          <Button size="lg">Learn More</Button>
        </CardContent>
      </Card>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-3xl">Our Gallery</h2>
        <Carousel className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <CarouselContent>
            <Suspense
              fallback={<Skeleton className="h-[450px] w-[800px] rounded-lg" />}
            >
              <ImageGrid />
            </Suspense>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-3xl">Our Features</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Feature {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
                  vehicula.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="font-semibold text-2xl">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Ut in nulla enim. Phasellus molestie magna non est bibendum non
            venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
            Mauris iaculis porttitor posuere. Praesent id metus massa, ut
            blandit odio.
          </p>
          <ContactDialog />
        </CardContent>
      </Card>
    </Container>
  );
}

function ImageGrid() {
  const images = Array.from({ length: 5 }, (_, index) => ({
    src: `https://picsum.photos/800/450?random=${index + 1}`,
    alt: `Gallery image ${index + 1}`,
  }));

  return images.map((image, index) => (
    <CarouselItem key={image.alt}>
      <AspectRatio ratio={16 / 9}>
        <Image
          priority={index === 0}
          src={image.src}
          alt={image.alt}
          className="rounded-md object-cover"
          loading={index === 0 ? "eager" : "lazy"}
          height={450}
          width={800}
        />
      </AspectRatio>
    </CarouselItem>
  ));
}
