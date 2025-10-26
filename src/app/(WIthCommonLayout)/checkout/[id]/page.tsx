import CheckoutForm from "./CheckoutPage";
interface CheckoutPageProps {
  params: {
    id: string;
  };
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { id } = params;
  return (
    <div>
      <CheckoutForm id={id} />
    </div>
  );
}
