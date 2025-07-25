"use client";
import React, { useEffect, useState } from "react";

export default function CodeforcesSection() {
  const [rating, setRating] = useState<number | null>(null);
  const [handle, setHandle] = useState<string>("aniksh");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK" && data.result && data.result[0]) {
          setRating(data.result[0].rating);
        } else {
          setError("Unable to fetch rating.");
        }
      })
      .catch(() => setError("Unable to fetch rating."));
  }, [handle]);

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        Codeforces Rating
      </h2>
      <p className="mb-4 text-center text-gray-700 dark:text-gray-200">
        Codeforces handle: <span className="font-mono">{handle}</span>
      </p>
      {rating !== null ? (
        <div className="text-3xl font-bold text-green-600 dark:text-green-400">
          Rating: {rating}
        </div>
      ) : (
        <div className="text-red-500">{error || "Loading..."}</div>
      )}
    </section>
  );
}
