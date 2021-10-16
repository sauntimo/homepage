import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="hero flex-1 bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hi, I&apos;m Tim</h1>
          <p className="mb-5">I&apos;m a web developer in Bristol, UK.</p>
          <a className="btn btn-primary" href="/contact">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};
