import CheckoutForm from "./CheckoutPage";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <CheckoutForm id={id} />
    </div>
  );
}
