import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-full absolute inset">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src="mountains.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-overlay"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
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
