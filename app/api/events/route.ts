export const dynamic = 'force-dynamic';

export async function GET() {
  const encoder = new TextEncoder();
  let intervalId: NodeJS.Timeout;

  const stream = new ReadableStream({
    async start(controller) {
      const sendUpdate = () => {
        const data = JSON.stringify({
          message: "the data from Next.js SSE API",
          time: new Date().toLocaleTimeString(),
        });
       
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };
      sendUpdate();

      intervalId = setInterval(sendUpdate, 2000);
    },
    cancel() {
      clearInterval(intervalId);
      console.log("closed connection");
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}