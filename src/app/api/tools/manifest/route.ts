import { NextResponse } from "next/server";
import {
  buildFullToolManifestJson,
  buildFullToolManifestPayload,
  clientPrefersManifestHtml,
  manifestHtmlDocument,
} from "@/lib/a2mcp/manifest-payload";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    if (clientPrefersManifestHtml(request)) {
      const jsonPretty = buildFullToolManifestJson(true);
      return new NextResponse(manifestHtmlDocument(jsonPretty), {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }

    const payload = buildFullToolManifestPayload();
    const body = JSON.stringify(payload);

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "Content-Length": String(Buffer.byteLength(body, "utf8")),
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Manifest build failed.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
