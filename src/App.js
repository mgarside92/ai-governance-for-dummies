import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1>AI Governance for Dummies</h1>
      <p>
        Understanding how to manage artificial intelligence safely and
        responsibly
      </p>
    </header>
  );
}

function Section({ title, content }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>AI Governance for Dummies - Created with React</p>
    </footer>
  );
}

function App() {
  const sections = [
    {
      title: "What is AI Governance?",
      content:
        "AI governance refers to the rules, regulations, and policies in place to ensure that AI systems are used ethically, safely, and responsibly. It focuses on minimizing risks and maximizing benefits from AI technologies.",
    },
    {
      title: "Why is it Important?",
      content:
        "AI is powerful, but without proper governance, it can cause harm, such as bias in decision-making, loss of privacy, and security risks. Governance helps protect users and society from unintended consequences.",
    },
    {
      title: "Key Elements of AI Governance",
      content:
        "1. Transparency: AI systems should be understandable.\n2. Accountability: Those responsible for AI should be identifiable.\n3. Fairness: AI systems should not discriminate.\n4. Safety: AI systems should be reliable and secure.",
    },
    {
      title: "How Can You Contribute?",
      content:
        "Even as a beginner, you can contribute by learning about AI ethics, supporting organizations that promote responsible AI, and raising awareness about AI governance issues.",
    },
  ];

  return (
    <div className="App">
      <Header />
      {sections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
