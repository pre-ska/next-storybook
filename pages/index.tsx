import PrimaryLayout from "@/components/layouts/primary/PrimaryLayout";
import Search from "@/components/utility/search/Search";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return (
    <section>
      logo
      <Search />
      language tools
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
