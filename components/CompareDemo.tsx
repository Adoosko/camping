import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-2 border rounded-3xl bg-neutral-200  border-neutral-300 px-2">
      <Compare
        firstImage="/before0.png"
        secondImage="/after0.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[250px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
