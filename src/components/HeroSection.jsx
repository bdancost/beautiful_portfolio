const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">
          Discover a world of creativity and innovation
        </p>
        <a href="#projects" className="cosmic-button">
          Explore Projects
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
