export default async function Page({ params }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Service ID: {params.slug}</h1>
    </div>
  );
}
