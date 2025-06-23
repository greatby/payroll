import { AiOutlineCheck } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const suiteData = [
  {
    title: "HRIS",
    description:
      "An intuitive HRIS for seamless workflows, onboarding, and payroll to simplify HR operations.",
    items: [
      "Payroll",
      "Onboarding",
      "Workflows",
      "Employee Record",
      "Report Builder",
      "Time Tracking",
    ],
    link: "/tours/hris",
    bgColor: "bg-yellow-100",
    tourColor: "bg-amber-500",
    textClr: "text-amber-500",
  },
  {
    title: "Talent",
    description:
      "Integrated performance and engagement tools that drive productivity and retention.",
    items: [
      "Performance",
      "Compensation",
      "Analytics",
      "OKRs & Goals",
      "Grow",
      "Engagement",
    ],
    link: "/tours/lattice",
    bgColor: "bg-purple-100",
    tourColor: "bg-purple-600",
    textClr: "text-purple-600",
  },
  {
    title: "AI",
    description:
      "Save time, drive employee performance, and unlock manager insights with Lattice AI.",
    items: [
      "HR Help Desk",
      "Writing Assist",
      "Personalized Coaching",
      "Meeting Assist",
      "Insights",
      "Summaries",
    ],
    link: "/tours/ai",
    bgColor: "bg-blue-100",
    tourColor: "bg-blue-600",
    textClr: "text-blue-600",
  },
];

export default function SuiteCards() {
  return (
    <section className="px-6 py-12">
      <div className="text-left max-w-3xl mx-6 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          One Platform. No Trade-Offs.
        </h2>
        <p className="text-lg text-gray-600">
          You don't have to choose between best-in-class people programs, a
          modern HRIS, and powerful AI.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-6 lg:gap-6 p-6">
        {suiteData.map((card, idx) => (
          <a key={idx} href={card.link} className="relative group">
         
            <div
              className={`
              relative z-10 rounded-xl shadow-lg overflow-hidden 
           bg-gray-50
            `}
            >
              <div className="p-6 h-80 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <div className="relative overflow-hidden h-28">
                    <div className="absolute animate-scroll-y space-y-2">
                      {card.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <div
                            className={`flex items-center justify-center w-6 h-6 rounded-full ${card.bgColor}`}
                          >
                            <AiOutlineCheck
                              className={`${card.textClr} text-base`}
                            />
                          </div>
                          <span className="text-[20px] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[18px] text-gray-600">{card.description}</p>
              </div>
            </div>

        
            <div
              className={`
    absolute left-0 w-full h-[50px] z-0 
    py-4 font-medium text-[20px] text-center flex items-center gap-2 justify-center ${card.textClr} text-sm rounded-b-xl ${card.bgColor} block top-[97%] sm:translate-y-[-100%] sm:group-hover:translate-y-0 sm:transition-transform sm:duration-300 sm:opacity-0 sm:group-hover:opacity-100
  `}
            >
              Take a tour <FaArrowRightLong className="size-5 mt-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
