

import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { HealthCheck } from "./health-check";
import { ErrorBoundary } from "react-error-boundary";

export default function TestPage() {
   prefetch(trpc.health.queryOptions());

    return (
        <HydrateClient>
           <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-2xl font-bold">TRPC Test page</h1>
              <ErrorBoundary fallback={<div>Something went wrong.</div>}>
                 <Suspense fallback={<div>Loading...</div>}>
                    <HealthCheck />
                 </Suspense>
              </ErrorBoundary>
           </div>
        </HydrateClient>
    );
}   