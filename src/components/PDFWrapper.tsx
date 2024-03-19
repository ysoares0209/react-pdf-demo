"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Page, Text, Font, Document, StyleSheet } from "@react-pdf/renderer";

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const pdfStyles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const MyDocument = () => (
  <Document>
    <Page style={pdfStyles.body}>
      <Text style={pdfStyles.title}>ASSURED SHORTHOLD TENANCY AGREEMENT</Text>
      <Text style={pdfStyles.subtitle}>
        This document should not be used to create a tenancy where the initial fixed term is to be
        for more than three years; you should consult a Solicitor as such an agreement must be
        created by Deed.
      </Text>
      <Text
        style={pdfStyles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

const PDFWrapper = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

export default PDFWrapper;
