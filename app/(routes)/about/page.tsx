import { ContactDialog } from "@/components/contact-dialog";
import { Container } from "@/components/container";
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
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

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
            {[...Array(5)].map((_, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={`https://picsum.photos/seed/${index}/800/450`}
                    alt={`Gallery image ${index + 1}`}
                    className="rounded-md object-cover"
                    height={450}
                    width={800}
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
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
