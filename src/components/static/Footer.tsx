import React from "react";

const Footer = () => {
  return (
    <main className=" w-full h-80 bg-black text-white flex justify-center items-center">
      <div className=" flex gap-24">
        <section className=" flex flex-col gap-3 text-sm">
          <label className=" text-base font-bold">Figma</label>
          <span>Twitter</span>
          <span>You Tube</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </section>
        <section className=" flex flex-col gap-3 text-sm">
          <label className=" text-base font-bold">Use Cases</label>
          <span>UI Design</span>
          <span>UX Design</span>
          <span>Wireframing</span>
          <span>Diagramming</span>
          <span>Brainstorming</span>
          <span>Online Whiteboard</span>
        </section>
        <section className=" flex flex-col gap-3 text-sm">
          <label className=" text-base font-bold">Explore</label>
          <span>Design Features</span>
          <span>Prototyping Features</span>
          <span>Design System Features</span>
          <span>Collaboration Features</span>
          <span>Design Process</span>
          <span>FigJam</span>
        </section>
        <section className=" flex flex-col gap-3 text-sm">
          <label className=" text-base font-bold">Resources</label>
          <span>Blog</span>
          <span>Best Pratices</span>
          <span>Support</span>
          <span>Developers</span>
          <span>Resource Library</span>
          <span>Downloads</span>
          <span>What's New</span>
        </section>
        <section className=" flex flex-col gap-3 text-sm">
          <label className=" text-base font-bold">Compare</label>
          <span>Sketch</span>
          <span>Adobe XD</span>
          <span>Invision Studio</span>
          <span>Framer</span>
          <span>Design On Windows</span>
          <span>Miro</span>
        </section>
      </div>
    </main>
  );
};

export default Footer;
