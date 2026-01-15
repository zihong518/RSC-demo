export const dynamic = 'force-dynamic'; // 禁用缓存，确保是实时流

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const sendUpdate = () => {
        const data = JSON.stringify({
          message: "the data from Next.js SSE API",
          time: new Date().toLocaleTimeString(),
        });
        // SSE 格式：data: <内容>\n\n
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };
      sendUpdate();

      const intervalId = setInterval(sendUpdate, 2000);


    },
    cancel() {
      console.log("客户端已关闭连接");
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