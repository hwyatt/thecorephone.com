import Image from "next/image";

export default function Home() {
  return (
    <div className="main-bg">
      <section className="min-h-screen flex flex-col justify-center items-center bg-brand p-8 relative">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/core-169.mp4" type="video/mp4" />
          </video>
          <div className="bg-overlay absolute inset-0"></div>
        </div>
        <div className="flex flex-col gap-4 items-center z-10 relative px-4 md:px-8">
          <Image
            src="/logo.png"
            width={500}
            height={100}
            alt="the core phone logo"
          />
          <span className="text-sm md:text-base font-extralight text-center">
            your phone was made to serve you, not the other way around
          </span>
        </div>
      </section>
      
      <section className="pt-16 pb-8 main-bg text-gray-800">
        <div className="container mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex gap-16">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold text-brand">features</h2>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Hide Addicting and Distracting Apps from your Phone</p>
            <p className="text-lg">Lock your Phone in a Minimalist state</p>
            <p className="text-lg">Have a Friend lock your Phone with a PIN</p>
            <p className="text-lg">Lock your Phone with a <strong className="font-semibold text-brand">Core Card</strong> and leave it behind</p>
          </div>
          <h2 className="text-4xl font-semibold text-brand mt-4">why?</h2>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Hide Addicting and Distracting Apps from your Phone</p>
            <p className="text-lg">Lock your Phone in a Minimalist state</p>
            <p className="text-lg">Have a Friend lock your Phone with a PIN</p>
            <p className="text-lg">Lock your Phone with a <strong className="font-semibold text-brand">Core Card</strong> and leave it behind</p>
          </div>
          </div>
          <div className="mockup-phone border-brand">
          <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">Demo of the app will go here</div>
  </div>
  </div>
</div>
        </div>
      </section>
      <section className="p-8 bg-brand text-white">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-4xl font-semibold text-white">faqs</h2>
          <div className="collapse collapse-arrow bg-brand-alt">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-lg">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p className="font-semibold">hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-brand-alt">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-lg">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p className="font-semibold">hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-brand-alt">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-lg">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p className="font-semibold">hello</p>
  </div>
</div>
          </div>
          </div>
      </section>
    </div>
  );
}
