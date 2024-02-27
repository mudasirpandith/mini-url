import Form from "./_components/form";

export default function Page() {
  return (
    <main className="flex-1 h-screen flex flex-col items-center  ">
      <h1 className="text-4xl text-left text-black font-bold mb-8 p-5 ">
        Micro U
      </h1>
      <div className="flex gap-4 mx-auto">
        <Form />
      </div>
    </main>
  );
}
