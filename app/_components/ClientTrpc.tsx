'use client';
import { trpc } from "@/utils/providers/TrpcProviders";

export const ClientTrpc = () => {

  const { data, isPending, isSuccess } = trpc.sampleProtectedRoute.useQuery();

  if(isPending) {
    return <div>
      loading...
    </div>
  }

  return (
    <div>
      Client trpc component
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <span className='text-green-500'>{isSuccess}</span>
    </div>
  )
}