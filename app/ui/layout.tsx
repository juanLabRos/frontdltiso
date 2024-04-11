import Aside from "./Aside";
import Header from "./Header";

export default function Layout(
  { children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* SideNav */}
      <div className="w-full flex-none md:w-32 bg-white">
        <Aside />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div className="h-20 fixed top-0 left-32 right-0 z-10">
          <Header />
        </div>

        {/* Main content */}
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-white">{children}</div>
      </div>
    </div>
  );
}
