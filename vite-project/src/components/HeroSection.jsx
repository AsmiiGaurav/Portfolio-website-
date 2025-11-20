import { ArrowDown } from "lucide-react";
import { RobotModel } from "./RobotModel"; // adjust path if needed

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 md:px-12"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left text section */}
        <div className="space-y-6 text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span>Hi there, I'm</span>
            <span className="text-primary"> Asmi</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground">
            I’m a final-year Computer Engineering undergraduate passionate about
            data analytics, machine learning, and AI-powered creativity.
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Right robot section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <RobotModel />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
