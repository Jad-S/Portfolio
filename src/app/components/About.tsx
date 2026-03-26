import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Rocket,
  Users,
  Award,
  Coffee,
  Heart,
  Zap as Lightning,
  Database,
  CodeIcon,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import Jadimg from "./figma/Jad.jpg";
import { TypewriterText } from "./TypewriterText";
import aboutmeimg1 from './figma/aboutmeimg1.jpg'
import aboutmeimg2 from './figma/aboutmeimg2.jpg'
import aboutmeimg3 from './figma/aboutmeimg3.jpg'
import aboutmeimg4 from './figma/aboutmeimg4.jpg'





export function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  const skills = [
    { name: "React & TypeScript", level: 60 },
    { name: "Databases", level: 74 },
    { name: "Javascript", level: 75 },
    { name: "UI/UX Design", level: 85 },
    { name: "HTML/CSS", level: 100 },
    { name: "C#", level: 75 },
  ];

  const values = [
    {
      icon: <Code2 size={32} />,
      title: "Backend Developer",
      description:
        "Ik ben wel full-stack developer, maar mijn voorkeur gaat meestal uit naar de backend.",
    },
    {
      icon: <Palette size={32} />,
      title: "Designer",
      description:
        "Designen vind ik heel leuk omdat ik veel van stijl hou en het belangrijk vind dat functionaliteit en een strak, stijlvol design goed samenkomen.",
    },
    {
      icon: <Database size={32} />,
      title: "Databases",
      description:
        "Ik werk graag met databases omdat ik het belangrijk vind dat data logisch is opgebouwd en goed aansluit op de backend.",
    },
    {
      icon: <CodeIcon size={32} />,
      title: "Frontend Developer",
      description:
        "Ik kan goed overweg met HTML, CSS en Javascript,.React is nog lastig, maar ben nog aan het oefenen",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            
          </h1>
<TypewriterText
  text="Wie ben ik?"
  className="text-4xl sm:text-5xl font-bold text-[#ff4500] mb-4 text-center"
/>
        </motion.div>

        <div className="mb-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* LINKS - TEKST (zonder border) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold text-white mb-6"
              >
                Full-Stack Developer <span className="text-[#ff4500]">&</span>{" "}
                Designer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
  Mijn naam is <span className="text-[#ff4500]">Jad</span>, ik ben 20 jaar oud en een{" "}
<span className="text-[#ff4500]">Frontend</span> en{" "}
<span className="text-[#ff4500]">Backend</span> developer uit Enschede, Nederland.
<br /><br />
Hieronder lees je meer over mijn <span className="text-[#ff4500]">achtergrond</span> en <span className="text-[#ff4500]">privéleven</span>... 
<br />
<br />

Ik ben geboren in <span className="text-[#ff4500]">Syrië</span>, maar door de burgeroorlog moest ik op mijn dertiende naar Nederland vluchten. De stap naar Nederland was  in het begin een moeilijke ervaring voor mij zoals verwacht. Alles was nieuw en ik moest opnieuw mijn weg vinden. Ook het leren van de taal was in het begin een uitdaging. Stap voor stap heb ik werd alles makkelijker vooral nadat ik het taal kon beter begrijpen en spreken, en dat heeft mij ook geholpen om richting te geven aan mijn toekomst. Mijn interesse in computers en het zelf bouwen van dingen is altijd gebleven, en dat is uiteindelijk ook de reden dat ik voor softwareontwikkeling heb gekozen.
<br />
<br />

Ik kan goed overweg met <span className="text-[#ff4500]">HTML</span>,{" "}
<span className="text-[#ff4500]">JavaScript</span>,{" "}
<span className="text-[#ff4500]">React</span> en{" "}
<span className="text-[#ff4500]">C#</span>. Ook ben ik goed in opzetten van databases. Ik vind het leuk om aan frontend en backend te werken, maar mijn voorkeur gaat meestal naar backend, daarnaast vind ik het heel leuk om dingen te bouwen van A tot Z. Ik let daarbij niet alleen op dat iets werkt, maar ook op hoe het eruitziet.

<br />
<br />

In mijn vrije tijd ben ik graag actief met <span className="text-[#ff4500]">sport</span> en <span className="text-[#ff4500]">gym</span>. Ik hou van <span className="text-[#ff4500]">zwemmen</span> en breng graag tijd door in de <span className="text-[#ff4500]">natuur</span>, vooral in de <span className="text-[#ff4500]">parken</span>.
<br />
<br />

Ik ga vaak naar het <span className="text-[#ff4500]">Ledeboerpark</span> in Enschede. Het is een rustig en groen park waar ik graag wandel en even tot rust kom. Het is voor mij een fijne plek om mijn hoofd leeg te maken en te ontspannen.
Daarnaast ben ik een echte <span className="text-[#ff4500]">filmliefhebber</span>.


<br />
<br />

Ik ben iemand die graag leert, goed kan samenwerken en altijd probeert zichzelf te verbeteren.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-white text-sm mt-6"
              ></motion.p>
            </motion.div>

<div className="flex-1 relative min-h-[600px]">

  {/* Image 1 - hoger */}
  <motion.div
    initial={{ opacity: 0, x: -50, y: -30 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
    className="absolute left-0 top-[-40px] w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ff4500]"
  >
    <ImageWithFallback
      src={aboutmeimg3}
      alt="Jad 1"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* Image 2 - midden */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    whileHover={{ scale: 1.05 }}
    className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ff4500]"
  >
    <ImageWithFallback
      src={aboutmeimg2}
      alt="Jad 2"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* Image 3 - lager */}
  <motion.div
    initial={{ opacity: 0, x: -50, y: 50 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    whileHover={{ scale: 1.05 }}
    className="absolute left-10 bottom-[-40px] w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ff4500]"
  >
    <ImageWithFallback
      src={aboutmeimg1}
      alt="Jad 3"
      className="w-full h-full object-cover"
    />
  </motion.div>

  <motion.div
  initial={{ opacity: 0, x: 50, y: 50 }}
  whileInView={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  whileHover={{ scale: 1.05 }}
  className="absolute right-0 bottom-[-120px] w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ff4500]"
>
  <ImageWithFallback
    src={aboutmeimg4}
    alt="Jad 4"
    className="w-full h-full object-cover"
  />
</motion.div>

</div>
          </div>
        </div>
        <br />
        <br />


        {/* VALUES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meer over mijn werk?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-white/10 text-center hover:border-[#ff4500]"
              >
                <div className="text-[#ff4500] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

                {/* SKILLS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technische Vaardigheden
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-[#ff4500]">{skill.level}%</span>
                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-[#ff4500]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
