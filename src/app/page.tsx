import Image from "next/image";

const items = [
  {
    icon: "icon-[fa6-solid--map-pin]",
    text: "Centro Comercial El Bosque Local 45.",
  },
  { icon: "icon-[ls--iphone]", text: "Asesoria gratuita mediante whatsapp." },
  {
    icon: "icon-[guidance--24-hours]",
    text: "Fabricacion inmediata en 24 horas.",
  },
  {
    icon: "icon-[solar--box-bold-duotone]",
    text: "Envio a todo el Ecuador 100% seguro.",
  },
];

const socialMedia = [
  {
    icon: "icon-[basil--facebook-solid]",
    link: "https://www.facebook.com/doraamparo.ruizmiranda/?locale=es_LA",
  },
  {
    icon: "icon-[basil--instagram-outline]",
    link: "https://www.instagram.com/orjoyeros_ec/",
  },
  {
    icon: "icon-[akar-icons--tiktok-fill]",
    link: "https://www.tiktok.com/@doraamparoruizmir",
  },
  {
    icon: "icon-[basil--map-location-outline]",
    link: "https://maps.app.goo.gl/NCzDoMPnvRPwCREv8",
  },
];

export default function Home() {
  return (
    <div className=" w-full h-[700px]">
      <div className="w-full h-[260px] flex justify-center">
        <Image
          src="/diamante.jpg"
          alt="imagen portada"
          width={3000}
          height={3000}
          className="md:w-[270px] object-cover"
        ></Image>
      </div>
      <div className="bg-white">
        <div className="flex">
          <div className="bg-white w-6/12 h-32 flex justify-center items-center">
            <div className="w-11/12 flex flex-col justify-center items-center text-2xl">
              <span className={`${items[0].icon}`} />
              <h2 className="text-xs text-center mt-2">{items[0].text}</h2>
            </div>
          </div>
          <div className="bg-white w-6/12 h-32 flex justify-center items-center">
            <div className="w-11/12 flex flex-col justify-center items-center text-2xl">
              <span className={`${items[1].icon}`} />
              <h2 className="text-xs text-center mt-2">{items[1].text}</h2>
            </div>
          </div>
        </div>
        <hr className="border-black mx-8" />
        <div className="flex justify-center">
          <hr className="border-black rotate-90 w-52" />
        </div>
        <div className="flex">
          <div className="bg-white w-6/12 h-32 flex justify-center items-center">
            <div className="w-11/12 flex flex-col justify-center items-center text-2xl">
              <span className={`${items[2].icon}`} />
              <h2 className="text-xs text-center mt-2">{items[2].text}</h2>
            </div>
          </div>
          <div className="bg-white w-6/12 h-32 flex justify-center items-center">
            <div className="w-11/12 flex flex-col justify-center items-center text-2xl">
              <span className={`${items[3].icon}`} />
              <h2 className="text-xs text-center mt-2">{items[3].text}</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-0">
          <a
            href="https://api.whatsapp.com/send/?phone=593992392703&text=Hola,%20vi%20sus%20redes%20y%20deseo%20información%20sobre%20sus%20anillos"
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-400 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-400 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-400 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-400 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-500 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Escribenos a Whatsapp
            </span>
          </a>
        </div>
        <div className="text-2xl text-black flex justify-center mt-4 gap-x-8">
          {socialMedia.map((icon, index) => {
            return (
              <a href={icon.link} target="_blank" key={index}>
                <span className={`${icon.icon}`} />
              </a>
            );
          })}
        </div>
        <div className="flex justify-center text-black mt-3">
          <h4>Orjoyeros™</h4>
        </div>
      </div>
    </div>
  );
}
