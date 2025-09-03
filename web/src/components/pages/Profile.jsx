import React from "react";
import SideBar from "../layout_files/SideBar";

const Profile = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-800">
      <style>{`:root { --blue-50:#eff6ff; --blue-100:#dbeafe; --blue-500:#3b82f6; --blue-600:#2563eb; --orange-50:#fff7ed; --orange-100:#ffedd5; --orange-500:#f97316; --teal-50:#f0fdfa; --teal-100:#ccfbf1; --teal-500:#14b8a6; --purple-50:#faf5ff; --purple-100:#f3e8ff; --purple-500:#a855f7; --green-50:#f0fdf4; --green-100:#dcfce7; --green-500:#22c55e; --yellow-50:#fefce8; --yellow-100:#fef08a; --yellow-500:#eab308; --red-50:#fef2f2; --red-100:#fee2e2; --red-500:#ef4444; }`}</style>
      <div className="h-screen md:fixed top-18">
        <SideBar />
      </div>
      <div className="relative md:ml-65 flex size-full min-h-screen flex-col overflow-x-hidden">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-10 py-4 shadow-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-slate-900">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h1 className="text-xl font-bold tracking-tighter">
                Student Hub
              </h1>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <a
                className="text-sm font-medium text-slate-700 hover:text-blue-600"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="text-sm font-medium text-slate-700 hover:text-blue-600"
                href="#"
              >
                Courses
              </a>
              <a
                className="text-sm font-medium text-slate-700 hover:text-blue-600"
                href="#"
              >
                Resources
              </a>
              <a
                className="text-sm font-medium text-slate-700 hover:text-blue-600"
                href="#"
              >
                Community
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <label className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="form-input w-full min-w-40 max-w-64 rounded-full border-slate-300 bg-white py-2 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search"
                defaultValue=""
              />
            </label>
            <div
              className="h-10 w-10 rounded-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCP-kYx3mwMYICJkbyY5PDgBW-zyDtmPfM_WYd_NKXo1u4rgPFiwiFiW_67AjfrFDuGhKSmakSptCvxqTJjo9Jh0XMeuH0W2bqcs-zMh8trO9NqRZ9zZfXFkyndy-PdmJhlrWPLjjx-97bYWMBADpwcWY9iTkrdrpzVgaZ30qUPOKveRnFbRwMkLMZLXeTbsWp8tH3iKab9KpJFlJh4w60B0O7RCGVSEAkNyacp23xLJ7R5-p4gU1CDGCDnBWf4HapbHs6fLHXZg58")',
              }}
            ></div>
          </div>
        </header>

        <main className="flex-1 bg-slate-100/50 px-4 py-8 sm:px-6 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              My Profile
            </h1>

            <div className="mt-8 grid gap-12">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-800">
                  Conferences
                </h2>
                <div className="relative pl-8">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200"></div>
                  <div className="space-y-8 overflow-x-scroll">
                    <div className="relative flex items-start gap-4">
                      <div className="absolute -left-5 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <span className="material-symbols-outlined">event</span>
                      </div>
                      <div className="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                        <p className="font-semibold text-slate-800">
                          Tech Innovators Summit
                        </p>
                        <p className="text-sm text-slate-500">
                          <span className="font-medium">Date:</span> 2023-05-15
                          | <span className="font-medium">Location:</span> San
                          Francisco | <span className="font-medium">Role:</span>{" "}
                          Attendee
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-4">
                      <div className="absolute -left-5 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <span className="material-symbols-outlined">event</span>
                      </div>
                      <div className="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                        <p className="font-semibold text-slate-800">
                          Future Leaders Conference
                        </p>
                        <p classNameName="text-sm text-slate-500">
                          <span className="font-medium">Date:</span> 2023-09-20
                          | <span className="font-medium">Location:</span> New
                          York | <span className="font-medium">Role:</span>{" "}
                          Speaker
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-800">
                  Workshops Attended
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative">
                      <div
                        className="h-40 w-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ32hS0V4g3tqDOmDvlW5cacIuwdxyQAYD2HaRSmgFd_jXbc9zLfco8KLZXsj_aSB1LdbHMiXICQY9teGszZOsU9hbXQ3nmI1pV7TO0DEx8ppjf6krc7WYjQ6ZsSVCvvjbZ8E3Mb8EXeiyUDsyThFebE4MnigojHag7AVIr-98EzY7cXUnebLiE_X3XW9_Y3dz7aKsjwTrN4tI1CIPMvfVdUGhmWn9ERCyuVlJSZc7G50H4tPGTXFLXJDxlf62jrlD1eofe9Dko3w")',
                        }}
                      ></div>
                      <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                        <span className="material-symbols-outlined">build</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800">
                        Design Thinking Workshop
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        <span className="font-medium">Date:</span> 2023-07-08 |{" "}
                        <span className="font-medium">Organizer:</span> Design
                        Institute
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Key Learnings: User-centered design principles.
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative">
                      <div
                        className="h-40 w-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdgc7NcA8B5nkvCfaEr_XpnNKsdIinbIMc6z_M5a7ehc4u4_g-V7FwAOx2TrP7cZcMBBiEsyNoFGJQxY8Rwccno7p6zpviWiNJG2xXa39GMcWFzpxvS_QcrOzJbejL3GbKICnuJgx_m2brThMW3omMdJf39Dd9ja2l4RNHT03wOwfGrzBqjhXE4u7e2vOJwBpIy5OcYVssQIVGGjDfeEgtiAE4kXDM00zfsazIleoK3fZ1sA2vDLUBssHqzKQK39xZxrgLSL6cTV4")',
                        }}
                      ></div>
                      <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                        <span className="material-symbols-outlined">build</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800">
                        Data Science Bootcamp
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        <span className="font-medium">Date:</span> 2023-11-12 |{" "}
                        <span className="font-medium">Organizer:</span> Data
                        Academy
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Key Learnings: Data analysis and visualization.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-800">
                  Certifications
                </h2>
                <div className="flex space-x-6 overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <div className="w-80 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative">
                      <div
                        className="h-40 w-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKsOT6eNgYAJFzRQ7IOY72zDxHDX3SEVAD7VkN4C7eEQDBIfn8WOYoqOIfkFJ2jQFgAzI733brgErfbSiuGAeDXQTyLIpw0AFmpWkS78PQiSsg27VItiefUsy3Fk17qbmAkA8s5E9HCTutk3ZYWjndzNsPdq3wyt7ah46Dp3HOLSeEaDmd7cNMffcSCha3qWXF6P1RHwrAkcVgNAcpw9sTZ88d7YDa_YQvqsaHZDGK4moKtVK97n2iH_I93RxV1tUgcMXvy9TUXDc")',
                        }}
                      ></div>
                      <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500">
                        <span className="material-symbols-outlined">
                          school
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800">
                        Certified Design Thinking Professional
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        <span className="font-medium">Issued By:</span> Design
                        Institute
                      </p>
                      <p className="text-sm text-slate-500">
                        <span className="font-medium">Date:</span> 2023-08-15 |{" "}
                        <span className="font-medium">ID:</span> 12345
                      </p>
                    </div>
                  </div>
                  <div className="w-80 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative">
                      <div
                        className="h-40 w-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvR2verbZuBruVF2mCZAvYysUnlhoMIGBfhp9CA9T_UeObrChIF8SyJkYmVIpVdmxKFa1p4cg9eBQOA6KVblUUXYg3ScUmHyEqm7GWWiBMQoL_-j-rVXTYURicvWNufyOPjQ8B0wrDOlRhuS74D98YohjrxPv-iDWE4D-tPPFebH9watSSQtbpK-Go40LAwQ3JnlMWlI0CeUKPp8CTDr59HlNEFGY4S1EP91z-PhaMspZYr2H1QagElhsyiCa4smIuYlcnVi_Y8WM")',
                        }}
                      ></div>
                      <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-500">
                        <span className="material-symbols-outlined">
                          school
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800">
                        Data Science Certification
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        <span className="font-medium">Issued By:</span> Data
                        Academy
                      </p>
                      <p className="text-sm text-slate-500">
                        <span className="font-medium">Date:</span> 2023-12-20 |{" "}
                        <span className="font-medium">ID:</span> 67890
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-800">
                  Clubs
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                      <span className="material-symbols-outlined text-3xl">
                        palette
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">
                        Art Club
                      </h3>
                      <p className="text-sm text-slate-500">
                        <span className="font-medium">Role:</span> President |{" "}
                        <span className="font-medium">Duration:</span> 2022-2023
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                      <span className="material-symbols-outlined text-3xl">
                        groups
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">
                        Debate Society
                      </h3>
                      <p className="text-sm text-slate-500">
                        <span className="font-medium">Role:</span> Member |{" "}
                        <span className="font-medium">Duration:</span> 2023-2024
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-800">
                  Volunteer
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500">
                      <span className="material-symbols-outlined text-3xl">
                        favorite
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">
                        Community Cleanup Drive
                      </p>
                      <p className="text-sm text-slate-500">
                        <span className="font-medium">Role:</span> Organizer |{" "}
                        <span className="font-medium">Date:</span> 2023-06-22 |{" "}
                        <span className="font-medium">Hours:</span> 10
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
