"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";
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

interface Props {
  title: string;
  subTitle: string;
  mockedParagraphCount: number;
}

const mockedParagraph = () => (
  <>
    <Text>Mocked paragraph</Text>
    <Text style={pdfStyles.text}>
      The responsibilities of both the landlord and tenant regarding the upkeep of the premises. The
      landlord is typically responsible for structural repairs and the maintenance of utilities,
      while the tenant is expected to keep the property clean and report any issues that require
      repair.
    </Text>
  </>
);

const PDFWrapper = ({ title, subTitle, mockedParagraphCount }: Props) => {
  const mockedParagraphs = useMemo(() => {
    const array = new Array(mockedParagraphCount).fill(mockedParagraph);
    return array;
  }, [mockedParagraphCount]);

  return (
    <PDFViewer height={"700"} width={"600"} showToolbar={false}>
      <Document pageMode="fullScreen">
        <Page size="A4" style={pdfStyles.body}>
          <Text style={pdfStyles.title}>{title}</Text>
          <Text style={pdfStyles.subtitle}>{subTitle}</Text>
          <Text>The premises</Text>
          <Text style={pdfStyles.text}>
            The premises include all, or any parts of the dwelling-house, gardens, paths, fences,
            boundaries or other outbuildings which form part of the let. Where the premises form
            only part of another property (e.g. in a block of flats), the letting includes the use,
            in common with others, of communal access ways and other similar facilities.
          </Text>
          <Text>Binding Date</Text>
          <Text style={pdfStyles.text}>
            A tenancy agreement is not, technically, a legally binding contract until it has been
            “executed” by being Dated, after both parties (or their authorised representatives) have
            signed; although it might be possible for either party to take legal action against the
            other if they withdraw prior to this date.
          </Text>
          <Text>Landlord</Text>
          <Text style={pdfStyles.text}>
            A person or persons who at any relevant time own, or have a formal interest in, the
            premises that gives them the right to possession of the premises.
          </Text>
          <Text>Tenant</Text>
          <Text style={pdfStyles.text}>
            A person, or persons, who at any relevant time are entitled to occupy the premises under
            the terms of this tenancy agreement.
          </Text>
          <Text
            style={pdfStyles.pageNumber}
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
            fixed
          />
          <Text>Rent</Text>
          <Text style={pdfStyles.text}>
            The amount of money paid by the tenant to the landlord, usually on a monthly basis, for
            the right to occupy the premises. The rent amount is agreed upon at the start of the
            tenancy and may be subject to increase in accordance with the terms specified in the
            tenancy agreement or as allowed by law.
          </Text>
          <Text>Deposit</Text>
          <Text style={pdfStyles.text}>
            A sum of money held by the landlord as security for the performance of any obligations
            of the tenant, or to cover any damage to the premises beyond normal wear and tear. The
            deposit must be returned to the tenant at the end of the tenancy, subject to any
            deductions for damage or unpaid rent.
          </Text>
          {mockedParagraphs.map((data) => data())}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFWrapper;
