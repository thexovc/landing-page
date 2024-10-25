import Hero from "../components/Home/Hero";
import HomeRow from "../components/Resusable/Home/HomeRow";
import Navbar from "../components/Resusable/Navigation/Navbar/Navbar";

export default function Home() {
  return (
    <div className="space-y-5 pb-10">
      <div className="bg-primary">
        <Navbar />
        <Hero />
      </div>
      <div className="w-5/6 mx-auto space-y-5">
        <HomeRow
          direction="right"
          bgWhite={true}
          title="Project Management"
          description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
          buttonText="Get Started"
        />
        <HomeRow
          direction="left"
          bgWhite={true}
          title="Work together"
          description="With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others."
          buttonText="Try it now"
        />
      </div>
    </div>
  );
}
