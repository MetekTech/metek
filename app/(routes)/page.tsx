import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
        mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
        neque eu tellus rhoncus ut eleifend nibh porttitor.
      </p>
      <p className="mb-4">
        Ut in nulla enim. Phasellus molestie magna non est bibendum non
        venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit
        odio.
      </p>
      <Button>Learn More</Button>
    </Container>
  );
}
