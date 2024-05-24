import Image from "next/image";
import HeroImg from "@/components/heroImg";
import HeroText from "@/components/heroText";
import javaImg from "/public/img/java-logo.png";
import javaScriptImg from "/public/img/javascript-logo.png";
import htmlImg from "/public/img/html5-logo.png";
import cssImg from "/public/img/css3-logo.png";
import reactImg from "/public/img/react-logo.png";

export default function Personal() {
  return (
    <div className="flex text-black text-justify">
      <div className="w-1/3 bg-teal-100 p-5">
        <div className="rounded-lg mb-2 p-4">
          <div>
            <Image
              className="rounded-3xl p-4"
              src="/img/picture.jpg"
              alt="Descripción de la imagen"
              width={400}
              height={400}
            />
          </div>
          <h2 className="text-xl font-bold">Jonathan Alfaro Herrea</h2>
          <p className="text-left">
            Cursando actualmente la carrera de Bachillerato en Informatica
            Empresarial, Universidad de Costarrica Sede del Sur
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold p-4">Habilidades </h2>
          <ul className="list-disc pl-5">
            <li>Trabajo en Equipo</li>
            <li>Responsable</li>
            <li>Manejo de equipo informatico</li>
            <li>Habilidad como Progrmador</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold p-4">Tecnologias</h2>
          <div className="flex justify-between items-center">
            <HeroImg
              imgData={javaImg}
              imgAlt="Java Logo"
              widthData={68}
              heighData={100}
            />
            <HeroImg
              imgData={javaScriptImg}
              imgAlt="JavaScript Logo"
              widthData={64}
              heighData={64}
            />
            <HeroImg
              imgData={htmlImg}
              imgAlt="HTML Logo"
              widthData={50}
              heighData={50}
            />
            <HeroImg
              imgData={cssImg}
              imgAlt="CSS Logo"
              widthData={74}
              heighData={64}
            />
            <HeroImg
              imgData={reactImg}
              imgAlt="React Logo"
              widthData={64}
              heighData={64}
            />
          </div>
        </div>
      </div>

      <div className="w-2/3 bg-teal-50 p-5">
        <div className="p-4 text-black m-2 ">
          <HeroText 
            title="Sobre mi"
            text={[
              "¡Hola! Soy Jonatha, un apasionado estudiante de Informática en la UCR. Desde una temprana edad, he sentido una profunda curiosidad por la tecnología y cómo esta puede transformar el mundo. Mi objetivo es convertir esa curiosidad en habilidades concretas que me permitan contribuir al avance tecnológico y resolver problemas reales.",
            ]}
          />
        </div>

        <div className="flex  m-3 justify-between">
          <div className="w-1/2 p-4 rounded-xl m-2">
            <HeroText
              title="Experiencia Laboral"
              text={["Hospital Juana Pirola", "Pasante en el area informatica","Cocreador de la Pascalina","Sembrador de yuca profecional","Inspirador del diseño de la maquina de Turing", "Pela papas de medio tiempo", "Infla botellas por hobby"]}
            />
          </div>
          <div className="w-1/2 p-4 rounded-xl m-2">
            <HeroText
              title="Formacion Academica"
              text={[
                "Colegio Tecnico Profesional Henrri François Pittier",
                "Escuela Ecologica Fila Tigre Pittier"," La Acandemia de Platon"
              ]}
            />
          </div>
        </div>

        <div className="p-4  rounded-xl">
          <HeroText title="Referencias" text={["Allan Turing","El chino de la pulperia", "Juanqui Loco","Mi tata"]} />
        </div>
      </div>
    </div>
  );
}
