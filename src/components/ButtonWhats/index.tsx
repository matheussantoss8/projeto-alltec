import { BsWhatsapp } from "react-icons/bs";

export const ButtonWhats = () => {
  return (
    <a
      className="cursor-pointer z-50 bg-[#25D366] animate-bounce fixed bottom-3 left-3 p-3 rounded-full text-white shadow-2xl"
      href={`https://api.whatsapp.com/send?phone=55119174256788&text=${encodeURIComponent(
        "Olá, vim do site de vocês."
      )}`}
    >
      <BsWhatsapp size={25} />
    </a>
  );
};
