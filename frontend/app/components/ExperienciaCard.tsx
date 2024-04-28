type props = {
  desc: string;
  url: string;
};

export default function ExperienciaCard({ desc, url }: props) {
  return (
    <div className="shadow-lg shadow-gray-300 w-[90%] mx-auto min-[400px]:w-[350px] h-[400px] p-10 2xl:w-[300px] 2xl:h-[300px] flex flex-col gap-y-12">
      <div className="w-[150px] h-[150px] mx-auto 2xl:w-[100px] 2xl:h-[100px]">
        <img src={url} className="w-full h-full" />
      </div>
      <p className="text-black text-2xl text-center 2xl:text-sm">{desc}</p>
    </div>
  );
}
