/* import Slider from "react-slick";
import Img1 from "../../assets/images/img3.webp";
import Img2 from "../../assets/images/img3.webp";
import Img3 from "../../assets/images/img3.webp";
import Img4 from "../../assets/images/img4.webp";
import Img5 from "../../assets/images/img5.webp";

export const Galeria = () => {
  const settingsLg = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1,
    cssEase: "linear",
  };

  const settingsMobile = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settingsMb = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div id="galeria" className="container m-auto py-20 px-10">
      <h2 className="text text-5xl text-center text-white mb-10"> Galeria</h2>
      <Slider className="md:hidden" {...settingsMobile}>
        <div>
          <img src={Img1} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img2} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img3} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img4} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img5} className="m-auto h-[300px] " />
        </div>
      </Slider>
      <Slider className="hidden md:block lg:hidden" {...settingsMb}>
        <div>
          <img src={Img1} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img2} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img3} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img4} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img5} className="m-auto h-[300px] " />
        </div>
      </Slider>

      <Slider className="hidden lg:block" {...settingsLg}>
        <div>
          <img src={Img1} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img2} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img3} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img4} className="m-auto h-[300px] " />
        </div>
        <div>
          <img src={Img5} className="m-auto h-[300px] " />
        </div>
      </Slider>
    </div>
  );
};
 */
