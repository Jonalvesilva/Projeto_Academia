import Slider from "@/app/components/Slider";

export default function Academia() {
  return (
    <section className="w-full border border-b-2 mt-[60px]">
      <div className="py-16 max-w-screen-xl mx-auto">
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
