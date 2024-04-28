import Slider from "@/app/components/Slider";

export default function Academia() {
  return (
    <section className="border border-b-2 h-[700px] pt-[100px]">
      <div className="py-12 max-w-screen-xl mx-auto">
        <div className="text-3xl text-center">
          <h2>Nossas academias</h2>
        </div>
        <div className="flex flex-col max-w-screen-lg mx-auto items-center w-[90%] py-14">
          <Slider />
        </div>
      </div>
    </section>
  );
}
