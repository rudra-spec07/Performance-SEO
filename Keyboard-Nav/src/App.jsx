import Dropdown from "./components/Dropdown";

export default function App() {
  return (
    // <div className="min-h-screen bg-slate-100 flex items-center justify-center">
    //   <div className="bg-white p-8 rounded-xl shadow-lg">
    //     <h1 className="text-2xl font-bold mb-6">
    //       Buggy Dropdown Menu
    //     </h1>

    //     <Dropdown />
    //   </div>
    // </div>

    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
  <section className="bg-white p-8 rounded-xl shadow-lg">
    <h1 className="text-2xl font-bold mb-6">
      Accessible Dropdown Menu
    </h1>

    <Dropdown />
  </section>
</main>
  );
}