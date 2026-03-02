import { Terminal, Copy, CheckCircle2 } from "lucide-react";

export default function CodeEditor() {
  return (
    <div className="w-full max-w-5xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 flex flex-col md:flex-row h-[700px] md:h-[500px]">
      {/* Sidebar Chat */}
      <div className="w-full md:w-80 h-[300px] md:h-full border-b md:border-b-0 md:border-r border-black/5 dark:border-white/10 flex flex-col bg-slate-50/50 dark:bg-black/20">
        <div className="p-4 border-b border-black/5 dark:border-white/10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            BIT Agent
          </span>
        </div>
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
          <div className="bg-white dark:bg-white/5 p-3 rounded-xl rounded-tl-none text-sm text-slate-800 dark:text-slate-200 shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent">
            Can you build a high-performance WebSocket server in Rust?
          </div>
          <div className="bg-brand-purple/10 dark:bg-brand-purple/20 border border-brand-purple/20 dark:border-brand-purple/30 p-3 rounded-xl rounded-tr-none text-sm text-slate-900 dark:text-white">
            Absolutely. I'll set up a Tokio-based WebSocket server using
            tungstenite. Writing the code now...
          </div>
          <div className="flex items-center gap-2 text-xs text-brand-cyan animate-pulse mt-2 font-medium">
            <Terminal className="w-4 h-4" />
            Generating 142 lines...
          </div>
        </div>
        <div className="p-4 border-t border-black/5 dark:border-white/10">
          <div className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-transparent rounded-xl p-3 text-sm text-slate-400 dark:text-slate-500 flex items-center justify-between">
            <span>Type a command...</span>
            <div className="w-6 h-6 rounded bg-slate-100 dark:bg-white/10 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">
              ↵
            </div>
          </div>
        </div>
      </div>

      {/* Editor Main */}
      <div className="flex-1 flex flex-col bg-white/80 dark:bg-[#0d0d0d]/80">
        <div className="flex items-center justify-between px-4 py-2 border-b border-black/5 dark:border-white/10 bg-slate-50/80 dark:bg-black/40">
          <div className="flex gap-2">
            <div className="px-4 py-1.5 bg-white dark:bg-white/10 rounded-t-lg text-xs font-mono border-b-2 border-brand-cyan text-slate-800 dark:text-white shadow-sm dark:shadow-none">
              server.rs
            </div>
            <div className="px-4 py-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
              Cargo.toml
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3 h-3" /> No limits applied
            </span>
            <Copy className="w-4 h-4 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto leading-relaxed">
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              1
            </div>
            <div className="text-purple-600 dark:text-purple-400">use</div>
            <div className="text-slate-800 dark:text-white ml-2">
              tokio::net::TcpListener;
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              2
            </div>
            <div className="text-purple-600 dark:text-purple-400">use</div>
            <div className="text-slate-800 dark:text-white ml-2">
              tokio_tungstenite::accept_async;
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              3
            </div>
            <div className="text-purple-600 dark:text-purple-400">use</div>
            <div className="text-slate-800 dark:text-white ml-2">
              futures_util::StreamExt;
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              4
            </div>
            <div className="text-slate-800 dark:text-white"></div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              5
            </div>
            <div className="text-cyan-600 dark:text-cyan-400">
              #[tokio::main]
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              6
            </div>
            <div className="text-purple-600 dark:text-purple-400">async fn</div>
            <div className="text-blue-600 dark:text-blue-400 ml-2">main</div>
            <div className="text-slate-800 dark:text-white">
              () -{">"} Result&lt;(), Box&lt;dyn std::error::Error&gt;&gt; {"{"}
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              7
            </div>
            <div className="text-purple-600 dark:text-purple-400 ml-4">let</div>
            <div className="text-slate-800 dark:text-white ml-2">
              addr ={" "}
              <span className="text-green-600 dark:text-green-400">
                "127.0.0.1:8080"
              </span>
              ;
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              8
            </div>
            <div className="text-purple-600 dark:text-purple-400 ml-4">let</div>
            <div className="text-slate-800 dark:text-white ml-2">
              listener = TcpListener::bind(&amp;addr).
              <span className="text-blue-600 dark:text-blue-400">await</span>?;
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              9
            </div>
            <div className="text-slate-800 dark:text-white ml-4">
              println!(
              <span className="text-green-600 dark:text-green-400">
                "Listening on: {}"
              </span>
              , addr);
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              10
            </div>
            <div className="text-slate-800 dark:text-white"></div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              11
            </div>
            <div className="text-purple-600 dark:text-purple-400 ml-4">
              while let
            </div>
            <div className="text-slate-800 dark:text-white ml-2">
              Ok((stream, _)) = listener.accept().
              <span className="text-blue-600 dark:text-blue-400">await</span>{" "}
              {"{"}
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              12
            </div>
            <div className="text-slate-800 dark:text-white ml-8">
              tokio::spawn(
              <span className="text-purple-600 dark:text-purple-400">
                async move
              </span>{" "}
              {"{"}
            </div>
          </div>
          <div className="flex bg-slate-100 dark:bg-white/5 border-l-2 border-brand-cyan">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              13
            </div>
            <div className="text-purple-600 dark:text-purple-400 ml-12">
              let
            </div>
            <div className="text-slate-800 dark:text-white ml-2">
              ws_stream = accept_async(stream).
              <span className="text-blue-600 dark:text-blue-400">await</span>
              .expect(
              <span className="text-green-600 dark:text-green-400">
                "Error"
              </span>
              );
            </div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              14
            </div>
            <div className="text-slate-800 dark:text-white ml-8">{"}"});</div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              15
            </div>
            <div className="text-slate-800 dark:text-white ml-4">{"}"}</div>
          </div>
          <div className="flex">
            <div className="w-8 text-slate-300 dark:text-slate-600 select-none text-right pr-4">
              16
            </div>
            <div className="text-slate-800 dark:text-white">{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
