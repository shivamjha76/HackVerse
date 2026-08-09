import { Globe, Link2 } from "lucide-react";

type SocialAccountsProps = {
  github: string | null;
  linkedin: string | null;
  instagram: string | null;
  website: string | null;
  onManage: () => void;
};

export default function SocialAccounts({
  github,
  linkedin,
  instagram,
  website,
  onManage,
}: SocialAccountsProps) {
  const accounts = [
    {
      name: "GitHub",
      url: github,
      icon: Link2,
    },
    {
      name: "LinkedIn",
      url: linkedin,
      icon: Link2,
    },
    {
      name: "Instagram",
      url: instagram,
      icon: Link2,
    },
    {
      name: "Website",
      url: website,
      icon: Globe,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Link2 size={18} />
          </div>

          <h2 className="text-lg font-semibold text-slate-900">
            Social Accounts
          </h2>
        </div>

        <button
          onClick={onManage}
          type="button"
          className="rounded-lg cursor-pointer border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
        >
          Manage
        </button>
      </div>

      <div>
        {accounts.map(({ name, url, icon: Icon }, index) => {
          const connected = Boolean(url);

          return (
            <div
              key={name}
              className={`flex items-center justify-between py-2.5 ${
                index !== accounts.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={17}
                  className="text-slate-700"
                />

                <span className="text-sm text-slate-700">
                  {name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    connected
                      ? "bg-green-50 text-green-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {connected
                    ? "Connected"
                    : "Not connected"}
                </span>

                {connected ? (
                  <a
                    href={url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
                  >
                    View
                  </a>
                ) : (
                  <button
                    type="button"
                    className="rounded-lg border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
                  >
                    Connect
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}