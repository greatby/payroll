export default function Footer () {
    return(
        <footer className="w-full bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Product</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Integrations</a></li>
              <li><a href="#" className="hover:underline">API</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Guides</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Payroll. All rights reserved.
        </div>
      </footer>
    )
}

// import {
//   FaTwitter,
//   FaDiscord,
//   FaGithub,
//   FaYoutube,
//   FaGlobe
// } from 'react-icons/fa'

// export default function Footer() {
//   return (
//     <footer className="relative z-10 w-full px-6 md:px-20 pb-12">
//       <div className="max-w-7xl mx-auto rounded-xl bg-white/10 backdrop-blur-md text-white shadow-xl px-6 py-10 md:py-12">
//         <div className="flex flex-col md:flex-row md:justify-between gap-10">
//           {/* Brand Section */}
//           <div className="md:w-1/4">
//             <h2 className="text-lg font-semibold mb-2">🌙 ASTRIA</h2>
//             <p className="text-sm text-gray-300">
//               Astria brings high quality knowledge about the world and beyond the planet – free for everyone.
//             </p>
//             <p className="mt-4 text-xs text-gray-400">Designed by @GotinGeorgiG</p>
//           </div>

//           {/* Link Sections */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-sm">
//             <div>
//               <h3 className="font-semibold text-white mb-2">Explore</h3>
//               <ul className="space-y-1 text-gray-300">
//                 <li>Sessions & Practices</li>
//                 <li>Articles & Insights</li>
//                 <li>Community</li>
//                 <li>Tools & Resources</li>
//                 <li>Upcoming Features</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-2">About Project</h3>
//               <ul className="space-y-1 text-gray-300">
//                 <li>Our Story</li>
//                 <li>Meet the Team</li>
//                 <li>Press & Media</li>
//                 <li>Careers</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-2">Support</h3>
//               <ul className="space-y-1 text-gray-300">
//                 <li>Contact Us</li>
//                 <li>Privacy Policy</li>
//                 <li>Terms of Service</li>
//                 <li>Report an Issue</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Social Row */}
//         <div className="mt-10 flex justify-between items-center border-t border-white/20 pt-6 text-sm text-gray-300">
//           <p>Our Story Continues:</p>
//           <div className="flex gap-4 text-xl text-white">
//             <FaGlobe className="hover:text-blue-400 transition" />
//             <FaTwitter className="hover:text-blue-400 transition" />
//             <FaDiscord className="hover:text-indigo-400 transition" />
//             <FaGithub className="hover:text-gray-300 transition" />
//             <FaYoutube className="hover:text-red-400 transition" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
