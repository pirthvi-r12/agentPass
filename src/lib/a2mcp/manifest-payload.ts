import { buildServiceManifest, TOOL_MANIFEST_ENTRIES } from "@/lib/a2mcp/tool-manifest";

export function buildFullToolManifestPayload() {
  return {
    ...buildServiceManifest(),
    examples: TOOL_MANIFEST_ENTRIES.map((tool) => ({
      name: tool.name,
      exampleRequest: tool.exampleRequest,
      exampleResponse: tool.exampleResponse,
    })),
  };
}

export function buildFullToolManifestJson(pretty = false): string {
  const payload = buildFullToolManifestPayload();
  return JSON.stringify(payload, null, pretty ? 2 : undefined);
}

/** Browsers often fail to render large JSON inline; serve HTML when the client prefers it. */
export function clientPrefersManifestHtml(request: Request): boolean {
  const url = new URL(request.url);
  const format = url.searchParams.get("format");
  if (format === "json") return false;
  if (format === "html") return true;

  const accept = request.headers.get("accept") ?? "";
  if (accept.includes("application/json") && !accept.includes("text/html")) {
    return false;
  }
  return accept.includes("text/html");
}

export function manifestHtmlDocument(jsonPretty: string): string {
  const escaped = jsonPretty
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>RepoDiet — Tool manifest</title>
  <style>
    body { margin: 0; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #05090f; color: #f2f6fa; }
    header { padding: 1rem 1.25rem; border-bottom: 1px solid rgba(139,164,190,.25); }
    h1 { margin: 0 0 .35rem; font-size: 1.1rem; font-family: system-ui, sans-serif; }
    p { margin: 0; font-size: .85rem; color: #8fa2b7; font-family: system-ui, sans-serif; }
    a { color: #46d1ff; }
    pre { margin: 0; padding: 1.25rem; overflow: auto; font-size: 12px; line-height: 1.45; white-space: pre-wrap; word-break: break-word; }
    .actions { margin-top: .75rem; display: flex; flex-wrap: wrap; gap: .75rem; font-family: system-ui, sans-serif; font-size: .85rem; }
  </style>
</head>
<body>
  <header>
    <h1>RepoDiet tool manifest</h1>
    <p>Machine-readable service definition for A2MCP / A2A integrations.</p>
    <div class="actions">
      <a href="/api/tools/manifest?format=json">Raw JSON</a>
      <a href="/tools/manifest">This page</a>
      <a href="/docs">Documentation</a>
      <a href="/app">Workspace</a>
    </div>
  </header>
  <pre>${escaped}</pre>
</body>
</html>`;
}
