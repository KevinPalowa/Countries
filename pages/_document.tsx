import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="w-full min-h-screen dark:bg-darker bg-light dark:text-white text-[#111517]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
