import { ssrTrpc } from "@/backend/trpc/ssr-caller";

export default async function Page2() {

  const data = await ssrTrpc.sampleWithInput({
    text: 'John doe'
  });

  return (
    <div>
      page1
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}