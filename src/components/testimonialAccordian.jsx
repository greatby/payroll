import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    title: 'Executives',
    name: 'Christina Donnelly',
    quote: 'Our CEO instantly got Lattice — no training needed. It just made sense. Now he’s one of our biggest champions, which says a lot about how intuitive and low-friction the tool really is.',
    image: '/images/exec.jpg',
    logo: '/logos/bark.svg',
    role: 'Chief People Officer',
    company: 'BARK',
    desc: 'Drive employee performance, engagement, and retention — with the metrics to prove it.'
  },
  {
    title: 'HR Leaders',
    name: 'Shveta Malhan',
    quote: 'I love that Lattice makes it so our people leaders don’t have to hunt for info. Whether they are having one-on-ones, giving feedback, or engaging in a review cycle, our managers have all the context and information they need at their fingertips thanks to Lattice.',
    image: '/images/hr.jpg',
    logo: '/logos/klick.svg',
    role: 'VP People Insights',
    company: 'Klick Health',
    desc: 'Build and run talent management programs that scale your impact without growing headcount.'
  },
  {
    title: 'Managers',
    name: 'Heather Dunn',
    quote: 'Lattice is central to performance and career development at Brex — whether for quarterly check-ins or growth talks, its intuitive design and AI-powered insights help managers support their teams and empower employees to focus on the work that matters most to their growth.',
    image: '/images/manager.jpg',
    logo: '/logos/brex.svg',
    role: 'Chief People Officer',
    company: 'Brex',
    desc: 'Empower your team to work faster, exceed quota, and achieve business results.'
  },
  {
    title: 'Employees',
    name: 'Kevin McCarthy',
    quote: 'We partner with Lattice to build thoughtful systems that help scale our organization, culture, and communications, because building something long-lasting means getting it right from the start.',
    image: '/images/employee.jpg',
    logo: '/logos/unreal.svg',
    role: 'CEO',
    company: 'UNREAL Snacks',
    desc: 'Stay aligned, grow your career, and enjoy a more streamlined employee experience.'
  },
];

export default function TestimonialAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex p-6 flex-col items-center w-[95%] m-auto justify-center bg-white rounded-[40px] border border-gray-200 overflow-x-auto">
      <div className="mb-8 w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Built to power your entire workplace
        </h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-6">
        {/* Mobile: Accordion Style */}
        <div className="lg:hidden flex flex-col gap-4 w-full">
          {testimonials.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className="rounded-xl border shadow bg-white overflow-hidden">
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="flex justify-between items-center w-full px-4 py-3 text-left"
                >
                  <span className="font-semibold">{item.title}</span>
                  <span>{isActive ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-md object-cover"
                        />
                        <img src={item.logo} alt="" className="w-8 h-8 ml-auto" />
                      </div>
                      <blockquote className="text-sm text-gray-800 italic mb-2">
                        “{item.quote}”
                      </blockquote>
                      <div className="text-xs text-gray-600">
                        <p className="font-semibold">{item.name}</p>
                        <p>
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: Horizontal Expand */}
        <div className="hidden lg:flex gap-4 w-full justify-center overflow-x-auto">
          {testimonials.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer rounded-xl overflow-hidden shadow-md border transition-all duration-300 flex-shrink-0 ${
                  isActive ? 'bg-white w-[500px]' : 'bg-white w-[180px] hover:bg-gray-100'
                }`}
              >
                {/* Image & Logo */}
                <div className="flex items-start gap-3 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <img src={item.logo} alt="" className="w-8 h-8 mt-2 ml-auto" />
                </div>

                {/* Title & Desc */}
                <div className="px-4 pb-4">
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  {!isActive && (
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  )}
                </div>

                {/* Expanded Panel */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-white p-4 z-10 rounded-xl"
                    >
                      <blockquote className="text-sm text-gray-800 italic mb-4">
                        “{item.quote}”
                      </blockquote>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="font-semibold">{item.name}</span>
                        <span>
                          {item.role}, {item.company}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
