import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-brand p-8">
      <div className="flex flex-col gap-4 items-center">
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
