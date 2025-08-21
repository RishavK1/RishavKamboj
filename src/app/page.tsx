import { BackgroundBeams } from "@/components/ui/background-beams";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <NavBar />
      <div className="lg:mt-32">
        <div className="h-[70rem] lg:h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-3xl mx-auto pb-40 lg:pb-4 px-4">
            <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              About Me
            </h1>
            <p className="mx-auto my-6 text-center text-sm md:text-lg text-white">
              Information Technology UnderGrade & Web Developer
            </p>
            <div className="mt-12 text-center mx-auto flex justify-center bg-gradient-to-b from-teal-500 rounded-full h-72 w-72 md:w-96 md:h-96 overflow-hidden">
              <Image
                src="/avatar.png"
                alt="Rishav Kamboj Profile Picture"
                width={384}
                height={384}
                className="flex flex-col w-full h-full object-cover"
              />
            </div>
            <p className="text-neutral-500 mt-8 text-lg max-w-3xl mx-auto my-8  text-center relative z-10">
              Greetings! I&apos;m Rishav Kamboj, a Information Technology
              undergraduate and a passionate Full Stack Developer, specializing
              in building modern, scalable, and user-friendly web applications.
              My journey in web development is fueled by curiosity, creativity,
              and a commitment to excellence. I bring a versatile skill set
              across both front-end and back-end development, enabling me to
              transform ideas into seamless digital experiences. Currently,
              I&apos;m exploring AI integration, SaaS products, and open-source
              contributions, always eager to push the boundaries of what
              technology can achieve
            </p>
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </div>
  );
}
