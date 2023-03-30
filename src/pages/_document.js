/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Helmet } from 'react-helmet';

// Via https://github.com/vercel/next.js/blob/canary/examples/with-react-helmet/pages/_document.js

export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() };
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>
          <link
            rel="stylesheet"
            id="blocksy-dynamic-global-css"
            href="https://bubblybeaks.com/wp-content/uploads/hummingbird-assets/be9d437727d0a0b958e10bf7e8234124.css"
            media="all"
          />

          <link
            rel="stylesheet"
            id="wphb-1-css"
            href="https://bubblybeaks.com/wp-content/uploads/hummingbird-assets/666b752fc1fcbd0b1d57527e6dbd15d3.css"
            media="all"
          />

          <link
            rel="stylesheet"
            id="wp-block-library-css"
            href="https://bubblybeaks.com/wp-content/uploads/hummingbird-assets/c1b6c70e16e72c9736ab28efa8af23bb.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="ugb-style-css-premium-css"
            href="https://bubblybeaks.com/wp-content/uploads/hummingbird-assets/3453181a900b15951a2498dcafef421c.css"
            media="all"
          />

          <link
            rel="stylesheet"
            id="parent-style-css"
            href="https://bubblybeaks.com/wp-content/uploads/hummingbird-assets/c48ffcbcb51b34261077a15de130073a.css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wphb-2-css"
            href="https://bubblybeaks.com/wp-content/uploads/hummingbird-assets/bb88c84ca1b15204397fd9efc0ec2c18.css"
            media=""
          />
          <link
            rel="stylesheet"
            id="wphb-3-css"
            href="https://bubblybeaks.com/wp-content/uploads/hummingbird-assets/98d6b10eb1714e9dae2b9a7c9b788007.css"
            media="all"
          />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
