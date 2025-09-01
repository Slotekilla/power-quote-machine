"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/miniapp-sdk";

export default function SharePage() {
  const [cast, setCast] = useState<any>(null);

  useEffect(() => {
    if (sdk.context.location.type === "cast_share") {
      setCast(sdk.context.location.cast);
    }
  }, []);

  if (cast) {
    return (
      <div className="p-4 text-white bg-black min-h-screen">
        <h1 className="text-xl font-bold">Cast from @{cast.author.username}</h1>
        <p className="mt-2">{cast.text}</p>
        <p className="mt-4 text-sm opacity-70">Hash: {cast.hash}</p>
      </div>
    );
  }

  return (
    <div className="p-4 text-white bg-black min-h-screen">
      <h1 className="text-xl font-bold">Power Quotes</h1>
      <p>Share a cast here to see it analyzed.</p>
    </div>
  );
}
