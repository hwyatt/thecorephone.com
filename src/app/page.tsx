import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-brand p-8 relative">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/core-169.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay absolute inset-0"></div>
      </div>
      <div className="flex flex-col gap-4 items-center z-10 relative">
        <Image
          src="/logo.png"
          width={500}
          height={100}
          alt="the core phone logo"
        />
        <span className="text-sm md:text-base font-extralight text-center">
          coming soon to the app store
        </span>
      </div>
    </main>
  );
}
