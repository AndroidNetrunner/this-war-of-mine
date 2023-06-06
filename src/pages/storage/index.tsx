"use client";

import React from "react";
import Storage from "../../components/Storage";
import Navbar from "../../components/Navbar";
import Findings from "../../components/Findings";
import Trading from "../../components/Trading";

import { useState } from "react";
export default function Home() {
  const [page, setPage] = useState("storage");
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "storage" && <Storage />}
      {page === "findings" && <Findings />}
      {page === "trading" && <Trading />}
    </>
  );
}
