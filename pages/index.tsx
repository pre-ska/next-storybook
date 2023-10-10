import PrimaryLayout from "@/components/layouts/primary/PrimaryLayout";
import Search from "@/components/utility/search/Search";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>
        Google offered in:{" "}
        <Link
          href="/"
          locale={locale === "en" ? "fr" : "en"}
          className="underline text-blue-600"
        >
          Français
        </Link>
      </p>
    </section>
    // <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
    //   <h1>Welcome to bla bla!</h1>

    //   <CatCard {...mockCatCardProps.base} />
    // </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {/* <SidebarLayout /> */}
      {page}
    </PrimaryLayout>
  );
};
