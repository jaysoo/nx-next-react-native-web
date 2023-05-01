import Document, { Html, Head, Main, NextScript } from 'next/document'
import NativeBaseDocument from '@native-base/next-adapter/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx)
    const nativeBaseProps = await NativeBaseDocument.getInitialProps(ctx)
    return {...initialProps, ...nativeBaseProps};
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

