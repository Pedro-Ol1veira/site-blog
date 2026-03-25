import { HeroSection, FeatureSection, SuportSection, CustomerStorySection, CallToAction } from "./sections"

export const LandingPage = () => {
    return(
      <article className="flex flex-col gap-10 md:gap-20">
        <HeroSection />
        <FeatureSection />
        <SuportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    )
}