import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {

  const rootStyle = {
    "--primary-color": "#38e07b",
    "--secondary-color": "#2c3e50",
    "--background-color": "#1a1a1a",
    "--text-primary": "#e0e0e0",
    "--text-secondary": "#b0b0b0",
    "--accent-color": "#4CAF50",
    "--input-bg": "#222222",
    fontFamily: "Spline Sans, sans-serif",
  };

  return (
    <div
      className="bg-[var(--background-color)] text-[var(--text-primary)]"
      style={rootStyle}
    >
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--secondary-color)] px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="size-6 text-[var(--primary-color)]">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236L19.071 8.5v7L12 19.764 4.929 16.5V8.5L12 4.236zM12 10a2 2 0 100 4 2 2 0 000-4z"></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Smart Student Hub
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
              href="#"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              className="bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-2 rounded-full text-sm font-bold hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition-colors duration-300 ease-in-out"
              href="#"
            >
              Sign In
            </a>
            <button className="md:hidden p-2 text-[var(--text-secondary)]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16m-7 6h7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>
        </header>
        <main className="flex-1 w-full">
          <div className="grid lg:grid-cols-2 min-h-[calc(100vh-81px)]">
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-2xl space-y-8">
                <div className="bg-[var(--secondary-color)]/20 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                      Create Your Account
                    </h2>
                    <p className="mt-2 text-[var(--text-secondary)]">
                      Join the hub and unlock your potential.
                    </p>
                  </div>
                  <form action="#" className="space-y-6" method="POST">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          htmlFor="first-name"
                        >
                          First Name
                        </label>
                        <input
                          autoComplete="given-name"
                          className="form-input"
                          id="first-name"
                          name="first-name"
                          placeholder="John"
                          required
                          type="text"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          htmlFor="last-name"
                        >
                          Last Name
                        </label>
                        <input
                          autoComplete="family-name"
                          className="form-input"
                          id="last-name"
                          name="last-name"
                          placeholder="Doe"
                          required
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                        htmlFor="email"
                      >
                        Email address
                      </label>
                      <input
                        autoComplete="email"
                        className="form-input"
                        id="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        required
                        type="email"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        autoComplete="new-password"
                        className="form-input"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        type="password"
                      />
                      <div className="mt-2 h-1.5 w-full bg-[var(--input-bg)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--primary-color)]"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">
                        Password strength: Weak
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          htmlFor="institution"
                        >
                          Institution
                        </label>
                        <select
                          className="form-input form-select"
                          id="institution"
                          name="institution"
                          required
                        >
                          <option>Select your institution</option>
                          <option>University of Example</option>
                          <option>College of Design</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          htmlFor="enrollment-number"
                        >
                          Enrollment Number
                        </label>
                        <input
                          className="form-input"
                          id="enrollment-number"
                          name="enrollment-number"
                          placeholder="e.g., 21BCE0001"
                          required
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          htmlFor="course"
                        >
                          Course
                        </label>
                        <select
                          className="form-input form-select"
                          id="course"
                          name="course"
                          required
                        >
                          <option>Select your course</option>
                          <option>Computer Science</option>
                          <option>Electrical Engineering</option>
                          <option>Mechanical Engineering</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          htmlFor="department"
                        >
                          Department
                        </label>
                        <select
                          className="form-input form-select"
                          id="department"
                          name="department"
                          required
                        >
                          <option>Select your department</option>
                          <option>School of Computing</option>
                          <option>School of Electrical Engineering</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          htmlFor="admission-year"
                        >
                          Admission Year
                        </label>
                        <select
                          className="form-input form-select"
                          id="admission-year"
                          name="admission-year"
                          required
                        >
                          <option>Select admission year</option>
                          <option>2023</option>
                          <option>2022</option>
                          <option>2021</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          htmlFor="graduation-year"
                        >
                          Graduation Year
                        </label>
                        <select
                          className="form-input form-select"
                          id="graduation-year"
                          name="graduation-year"
                          required
                        >
                          <option>Select graduation year</option>
                          <option>2027</option>
                          <option>2026</option>
                          <option>2025</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <button
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-full text-[var(--background-color)] bg-[var(--primary-color)] hover:bg-[var(--accent-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--background-color)] focus:ring-[var(--primary-color)] transition-all duration-300 ease-in-out"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-[var(--text-secondary)]">
                      Already have an account?
                      <a
                        className="font-medium text-[var(--primary-color)] hover:text-[var(--accent-color)]"
                        href="#"
                      >
                        {" "}
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img
                alt="Students collaborating in a modern campus setting"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgBkJAee7JUmNV55HCDbGpBKYxerIWKATBPQPaAWcIoFAtxAIzaEfBIzEPB_QoA_-cVkiwxZ0-81eGpjaSC4bvsKaHyQmr7w3d9-KL6QAjkAn8_uU05rkzYilbtnuQR_CUoAPVJ5h0SkYujGtyrbQPCrJlV0D-Ltzn47FyYUl053zGXu5L4DQ4MlYkWOMXojLeX33EFbn7q0QW6rsOjzK3M6AcYWf1sH_wC1IaxD8qzBOc4rZKJ85kUSmRulc6yDiKp9URCEJOXmhO"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUpPage;
