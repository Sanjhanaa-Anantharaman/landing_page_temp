import React from "react";
import SideBar from "../layout_files/SideBar";

const Dashboard = () => {
  return (
    <div className="bg-[#f4f2ff] flex mt-18 font-sans relative">
      <div className="h-screen z-2 hidden md:flex md:fixed top-18 ">
        <SideBar />
      </div>
      <div className="min-h-screen md:ml-65 flex flex-1 flex-col p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-slate-900 text-4xl font-bold">Dashboard</h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col w-full">
            <section className="mb-8">
              <h2 className="text-slate-800 text-2xl font-semibold mb-4">
                Academic Performance
              </h2>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2 rounded-md p-6 bg-white border border-slate-200 shadow-sm">
                  <p className="text-[#5344b3] text-base font-medium">GPA</p>
                  <p className="text-slate-900 text-4xl font-bold">3.8</p>
                </div>
                <div className="flex flex-col gap-2 rounded-md p-6 bg-white border border-slate-200 shadow-sm">
                  <p className="text-[#5344b3] text-base font-medium">
                    Attendance
                  </p>
                  <p className="text-slate-900 text-4xl font-bold">95%</p>
                </div>
                <div className="flex flex-col gap-2 rounded-md p-6 bg-white border border-slate-200 shadow-sm">
                  <p className="text-[#5344b3] text-base font-medium">
                    Credits
                  </p>
                  <p className="text-slate-900 text-4xl font-bold">120</p>
                </div>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-slate-800 text-2xl font-semibold mb-4">
                Activity Tracker
              </h2>
              <div className="overflow-x-auto bg-white rounded-md border border-slate-200 shadow-sm">
                <table className="max-w-[380px] text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-[#5344b3] text-sm font-semibold">
                        Activity
                      </th>
                      <th className="px-6 py-4 text-[#5344b3] text-sm font-semibold">
                        Type
                      </th>
                      <th className="px-6 py-4 text-[#5344b3] text-sm font-semibold">
                        Date
                      </th>
                      <th className="px-6 py-4 text-[#5344b3] text-sm font-semibold">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 text-slate-800 font-medium">
                        Seminar on AI Ethics
                      </td>
                      <td className="px-6 py-4 text-[#5344b3]">Seminar</td>
                      <td className="px-6 py-4 text-[#5344b3]">2024-03-15</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-800 font-medium">
                        National Conference on Technology
                      </td>
                      <td className="px-6 py-4 text-[#5344b3]">Conference</td>
                      <td className="px-6 py-4 text-[#5344b3]">2024-04-20</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          Upcoming
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-800 font-medium">
                        Summer Internship at Tech Innovators
                      </td>
                      <td className="px-6 py-4 text-[#5344b3]">Internship</td>
                      <td className="px-6 py-4 text-[#5344b3]">2024-06-01</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          Applied
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2 className="text-slate-800 text-2xl font-semibold mb-4">
                Digital Portfolio
              </h2>
              <div className="bg-white rounded-md border border-slate-200 shadow-sm p-6 flex items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-slate-900 text-xl font-semibold">
                    View and Share Your Portfolio
                  </h3>
                  <p className="text-[#5344b3] mt-2">
                    Showcase your academic achievements and activities in a
                    professional, shareable format.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-[var(--primary-color)] text-white text-sm font-medium hover:bg-opacity-90">
                      <span>View Portfolio</span>
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-md h-10 px-4 border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100">
                      <span>Download</span>
                      <span className="material-symbols-outlined">
                        download
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className="w-1/3 h-40 bg-center bg-no-repeat bg-cover rounded-md"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD870R07ynxfnNTeiyteRaDy04eRvjGMiT5Mgbrs_175Lv6W1uQ9dI22XMeaw4xpqcef825n2AtG6BAFBFrmswm3DyYgAYfnve_dFBQQJyZ6DC_dd6-6TdDwjo8ZoOqJTPwp2s2Fp_N_sJ9d2TjVN694gRNOP9J8u5D9n2oVPydM2s1-Btvovp0IdpcJf2nIYng-qV4z4qc6iHMJASfa_MijK5go5tJtYTQjMLCjFnXz-_XAaIaePxx_DYoL53QigGTXfFHfRJxcGY")',
                  }}
                ></div>
              </div>
            </section>
          </div>
          <section>
            <h2 className="text-slate-800 text-2xl font-semibold mb-4">
              Upcoming Events
            </h2>
            <div className="bg-white rounded-md border border-slate-200 shadow-sm p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-10 bg-blue-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600">
                    event
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Guest Lecture: The Future of AI
                  </h3>
                  <p className="text-sm text-[#5344b3]">
                    April 28, 2024 - 2:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-10 bg-green-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600">
                    campaign
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Career Fair 2024
                  </h3>
                  <p className="text-sm text-[#5344b3]">
                    May 5, 2024 - 10:00 AM
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-slate-800 text-2xl font-semibold mb-4">
              Announcements
            </h2>
            <div className="bg-white rounded-md border border-slate-200 shadow-sm p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-10 bg-yellow-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-yellow-600">
                    warning
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Library Hours Update
                  </h3>
                  <p className="text-sm text-[#5344b3]">
                    Extended hours for final exams start next week.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-10 bg-indigo-100 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-indigo-600">
                    school
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Scholarship Application Deadline
                  </h3>
                  <p className="text-sm text-[#5344b3]">
                    Submit your applications by May 15, 2024.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-slate-800 text-2xl font-semibold mb-4">
              Quick Links
            </h2>
            <div className="bg-white rounded-md border border-slate-200 shadow-sm p-6 space-y-3">
              <a
                className="flex items-center gap-3 text-slate-700 hover:text-[var(--primary-color)] font-medium"
                href="#"
              >
                <span className="material-symbols-outlined">description</span>
                <span>Course Catalog</span>
              </a>
              <a
                className="flex items-center gap-3 text-slate-700 hover:text-[var(--primary-color)] font-medium"
                href="#"
              >
                <span className="material-symbols-outlined">library_books</span>
                <span>Library Resources</span>
              </a>
              <a
                className="flex items-center gap-3 text-slate-700 hover:text-[var(--primary-color)] font-medium"
                href="#"
              >
                <span className="material-symbols-outlined">support_agent</span>
                <span>IT Help Desk</span>
              </a>
              <a
                className="flex items-center gap-3 text-slate-700 hover:text-[var(--primary-color)] font-medium"
                href="#"
              >
                <span className="material-symbols-outlined">map</span>
                <span>Campus Map</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
