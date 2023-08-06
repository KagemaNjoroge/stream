import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "KRA / ETIMS Integration",
    description: "Malipo POS integrates with Kenya Revenue Authority transmitting invoices & reports as soon as they are generated. VAT compliance has never been this easier",
    features: [
      'Seamless integration with Kenya Revenue Authority(KRA) servers',
      'Monthly Reports for VAT filing',
      'Receive KRA Notifications without leaving the app',
      'AI guided VAT Filing support'
    ],
    image: '/images/features/kra.jpg',
    order: false
  },
  {
    title: "Dashboard",
    description:
      "Get a quick overview of your business, and access all the most important features with ease. See your daily sales, your customers, your products and more.",
    features: [
      "Daily/Weekly/Monthly sales reports",
      'Inventory stats',
      "Customers management",
      "Users management",
    ],
    image: "/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "Products / Services",
    description:
      "Add your products and organize them into categories. You can also add variants, such as size and color, and manage your inventory.",
    features: [
      "Sync products with your online store",
      "Add product variants",
      "Add, edit and delete products",

    ],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "Inventory",
    description:
      "Manage your inventory, and get notified when you are running low on stock. You can also add your suppliers and purchase orders.",
    features: [
      "Low stock alerts",
      "Imports management",
      "Add suppliers and purchase orders",
    ],
    image: "/images/features/inventory.svg",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Malipo POS is packed with features that will help you to run your business more efficiently and effectively.

        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
