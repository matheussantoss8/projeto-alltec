import { BsWhatsapp } from "react-icons/bs";

export const ButtonWhats = () => {
  return (
    <a
      className="cursor-pointer z-50 bg-[#25D366] animate-bounce fixed bottom-3 left-3 p-3 rounded-full text-white shadow-2xl"
      href={`https://api.whatsapp.com/send?phone=5511917425678&text=${encodeURIComponent(
        "Olá! Estou interessado(a) em saber mais sobre seus serviços e como vocês podem me ajudar. Poderiam, por favor, fornecer mais informações? Agradeço desde já!"
      )}`}
    >
      <BsWhatsapp size={25} />
    </a>
  );
};
