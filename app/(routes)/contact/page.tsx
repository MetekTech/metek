import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Container>
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mt-1 mr-2 h-5 w-5" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 Business Street</p>
                  <p>Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>metek@metek.tech</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Our Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-h-9 aspect-w-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26455.075546754573!2d-118.41117467754491!3d34.0901349670038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Google Maps"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full rounded-md"
            />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
