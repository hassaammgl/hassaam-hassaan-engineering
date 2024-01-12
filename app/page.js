import Main from "@/components/client/Home";
import Client  from "@/components/client/Client";
import Header from "@/components/Header";
import Services from "@/components/client/Services";
import Quotation from "@/components/Quotation";
import Achievement from "@/components/client/Achievement";
export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Client />
      <Quotation />
      <Achievement />
      <Services />
    </>
  );
}
