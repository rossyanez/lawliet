import Image from "next/image";

function NameCard() {
  return (
    <div className="font-jakarta absolute -bottom-[20.57px] -right-[223px] -z-10">
      <Image
        src="/tiara.jpg"
        alt="tiara andini"
        width={700}
        height={840.64}
      ></Image>
      <div className="flex flex-col items-center justify-center ml-[125px] text-center h-[114px] w-[382px] drop-shadow-namecard bg-white rounded-[10px]">
        <h3 className="font-bold text-2xl  text-blue-500 leading-9">
          Tiara Andini
        </h3>
        <p>-Lawyer</p>
      </div>
    </div>
  );
}

export default NameCard;
