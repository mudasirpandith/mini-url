import Form from "./_components/form";

export default function Page() {
  return (
    <main className="flex-1 h-screen flex flex-col items-center justify-center  ">
      <h1 className="text-5xl text-center text-white font-bold mb-8 p-5 bg-slate-500 rounded-lg shadow-lg">
        Mini Url
      </h1>
      <div className="flex gap-4 mx-auto">
        <Form />
      </div>
    </main>
  );
}
