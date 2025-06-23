// components/CallToActionSection.jsx
import React from 'react'

const CallToActionSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mt-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Manage pay, people, and performance in one place
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Run accurate, effortless payroll with unified employee data.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Request a demo
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition">
            Take a product tour
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection
