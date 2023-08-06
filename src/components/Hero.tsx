import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Introducing<br />{" "}
            <span className="text-rose-500 font-extrabold">Malipo POS</span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
          The easy way to manage your business, with a simple and intuitive interface, you can manage your sales, inventory, customers and suppliers.
          KRA wasikusumbue tena, Malipo POS inakusaidia kufanya malipo ya kila siku kwa urahisi na kwa haraka.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#services">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                  Learn more
                </button>
              </Link>
            </div>

            <div>
              <Link href="#services">
                <button className="bg-black dark:bg-blue-400 text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                  Demo
                </button>
              </Link>
            </div>


          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="/images/hero/hello.png"
            alt="Image hero description"
            width={1025}
            height={800}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
