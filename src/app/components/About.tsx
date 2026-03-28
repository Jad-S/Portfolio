import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Database,
  CodeIcon,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import aboutmeimg1 from './figma/aboutmeimg1.jpg'
import aboutmeimg2 from './figma/aboutmeimg2.jpg'
import aboutmeimg3 from './figma/aboutmeimg3.jpg'
import aboutmeimg4 from './figma/aboutmeimg4.jpg'
import { TypewriterText } from "./TypewriterText";

export function About() {
  // const [isExpanded, setIsExpanded] = useState(false);

  const skills = [
    { name: "React & TypeScript", level: 40 },
    { name: "Databases", level: 65 },
    { name: "Javascript", level: 70 },
    { name: "UI/UX Design", level: 70 },
    { name: "HTML/CSS", level: 100 },
    { name: "C#", level: 60 },
    { name: "PHP", level: 80 },
  ];

  // const values = [
  //   {
  //     icon: <Code2 size={32} />,
  //     title: "Backend Developer",
  //     description:
  //       "Ik ben wel full-stack developer, maar mijn voorkeur gaat meestal uit naar de backend.",
  //   },
  //   {
  //     icon: <Palette size={32} />,
  //     title: "Designer",
  //     description:
  //       "Designen vind ik heel leuk omdat ik veel van stijl hou en het belangrijk vind dat functionaliteit en een strak, stijlvol design goed samenkomen.",
  //   },
  //   {
  //     icon: <Database size={32} />,
  //     title: "Databases",
  //     description:
  //       "Ik werk graag met databases omdat ik het belangrijk vind dat data logisch is opgebouwd en goed aansluit op de backend.",
  //   },
  //   {
  //     icon: <CodeIcon size={32} />,
  //     title: "Frontend Developer",
  //     description:
  //       "Ik kan goed overweg met HTML, CSS en Javascript,.React is nog lastig, maar ben nog aan het oefenen",
  //   },
  // ];

  const fullText = (
    <>
Ik ben een <span className="text-[#ff4500]">designer</span>,{" "}
<span className="text-[#ff4500]">Frontend</span> en{" "}
<span className="text-[#ff4500]">Backend</span>{" "}
<span className="text-[#ff4500]">developer</span> die nog volop aan het groeien is<span className="text-[#ff4500]">...</span>
      <br />
      {/* <br /><br />
      Hieronder lees je meer over mijn <span className="text-[#ff4500]">achtergrond</span> en <span className="text-[#ff4500]">privéleven</span>...  */}
      <br />
      Ik kan goed overweg met <span className="text-[#ff4500]">HTML</span>,{" "}
      <span className="text-[#ff4500]">CSS</span>,{" "}
      <span className="text-[#ff4500]">Javascript</span> en{" "}
      <span className="text-[#ff4500]">C#</span>. Ook ben ik goed in opzetten van databases. Ik vind het leuk om aan frontend en backend te werken, maar mijn voorkeur gaat meestal naar backend, daarnaast vind ik het heel leuk om dingen te bouwen van A tot Z. Ik let daarbij niet alleen op dat iets werkt, maar ook op hoe het eruitziet.
      <br /><br />
      Ik ben iemand die oog heeft voor <span className="text-[#ff4500]">details</span> en het belangrijk vindt dat iets er netjes en verzorgd uitziet. <span className="text-[#ff4500]">Design</span> speelt voor mij een grote rol; ik vind het leuk om na te denken over hoe iets niet alleen functioneel, maar ook visueel aantrekkelijk kan zijn.
<br />
Mijn interesse in <span className="text-[#ff4500]">computers</span> en <span className="text-[#ff4500]">techniek</span> heb ik al van jongs af aan, en door de jaren heen is dat alleen maar verder gegroeid. Het heeft ervoor gezorgd dat ik me steeds meer ben gaan verdiepen in het bouwen van complete en goed doordachte <span className="text-[#ff4500]">oplossingen</span>.
<br /><br />
       <div className="flex flex-col items-center">
    <div className="text-gray-400 text-sm -ml-100">S  C  R  O L  L</div>
        <br />
    {/* Lijn */}
    <div className="w-[2px] h-79 bg-gray-500 -ml-100 "></div>

  </div>      <br /><br />
      In mijn vrije tijd ben ik graag actief met <span className="text-[#ff4500]">sport</span> en <span className="text-[#ff4500]">gym</span>. Ik hou van <span className="text-[#ff4500]">zwemmen</span> en breng graag tijd door in de <span className="text-[#ff4500]">natuur</span>, vooral in de <span className="text-[#ff4500]">parken</span>.
      <br /><br />
      Ik ga vaak naar het <span className="text-[#ff4500]">Ledeboerpark</span> in Enschede. Het is een rustig en groen park waar ik graag wandel en even tot rust kom. Daarnaast ben ik een echte <span className="text-[#ff4500]">filmliefhebber</span>.
      <br /><br />
      Ik ben iemand die graag leert, goed kan samenwerken en altijd probeert zichzelf te verbeteren.
    </>
  );

//   const previewText = (
//     <>
// Ik ben een <span className="text-[#ff4500]">designer</span>,{" "}
// <span className="text-[#ff4500]">Frontend</span> en{" "}
// <span className="text-[#ff4500]">Backend</span>{" "}
// <span className="text-[#ff4500]">developer</span> die nog volop aan het groeien is<span className="text-[#ff4500]">...</span>
//     </>
//   );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-16"
        >

<div className="max-w-4xl flex flex-col items-start">
  {/* TITEL */}
  <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 ml-4">
    Over mij...
  </h1>
  {/* LIJN */}
</div>
        </motion.div>
        

        <div className="mb-20">
<div className="max-w-4xl mx-auto flex flex-col items-start mr-90">          {/* LINKS - TEKST */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
            

              {/* Inklapbare tekst */}
<motion.p className="text-gray-300 text-lg leading-relaxed mb-4 ml-4 text-left">
  {fullText}
</motion.p>
            </motion.div>
            

            {/* RECHTS - Images */}
            {/* <div className="flex-1 relative min-h-[600px]">
              {[aboutmeimg3, aboutmeimg2, aboutmeimg1, aboutmeimg4].map((img, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ff4500]`}
                  style={{
                    width: i % 2 === 0 ? 224 : 256,
                    height: i % 2 === 0 ? 224 : 256,
                    top: i < 2 ? (i === 0 ? -40 : "50%") : i === 2 ? "auto" : "auto",
                    bottom: i > 1 ? (i === 2 ? -40 : -120) : "auto",
                    left: i % 2 === 0 ? (i === 0 ? 0 : 40) : "auto",
                    right: i % 2 !== 0 ? 0 : "auto",
                    transform: i === 1 ? "translateY(-50%)" : "none",
                  }}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Jad ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div> */}
          </div>
        </div>
        <br /><br /><br />

<div className="h-[5px] w-70 bg-white ml-20"></div>
<br />
<div className="h-[5px] w-70 bg-[#ff4500] ml-20"></div>


<br /><br /><br /><br />
{/* <br /><br /><br /><br />
<div className="mb-20">
  <h2 className="text-3xl font-bold text-white text-center mb-16">
    Meer over mijn werk?
  </h2>

  <div className="space-y-16">

    {values.map((value, index) => (
<motion.div
  key={index}
  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className={`flex ${
    index % 2 === 0 ? "justify-start" : "justify-end"
  }`}
>
        <div className="max-w-md">
          <div className="text-[#ff4500] mb-3 flex">
            {value.icon}
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">
            {value.title}
          </h3>
          <p className="text-gray-400">
            {value.description}
          </p>
        </div>
      </motion.div>
    ))}

  </div>
</div> */}

  <h2 className="text-xl text-center text-[#ff4500] mb-8 font-semibold">
    Nog Meer????
  </h2>

  <div className="grid md:grid-cols-3 gap-10 text-center">

    {/* 🟢 */}
    <motion.div
      className="p-4"
    >
      <p className="text-gray-400 text-sm mb-1">Status</p>
      <p className="text-white">
        Beschikbaar voor stage…  
        <span className="text-[#ff4500]"> maar ook voor een lange vakantie ergens ver… Alaska bijvoorbeeld.</span>
      </p>
    </motion.div>

    
    <motion.div
      className="p-4"
    >
      <p className="text-gray-400 text-sm mb-1">Brein status</p>
      <p className="text-white">
        React aan het leren…  
        <span className="text-[#ff4500]"> begrijp er nog geen zak van</span>
      </p>
    </motion.div>

    {/* 🕵️ */}
    <motion.div
      className="p-4"
    >
      <p className="text-gray-400 text-sm mb-1">Nu?</p>
      <p className="text-white">
        Of in de Basic-Fit  
        <br />
        of een film aan het kijken  
        <br />
        <span className="text-[#ff4500]">(of doen alsof ik code snap)</span>
      </p>
    </motion.div>

  </div>
<br /><br /><br />
        <div className="flex flex-col items-center">
    <div className="text-[#ff4500] text-sm mb-2 -mr-170">S  C  R  O L  L</div>

    {/* Lijn */}
    <div className="w-[2px] h-79 bg-[#ff4500] -mr-170"></div>
  </div>
            <div className="h-[5px] w-70 bg-white mt-5"></div>

<br /><br /><br />
        {/* SKILLS */}
<div className="mb-20 max-w-5xl mx-auto relative">

  <h2 className="text-3xl font-semibold text-white mb-16 text-center">
    How I think <span className="text-[#ff4500]">&</span> build
  </h2>

  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

  <div className="space-y-24">

{[
  {
    title: "Understanding the problem",
    text: "Ik probeer eerst goed te begrijpen wat er precies gemaakt moet worden. Niet alleen wat er gevraagd wordt, maar ook waarom. Zo voorkom ik dat ik later dingen opnieuw moet doen.",
    side: "left",
  },
  {
    title: "Thinking things through",
    text: "Ik denk eerst na over hoe alles in elkaar zit voordat ik begin met bouwen. Dat maakt het later makkelijker om alles netjes en logisch op te zetten.",
    side: "right",
  },
  {
    title: "Backend work",
    text: "Ik werk graag aan de backend. Daar komt alles samen. Ik gebruik bijvoorbeeld C# en .NET om dingen te bouwen die goed en stabiel werken.",
    side: "left",
  },
  {
    title: "Frontend",
    text: "Ik vind het belangrijk dat alles er netjes uitziet en fijn werkt. Kleine dingen zoals spacing en beweging maken al veel verschil.",
    side: "right",
  },
    ].map((item, i) => {

      const isLeft = item.side === "left";

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className={`flex ${isLeft ? "justify-start pr-12" : "justify-end pl-12"}`}
        >

          <div className="max-w-md">

            {/* TITLE */}
            <h3 className="text-white font-semibold text-lg mb-2">
             <span className="text-[#ff4500]">{item.title}</span> 
            </h3>

            {/* TEXT */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.text}
            </p>

          </div>

        </motion.div>
      );
    })}

  </div>

</div>
<br />

      <div className="h-[5px] w-70 bg-[#ff4500] mt-5"></div>
      <br /><br /><br />
            <div className="h-[5px] w-70 bg-white mt-5"></div>



<br />
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-20"
>
</motion.div>
      </div>
    </div>
  );
}