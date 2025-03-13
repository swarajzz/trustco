export const contactData = {
  hero: {
    title: "We are here to help",
    description:
      "Contact us if you have any questions about our company. Our best team will provide your answer within a few hours.",
  },
  methods: [
    {
      id: "email",
      icon: "/images/icons/Email.svg",
      title: "Email Us",
      description:
        "Ask anything by emailing us and we will respond within a few days.",
      actionText: "Send Email",
      actionLink: "mailto:contact@trustco.com",
    },
    {
      id: "visit",
      icon: "/images/icons/Location.svg",
      title: "Drop In",
      description:
        "You can meet us at our office and discuss the details of your questions.",
      actionText: "Get Direction",
      actionLink: "https://maps.google.com",
    },
    {
      id: "call",
      icon: "/images/icons/Call.svg",
      title: "Call Us",
      description: "Call us if your question requires an immediate response.",
      actionText: "Send Email",
      actionLink: "tel:+1234567890",
    },
  ],
  form: {
    title: "Leave us a message",
    description:
      "Contact us if you have any questions about our company. Our best team will provide your answer within a few hours.",
    fields: [
      {
        id: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        required: true,
        icon: "user",
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Your email address",
        required: true,
        icon: "mail",
      },
      {
        id: "company",
        label: "Company Name",
        type: "text",
        placeholder: "Your company name",
        required: false,
        icon: "building",
      },
      {
        id: "phone",
        label: "Contact number",
        type: "tel",
        placeholder: "Your phone number",
        required: false,
        icon: "phone",
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        placeholder: "How we can help?",
        required: true,
        rows: 5,
      },
    ],
    termsText: "I agree with the Terms & Conditions",
    termsLink: "/terms",
    submitText: "Submit",
  },
};
