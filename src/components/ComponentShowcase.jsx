import React from "react";
import {
  Bell,
  Home,
  Settings,
  Layers,
  CheckCircle,
  XCircle,
  Menu,
} from "lucide-react";

export default function ComponentShowcase() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-md font-medium uppercase tracking-wider text-(--text-muted) mb-2">
          Real-World Preview
        </h2>

        <p className="text-3xl md:text-4xl font-bold tracking-tight text-(--text) leading-tight">
          See how your theme{" "}
          <span className="text-(--text-muted)">behaves in UI.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="space-y-10">
          <div className="rounded-2xl border border-(--text)/10 bg-(--surface)/60 backdrop-blur-xl shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3 text-(--text)">
                <Menu size={20} />
                <span className="font-bold">HueBit UI</span>
              </div>

              <button className="p-2 rounded-lg hover:bg-(--text)/5 transition">
                <Bell size={18} className="text-(--text-muted)" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-(--text)/10 bg-(--surface)/50 backdrop-blur-xl shadow-sm p-4 w-full max-w-xs mx-auto">
            <SideNavItem icon={<Home size={16} />} text="Dashboard" active />
            <SideNavItem icon={<Layers size={16} />} text="Projects" />
            <SideNavItem icon={<Settings size={16} />} text="Settings" />
          </div>
        </div>

        <div className="space-y-10">
          <div className="rounded-2xl border border-(--text)/10 bg-(--surface)/40 backdrop-blur-xl">
            <div className="flex border-b border-(--text)/10">
              {["Overview", "Activity", "Settings"].map((tab, i) => (
                <button
                  key={i}
                  className={`px-6 py-3 text-sm font-medium transition-colors
                    ${
                      i === 0
                        ? "text-(--primary) border-b-2 border-(--primary)"
                        : "text-(--text-muted) hover:text-(--text)"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 text-sm text-(--text-muted)">
              Tabs demonstrate active indicators, subtle borders, and
              contrast-driven state transitions.
            </div>
          </div>
          <div className="rounded-2xl border border-(--text)/10 bg-(--surface)/50 backdrop-blur-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold text-(--text) text-lg">
                  Weekly Growth
                </h3>
                <p className="text-xs text-(--text-muted)">
                  Users gained this week
                </p>
              </div>
              <span className="text-sm font-medium text-green-500">+12%</span>
            </div>
            <p className="text-3xl font-bold text-(--primary) mb-4">1,245</p>
            <p className="mt-3 text-xs text-(--text-muted)">
              Compared to last week
            </p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="rounded-2xl border border-(--text)/10 bg-(--surface)/40 backdrop-blur-xl shadow-sm">
            <div className="p-6 border-b border-(--text)/10">
              <h3 className="font-semibold text-(--text)">Users</h3>
            </div>

            <table className="w-full text-sm">
              <tbody>
                {[
                  { name: "Ava Smith", role: "Designer" },
                  { name: "Leo Carter", role: "Developer" },
                  { name: "Mira Johnson", role: "PM" },
                ].map((u, i) => (
                  <tr
                    key={i}
                    className="border-b border-(--text)/5 hover:bg-(--surface)/60 transition"
                  >
                    <td className="px-6 py-3 text-(--text)">{u.name}</td>
                    <td className="px-6 py-3 text-(--text-muted)">{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3">
            <Toast
              icon={<CheckCircle size={18} />}
              title="Palette applied"
              text="Your theme has been updated."
              color="var(--primary)"
            />

            <Toast
              icon={<XCircle size={18} />}
              title="Contrast issue"
              text="Some tokens fail WCAG checks."
              color="#ef4444"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ */
/* SMALL COMPONENTS    */
/* ------------------ */

function SideNavItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg text-sm cursor-pointer transition 
        ${
          active
            ? "bg-(--primary)/15 text-(--primary)"
            : "text-(--text-muted) hover:bg-(--text)/5 hover:text-(--primary)"
        }
      `}
    >
      {icon}
      {text}
    </div>
  );
}

function Toast({ icon, title, text, color }) {
  return (
    <div className="flex gap-3 p-4 rounded-xl border border-(--text)/10 bg-(--surface)/50 backdrop-blur-xl shadow-sm">
      <div className="mt-1" style={{ color }}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-(--text)">{title}</p>
        <p className="text-xs text-(--text-muted)">{text}</p>
      </div>
    </div>
  );
}
