"use client";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./tailwindcss-buttons";

export function TailwindcssButtons() {
  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
  return (
    <div className=" px-4 w-full">
      <Toaster position="top-center" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx}>{button.component}</ButtonsCard>
        ))}
      </div>
    </div>
  );
}
export const buttons = [
  {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,

    component: (
      <button
        onClick={() => {
          const section = document.getElementById("buyNow");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="relative w-[200px] inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(211,211,211,0.6)_0%,rgba(169,169,169,0.6)_50%,rgba(211,211,211,0.6)_100%)]
"
        />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-950 px-4 py-1 text-xl font-medium text-black dark:text-white backdrop-blur-3xl">
          Schudnúť
        </span>
      </button>
    ),
  },

  {
    name: "Shimmer",
    description: "Shimmer button for your website",
    showDot: false,
    component: (
      <button
        disabled
        className="inline-flex w-[200px]  gap-1 text-xl h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Nabrať <span className="text-neutral-400 text-xs">(pripravujeme)</span>
      </button>
    ),
    code: `
        // Button code
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button>

        // tailwind.config.js code
        {
          "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
        }
      `,
  },
];
