"use client";
import React, { useEffect, useState } from "react";

const icons = {
  codeforces: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline mr-2"
    >
      <rect width="32" height="32" rx="6" fill="#1F8ACB" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="18"
        fill="white"
        fontWeight="bold"
      >
        CF
      </text>
    </svg>
  ),
  leetcode: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline mr-2"
    >
      <rect width="32" height="32" rx="6" fill="#FFA116" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="18"
        fill="white"
        fontWeight="bold"
      >
        LC
      </text>
    </svg>
  ),
  codechef: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline mr-2"
    >
      <rect width="32" height="32" rx="6" fill="#5B2A06" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="18"
        fill="white"
        fontWeight="bold"
      >
        CC
      </text>
    </svg>
  ),
};

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

function useCodeforcesRating(handle: string) {
  const [rating, setRating] = useState<number | null>(null);
  useEffect(() => {
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK" && data.result && data.result[0]) {
          setRating(data.result[0].rating);
        }
      });
  }, [handle]);
  return rating;
}

function useLeetCodeProblems(username: string) {
  const [solved, setSolved] = useState<number | null>(null);
  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.totalSolved) setSolved(data.totalSolved);
      });
  }, [username]);
  return solved;
}

function useCodechefStats(handle: string) {
  const [stats, setStats] = useState<{
    rating: number | null;
    stars: number | null;
  }>({ rating: null, stars: null });

  useEffect(() => {
    // First fetch the user's details
    fetch(`https://www.codechef.com/users/${handle}`)
      .then((res) => res.text())
      .then((html) => {
        // Parse the HTML response to extract rating and stars
        const ratingMatch = html.match(/class="rating"[^>]*>(\d+)<\/span>/);
        const starsMatch = html.match(/★+/); // Match one or more star characters

        const rating = ratingMatch ? parseInt(ratingMatch[1]) : null;
        const stars = starsMatch ? starsMatch[0].length : null;

        setStats({
          rating,
          stars,
        });
      })
      .catch(() => setStats({ rating: null, stars: null }));
  }, [handle]);

  return stats;
}

export default function DsaCpSection() {
  const codeforcesRating = useCodeforcesRating("aniksh");
  const leetcodeSolved = useLeetCodeProblems("kishanknows");
  const codechefStats = useCodechefStats("blunderer");

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto animate-fade-in-up duration-700 delay-200">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
        Coding Profiles
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-50 rounded-xl -z-10"></div>
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-full blur-xl"></div>

        {/* Codeforces Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-[6rem] -z-10"></div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
            {icons.codeforces}
            <span>Codeforces</span>
          </h3>
          <div className="space-y-3">
            <p className="text-gray-700 flex items-center justify-between">
              Handle:{" "}
              <span className="font-mono text-gray-900 bg-gray-50 px-3 py-1 rounded">
                aniksh
              </span>
            </p>
            <p className="text-gray-700 flex items-center justify-between">
              Rating:{" "}
              <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                {codeforcesRating ?? "Loading..."}
              </span>
            </p>
          </div>
        </div>

        {/* LeetCode Card - Elevated in the middle */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden lg:-mt-4">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-bl-[6rem] -z-10"></div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
            {icons.leetcode}
            <span>LeetCode</span>
          </h3>
          <div className="space-y-3">
            <p className="text-gray-700 flex items-center justify-between">
              Username:{" "}
              <span className="font-mono text-gray-900 bg-gray-50 px-3 py-1 rounded">
                kishanknows
              </span>
            </p>
            <p className="text-gray-700 flex items-center justify-between">
              Solved:{" "}
              <span className="font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded">
                {leetcodeSolved ?? "Loading..."}
              </span>
            </p>
          </div>
        </div>

        {/* CodeChef Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-50 rounded-bl-[6rem] -z-10"></div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-3">
            {icons.codechef}
            <span>CodeChef</span>
          </h3>
          <div className="space-y-3">
            <p className="text-gray-700 flex items-center justify-between">
              Handle:{" "}
              <span className="font-mono text-gray-900 bg-gray-50 px-3 py-1 rounded">
                blunderer
              </span>
            </p>
            <p className="text-gray-700 flex items-center justify-between">
              Rating:{" "}
              <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded">
                {codechefStats.rating ?? "Loading..."}
              </span>
            </p>
            <p className="text-gray-700 flex items-center justify-between">
              Stars:{" "}
              <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded">
                {codechefStats.stars ?? "Loading..."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
