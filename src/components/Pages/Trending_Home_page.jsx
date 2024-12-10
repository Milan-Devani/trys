import React from "react";
import poster1 from "../../assets/img/poster1.jpg";
import poster2 from "../../assets/img/poster2.jpg";
import poster3 from "../../assets/img/poster3.jpg";
import poster4 from "../../assets/img/poster4.jpg";
import poster5 from "../../assets/img/poster5.jpg";
import poster6 from "../../assets/img/poster6.jpg";

function Trending_Home_page() {
  const trendingItems = [
    { id: 1, title: "Khel Khel Mein", image: poster1 },
    { id: 2, title: "The Greatest of All Time", image: poster2 },
    { id: 3, title: "CTRL", image: poster3 },
    { id: 4, title: "Sanivaaram", image: poster4 },
    { id: 5, title: "Mathu Vadalara", image: poster5 },
    { id: 6, title: "Another Movie", image: poster6 },
  ];

  return (
    <div className="p-4 sm:p-6 bg-black py-8 sm:py-16">
      <div className="w-fit mx-auto ">
        <h2 className="text-white text-lg sm:text-2xl mb-4">Trending Now</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-2 mb-4 space-y-2 sm:space-y-0">
          <select
            className="bg-black border border-gray-500 text-white p-2 rounded text-sm sm:text-base"
            aria-label="Select country"
          >
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <select
            className="bg-black border border-gray-500 text-white p-2 rounded text-sm sm:text-base"
            aria-label="Select category"
          >
            <option>Movies</option>
            <option>Series</option>
            <option>Documentaries</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-4 justify-center ">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 sm:w-48 bg-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-bl-lg">
                TOP 10
              </div>
              <div className="p-2">
                <p className="text-white text-sm font-semibold">{item.title}</p>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Recently added
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending_Home_page;

// import React from "react";
// import poster1 from "../../assets/img/poster1.jpg";
// import poster2 from "../../assets/img/poster2.jpg";
// import poster3 from "../../assets/img/poster3.jpg";
// import poster4 from "../../assets/img/poster4.jpg";
// import poster5 from "../../assets/img/poster5.jpg";
// import poster6 from "../../assets/img/poster6.jpg";

// function Trending_Home_page() {
//   const trendingItems = [
//     { id: 1, title: "Khel Khel Mein", image: poster1 },
//     { id: 2, title: "The Greatest of All Time", image: poster2 },
//     { id: 3, title: "CTRL", image: poster3 },
//     { id: 4, title: "Sanivaaram", image: poster4 },
//     { id: 5, title: "Mathu Vadalara", image: poster5 },
//     { id: 6, title: "Another Movie", image: poster6 },
//   ];

//   return (
//     <div className="p-6 bg-black py-16 px-[9.25rem]">
//       <h2 className="text-white text-2xl mb-4">Trending Now</h2>
//       <div className="flex space-x-2 mb-4">
//         <select className="bg-black border border-[#808080b3] text-white p-2 rounded" aria-label="Select country">
//           <option>India</option>
//           <option>USA</option>
//           <option>UK</option>
//         </select>
//         <select className="bg-black border border-[#808080b3] text-white p-2 rounded" aria-label="Select category">
//           <option>Movies</option>
//           <option>Series</option>
//           <option>Documentaries</option>
//         </select>
//       </div>
//       <div className="flex space-x-4 scrollbar-hide">
//         {trendingItems.map((item) => (
//           <div
//             key={item.id}
//             className="relative min-w-[192px] bg-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-300"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 rounded-bl-lg">
//               TOP 10
//             </div>
//             <div className="p-2">
//               <p className="text-white font-semibold">{item.title}</p>
//               <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
//                 Recently added
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Trending_Home_page;
