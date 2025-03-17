import Layout from "../../components/Layout";
import { IPage } from "../../model";
import { ContactInfo } from "../../components/ContactInfo";

const Contact = (props: IPage) => {
  console.log({ props });

  return (
    <Layout>
      <ContactInfo />
    </Layout>
  );
};

export default Contact;
