import type { V2_MetaFunction } from "@remix-run/node";
import MainHeader from '~/components/MainHeader'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Conner Gillette" },
    { name: "description", content: "Full-stack software engineer with experience in ecommerce and web scraping." },
  ];
};

export default function Index() {
  return (
    <div className="flex m-2 p-10 bg-slate-200 rounded-xl">
      <MainHeader text="Conner Gillette" />
    </div>
  );
}
