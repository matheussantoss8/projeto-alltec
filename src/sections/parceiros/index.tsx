import solidImage from "../../assets/images/logo/solid.png";
import aloformImage from "../../assets/images/logo/aloform.png";
import c3techImage from "../../assets/images/logo/c3tech.png";
import intelbrasImage from "../../assets/images/logo/Intelbras.png";
import spoluImage from "../../assets/images/logo/spolu.png";

const parceiros = [
  { src: solidImage, alt: "Solid", name: "Solid" },
  { src: aloformImage, alt: "Aloform", name: "Aloform" },
  { src: c3techImage, alt: "C3 TECH", name: "C3 TECH" },
  { src: intelbrasImage, alt: "Intelbras", name: "Intelbras" },
  { src: spoluImage, alt: "spolu", name: "spolu" },
];

export default function Parceiros() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <div className="text-center mb-20">
        <h2 className="text-lg md:text-3xl font-semibold text-[#8CA4BC]">
          Empresas Parceiras
        </h2>
      </div>
      <div className="grid max-w-[100%] gap-40 overflow-x-auto md:w-full md:gap-0 mt-10 md:overflow-hidden grid-cols-5 w-full">
        {parceiros.map((parceiro, index) => (
          <div key={index} className="text-center">
            <img
              src={parceiro.src}
              alt={parceiro.alt}
              className="w-16 h-16 rounded-full mx-auto mb-2"
            />
            <h1 className="text-base md:text-2xl text-[#8CA4BC]">
              {parceiro.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
