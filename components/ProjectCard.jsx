export default function ProjectCard({ title, desc }) {
  return (
    <div className="p-3 border rounded-lg bg-slate-50 hover:bg-slate-100 transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-slate-600">{desc}</div>
        </div>

        <button className="px-2 py-1 rounded bg-white border text-sm hover:bg-slate-200">
          View
        </button>
      </div>
    </div>
  );
}
