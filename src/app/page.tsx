"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Zap, Send, Linkedin, Globe, Twitter, Mail } from 'lucide-react';

export default function VCTechShopMilano() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="radialGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="VC TechShop Milano"
          navItems={[
            { name: "Portfolio", id: "portfolio" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Insights", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit 
          title="Invest in the Future of Technology"
          description="VC TechShop Milano partners with visionary founders building the next generation of transformative tech companies. We provide capital, mentorship, and strategic connections to fuel innovation."
          tag="Venture Capital"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144423127-u32sb4ti.jpg"
          imageAlt="Venture capital investment meeting"
          imagePosition="right"
          buttons={[
            { text: "View Portfolio", href: "portfolio" },
            { text: "Get in Touch", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout 
          tag="Our Mission"
          description="We believe exceptional founders deserve exceptional support. At VC TechShop Milano, we invest in entrepreneurs who challenge the status quo and reimagine what technology can achieve. Our thesis focuses on disruptive innovation in AI, fintech, deeptech, and climate solutions that create meaningful global impact."
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo 
          title="Portfolio Companies"
          description="Our carefully curated portfolio of high-growth startups transforming industries"
          tag="Featured Investments"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              brand: "NeuralPath",
              name: "AI Infrastructure Platform",
              price: "Series B",
              rating: 5,
              reviewCount: "2023",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144423643-iih7rgw9.jpg",
              imageAlt: "Tech startup office innovation environment"
            },
            {
              id: "2",
              brand: "PayFlow",
              name: "Fintech Payment Network",
              price: "Series A",
              rating: 5,
              reviewCount: "2024",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144424447-la6k91m8.jpg",
              imageAlt: "Artificial intelligence technology development"
            },
            {
              id: "3",
              brand: "GreenTech Solutions",
              name: "Climate Tech Platform",
              price: "Seed",
              rating: 5,
              reviewCount: "2024",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144425146-cixbejmk.jpg",
              imageAlt: "Fintech financial technology banking software"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo 
          title="Portfolio Performance"
          description="Track record of creating value and supporting breakthrough companies"
          tag="By the Numbers"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              value: "€250M+",
              description: "Capital Deployed"
            },
            {
              id: "2",
              value: "45",
              description: "Portfolio Companies"
            },
            {
              id: "3",
              value: "8x",
              description: "Average Return Multiple"
            },
            {
              id: "4",
              value: "12",
              description: "Unicorn Exits"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree 
          title="Our Team"
          description="World-class investors and operators with proven track records in building and scaling tech companies"
          tag="Leadership"
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Founding Partner & CEO",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144425827-ohq8ifzo.jpg",
              imageAlt: "Professional business man portrait headshot",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" }
              ]
            },
            {
              id: "2",
              name: "Elena Verdi",
              role: "Partner - Technology",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144426722-g5htygv7.jpg",
              imageAlt: "Professional business woman portrait headshot",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "3",
              name: "Giovanni Bianchi",
              role: "Partner - Operations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144427257-ona74y5g.jpg",
              imageAlt: "Professional business person investor portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:contact@vcshop.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo 
          title="What Founders Say"
          description="Hear from the entrepreneurs who are building the future with our support"
          tag="Success Stories"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sophia Laurent",
              role: "CEO & Founder",
              testimonial: "VC TechShop Milano didn't just provide capital - they opened doors, shared networks, and helped us navigate complex regulatory challenges. Their strategic guidance accelerated our growth by 18 months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144428270-6d9yym39.jpg",
              imageAlt: "Startup founder CEO professional portrait"
            },
            {
              id: "2",
              name: "Andrea Ricci",
              role: "Co-Founder & CTO",
              testimonial: "The team's deep fintech expertise and European connections were invaluable. They understood our market in ways many international VCs didn't. Best decision we made for Series A.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144429468-b9qzdqlh.jpg",
              imageAlt: "Entrepreneur business professional woman portrait"
            },
            {
              id: "3",
              name: "Luca Moretti",
              role: "Founder & CEO",
              testimonial: "Their commitment to climate tech and sustainability aligned perfectly with our mission. They're true partners, not just investors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144430412-ftjrk863.jpg",
              imageAlt: "Tech founder startup CEO man portrait"
            },
            {
              id: "4",
              name: "Francesca Gallo",
              role: "CEO & Founder",
              testimonial: "The support goes beyond funding. Marco and Elena are accessible, hands-on, and genuinely invested in our success. A rare combination in the VC world.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144431299-xbw0o7a6.jpg",
              imageAlt: "Business founder investor professional portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne 
          title="Backed by Industry Leaders"
          description="Our LPs include leading global institutions and family offices"
          tag="Partners"
          textboxLayout="default"
          speed={50}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144438744-fmeub2dk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144439513-5wzm41ev.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144439997-ix8fkje9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144440569-iowhvshn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144442265-jwsze34s.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144443247-bgixm40e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144443954-xdw53pai.jpg"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter 
          tag="Get Started"
          title="Ready to Transform Your Vision Into Reality?"
          description="Join our growing portfolio of innovative companies reshaping industries. We're actively investing in visionary founders with groundbreaking ideas."
          tagIcon={Send}
          inputPlaceholder="founder@yourstartup.com"
          buttonText="Send Pitch Deck"
          termsText="We respect your privacy. Unsubscribe at any time. By submitting, you agree to be contacted about investment opportunities."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis 
          logoText="VC TechShop Milano"
          columns={[
            {
              items: [
                { label: "Portfolio", href: "portfolio" },
                { label: "About", href: "about" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Insights", href: "blog" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "https://example.com/careers" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Terms of Service", href: "https://example.com/terms" },
                { label: "Compliance", href: "https://example.com/compliance" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}