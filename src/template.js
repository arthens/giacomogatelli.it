export default (htmlRenderedByReact, assets) => `
   <!doctype html>
   <html lang='en'>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div class='js-app-shell'>${htmlRenderedByReact}</div>
      <script src='${assets}'></script>
    </body>
  </html>
`
