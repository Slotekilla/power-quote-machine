import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjEzMTczMzIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhmMkRBMTI1Y2RCZGFjMGEyNTQ5QjEyYURkQWIyMGU1MzFCN2JiOWZjIn0",
      payload: "eyJkb21haW4iOiJxdW90ZS5tZXNrb2JyYW5kLmV1In0",
      signature: "MHg4ZTk0M2UwOWNmY2MwMDdlNjhjN2RkNjcyYWVhYjhhYjcxZDEyZTFkMmFlOWIyZTExYTU4ZmUyNmM3YTgxMmQwMDc1ZGVhOTFlZjllNmFjNTcwOWJiZTMxMTIyMmNhNzQyYjhlNTAwYzVhZGY3ZmJlZWJkYWE0ZjdmOTY2YjVhNTFj"
    },
    miniapp: {
      version: "1",
      name: "Rok Meško – Power Quotes",
      homeUrl: "https://quote.meskobrand.eu",
      iconUrl: "https://quote.meskobrand.eu/icon-1024.png",
      description: "Daily power quotes by Rok Meško. Share your strength.",
      subtitle: "Mindset and power every day.",
      primaryCategory: "productivity",
      tags: ["motivation", "mindset", "positivity", "power", "productivity"],
      screenshotUrls: [
        "https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png"
      ]
    }
  };

  return NextResponse.json(manifest);
}