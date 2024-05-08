import Botao from "../../components/button";
import Server from "../../components/server";

export default function QuemSomos() {
  return (
    <div
      id="about"
      className="relative flex flex-col-reverse md:flex-row gap-5 items-center justify-center md:my-20"
    >
      {/*     <div className="absolute bg-[#222541] w-[80%] h-[90%] left-3 rounded-full blur-3xl -z-50"></div> */}
      <Server />
      <div className="md:w-[50%] flex flex-col gap-5 mb-10 md:mb-0">
        <h1 className="text-3xl md:text-5xl text-white">Quem Somos</h1>
        <p className=" text-base md:text-xl md:leading-9 text-[#8CA4BC]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus
          suscipit quia exercitationem eum vero eligendi explicabo perspiciatis
          vitae ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iusto natus suscipit quia exercitationem eum vero eligendi explicabo
          perspiciatis vitae ipsum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iusto natus suscipit quia exercitationem eum vero
          eligendi explicabo perspiciatis vitae ipsum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Iusto natus suscipit quia
          exercitationem eum vero eligendi explicabo perspiciatis vitae ipsum.
        </p>
        <Botao />
      </div>
    </div>
  );
}
