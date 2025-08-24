import Navbar from "./components/Navbar";
import Info from "./components/Info";

export default function App() {
  return (
    <div className="font-google mx-auto px-4 pt-6 sm:pt-12 w-full lg:w-2/3 xl:w-1/2 text-foreground">
      <Navbar />
      <Info />
    </div>
  );
}
