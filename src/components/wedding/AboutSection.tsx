const AboutSection = () => {
  return (
    <div className="bg-secondary text-text-dark py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl mb-12 text-primary">About Olivia</h2>
        
        <p className="text-lg md:text-xl mb-12 text-text-muted">
          Based in Birmingham, West Midlands, Olivia Flemming Smith is a professional wedding singer renowned 
          for her remarkable ability to adapt to various musical styles. With her extensive song knowledge and 
          stunning voice, she brings a unique versatility to every performance.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <span className="text-3xl text-primary">♥</span>
          <span className="text-3xl text-primary">♪</span>
        </div>

        <p className="text-lg md:text-xl text-text-muted">
          Her passion lies in weddings, finding joy in sharing her talent with couples on the happiest day of their 
          lives. Whether performing a show or providing background music, Olivia creates a relaxed and romantic 
          atmosphere that perfectly complements your special moments.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;