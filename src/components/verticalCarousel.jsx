'use client'

import React, { useEffect, useRef, useState } from 'react'
import Slide from './slide'

const slideData = [
  {
    id: '01',
    title: 'Run accurate payroll, automatically.',
    desc: 'Unify your HR and payroll data to automate changes for new hires, raises, and tax adjustments — with a unified employee record, payroll information is always up to date.',
    bg: 'bg-white',
    image: 'https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc1986de3f500ad54276b6_payrol-value-prop-1%20(1).webp',
    author: {
      name: 'Elymi Peralta',
      role: 'People & Operations Generalist',
      company: 'Strike Graph',
      quote:
        'Since switching to Lattice Payroll, the integration with other tools has made the process smooth and efficient, saving us time and reducing errors.',
      photo: 'https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e44d4092ba04e9866f2dc3_ac595c05068c6eea29824112c3c5c8f8_photo-elymi-peralta.webp',
      logo: 'https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e44feca08b6a0f6f7b242a_logo-strike-graph-icon.svg',
    },
  },
  {
    id: '02',
    title: 'Payroll that works the way you do.',
    desc: 'Adjust pay schedules, earnings types, deductions, and more without added complexity — and run off-cycle payroll without extra fees.',
    bg: 'bg-[#f0f4ff]',
    image: 'https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc1cc09d9f7ba0f5b873d4_payroll-value-prop-2.webp',
    author: {
      name: 'OpenWorks',
      quote:
        'With Lattice, I can go into HRIS, see payroll, see paystubs, see what’s going on, and have visibility into everything.',
      photo: 'https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67c07ca839f277f4fa511981_logo-openworks-icon.svg',
    },
  },
  {
    id: '03',
    title: 'Run reports fast — without breaking a sweat.',
    desc: 'Effortless reporting gives you all the data you need at your fingertips — and cuts down on reporting and auditing headaches.',
    bg: 'bg-[#e7fbe9]',
    image: 'https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc241711ef095624da4cc2_payroll-value-prop-03.webp',
  },
  {
    id: '04',
    title: 'Let employees self-serve everything they need.',
    desc: 'From seamless onboarding to at-a-glance tax elections, Lattice Payroll gives employees clarity into their compensation with an intuitive, modern experience.',
    bg: 'bg-[#fff7ed]',
    image: 'https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67ead0cd8e09a19fdbcf6ad9_payroll-value-prop-04%20(2).webp',
  },
]


export default function VerticalCarousel() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const onScroll = () => {
      const scrollTop = container.scrollTop
      const slideHeight = window.innerHeight
      const index = Math.round(scrollTop / slideHeight)
      setActiveIndex(index)
    }

    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-6 left-6 z-10 hidden sm:flex flex-col space-y-2 text-sm font-medium">
        {slideData.map((_, idx) => (
          <span
            key={idx}
            className={`transition-colors ${
              activeIndex === idx ? 'text-black font-bold' : 'text-gray-400'
            }`}
          >
            {String(idx + 1).padStart(2, '0')}
          </span>
        ))}
      </div>

      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory
                   scrollbar-hide [scrollbar-width:none]
                   [&::-webkit-scrollbar]:hidden"
      >
        {slideData.map((slide, idx) => (
          <Slide key={slide.id || idx} {...slide} />
        ))}
      </div>
    </div>
  )
}


