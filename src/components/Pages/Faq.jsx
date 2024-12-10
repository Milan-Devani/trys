import React, { useState } from "react";
import { TfiPlus } from "react-icons/tfi";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices.",
      answer2:
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Netflix offers different plans to suit your needs, starting from a basic plan to a premium plan with higher resolution and more screens.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.",
      answer2:
        "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "You can cancel your subscription anytime through the 'Account' section on the Netflix website or app.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix offers a wide variety of TV shows, movies, documentaries, and more across different genres.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      answer2:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <div className="bg-black font-NetflixSans  mx-auto h-full text-white p-4 sm:px-16 shadow-lg">
      <h2 className="text-[1.25rem] sm:text-[1.5rem] font-semibold mb-4 text-center sm:text-left">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full flex justify-between items-center p-4 sm:p-[1.5rem] text-left text-[1rem] sm:text-[24px] font-NetflixSans_Md focus:outline-none ${
              openIndex === index
                ? "bg-[#414141]"
                : "bg-[#2d2d2d] hover:bg-[#414141]"
            }`}
          >
            <span>{faq.question}</span>
            <span>
              {openIndex === index ? (
                <div
                  className="icon-container"
                  style={{ transform: "rotate(45deg)" }}
                >
                  <TfiPlus className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              ) : (
                <TfiPlus className="h-6 w-6 sm:h-8 sm:w-8" />
              )}
            </span>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === index
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-[1px] bg-[#2d2d2d] text-[0.9rem] sm:text-[1.5rem] font-NetflixSans_Md p-4 sm:p-[1.5rem]">
              {faq.answer}
              {faq.answer2 && <p className="mt-4">{faq.answer2}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;




// import React, { useState } from "react";
// import { TfiPlus } from "react-icons/tfi";

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What is Netflix?",
//       answer:
//         "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices.",
//       answer2:
//         "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
//     },
//     {
//       question: "How much does Netflix cost?",
//       answer:
//         "Netflix offers different plans to suit your needs, starting from a basic plan to a premium plan with higher resolution and more screens.",
//     },
//     {
//       question: "Where can I watch?",
//       answer:
//         "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
//       answer2:
//         "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
//     },
//     {
//       question: "How do I cancel?",
//       answer:
//         "You can cancel your subscription anytime through the 'Account' section on the Netflix website or app.",
//     },
//     {
//       question: "What can I watch on Netflix?",
//       answer:
//         "Netflix offers a wide variety of TV shows, movies, documentaries, and more across different genres.",
//     },
//     {
//       question: "Is Netflix good for kids?",
//       answer:
//         "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
//       answer2:
//         "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
//     },
//   ];

//   return (
//     <div className="mx-auto h-full text-white p-4 px-[9.25rem] rounded-lg shadow-lg">
//       <h2 className="text-[1.5rem] font-semibold mb-4">
//         Frequently Asked Questions
//       </h2>
//       {faqs.map((faq, index) => (
//         <div key={index} className="mb-2">
//           <button
//             onClick={() => toggleFAQ(index)}
//             className={`w-full flex justify-between items-center p-[1.5rem] text-left text-[24px] font-NetflixSans_Md focus:outline-none ${
//               openIndex === index
//                 ? "bg-[#414141]"
//                 : "bg-[#2d2d2d] hover:bg-[#414141]"
//             }`}
//           >
//             <span>{faq.question}</span>
//             <span>
//               {openIndex === index ? (
//                 <div
//                   className="icon-container"
//                   style={{ transform: "rotate(45deg)" }}
//                 >
//                   <TfiPlus className="h-8 w-8" />
//                 </div>
//               ) : (
//                 <TfiPlus className="h-8 w-8" />
//               )}
//             </span>
//           </button>
//           <div
//             className={`transition-all duration-500 ease-in-out overflow-hidden ${
//               openIndex === index
//                 ? "max-h-[400px] opacity-100"
//                 : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="mt-[1px] bg-[#2d2d2d] text-[1.5rem] font-NetflixSans_Md p-[1.5rem]">
//               {faq.answer}
//               {faq.answer2 && <p className="mt-[30px]">{faq.answer2}</p>}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//   );
// };

// export default Faq;
