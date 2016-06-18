export default (rendered, vars) =>
`<!doctype html>
<html lang='${vars.lang}'>
<head>
  <meta charset="utf-8">

  <title>${vars.pageTitle}</title>
  <meta name="description" content="${vars.pageDescription}">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta http-equiv="cleartype" content="on">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta http-equiv="X-UA-TextLayoutMetrics" content="natural" />
  <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width">
  
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <div id="root">${rendered}</div>

  <script src='/js/app.js'></script>
</body>
</html>`
