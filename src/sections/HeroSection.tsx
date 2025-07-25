import { profile } from "../data/profile";
import Image from "next/image";
import InfoCard from "../components/InfoCard";

// Social icons
const socialIcons = {
  github: (
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  ),
  email: (
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  location: (
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C7.802 0 4.5 3.301 4.5 7.5c0 7.486 7.5 16.5 7.5 16.5s7.5-9.014 7.5-16.5C19.5 3.301 16.199 0 12 0zm0 10.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    </svg>
  ),
};

// Skill icons from DsaCpSection (except codeforces, leetcode, codechef)
const skillIcons = {
  react: (
    <img
      src="https://img.shields.io/badge/-React-darkblue?style=flat-square&logo=react"
      alt="React"
      className="inline h-6 mx-1"
    />
  ),
  "react native": (
    <img
      src="https://img.shields.io/badge/-React%20Native-darkblue?style=flat-square&logo=react"
      alt="React Native"
      className="inline h-6 mx-1"
    />
  ),
  typescript: (
    <img
      src="https://img.shields.io/badge/-TypeScript-blue?style=flat-square&logo=typescript"
      alt="TypeScript"
      className="inline h-6 mx-1"
    />
  ),
  python: (
    <img
      src="https://img.shields.io/badge/-Python-yellow?style=flat-square&logo=python"
      alt="Python"
      className="inline h-6 mx-1"
    />
  ),
  cpp: (
    <img
      src="https://img.shields.io/badge/-C++-00599C?style=flat-square&logo=c%2B%2B"
      alt="C++"
      className="inline h-6 mx-1"
    />
  ),
  matlab: (
    <img
      src="https://img.shields.io/badge/-MATLAB-orange?style=flat-square&logo=mathworks"
      alt="MATLAB"
      className="inline h-6 mx-1"
    />
  ),
  nodejs: (
    <img
      src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js"
      alt="Node.js"
      className="inline h-6 mx-1"
    />
  ),
  express: (
    <img
      src="https://img.shields.io/badge/-Express.js-black?style=flat-square&logo=express"
      alt="Express.js"
      className="inline h-6 mx-1"
    />
  ),
  postgresql: (
    <img
      src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql"
      alt="PostgreSQL"
      className="inline h-6 mx-1"
    />
  ),
  swift: (
    <img
      src="https://img.shields.io/badge/-Swift-orange?style=flat-square&logo=swift"
      alt="Swift"
      className="inline h-6 mx-1"
    />
  ),
  xcode: (
    <img
      src="https://img.shields.io/badge/-Xcode-1575F9?style=flat-square&logo=xcode"
      alt="Xcode"
      className="inline h-6 mx-1"
    />
  ),
  "machine learning": (
    <img
      src="https://img.shields.io/badge/-Machine%20Learning-007396?style=flat-square&logo=python"
      alt="Machine Learning"
      className="inline h-6 mx-1"
    />
  ),
};

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center py-12 gap-8 animate-fade-in-up duration-700">
      <div className="flex flex-row items-start justify-center w-full max-w-4xl gap-10">
        <div className="flex-shrink-0 pl-4 pr-8">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={200}
            height={200}
            className="rounded-full border-4 border-primary shadow-lg bg-white dark:bg-gray-900 animate-bounce-in"
          />
        </div>
        <div className="flex flex-col gap-6 items-start w-full max-w-md">
          <InfoCard
            content={
              <div className="profileCardContent">
                <span className="profileName">{profile.name}</span>
                <span className="profileTitle flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  {profile.title}
                </span>
                <span className="profileDescription flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {profile.description}
                </span>
              </div>
            }
          />
        </div>
      </div>
      {/* Skill icons above about section */}
      <div className="flex flex-wrap gap-2 justify-center items-center mt-8 mb-2">
        {Object.entries(skillIcons).map(([key, icon]) => (
          <span key={key}>{icon}</span>
        ))}
      </div>
      {profile.about && (
        <div className="flex justify-center mt-4">
          <InfoCard
            content={
              <div className="aboutCardContent flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{profile.about}</span>
              </div>
            }
          />
        </div>
      )}
      <div className="flex gap-4 justify-center mt-6">
        <InfoCard
          content={
            <a
              href={profile.social.github}
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              {socialIcons.github}
              <span>GitHub</span>
            </a>
          }
        />
        <InfoCard
          content={
            <a
              href={profile.social.linkedin}
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              {socialIcons.linkedin}
              <span>LinkedIn</span>
            </a>
          }
        />
        <InfoCard
          content={
            <a
              href={profile.social.twitter}
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              {socialIcons.twitter}
              <span>Twitter</span>
            </a>
          }
        />
      </div>
    </section>
  );
}
