import React from "react";
import dynamic from "next/dynamic";
import classes from "@/styles/page.module.css";

const PDFWrapper = dynamic(() => import("../components/PDFWrapper"), { ssr: false });

export default function Home() {
  return (
    <main className={classes.root}>
      <h1>REACT PDF DEMO</h1>
      <div className={classes.sectionWrapper}>
        <section className={classes.leftSection}>
          <button>Add section</button>
        </section>
        <section className={classes.rightSection}>
          <PDFWrapper />
        </section>
      </div>
    </main>
  );
}
