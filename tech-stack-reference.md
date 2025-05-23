# Website Tech Stack Quick Reference

## Meta/Facebook (React Ecosystem)
### React 19 (RC)
JavaScript library for building user interfaces with component-based architecture
- **Docs**: [react.dev](https://react.dev)
- **Your Usage**:
```tsx
// Basic component structure
export default function About() {
  return (
    <Container>
      <Card className="mb-8">
        {/* Component content */}
      </Card>
    </Container>
  );
}
```

### React Hook Form
Performant forms library with easy validation and minimal re-renders
- **Docs**: [react-hook-form.com](https://react-hook-form.com)
- **Your Usage**:
```tsx
// From contact-form.tsx
const form = useForm<FormSchema>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
    phone: "",
    email: "",
    message: "",
  },
});

function onSubmit(values: FormSchema) {
  console.log(values);
  toast({
    title: "Message sent!",
    description: "We'll get back to you as soon as possible.",
  });
}
```

### React Context API
Built-in React feature for sharing state across components
- **Docs**: [react.dev/reference/react/createContext](https://react.dev/reference/react/createContext)
- **Your Usage**:
```tsx
// From ui/form.tsx
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);
```

### React Suspense
React feature for handling async operations and loading states
- **Docs**: [react.dev/reference/react/Suspense](https://react.dev/reference/react/Suspense)
- **Your Usage**:
```tsx
// From about/page.tsx
<Suspense
  fallback={<Skeleton className="h-[450px] w-[800px] rounded-lg" />}
>
  <ImageGrid />
</Suspense>
```

## Vercel (Next.js Ecosystem)
### Next.js 15
React-based framework for building full-stack web applications with server-side rendering and routing
- **Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Your Usage**:
```tsx
// From layout.tsx
export const metadata: Metadata = {
  title: "Metek Tech",
  description: "Metek Tech is a software development company",
  generator: "create-next-app",
};
```

### Next.js App Router
File-based routing system with layouts and nested routes
- **Docs**: [nextjs.org/docs/app](https://nextjs.org/docs/app)
- **Your Usage**:
```tsx
// File structure: app/(routes)/about/page.tsx
// This creates the /about route with the layout wrapper
export default function About() {
  return <Container>{/* Page content */}</Container>;
}
```

### Next.js Image Optimization
Built-in image component with automatic optimization and lazy loading
- **Docs**: [nextjs.org/docs/app/api-reference/components/image](https://nextjs.org/docs/app/api-reference/components/image)
- **Your Usage**:
```tsx
// From image-grid.tsx
<Image
  src={images[index]}
  alt=""
  className="h-full w-full object-cover"
  height={400}
  width={400}
/>
```

### next-themes
Theme management for Next.js with system preference detection
- **Docs**: [github.com/pacocoursey/next-themes](https://github.com/pacocoursey/next-themes)
- **Your Usage**:
```tsx
// From layout.tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
  <Toaster />
</ThemeProvider>
```

### Local Fonts (Geist)
Next.js font optimization for loading custom fonts efficiently
- **Docs**: [nextjs.org/docs/app/building-your-application/optimizing/fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **Your Usage**:
```tsx
// From layout.tsx
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  preload: false,
});
```

## Microsoft
### TypeScript
Typed superset of JavaScript that adds static type definitions for better developer experience
- **Docs**: [typescriptlang.org](https://www.typescriptlang.org)
- **Your Usage**:
```tsx
// Type definitions throughout your app
type Service = {
  id: number;
  name: string;
  description: string;
  price: string;
  availability: "Available" | "Limited" | "Waitlist";
};

type FormSchema = z.infer<typeof formSchema>;
```

## Tailwind Labs
### Tailwind CSS
Utility-first CSS framework for rapidly building custom designs without leaving your HTML
- **Docs**: [tailwindcss.com](https://tailwindcss.com)
- **Your Usage**:
```tsx
// Utility classes throughout components
<h1 className="mb-8 font-bold text-4xl sm:text-5xl md:text-6xl">
  Welcome to Metek Tech
</h1>
<Button className="group bg-white px-8 py-6 text-black text-lg">
```

### tailwindcss-animate
Tailwind CSS plugin that provides animation utilities
- **Docs**: [github.com/jamiebuilds/tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Your Usage**:
```tsx
// From tailwind.config.ts
animation: {
  "fade-in": "fadeIn 1s ease-out forwards",
},
// In components
<div className="aspect-square animate-fade-in opacity-0">
```

## WorkOS (Radix)
### Radix UI
Unstyled, accessible component primitives for building high-quality design systems
- **Docs**: [radix-ui.com](https://radix-ui.com)
- **Your Usage**:
```tsx
// From ui/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
```

## shadcn
### shadcn/ui
Copy-paste React component library built on top of Radix UI and Tailwind CSS
- **Docs**: [ui.shadcn.com](https://ui.shadcn.com)
- **Your Usage**:
```tsx
// From contact/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

<Card>
  <CardHeader>
    <CardTitle>Contact Us</CardTitle>
  </CardHeader>
  <CardContent>
    <ContactForm />
  </CardContent>
</Card>
```

## Community/Independent Libraries
### Zod
TypeScript-first schema validation library for runtime type checking
- **Docs**: [zod.dev](https://zod.dev)
- **Your Usage**:
```tsx
// From contact-form.tsx
const formSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(50, "Name must not exceed 50 characters.")
      .transform((value) => value.trim()),
    email: z
      .string()
      .email("Please enter a valid email address.")
      .transform((value) => value?.trim().toLowerCase())
  })
```

### @hookform/resolvers
Integration layer between React Hook Form and validation libraries like Zod
- **Docs**: [github.com/react-hook-form/resolvers](https://github.com/react-hook-form/resolvers)
- **Your Usage**:
```tsx
// From contact-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";

const form = useForm<FormSchema>({
  resolver: zodResolver(formSchema),
  defaultValues: { /* ... */ },
});
```

### react-phone-number-input
International phone number input component with country selection
- **Docs**: [github.com/catamphetamine/react-phone-number-input](https://github.com/catamphetamine/react-phone-number-input)
- **Your Usage**:
```tsx
// From ui/phone-input.tsx
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

<RPNInput.default
  ref={ref}
  className={cn("flex", className)}
  flagComponent={FlagComponent}
  countrySelectComponent={CountrySelect}
/>
```

### lucide-react
Beautiful and consistent icon library for React applications
- **Docs**: [lucide.dev](https://lucide.dev)
- **Your Usage**:
```tsx
// From contact/page.tsx
import { Mail, MapPin, Phone } from "lucide-react";

<div className="flex items-start">
  <MapPin className="mt-1 mr-2 h-5 w-5" />
  <div>
    <h3 className="font-semibold">Address</h3>
    <p>123 Business Street</p>
  </div>
</div>
```

### class-variance-authority (CVA)
Library for creating variant-based component styles with TypeScript support
- **Docs**: [cva.style](https://cva.style)
- **Your Usage**:
```tsx
// From ui/button.tsx
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
  },
);
```

### clsx
Utility for constructing className strings conditionally
- **Docs**: [github.com/lukeed/clsx](https://github.com/lukeed/clsx)
- **Your Usage**:
```tsx
// From lib/utils.ts
import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage throughout components
className={cn("text-primary", isActive && "font-bold")}
```

### tailwind-merge
Utility to efficiently merge Tailwind CSS classes without style conflicts
- **Docs**: [github.com/dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **Your Usage**:
```tsx
// From lib/utils.ts combined with clsx
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### embla-carousel-react
Lightweight carousel/slider library with touch support
- **Docs**: [embla-carousel.com](https://www.embla-carousel.com)
- **Your Usage**:
```tsx
// From ui/carousel.tsx
import useEmblaCarousel from "embla-carousel-react";

const [carouselRef, api] = useEmblaCarousel({
  ...opts,
  axis: orientation === "horizontal" ? "x" : "y",
}, plugins);

// In about/page.tsx
<Carousel className="mx-auto w-full max-w-xs">
  <CarouselContent>
    <ImageGrid />
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### cmdk
Command menu React component (used in command palette/search interfaces)
- **Docs**: [cmdk.paco.me](https://cmdk.paco.me)
- **Your Usage**:
```tsx
// From ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn("flex h-full w-full flex-col overflow-hidden", className)}
    {...props}
  />
));
```

## Biomejs
### Biome
Fast formatter and linter for JavaScript, TypeScript, and JSON (ESLint + Prettier alternative)
- **Docs**: [biomejs.dev](https://biomejs.dev)
- **Your Usage**:
```json
// From biome.json
{
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "formatWithErrors": false
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": {
        "noUnusedImports": "warn",
        "noUnusedVariables": "warn"
      }
    }
  }
}
```

## PostCSS
### PostCSS
Tool for transforming CSS with JavaScript plugins (required by Tailwind)
- **Docs**: [postcss.org](https://postcss.org)
- **Your Usage**:
```js
// From postcss.config.mjs
const config = {
  plugins: {
    tailwindcss: {},
  },
};
```

## Web Standards
### CSS Variables (Custom Properties)
Native CSS feature for defining reusable values and enabling dynamic theming
- **Docs**: [developer.mozilla.org/en-US/docs/Web/CSS/--*](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- **Your Usage**:
```css
/* From globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
}

/* Used in Tailwind config */
colors: {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
}
```

---

*This reference organizes your tech stack by authorship/organization for quick documentation lookup. Each link goes directly to the official documentation.*