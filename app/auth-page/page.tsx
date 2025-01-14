import { ssrTrpc } from "@/backend/trpc/ssr-caller";
import { ClientTrpc } from "@/app/_components/ClientTrpc";

export default async function AuthPage() {

  const data = await ssrTrpc.sampleProtectedRoute();

  return (
    <div>
      page1
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <ClientTrpc />
    </div>
  )
}