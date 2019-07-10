import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import de from "react-intl/locale-data/de";
import hi from "react-intl/locale-data/hi";

const deTranslation = {
  Home: "Huis",
  Service: "Service",
  Courses:"cursussen",
  About:"Wat betreft",
  Contact:"Contact",
  Login:"Log In",
  Signup:"Inschrijven",
  Facebook:"Facebook",
  Twitter:"Twitter",
  Gmail:"Gmail",
  Whatsapp:"Whatsapp",
  Instagram:"Instagram",
  Pinterest:"Pinterest",
  Booking:'reservering',
  ConfirmBooking:'bevestig boeking',
  RejectBooking:'weigeren boeking',
  Store:'Store'
};
const enTranslation = {
  Home: "Home",
  Service: "Service",
  Courses:"Courses",
  About:"About",
  Contact:"Contact",
  Login:"Login",
  Signup:"Signup",
  Facebook:"Facebook",
  Twitter:"Twitter",
  Gmail:"Gmail",
  Whatsapp:"Whatsapp",
  Instagram:"Instagram",
  Pinterest:"Pinterest",
  Booking:'Booking',
  ConfirmBooking:'Confirm Booking',
  RejectBooking:'Reject Booking',
  Store:'Store'
};
const hiTranslation = {
  Home: "होम",
  Service: "सर्विस",
  Courses:"पाठ्यक्रम",
  About:"के बारे में",
  Contact:"संपर्क करें",
  Login:"लॉग इन करें",
  Signup:"साइन अप करें",
  Facebook:"फेसबुक",
  Twitter:"ट्विटर",
  Gmail:"जीमेल",
  Whatsapp:"व्हाट्स एप",
  Instagram:"इंस्टाग्राम",
  Pinterest:"पिन टेरस्ट",
  Booking:'बुकिंग',
  ConfirmBooking:'बुकिंग की पुष्टि करें',
  RejectBooking:'बुकिंग अस्वीकार करें',
  Store:'Store'
};

addLocaleData([...en, ...de, ...hi]);

const Context = React.createContext();

class IntlProviderWrapper extends React.Component {
  constructor(...args) {
    super(...args);

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: enTranslation });

    this.switchToDeutsch = () =>
      this.setState({ locale: "de", messages: deTranslation });
      
    this.switchToHindi = () =>
    this.setState({ locale: "hi", messages: hiTranslation });

    // pass everything in state to avoid creating object inside render method (like explained in the documentation)
    this.state = {
      locale: "en",
      messages: enTranslation,
      switchToEnglish: this.switchToEnglish,
      switchToDeutsch: this.switchToDeutsch,
      switchToHindi:this.switchToHindi
    };
  }

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      <Context.Provider value={this.state}>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </Context.Provider>
    );
  }
}

export { IntlProviderWrapper, Context as IntlContext };
