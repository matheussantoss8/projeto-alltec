import solidImage from "../../assets/images/logo/solid.png";
import aloformImage from "../../assets/images/logo/aloform.png";
import c3techImage from "../../assets/images/logo/c3tech.png";
import intelbrasImage from "../../assets/images/logo/Intelbras.png";
import spoluImage from "../../assets/images/logo/spolu.png";

const parceiros = [
  { src: solidImage, alt: "Solid", name: "Solid" },
  { src: aloformImage, alt: "Aloform", name: "Aloform" },
  { src: c3techImage, alt: "C3 TECH", name: "C3 Tech" },
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
      <div className="w-full overflow-x-auto">
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {parceiros.map((parceiro, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={parceiro.src}
                alt={parceiro.alt}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
              <h1 className="text-sm md:text-base text-[#8CA4BC] mt-2">
                {parceiro.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
