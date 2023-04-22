import Hero from "~/components/Hero/Hero";

export default function Index() {
  return (
    <main className="relative m-auto min-h-screen flex flex-col text-white">
      <Hero />
      <div className="h-32 w-full bg-gray-900">
        <div className="flex h-full justify-center items-center justify-between max-w-screen-xl p-5 m-auto">
          <span className="text-3xl">
            Reach out Today for a Free Estimate
          </span>
          <button className="border-2 px-4 py-1">Contact</button>
        </div>
      </div>
      <div className="text-black flex flex-col justify-center items-center justify-between max-w-screen-xl px-5 py-24 m-auto">
        <span className="text-6xl mb-4 font-[poppins] font-bold mb-8">Dr Fence</span>
        <span className="mb-8 italic text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada a libero ac tincidunt.
          In vitae feugiat massa. Cras lobortis iaculis enim, at ornare libero molestie in. Morbi fermentum
          arcu nec ante mollis aliquam. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur eu magna nec libero euismod molestie
          id sit amet enim.</span>
        <span>
          Reach out today for your free estimate
        </span>
      </div>
    </main >
  );
}
