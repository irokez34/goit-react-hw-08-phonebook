import ContactList from "components/Contact-list/contact-list";
import Filter from "components/Filter/filter";
import FormInput from "components/Form-input/form-input";

const ContactsPage = () => {
  return (
    <>
      <FormInput />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
