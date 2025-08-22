type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Poovalingam — Frontend Developer Portfolio",
    fullName: "Poovalingam",
    email: "poovalingam@email.com",
  },
  hero: {
    name: "Poovalingam",
    p: ["Frontend Developer", "Specialized in React, TypeScript, and modern web technologies"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
  content: `Experienced Frontend Developer with a strong background in building scalable and responsive web applications using React, TypeScript, and modern JavaScript frameworks. Passionate about UI/UX, performance optimization, and delivering high-quality code. Adept at collaborating with cross-functional teams to deliver business value and user-centric solutions.`
    },
    experience: {
      p: "Professional Experience",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `A selection of projects that demonstrate my expertise in frontend development, including real-world applications, UI components, and collaborative work.`,
    },
  },
};
