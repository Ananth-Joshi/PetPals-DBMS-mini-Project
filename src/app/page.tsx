import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/Landing Page/FeatureCard"
import Footer from "@/components/Common/Footer";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
        <div className="flex justify-center items-center flex-wrap lg:gap-8 w-3/4">
            <Image src='/assets/labrador.png' height={500} width={500} alt="labrador image"></Image>
          <div className="text-white">
            <div className="text-4xl font-bold">Hello There!!!</div>
            <div className="text-xl break-words lg:w-[560px]">
              Our Open source list of Animal rescue centers helps you find the nearest rescue centers and register yourself as a volunteer. 
            </div>
            <Link href="/details" className="p-4 bg-violet-700 relative top-5 hover:bg-violet-800">View Database</Link>
          </div>   
      </div>
      <div className="mt-16 text-3xl text-white font-bold underline underline-offset-4">FEATURES</div>
      <div className="flex flex-wrap w-full justify-center gap-2 my-4 text-center">
        <FeatureCard title="Rescue Injured Animals" imagePath="/assets/landing_page_rescue_animals.jpeg" text="See a list of volunteers along with contacts who can help"/>
        <FeatureCard title="Expert On Their Duty" imagePath="/assets/VET.jpeg" text="Our centers have experts who excel in animal care including certified VETs"/>
        <FeatureCard title="24X7 Animal Care" imagePath="/assets/animal_care.jpeg" text="The rescue centers here offer quality of life to animals to ensure they are happy."/>
      </div>
      <Footer/>
    </div>
  );
}
