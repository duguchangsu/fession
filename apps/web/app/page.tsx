"use client";

import { Button } from "@fession/ui";
import { useBoolean } from "@fession/hooks";

export default function Home() {
  const [bool, toggle] = useBoolean();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        onClick={() => {
          toggle();
        }}
      >
        {bool ? 111111 : 22222}
      </Button>
    </main>
  );
}
