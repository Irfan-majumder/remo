"use client";

import { useTRPC } from "@/trpc/client";

import { useSuspenseQuery } from "@tanstack/react-query";


export function HealthCheck() {

    const trpc = useTRPC();
    const { data} = useSuspenseQuery(trpc.health.queryOptions());

  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-lg font-semibold">Health Check</h2>
      <p className="text-muted-foreground">
        Status: <span className="font-bold">{data.status}</span>
      </p>
    </div>
  );
};
