import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const FAQs = [
  {
    id: 0,
    title: "What happens when I turn Core Phone on?",
    desc: `We use technology native to Apple iOS to hide apps from your phone. Hiding apps is simply just that. Whenever you turn Core Phone off, all of your app data is still intact. *Note that because of an open issue with Apple that your apps may not return to their original folder or dock location after unhiding them. For best results, we recommend relying more heavily on the app library rather than folders.`,
  },
  {
    id: 1,
    title: "What is CorePhone+?",
    desc: `CorePhone+ is our affordable subscription service that allows you to hide up to 50 apps and lock your phone in Core mode with a PIN, a Core Card, or until a certain date/time. You can also order The Core Card and customizeable tags.`,
  },
  {
    id: 2,
    title: "What is the Core Card?",
    desc: `The Core Card is a physical card that you can tap with your app to lock your phone in Core mode. You can leave the Core Card behind and go live life.`,
  },
  {
    id: 3,
    title: "Do I have to have a Core Card?",
    desc: `Nope! You can also lock your phone with a PIN or lock until a specific date/time. Or you don't have to lock at all!`,
  },
  {
    id: 4,
    title: "What does Locked mean?",
    desc: `Locked simply means that your Core Phone app is locked to ON by the method in which you locked it. In order to unlock, you will need to use the same method (PIN, Core Card, wait for the Timer to expire) or purchase an emergency unlock. If you're still having issues, contact us!`,
  },
  {
    id: 5,
    title:
      "My phone is Locked and I lost the PIN or the Core Card. What do I do?",
    desc: `You can purchase an emergency unlock in the app at any time. If you still need help, you can also contact us!`,
  },
  {
    id: 6,
    title: "Why Anonymous Accounts? How does it work?",
    desc: `We are not here to be a distraction, we are here to eliminate them. Sharing your email and phone number always ends up with a bunch of marketing junk mail you never wanted. We assign you a user ID when you download our app, your subscription and purchase information is tied to Apple In-App-Payments`,
  },
  {
    id: 7,
    title: "I need help. What do I do?",
    desc: `You can reach us by email at thecorephonesocials@gmail.com! Make sure to copy/paste the user ID found in the help screen of the Core Phone app.`,
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

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

      <section className="pt-16 pb-16 main-bg text-gray-800">
        <div className="container mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-semibold text-brand">features</h2>
              <div className="flex flex-col gap-2">
                <p className="text-lg">
                  Hide Addictive and Distracting Apps from your iPhone
                </p>
                <p className="text-lg">
                  Lock your Phone in a Minimalist state*
                </p>
                <p className="text-lg">
                  Have a Friend lock your Core Phone with a PIN*
                </p>
                <p className="text-lg">
                  Use a{" "}
                  <strong className="font-semibold text-brand">
                    Core Card
                  </strong>{" "}
                  to lock your Core Phone*
                </p>
                <p className="text-lg">
                  Set a timer to lock your Core Phone until that date/time*
                </p>
                <p className="text-lg">Anonymous Account / No Sign Up</p>
                <p className="text-lg">Designed simply to mimic a utility</p>
                <p className="text-sm mt-2">
                  *Some features are only available for CorePhone+
                </p>
              </div>
              <h2 className="text-4xl font-semibold text-brand mt-4">why?</h2>
              <div className="flex flex-col gap-2 max-w-[768px]">
                <p className="text-md">{`Screen addiction is real, and it takes you away from the life you want to live. Maybe you've tried to minimalize your iPhone and it never sticks. Or maybe you've tried some of the popular "dumb phones", but they made easy things (like texting and calling) hard.`}</p>
                <p className="text-md">{`That's why The Core Phone app exists. Your phone was meant to serve you, not the other way around. With The Core Phone, you are in control of what apps are accessible at any given time. You can give up control by letting a friend lock your Core Phone with a PIN, by locking with a Core Card and leaving it behind, locking with a timer, but you never have to give up control to big tech again.`}</p>
              </div>
              <div className="flex flex-col gap-8 mt-8 items-center">
                <button className="bg-brand text-white font-semibold rounded-lg px-6 py-4 w-full">
                  Get the App
                </button>
                <a href="#" className="">
                  <img src="App-Store-Black.png" alt="Apple App Store Button" />
                </a>
              </div>
            </div>
            <div className="hidden md:block md:min-w-[400px]">
              <div className="mockup-phone border-brand">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-4">
                    <img src="/test.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 pb-16 main-bg text-gray-800 border-brand border-t-4">
        <div className="container mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-4xl font-semibold text-brand mb-4">
              the core card
            </h2>
            <p className="text-gray-800 text-center mb-4">
              The Core Card is designed to curb digital addiction and encourage
              real-life experiences. It locks The Core Phone app, hiding
              addictive and distracting apps, ensuring you stay in the moment.
              This lock can only be released with the Core Card, allowing you to
              leave the card behind and fully immerse yourself in life without
              the constant pull of digital distractions.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="card w-96 bg-base-100 shadow-xl rounded-t-lg">
                <figure
                  className="border-brand border-t-4 border-x-4"
                  style={{
                    background:
                      "radial-gradient(circle, white 0%, white 40%, #d9d9d9 80%)",
                  }}
                >
                  <img src={`/coreCard-PVC.png`} alt="The Core Card" />
                </figure>
                <div className="card-body bg-brand rounded-b-lg">
                  <div className="flex justify-between w-full gap-4">
                    <h2 className="card-title text-white font-semibold">
                      The Core Card
                    </h2>
                    <p className="text-lg text-white font-semibold text-right">
                      $24.95
                    </p>
                  </div>
                  <p style={{ color: "#d9d9d9" }}>
                    The standard version of Core Card, made of PVC
                  </p>
                  <div className="card-actions justify-end mt-8">
                    <a
                      href="https://taptag.shop/products/z-corephone?sca_ref=6340235.ACzs4PsiSY"
                      target="_blank"
                    >
                      <button className="bg-white text-brand font-semibold rounded-lg px-6 py-4">
                        Order Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl rounded-t-lg">
                <figure
                  className="border-brand border-t-4 border-x-4"
                  style={{
                    background:
                      "radial-gradient(circle, white 0%, white 40%, #d9d9d9 80%)",
                  }}
                >
                  <img
                    src={`/coreCard-Bamboo.png`}
                    alt="The Core Card - Bamboo"
                    style={{ transform: "scale(1.15)" }}
                  />
                </figure>
                <div className="card-body bg-brand rounded-b-lg">
                  <div className="flex justify-between w-full gap-4">
                    <h2 className="card-title text-white font-semibold">
                      The Core Card Deluxe
                    </h2>
                    <p className="text-lg text-white font-semibold text-right">
                      $29.95
                    </p>
                  </div>
                  <p style={{ color: "#d9d9d9" }}>
                    The deluxe version of Core Card, made of Bamboo and has your
                    name
                  </p>
                  <div className="card-actions justify-end mt-8">
                    <a
                      href="https://taptag.shop/products/corephone-bamboo-tap-card?sca_ref=6340235.ACzs4PsiSY"
                      target="_blank"
                    >
                      <button className="bg-white text-brand font-semibold rounded-lg px-6 py-4">
                        Order Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm mt-4">
              The Core Card is supplied by{" "}
              <a
                href="https://taptag.shop?sca_ref=6340235.ACzs4PsiSY"
                className="underline"
              >
                Tap Tag
              </a>
            </p>
            {/* <div className="flex gap-8 md:grid md:grid-cols-2">
              <img
                src={`https://taptag.shop/cdn/shop/products/sustainable-cherry-nfc-business-card-194915.jpg?v=1695228186&width=800`}
              
                alt="the core phone logo"
              />
              <div className="flex flex-col justify-between">
              <p className="text-brand text-lg">
                The Core Card is designed to curb digital addiction and encourage real-life experiences. It locks The Core Phone app, hiding addictive and distracting apps, ensuring you stay in the moment. This lock can only be released with the Core Card, allowing you to leave the card behind and fully immerse yourself in life without the constant pull of digital distractions.
              </p>
              <button className="bg-brand w-full p-6 font-semibold text-white">Order Now</button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="p-8 bg-brand text-white">
        <div className="container mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="flex flex-col gap-4 items-center text-center">
            <h2 className="text-4xl font-semibold text-white mb-4">faqs</h2>
            {FAQs.map((faq) => {
              return (
                <div
                  className="collapse collapse-arrow bg-brand-alt"
                  key={faq.id}
                >
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
      <section className="main-bg p-8 text-white">
        <div className="container mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="flex flex-col gap-4 items-center text-center">
            <img src="ditch2.png" className="md:hidden my-16" />
            <img src="ditch.png" className="hidden md:block my-16" />
            <h2 className="text-brand font-semibold text-2xl">
              connect with us
            </h2>
            <div className="flex gap-4">
              <SocialIcon
                url="https://www.instagram.com/thecorephone"
                bgColor="#284b63"
              />
              <SocialIcon url="https://x.com/thecorephone" bgColor="#284b63" />
              <SocialIcon
                url="mailto:thecorephonesocials@gmail.com"
                bgColor="#284b63"
              />
            </div>
          </div>
          <div className="text-gray-600 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-sm md:text-md gap-4 mx-auto mt-8">
            <div>
              <span className="text-xs md:text-sm">
                ©{currentYear} The Core Phone
              </span>
            </div>
            <div className="flex gap-4">
              <a href="/terms" className="hover:text-gray-600">
                Terms of Use
              </a>
              <div className="md:hidden text-gray-400">|</div>
              <a href="/contact" className="hover:text-gray-600">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
