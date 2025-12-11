export default function TopBar() {
  return (
    <div className="w-full h-12 bg-white/60 backdrop-blur-sm border-b border-slate-200 flex items-center px-4 justify-between">
      <div className="flex items-center gap-3">
        <div className="px-2 py-1 rounded text-sm font-semibold">ShravniOS</div>
        <div className="text-xs text-slate-500">Personal portfolio · OS style</div>
      </div>
      <div className="text-sm text-slate-600">{new Date().toLocaleString()}</div>
    </div>
  );
}
