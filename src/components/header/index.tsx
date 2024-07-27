import { useEffect, useState } from "react";
import iconImage from "../../assets/images/fontes/tecnologia-de-lampada-vetor.jpg";
import { message, phoneNumber } from "../ButtonWhats";

const menuItems = [
  {
    name: "Sobre nós",
    link: "#about",
    target: false,
  },
  { name: "Nossos Serviços", link: "#services", target: false },
  { name: "Produtos", link: "#products", target: false },
  { name: "Localização", link: "#maps", target: false },
  // { name: "FAQ", link: "#faq", target: false },
];

export const Header = () => {
  const [isMenuMobileOpen, setMenuMobileOpen] = useState(false);

  const toggleMenuMobile = () => {
    setMenuMobileOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = () => {
    if (isMenuMobileOpen) {
      setMenuMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.remove("bg-transparent");
          navbar.classList.add("bg-[#181925]");
        } else {
          navbar.classList.remove("bg-[#181925]");
          navbar.classList.add("bg-transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="md:px-52 transition-colors duration-500" id="navbar">
      <div className="opcoes ">
        <div className="wrapper">
          <svg className="w-[150px] h-[50px] ">
            <text
              x="50%"
              y="50%"
              dy=".35em"
              text-anchor="middle"
              className="text-4xl"
            >
              ALLTEC
            </text>
          </svg>
        </div>

        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={item.target ? "_blank" : ""}
            onClick={handleMenuItemClick}
          >
            {item.name}
          </a>
        ))}
      </div>

      <a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
        className="destaque"
      >
        Entre em contatodd
      </a>

      <button
        type="button"
        className={`abrirMenuMobile ${isMenuMobileOpen ? "ativo" : ""}`}
        name="abrirMenuMobile"
        onClick={toggleMenuMobile}
      >
        <div className="maior"></div>
        <div className="menor"></div>
      </button>

      <div className={`menuMobile ${isMenuMobileOpen ? "mostrar" : ""}`}>
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
          className="destacado"
          onClick={handleMenuItemClick}
        >
          Entre em contato
        </a>
        {menuItems.map((item, index) => (
          <a key={index} href={item.link} onClick={handleMenuItemClick}>
            <div
              className="icone"
              style={{ backgroundImage: `url(${iconImage})` }}
            ></div>
            <div className="texto">
              <h3>{item.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};
