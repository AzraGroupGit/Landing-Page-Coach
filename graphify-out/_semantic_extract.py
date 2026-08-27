import json, os
from pathlib import Path
from graphify.llm import extract_corpus_parallel

detect = json.loads(Path('graphify-out/.graphify_detect.json').read_text(encoding="utf-8"))
files = [Path(f) for cat in ('document', 'paper', 'image')
         for f in detect.get('files', {}).get(cat, [])]

def on_chunk_done(idx, total, res):
    print(f"  chunk {idx+1}/{total} done: {len(res.get('nodes', []))} nodes, {len(res.get('edges', []))} edges", flush=True)

print(f"Extracting {len(files)} content files via gemini", flush=True)
result = extract_corpus_parallel(
    files,
    backend="gemini",
    api_key=os.environ.get("GOOGLE_API_KEY"),
    root=Path('.'),
    deep_mode=False,
    cache_root=Path('graphify-out'),
    on_chunk_done=on_chunk_done,
)
Path('graphify-out/.graphify_semantic.json').write_text(json.dumps({
    'nodes': result.get('nodes', []),
    'edges': result.get('edges', []),
    'hyperedges': result.get('hyperedges', []),
    'input_tokens': result.get('input_tokens', 0),
    'output_tokens': result.get('output_tokens', 0),
}, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"SEMANTIC: {len(result.get('nodes', []))} nodes, {len(result.get('edges', []))} edges, "
      f"{result.get('input_tokens', 0):,} in / {result.get('output_tokens', 0):,} out, "
      f"failed_chunks={result.get('failed_chunks', 0)}", flush=True)
