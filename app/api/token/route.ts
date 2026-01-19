export async function POST() {
  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      const tokens = [
        "Hello",
        " ",
        "this",
        " ",
        "is",
        " ",
        "AI",
        " ",
        "style",
        " ",
        "streaming",
        "!",
      ]

      for (const token of tokens) {
        controller.enqueue(encoder.encode(token))
        await new Promise(r => setTimeout(r, 300))
      }

      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}