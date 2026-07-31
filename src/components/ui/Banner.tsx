export default function HeroBanner() {
  return (
    <section
      className="relative w-full min-h-[480px] overflow-hidden bg-black bg-cover bg-center px-8 pt-28 pb-16"
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

     <div className="relative z-10 max-w-2xl px-12">
        <h1 className="text-6xl font-bold font-monserrat leading-tight text-white sm:text-7xl">
          Gear Up for
          <br />
          Every Device
        </h1>

        <p className="mt-6 text-xl text-neutral-300">
          Cases, sleeves, and accessories built for how you actually use your tech.
        </p>
      </div>
    </section>
  );
}