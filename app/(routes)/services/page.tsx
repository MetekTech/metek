import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    name: "Web Development",
    description: "Custom website and web application development",
    price: "$5,000 - $50,000",
    availability: "Available",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "iOS and Android mobile application development",
    price: "$10,000 - $100,000",
    availability: "Limited",
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "User interface and experience design for digital products",
    price: "$3,000 - $30,000",
    availability: "Available",
  },
  {
    id: 4,
    name: "Cloud Solutions",
    description: "Cloud infrastructure setup and management",
    price: "$2,000 - $20,000 / month",
    availability: "Available",
  },
  {
    id: 5,
    name: "AI Integration",
    description: "Artificial Intelligence solutions for businesses",
    price: "Custom Quote",
    availability: "Waitlist",
  },
] as const;

export default function Services() {
  return (
    <Container>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-bold text-3xl">Our Services</CardTitle>
          <CardDescription>
            Explore our range of digital solutions tailored for your business
            needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              A list of our currently available services
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Service</TableHead>
                <TableHead className="w-[300px]">Description</TableHead>
                <TableHead>Price Range</TableHead>
                <TableHead className="text-right">Availability</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{service.description}</TableCell>
                  <TableCell>{service.price}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className={cn(
                        service.availability === "Available" && "bg-green-600",
                        service.availability === "Limited" &&
                          "bg-yellow-600 text-black",
                        service.availability === "Waitlist" &&
                          "bg-blue-600 text-white",
                      )}
                      variant={
                        service.availability === "Available"
                          ? "default"
                          : service.availability === "Limited"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {service.availability}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Container>
  );
}
