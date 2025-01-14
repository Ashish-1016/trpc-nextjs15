import { ssrTrpc } from "@/backend/trpc/ssr-caller";

export default async function Page1() {

  const data = await ssrTrpc.sampleProcedure();

  return (
    <div>
      page1
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}