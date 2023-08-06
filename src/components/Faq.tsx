import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "What is your refund policy?",
    response:
      "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support?",
    response:
      "Yes, our support team is available 24/7 to respond to any queries",
  },
  {
    question: "What is your refund policy? If youre unhappy with your purchase for any reasonIf youre unhappy with your purchase for any reasonIf youre unhappy with your purchase for any reason",
    response:
      "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    question: "What forms of payment do you accept?",
    response:
      "Malipo POS payments can be made through M-PESA, cheque or bank transer",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
      As Malipo POS, we prioritize our customers{"'"} success, and that{"'"}s why we provide extensive training and support to ensure they can use our product effectively. Whether you have a question about a feature or are experiencing technical difficulties, our team is there to help.
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
