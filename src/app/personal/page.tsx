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
    <div className="flex flex-col lg:flex-row text-black text-justify">
      <div className="w-full lg:w-1/3 bg-teal-100 p-5">
        <div className="rounded-lg mb-2 p-4">
          <div className="flex justify-center lg:block">
            <Image
              className="rounded-3xl p-4"
              src="/img/picture.jpg"
              alt="Descripción de la imagen"
              width={400}
              height={400}
            />
          </div>
          <h2 className="text-xl pl-2 font-bold text-center lg:text-left">Jonathan Alfaro Herrera</h2>
          <p className="text-left text-justify p-2">
            Cursando actualmente la carrera de Bachillerato en Informática
            Empresarial, Universidad de Costa Rica Sede del Sur
          </p>
        </div>
        <div>
          <h2 className="text-xl  font-bold p-4 text-center lg:text-left">Habilidades</h2>
          <ul className="list-disc pl-6">
            <li>Trabajo en Equipo</li>
            <li>Responsable</li>
            <li>Manejo de equipo informático</li>
            <li>Habilidad como Programador</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold p-4 text-center lg:text-left">Tecnologías</h2>
          <div className="flex justify-center lg:justify-between items-center">
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

      <div className="w-full lg:w-2/3 bg-teal-50 p-5">
        <div className="p-4 text-black m-2">
          <HeroText
            title="Sobre mí"
            text={[
              "¡Hola! Soy Jonathan, un apasionado estudiante de Informática en la UCR. Desde una temprana edad, he sentido una profunda curiosidad por la tecnología y cómo esta puede transformar el mundo. Mi objetivo es convertir esa curiosidad en habilidades concretas que me permitan contribuir al avance tecnológico y resolver problemas reales.",
            ]
            }
            description={[]}
          />
        </div>

        <div className="flex flex-col lg:flex-row m-3 justify-between">
          <div className="w-full lg:w-1/2 p-4 rounded-xl m-2">
            <HeroText
              title="Experiencia Laboral"
              text={[
                "Hospital Juana Pirola",
                "Horas Estudiante UCR",
                "Experiencia en agricultura"

              ]}
              description={[
                "-Pasante en el área informática",
                "-Coordinación Educación Matemática",
                "-Trabajador en productora de tomate"
              ]}
            />
          </div>
          <div className="w-full lg:w-1/2 p-4 rounded-xl m-2">
            <HeroText
              title="Formación Académica"
              text={[
                "Colegio Técnico Profesional Henrri François Pittier",
                "Escuela Ecológica Fila Tigre Pittier",
              ]}
              description={[
                "-2021. Conclusión de técnico medio en informática empresarial",
                "-2015. Conclusión de II siclo de la educación general básica"

              ]}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl">
          <HeroText title="Referencias" text={[
            "Diego Blanco",
            "Elizabeth Diaz",
            "Cristian Carrera",
            ]} description={[
              "-Supervisor de la practica profesional",
              "-Encargada de las Horas Estudiante UCR",
              "-Patron de la productora de tomate"
            ]} />
        </div>
      </div>
    </div>
  );
}
