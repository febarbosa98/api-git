"use client";

import React, { useState } from "react";
import GitHubUser from "./pages/gitHubUser";
import About from "./pages/about";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <About onUsernameChange={setUsername} userData={userData} />
      <GitHubUser username={username} setUserData={setUserData} />
    </main>
  );
}