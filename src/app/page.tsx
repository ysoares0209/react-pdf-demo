"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import classes from "@/styles/page.module.css";

const PDFWrapper = dynamic(() => import("../components/PDFWrapper"), { ssr: false });

export default function Home() {
  const [title, setTitle] = useState("ASSURED SHORTHOLD TENANCY AGREEMENT");
  const [subtitle, setSubtitle] = useState(
    "This document should not be used to create a tenancy where the initial fixed term is to be for more than three years; you should consult a Solicitor as such an agreement must be created by Deed."
  );

  return (
    <main className={classes.root}>
      <h1>REACT PDF DEMO</h1>
      <div className={classes.sectionWrapper}>
        {/* RIGHT SECTION */}
        <section className={classes.leftSection}>
          <div className={classes.inputGroup}>
            <label htmlFor="title">Title</label>
            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="subtitle">Subtitle</label>
            <input id="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
          </div>
        </section>
        {/* LEFT SECTION */}
        <section className={classes.rightSection}>
          <PDFWrapper title={title} subTitle={subtitle} />
        </section>
      </div>
    </main>
  );
}
