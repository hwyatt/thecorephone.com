import Image from "next/image";

const FAQs = [
  {
    id: 0,
    title: 'What happens when I turn Core Phone on?',
    desc: `We use technology native to Apple to hide apps from your phone. Hiding apps is simply just that. Whenever you turn Core Phone off, all of your app data is still intact.`
  },
  {
    id: 1,
    title: 'What is CorePhone+?',
    desc: `CorePhone+ is our affordable subscription service that allows you to hide up to 50 apps and lock your phone in Core mode with a PIN, a Core Card, or until a certain date/time. You can also order customized Core Cards / Tags (NFC Cards and Tags).`
  },
  {
    id: 2,
    title: 'What is the Core Card?',
    desc: `The Core Card is a physical card that you can tap with your app to lock your phone in Core mode. You can leave the Core Card behind and go live life.`
  },
  {
    id: 3,
    title: 'Do I have to have a Core Card?',
    desc: `Nope! You can also lock your phone with a PIN or lock until a specific date/time. Or you don't have to lock at all!`
  },
  {
    id: 4,
    title: 'What does Locked mean?',
    desc: `Locked simply means that your Core Phone app is locked to ON by the method in which you locked it. In order to unlock, you will need to use the same method (PIN, Core Card) or purchase an emergency unlock.`
  },
  {
    id: 5,
    title: 'My phone is Locked and I lost the PIN or the Core Card. What do I do?',
    desc: `You can purchase an emergency unlock in the app at any time. If you still need help, you can also contact us!`
  },
];

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
          <span className="text-base md:text-lg font-extralight text-center">
            life beyond the screen is calling
          </span>
        </div>
      </section>
      
      <section className="pt-16 pb-8 main-bg text-gray-800">
        <div className="container mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-semibold text-brand">features</h2>
              <div className="flex flex-col gap-2">
                <p className="text-lg">Hide Addictive and Distracting Apps from your Phone</p>
                <p className="text-lg">Lock your Phone in a Minimalist state*</p>
                <p className="text-lg">Have a Friend lock your Phone with a PIN*</p>
                <p className="text-lg">Use a <strong className="font-semibold text-brand">Core Card</strong> to lock your Phone*</p>
                <p className="text-lg">Set a timer to lock your Phone until that date/time*</p>
                <p className="text-lg">Designed simply to mimic a utility</p>
                <p className="text-sm mt-2">*Some features are only available for CorePhone+*</p>
              </div>
              <h2 className="text-4xl font-semibold text-brand mt-4">why?</h2>
              <div className="flex flex-col gap-2 max-w-[768px]">
                <p className="text-md">{`As a Software Engineer, I have seen firsthand the negative impacts of the smartphone. Screen addiction is real, and it takes you away from the life you want to live. If you're like me, you've tried to minimalize your iPhone and it never sticks. Or maybe you've tried some of the popular "dumb phones", but they made easy things (like texting and calling) hard.`}</p>
                <p className="text-md">{`That's why I created The Core Phone app. Your phone was meant to serve you, not the other way around. With The Core Phone, you are in control of what apps are accessible at any given time. You can give up control by letting a friend lock your phone with a PIN, or by locking with a Core Card and leaving it behind, but you never have to give up control to big tech again.`}</p>
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
            {FAQs.map((faq) => {
              return (
                <div className="collapse collapse-arrow bg-brand-alt" key={faq.id}>
                  <input type="radio" name="my-accordion-2" defaultChecked /> 
                  <div className="collapse-title text-lg font-light">
                    {faq.title}
                  </div>
                  <div className="collapse-content"> 
                    <p className="font-semibold text-lg">{faq.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
