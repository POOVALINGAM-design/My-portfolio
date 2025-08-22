// import React from "react"; // removed unused
import { contactInfo } from "../../constants";
import { Icon } from "@iconify/react";

const SocialLinks = () => (
  <div className="flex gap-8 mb-4">
    {contactInfo.social.map((item) => {
      // For Resume, trigger download
      if (item.name === "Resume") {
        return (
          <a
            key={item.name}
            href={item.link}
            download
            className="group flex flex-col items-center"
          >
            <span className="transition-transform duration-300 group-hover:scale-125">
              <Icon icon={item.icon} width="36" height="36" className="animate-bounce" />
            </span>
            <span className="mt-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
              Download Resume
            </span>
          </a>
        );
      }
      return (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center"
        >
          <span className="transition-transform duration-300 group-hover:scale-125">
            <Icon icon={item.icon} width="36" height="36" className="animate-bounce" />
          </span>
          <span className="mt-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
            {item.name}
          </span>
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
