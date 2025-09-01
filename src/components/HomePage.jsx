import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-family: Inter, sans-serif">
      <div className="relative flex min-h-screen flex-col">
        {/* header */}
        <header className="fixed top-0 z-50 bg-white shadow-md w-full">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <h2 className="text-xl font-bold text-gray-900">
              Smart Student Hub
            </h2>
            <div className="flex items-center gap-6">
              <a className="text-gray-600 hover:text-[#137fec]" href="#">
                Features
              </a>
              <a
                className="text-gray-600 hover:text-[#137fec] hidden sm:block"
                href="#"
              >
                Log In
              </a>
              <a
                className="rounded-lg bg-[#137fec] px-4 py-2 text-white hover:bg-blue-700"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </div>
        </header>

        {/* <!-- Hero --> */}
        <main className="flex-1 mt-18">
          <section className="bg-white py-20">
            <div className="container mx-auto grid gap-12 lg:grid-cols-2 px-6">
              <div>
                <h1 className="text-5xl font-bold">
                  Unlock Your Full Potential with
                  <span className="text-[#137fec]">Smart Student Hub</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  A centralized platform to manage your academic records, track
                  achievements, and build a stunning digital portfolio
                  effortlessly.
                </p>
                <ul className="mt-6 space-y-2 text-gray-700">
                  <li>✔ Track grades, attendance, activities</li>
                  <li>✔ Verified by faculty for authenticity</li>
                  <li>✔ Generate digital portfolio instantly</li>
                </ul>
                <div className="mt-10 flex gap-4">
                  <a
                    className="rounded-lg bg-[#137fec] px-6 py-3 text-white font-semibold hover:bg-blue-700"
                    href="#"
                  >
                    Get Started Free
                  </a>
                  <a
                    className="rounded-lg border px-6 py-3 text-gray-700 font-semibold hover:bg-gray-100"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGGVzZUVX8JtE5fQNcrrOD1PwpL1XZ8dalT72uVhdiQGdw6emols4Q0y9pZGrFkzPEG_vf8MdOZZO-3y3WNOtq2MJiNwTU4glZw2yKH2UVgHWnwmSWuuINfG_fdQujSLJAo6_r5VBxBJioJTHeROdn2A7Y1GYxQU6gccuE5Q0MR5KudYLKJ0A0BfgwzOID9lqdWOLFhWZQCf3VV5llQ64SWr6Ejv-r1VsRXXYcvK6afybwjNSV6U2Yq1kAVHbsPjkL7HOPUNv-a5gC"
                  alt="Student dashboard mockup"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* <!-- Features --> */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-3xl font-bold">
                Everything You Need in One Place
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Discover the powerful features that make Smart Student Hub the
                ultimate tool for academic success.
              </p>
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border p-8 shadow-sm bg-white">
                  <h3 className="text-xl font-bold">
                    Dynamic Student Dashboard
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Real-time overview of grades, attendance, and progress.
                  </p>
                </div>
                <div className="rounded-xl border p-8 shadow-sm bg-white">
                  <h3 className="text-xl font-bold">Activity Tracker</h3>
                  <p className="mt-2 text-gray-600">
                    Log seminars, online courses, internships, and
                    extracurriculars.
                  </p>
                </div>
                <div className="rounded-xl border p-8 shadow-sm bg-white">
                  <h3 className="text-xl font-bold">Faculty Approval Panel</h3>
                  <p className="mt-2 text-gray-600">
                    Faculty validates records to ensure authenticity.
                  </p>
                </div>
                <div className="rounded-xl border p-8 shadow-sm bg-white">
                  <h3 className="text-xl font-bold">
                    Auto-Generated Portfolio
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Download and share verified digital portfolios.
                  </p>
                </div>
                <div className="rounded-xl border p-8 shadow-sm bg-white">
                  <h3 className="text-xl font-bold">Analytics & Reporting</h3>
                  <p className="mt-2 text-gray-600">
                    Generate reports for NAAC, AICTE, NIRF, and evaluations.
                  </p>
                </div>
                <div className="rounded-xl border p-8 shadow-sm bg-white">
                  <h3 className="text-xl font-bold">Integration Support</h3>
                  <p className="mt-2 text-gray-600">
                    Seamless link with LMS, ERP, and digital university systems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- How It Works --> */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
                  <h3 className="text-xl font-semibold">1. Upload & Track</h3>
                  <p className="mt-2 text-gray-600">
                    Add academic, extra-curricular, and internship records.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
                  <h3 className="text-xl font-semibold">2. Get Verified</h3>
                  <p className="mt-2 text-gray-600">
                    Faculty approve and validate records for authenticity.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
                  <h3 className="text-xl font-semibold">3. Showcase & Share</h3>
                  <p className="mt-2 text-gray-600">
                    Generate a portfolio PDF or shareable web profile.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Benefits --> */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center">
                Benefits for Everyone
              </h2>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div className="p-6 rounded-xl bg-white shadow">
                  <h3 className="text-xl font-semibold text-[#137fec]">
                    For Students
                  </h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>✔ Verified academic + extracurricular portfolio</li>
                    <li>✔ Easy sharing for jobs and internships</li>
                    <li>✔ Stay on top of grades and attendance</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-white shadow">
                  <h3 className="text-xl font-semibold text-[#137fec]">
                    For Institutions
                  </h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>✔ Simplified NAAC, AICTE, and NIRF reporting</li>
                    <li>✔ Transparency and data accuracy</li>
                    <li>✔ Improved student engagement</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Testimonials --> */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold">What People Say</h2>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div className="p-6 bg-gray-50 rounded-xl shadow">
                  <p className="text-gray-700 italic">
                    "Smart Student Hub helped me create a verified portfolio
                    that impressed recruiters during placements!"
                  </p>
                  <p className="mt-4 font-semibold">– Student User</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl shadow">
                  <p className="text-gray-700 italic">
                    "We saved weeks of effort during NAAC reporting with the
                    automated reports feature."
                  </p>
                  <p className="mt-4 font-semibold">– Faculty Member</p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- FAQs --> */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center">FAQs</h2>

              <div className="mt-8 flex flex-col gap-2 max-w-3xl mx-auto">
                <div className="collapse collapse-plus bg-white border border-base-300">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title font-semibold">
                    Is my data secure?
                  </div>
                  <div className="collapse-content text-sm">
                    Yes. We use encrypted storage and faculty verification for
                    data integrity.
                  </div>
                </div>
                <div className="collapse collapse-plus bg-white border border-base-300">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title font-semibold">
                    Can I download my portfolio?
                  </div>
                  <div className="collapse-content text-sm">
                    Absolutely. You can export it as a PDF or share it via a
                    public web link.
                  </div>
                </div>
                <div className="collapse collapse-plus bg-white border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold">
                    Do faculty need a separate login?
                  </div>
                  <div className="collapse-content text-sm">
                    Yes, faculty have their own portal to validate student
                    records.
                  </div>
                </div>
                <div className="collapse collapse-plus bg-white border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold">
                    How do I update my profile information?
                  </div>
                  <div className="collapse-content text-sm">
                    Go to "My Account" settings and select "Edit Profile" to
                    make changes.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- CTA --> */}
          <section className="bg-[#137fec] py-20 text-center text-white">
            <h2 className="text-3xl font-bold">
              Ready to take control of your academic journey?
            </h2>
            <p className="mt-4 text-lg">
              Join thousands of students already using Smart Student Hub.
            </p>
            <a
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-[#137fec] hover:bg-gray-100"
              href="#"
            >
              Sign Up Now
            </a>
          </section>
        </main>

        {/* <!-- Footer --> */}
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="font-semibold">Smart Student Hub</h3>
                <p className="mt-2 text-gray-400">
                  Empowering students to succeed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Product</h3>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Company</h3>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Legal</h3>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center text-gray-400">
              © 2024 Smart Student Hub. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
