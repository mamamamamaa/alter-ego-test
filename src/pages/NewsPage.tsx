import * as React from "react";
import { Hero } from "../components/Hero/Hero";
import { NewsList } from "../components/NewsList/NewsList";

export default function NewsPage() {
  return (
    <>
      <Hero />
      <NewsList />
    </>
  );
}
