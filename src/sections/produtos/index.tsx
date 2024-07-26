import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Produtos } from "./listProdutos";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Corporativos() {
  return (
    <>
      <h1
        id="products"
        className="text-4xl text-left md:text-center md:text-5xl text-white"
      >
        Nossos Produtos
      </h1>
      <p className="text-left text-base md:!text-center md:mx-auto md:w-[50%] text-[#8CA4BC]">
        Bem-vindo à nossa loja, onde você encontrará uma seleção cuidadosamente
        escolhida de produtos para elevar sua experiência tecnológica e garantir
        a segurança do seu ambiente. Navegue pelo nosso catálogo e encontre
        itens que atendem a todas as suas necessidades, desde periféricos
        essenciais até sistemas avançados de segurança.
      </p>
      <Carousel showDots={false} infinite responsive={responsive}>
        {Produtos.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[450px] border-2 flex flex-col gap-3 first:ms-0 first-letter:me-0 mx-4 border-[#3f415c] p-5 rounded-md"
            >
              <div className="w-full h-[250px] mb-3">
                <img
                  src={item.image}
                  alt={item.service}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h1 className="text-2xl text-white">{item.service}</h1>
              <p className="text-base text-[#8CA4BC]">{item.description}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
