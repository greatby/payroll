import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const navItems = [
  {
    label: "Platform",
    children: [
      {
        heading: "Talent Suite",
        desc: "Manage and grow your people.",
        subTabs: [
          {
            title: "Performance",
            desc: "Identify your best, grow the rest.",
            icon: "📈",
          },
        ],
      },
      {
        heading: "HRIS",
        desc: "Streamline and automate HR operations.",
        subTabs: [
          {
            title: "HRIS",
            desc: "Spend less time on paperwork and more time on people work.",
            icon: "📅",
          },
          {
            title: "Payroll",
            desc: "Pay people your way with a powerful, intuitive tool. Easy money.",
            icon: "🏦",
          },
          {
            title: "Time Tracking",
            desc: "Clock in, clock out. Frustration-free and fast timecard entry.",
            icon: "⏰",
          },
        ],
      },
      {
        heading: "AI",
        desc: "People-first, AI-powered",
        subTabs: [
          {
            title: "AI Overview",
            desc: "Human-centered automation for smarter HR decisions.",
            icon: "🤖",
          },
        ],
      },
      {
        heading: "Innovation & Support",
        desc: "Tools and assistance to support your journey.",
        subTabs: [
          {
            title: "Innovation Hub",
            desc: "Discover our latest HR innovations.",
            icon: "💡",
          },
          {
            title: "Support Center",
            desc: "Get help and find resources.",
            icon: "🛠️",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        heading: "Performance Management",
        desc: "Align and develop your workforce.",
        subTabs: [
          {
            title: "Reviews",
            desc: "Empower employee growth with 360° feedback.",
            icon: "📈",
          },
          {
            title: "Goals",
            desc: "Set and achieve clear, trackable goals.",
            icon: "🌟",
          },
        ],
      },
      {
        heading: "Employee Engagement",
        desc: "Understand employee sentiment and act on feedback.",
        subTabs: [
          {
            title: "Surveys",
            desc: "Gain insights from regular pulse checks.",
            icon: "📊",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        heading: "Guides",
        desc: "Deep dives into best practices.",
        subTabs: [
          {
            title: "HR Playbook",
            desc: "Everything you need to lead HR in 2025.",
            icon: "📖",
          },
        ],
      },
      {
        heading: "Webinars",
        desc: "Live sessions with industry experts.",
        subTabs: [
          {
            title: "People Strategy",
            desc: "Interactive learning on culture and performance.",
            icon: "📬",
          },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(null);
  const [activeTab, setActiveTab] = useState({});
  const navRef = useRef();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);

  useEffect(() => {
    if (open) {
      const current = navItems.find((nav) => nav.label === open);
      if (current?.children?.length) {
        const firstWithSubTabs = current.children.find((c) => c.subTabs);
        if (firstWithSubTabs) {
          setActiveTab({ label: open, tab: firstWithSubTabs.heading });
        }
      }
    }
  }, [open]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav
      ref={navRef}
      className="fixed z-[9999] w-full border-b border-solid border-b-[#11110d1a] bg-[#ffffffa8] px-5 backdrop-blur-[3px]"
    >
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-4">
        <div className="text-xl font-bold">Payroll</div>
        <button
          className="md:hidden block"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6" />
          )}
        </button>
        <div className="hidden md:flex gap-8 relative w-full justify-center">
          {navItems.map((nav, navIdx) => (
            <div key={navIdx} className="relative">
              <button
                className="flex items-center gap-1 text-gray-700 font-medium"
                onClick={() => setOpen(open === nav.label ? null : nav.label)}
              >
                {nav.label} <BiChevronDown className="w-4 h-4" />
              </button>
              {open === nav.label && (
                <div className="fixed left-1/2 -translate-x-1/2 top-20 z-50 w-full max-w-[95vw] md:w-[1000px] bg-white shadow-xl rounded-2xl p-6 flex">
                  <div className="w-full md:w-1/4 bg-white space-y-4 relative">
                    <p className="text-sm font-semibold text-gray-500">
                      {nav.label}
                    </p>
                    {nav.children.map((item, idx) => {
                      const isLast = idx === nav.children.length - 1;
                      const isActive =
                        activeTab.tab === item.heading &&
                        activeTab.label === nav.label;
                      return (
                        <div
                          key={idx}
                          onClick={() =>
                            item.subTabs &&
                            setActiveTab({
                              label: nav.label,
                              tab: item.heading,
                            })
                          }
                          className={`relative cursor-pointer px-3 py-2 rounded-lg rounded-tr-none rounded-br-none  transition-all duration-200 ease-in-out z-10
                            ${
                              isActive
                                ? `bg-gray-50 font-semibold menu-tab w--current ${
                                    isLast ? "hide-after" : ""
                                  }`
                                : "text-gray-700"
                            }`}
                        >
                          <p className="text-gray-800">
                            {item.heading} {item.subTabs && <span>›</span>}
                          </p>
                          {item.desc && (
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="w-full md:w-2/4 p-6 bg-gray-50 relative z-0">
                    {(() => {
                      const activeItem = nav.children.find(
                        (item) =>
                          item.subTabs &&
                          activeTab.label === nav.label &&
                          item.heading === activeTab.tab
                      );
                      if (activeItem?.subTabs)
                        return (
                          <div className="grid grid-cols-1 gap-4">
                            {activeItem.subTabs.map((sub, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 transition-transform hover:scale-[1.01]"
                              >
                                <div className="text-2xl">{sub.icon}</div>
                                <div>
                                  <p className="text-base font-semibold text-slate-800">
                                    {sub.title}
                                  </p>
                                  <p className="text-sm text-slate-600">
                                    {sub.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      return (
                        <p className="text-gray-400">No content available</p>
                      );
                    })()}
                  </div>

                  <div className="w-full md:w-1/4 bg-gradient-to-b ml-6 from-green-100 to-white rounded-tr-2xl rounded-br-2xl p-4 shadow-inner">
                    <div className="bg-white rounded-lg p-3 shadow">
                      <img
                        src="/screenshots/hris.png"
                        alt="Product"
                        className="rounded-xl mb-2"
                      />
                      <p className="text-sm font-bold text-gray-800">
                        {activeTab.tab || nav.label} Product Tour
                      </p>
                      <p className="text-xs text-gray-500">
                        Seeing is believing. Take Lattice for a spin.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {mobileOpen && (
        <div className="block md:hidden p-4 space-y-6">
          {navItems.map((nav, navIdx) => (
            <div key={navIdx} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 font-semibold flex justify-between items-center bg-white"
                onClick={() =>
                  setAccordionOpen(
                    accordionOpen === nav.label ? null : nav.label
                  )
                }
              >
                {nav.label}
                <BiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    accordionOpen === nav.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {accordionOpen === nav.label && (
                <div className="flex rounded-b-lg overflow-hidden border-t">
                  {/* Left Tab Column */}
                  <div className="w-1/3 bg-white flex flex-col">
                    {nav.children.map((child, childIdx) => {
                      const isActive =
                        activeTab.label === nav.label &&
                        activeTab.tab === child.heading;
                      const isLast = childIdx === nav.children.length - 1;
                      return (
                        <div
                          key={childIdx}
                          onClick={() =>
                            child.subTabs &&
                            setActiveTab({
                              label: nav.label,
                              tab: child.heading,
                            })
                          }
                          className={`relative px-4 py-3 text-sm cursor-pointer ${
                            isActive
                              ? `bg-gray-50 font-semibold text-black menu-tab w--current ${
                                  isLast ? "hide-after" : ""
                                }`
                              : "text-gray-600"
                          }`}
                        >
                          <p>{child.heading}</p>
                          <p className="text-xs">{child.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Content Column */}
                  <div className="w-2/3 bg-gray-50 p-4 space-y-3">
                    {(() => {
                      const activeItem = nav.children.find(
                        (item) =>
                          activeTab.label === nav.label &&
                          activeTab.tab === item.heading
                      );
                      if (activeItem?.subTabs)
                        return activeItem.subTabs.map((sub, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-3 rounded-xl shadow-sm flex gap-3 items-start"
                          >
                            <div className="text-xl">{sub.icon}</div>
                            <div>
                              <p className="font-semibold text-sm">
                                {sub.title}
                              </p>
                              <p className="text-xs text-gray-600">
                                {sub.desc}
                              </p>
                            </div>
                          </div>
                        ));
                      return (
                        <p className="text-sm text-gray-500">
                          Select a tab to see content.
                        </p>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          ))}
          <style>{`
            .menu-tab.w--current::before,
            .menu-tab.w--current::after {
              content: "";
              position: absolute;
              right: 0;
              width: 1.5rem;
              aspect-ratio: 1 / 1;
              background-color: inherit;
              z-index: 0;
            }
            .menu-tab.w--current::before {
              top: -1.5rem;
              mask: radial-gradient(
                circle at top left,
                transparent 72%,
                black 72%
              );
            }
            .menu-tab.w--current::after {
              bottom: -1.5rem;
              mask: radial-gradient(
                circle at bottom left,
                transparent 72%,
                black 72%
              );
            }
            .menu-tab.w--current.hide-after::after {
              display: none;
            }
          `}</style>
        </div>
      )}

      <style>{`
        .menu-tab.w--current::before,
        .menu-tab.w--current::after {
          content: "";
          position: absolute;
          right: 0;
          width: 2rem;
          aspect-ratio: 1 / 1;
          background-color: inherit;
          z-index: 0;
        }
        .menu-tab.w--current::before {
          top: -2rem;
          mask: radial-gradient(circle at top left, transparent 72%, black 72%);
        }
        .menu-tab.w--current::after {
          bottom: -2rem;
          mask: radial-gradient(
            circle at bottom left,
            transparent 72%,
            black 72%
          );
        }
        .menu-tab.w--current.hide-after::after {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
