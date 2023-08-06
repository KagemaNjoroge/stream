import Image from "next/image";

const services = [
  // app features
  {
    title: " 1. Generate Invoices / Receipts",
    description:
      "Generate invoices and receipts for your customers. You can also print them or send them via email, SMS or WhatsApp. Ka ETR ni mfukoni!",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "2. Manage your customers",
    description:
      "Manage your customers, save their KRA PINs, email addresses, phone numbers and more. Sync your customers between devices.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "3: Accept payments",
    description:
      "Accept payments from customers using cash, cards, or mobile money - M-Pesa, Airtel Money",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "4: Manage your inventory",
    description:
      "Manage your inventory, and get notified when you are running low on stock. You can also add your suppliers and purchase orders.",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
  {
    title: "5: Reports and analytics",
    description:
      "Get detailed reports on your sales, inventory, customers and suppliers. You can also export your reports to PDF or Excel.",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "6: Manage your expenses",
    description:
      "Manage expenses, get insights on your business performance and make informed decisions.",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What is Malipo POS?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Malipo POS is a Point of Sale system that helps you manage your business, with a simple and intuitive interface, you can manage your sales, inventory, customers and suppliers.
        Carry out your daily payments easily and quickly. Just tap and go.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
