"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Star, Sparkles, Award, Crown, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Reviews", id: "testimonials" }
          ]}
          brandName="BrewMobile"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Get Your Cofee To Go"
          description="Savor baristaquality espresso anytime, anywhere with our cuttingedge portable coffee machines Compact, powerful, and built for coffee enthusiasts who demand nothing but the best"
          tag="New Launch"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Shop Collection",
              href: "products"
            },
            {
              text: "Learn More",
              href: "features"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2036768/pexels-photo-2036768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Portable coffee machine brewing espresso"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Coffee Machines"
          description="Discover our premium collection of portable coffee makers"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "BrewMobile",
              name: "Pro Espresso Maker",
              price: "$299.00",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/19698485/pexels-photo-19698485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pro Espresso Maker portable coffee machine"
            },
            {
              id: "2",
              brand: "BrewMobile",
              name: "Travel Coffee Station",
              price: "$199.00",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/5589141/pexels-photo-5589141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Travel Coffee Station portable maker"
            },
            {
              id: "3",
              brand: "BrewMobile",
              name: "Mini Espresso Pod",
              price: "$149.00",
              rating: 4,
              reviewCount: "956",
              imageSrc: "https://images.pexels.com/photos/1419919/pexels-photo-1419919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mini Espresso Pod handheld coffee maker"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Perfect Brew"
          description="Find the ideal portable coffee solution for your lifestyle"
          plans={[
            {
              id: "1",
              badge: "Best Value",
              badgeIcon: Sparkles,
              price: "$149",
              subtitle: "Perfect for daily commuters",
              features: [
                "Compact design",
                "15-bar pressure pump",
                "Travel case included",
                "1-year warranty"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Award,
              price: "$199",
              subtitle: "Ideal for coffee enthusiasts",
              features: [
                "Premium build quality",
                "18-bar pressure system",
                "Multiple cup sizes",
                "Premium travel kit",
                "2-year warranty"
              ]
            },
            {
              id: "3",
              badge: "Professional",
              badgeIcon: Crown,
              price: "$299",
              subtitle: "For the ultimate coffee experience",
              features: [
                "Professional-grade components",
                "20-bar pressure system",
                "Temperature control",
                "Premium accessories",
                "Lifetime support"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Coffee Lovers Say"
          description="Real reviews from our satisfied customers"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Digital Nomad",
              company: "Remote Professional",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9052312/pexels-photo-9052312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson with coffee"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              company: "Tech Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/926390/pexels-photo-926390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen enjoying coffee"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Coffee Enthusiast",
              company: "Startup Founder",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8165343/pexels-photo-8165343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez with coffee machine"
            },
            {
              id: "4",
              name: "Lisa Thompson",
              role: "Travel Blogger",
              company: "Adventure Media",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3808842/pexels-photo-3808842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson drinking coffee"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of professionals who choose BrewMobile for their coffee needs"
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/33714874/pexels-photo-33714874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/26690615/pexels-photo-26690615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16629368/pexels-photo-16629368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2379944/pexels-photo-2379944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/30608594/pexels-photo-30608594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated on New Releases"
          description="Be the first to know about new portable coffee machines, exclusive deals, and brewing tips from our experts."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing emails. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Coffee Machines",
                  href: "products"
                },
                {
                  label: "Accessories",
                  href: "accessories"
                },
                {
                  label: "Bundles",
                  href: "bundles"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "help"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Warranty",
                  href: "warranty"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Press",
                  href: "press"
                }
              ]
            }
          ]}
          copyrightText="© 2025 BrewMobile | Premium Portable Coffee"
        />
      </div>
    </ThemeProvider>
  );
}