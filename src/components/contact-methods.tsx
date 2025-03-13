import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import "../styles/contact-methods.css";
import Image from "next/image";

interface ContactMethodsProps {
  methods: {
    id: string;
    icon: string;
    title: string;
    description: string;
    actionText: string;
    actionLink: string;
  }[];
}

export function ContactMethods({ methods }: ContactMethodsProps) {
  // Function to render icon based on name
  // const renderIcon = (iconName: string) => {
  //   switch (iconName) {
  //     case "mail":
  //       return <Mail size={24} />;
  //     case "map-pin":
  //       return <MapPin size={24} />;
  //     case "phone":
  //       return <Phone size={24} />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <section className="contact-methods">
      <div className="container">
        <div className="contact-methods-container">
          {methods.map((method) => (
            <div key={method.id} className="contact-method-card">
              <Image
                className="contact-method-icon"
                src={method.icon || "/placeholder.svg"}
                width={20}
                height={20}
                alt="Team member"
                style={{ objectFit: "cover" }}
              />
              <h2 className="contact-method-title">{method.title}</h2>
              <p className="contact-method-description">{method.description}</p>
              <Link href={method.actionLink} className="contact-method-action">
                {method.actionText}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
