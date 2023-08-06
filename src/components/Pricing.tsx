import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "Basic",
    price: 1000,
    currency: "Kshs",
    frecuency: "month",
    description: "All the features you need to grow your business.",
    features: [
      "Generate Invoices",
      'Android App',
      'KRA Integration',
      "1 user / 1 device",
      "Point of sale",
      "Customers management",
      "Inventory management",
      '24/7 Support',
      'Free training',
      'Single store',
    ],
    href: "#",
    cta: "Buy Basic Plan",
    mostPopular: false,
  },
  {
    title: "Basic",
    price: 10000,
    currency: "Kshs",
    frecuency: "year",
    description: "All the features you need to grow your business.",
    features: [
      "Generate Invoices",
      'Android App',
      'KRA Integration',
      "1 user / 1 device",
      "Point of sale",
      "Customers management",
      "Inventory management",
      '24/7 Support',
      'Free training',
      '1 stores / branches',

    ],
    href: "#",
    cta: "Buy Basic Plan",
    mostPopular: false,
  },
  {
    title: "Economy",
    price: 1500,
    currency: "Kshs",
    frecuency: "month",
    description: "Run your multi-store business with ease.",
    features: [
      "Unlimited vouchers ∞",
      "Upto 10 users",

      '2 store/branch',
      "Dashboard",
      "Point of sale",
      '24/7 Support',
      'Free training',
      'Single store',
      'Customer management',
      'Android App / Web App, iOS App',
      'KRA Integration',
    ],
    href: "#",
    cta: "Buy Economy Plan",
    mostPopular: true,
  },
  {
    title: "Economy",
    price: 13000,
    currency: "Kshs",
    frecuency: "year",
    description: "Run your multi-store business with ease.",
    features: [
      'Upto 10 users / devices',
      '2 store / branches',
      'Android App, iOS App, Web App',
      'KRA Integration',
      "24/7 Support",
      'Free training',
      "Dashboard",
      "Point of sale",
    ],
    href: "#",
    cta: "Buy Freelancer",
    mostPopular: true,
  },
  {
    title: "Advanced",

    price: 10000,
    currency: "Kshs",
    frecuency: "month",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited users",
      "Up to 5 stores/branches",
      "Dashboard",
      "Point of sale",
      "Inventory",
      'Free training',
      '24/7 Support',
      "Web App, iOS App, Android App, Desktop App",
      'KRA Integration',
    ],
    href: "#",
    cta: "Buy Advanced",
    mostPopular: false,
  },
  {
    title: "Advanced",
    price: 85000,
    currency: "Kshs",
    frecuency: "year",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited users",
      "Up to 5 stores/branches",
      "Dashboard",
      "Point of sale",
      "Inventory",
      'Free training',
      '24/7 Support',
      "Web App, iOS App, Android App, Desktop App",
      'KRA Integration',
    ],
    href: "#",
    cta: "Buy Enterprice",
    mostPopular: false,
  },
 
  {
    title: "Enterprise",
    price: 100000,
    currency: "Kshs",
    frecuency: "month",
    description:  "Leverage the power of the cloud to grow your business.",
    features: [

     "Vouchers, discounts, promotions management",
      "Unlimited users",
      'KRA Integration',
      'User Permissions management',
      "Dashboard",
      "Point of sale",
      "Inventory",
      "Shopping",
      "Finance",
      "Android App, iOS App, Web App, Desktop App",
      '24/7 Support',
      'Free training',
    
    ],
    href: "#",
    cta: "Buy Enterprise",
    mostPopular: false,
  },
  {
    title: "Enterprise",
    price: 100000,
    currency: "Kshs",
    frecuency: "year",
    description: "Leverage the power of the cloud to grow your business.",
    features: [
      "Vouchers, discounts, promotions management",
      "Unlimited users",
      'KRA Integration',
      'User Permissions management',
      "Dashboard",
      "Point of sale",
      "Inventory",
      "Shopping",
      "Finance",
      "Android App, iOS App, Web App, Desktop App",
      '24/7 Support',
      'Free training',
    ],
    href: "#",
    cta: "Buy Enterprice",
    mostPopular: false,
  },
];

type BillingInterval = "year" | "month";

export default function Pricing() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Pricing</h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          We have the perfect product for your business, choose the plan that
          best suits you, Try Malipo POS free for 14 days.
          All plans include KRA Integration, 24/7 Support, Free training.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={`${
              billingInterval === "year"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Yearly billing
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map(
          ({
            title,
            mostPopular,
            description,
            currency,
            price,
            frecuency,
            cta,
            features,
            href,
          }) => {
            return (
              <>
                {billingInterval === frecuency ? (
                  <div
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-rose-300 border-2 border-solid dark:border-rose-500"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    {mostPopular && (
                      <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-rose-100 text-rose-500  rounded-full text-sm font-semibold tracking-wide shadow-md">
                        Most popular
                      </p>
                    )}

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>
                    <div className="mt-2 p-6 -mx-6">
                      <p className="px-6 font-medium flex place-items-end">
                        <span className="text-xl font-bold">{currency}</span>
                        <span className="text-4xl font-bold">{price}</span>
                        <span className="ml-1.5">/{frecuency}</span>
                      </p>
                    </div>

                    {/* Call to action */}
                    <Link
                      href={href}
                      target="_blank"
                      className={`mt-4 mx-6 block px-6 py-3 font-medium leading-4 text-center rounded-lg ${
                        mostPopular
                          ? "bg-rose-500 text-white shadow-md"
                          : "bg-black text-white dark:bg-white dark:text-black"
                      }`}
                    >
                      {cta}
                    </Link>

                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        What&apos;s included
                      </p>
                      {features.map((features) => (
                        <li key={features} className="leading-6 flex">
                          <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                          <span className="ml-3 dark:text-neutral-400">
                            {features}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
