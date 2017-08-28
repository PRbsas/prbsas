import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage, theme, onToggleTheme }) {
    const page = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    )

    return { ...page, styles }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>prbsas</title>
          <meta name="description" content="Portfolio website" />
          <meta name="distribution" content="Global" />
          <meta name="theme-color" content="#fff" />
          <link rel="icon" href="../static/black-circle.png">
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
