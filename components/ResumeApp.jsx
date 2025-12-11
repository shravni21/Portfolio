export default function ResumeApp() {
  return (
    <div className="space-y-3">
      <p className="leading-relaxed">
        Download or preview my resume here.
      </p>

      <a
        href="/resume.pdf"
        download
        className="px-3 py-2 rounded bg-slate-800 text-white text-sm"
      >
        Download Resume
      </a>
    </div>
  );
}
