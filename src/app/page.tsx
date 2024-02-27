import Form from "./_components/form";

export default function Page() {
  return (
    <main className="flex-1 h-screen flex flex-col items-center">
      <h1 className="text-4xl text-left text-black font-bold  p-5">
        Micro Url
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8 px-5">
        Shorten your URLs very efficiently and securely with Micro Url.
      </p>
      <div className="flex gap-4 mx-auto">
        <Form />
      </div>
    </main>
  );
}
