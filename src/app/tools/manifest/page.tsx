import Link from "next/link";
import { buildFullToolManifestJson } from "@/lib/a2mcp/manifest-payload";

export const dynamic = "force-dynamic";

export default function ToolsManifestPage() {
  const json = buildFullToolManifestJson(true);

  return (
    <div className="min-h-screen bg-[#05090F] text-[#F2F6FA]">
      <header className="border-b border-[rgba(139,164,190,0.25)] px-5 py-4 sm:px-8">
        <h1 className="text-lg font-semibold">RepoDiet tool manifest</h1>
        <p className="mt-1 text-sm text-[#8FA2B7]">
          Human-readable view of the same payload served at{" "}
          <code className="text-[#46D1FF]">/api/tools/manifest</code>.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/api/tools/manifest?format=json" className="text-[#46D1FF] hover:underline">
            Raw JSON
          </Link>
          <Link href="/docs" className="text-[#46D1FF] hover:underline">
            Documentation
          </Link>
          <Link href="/app" className="text-[#46D1FF] hover:underline">
            Workspace
          </Link>
        </div>
      </header>
      <pre className="overflow-auto p-5 text-xs leading-relaxed text-[#C5D4E3] sm:p-8 sm:text-sm">
        {json}
      </pre>
    </div>
  );
}
