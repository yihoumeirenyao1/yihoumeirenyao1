{
  "build": {
    "env": {
      "HUGO_VERSION": "0.110.0"
    }
  },
  "github": {
    "silent": true
  },
  "trailingSlash": true,
  "redirects": [
    {
      "source": "/slides/(.*)",
      "destination": "https://slides.yihui.org/$1"
    },
    {
      "source": "/([^/]+)/feed/",
      "destination": "/$1/index.xml"
    },
    {
      "source": "/([^/]+)/comments/feed/",
      "destination": "https://yihui.disqus.com/latest.rss"
    },
    {
      "source": "/cv/",
      "destination": "/en/vitae/"
    },
    {
      "source": "/xran/(.*)",
      "destination": "https://yihui.r-universe.dev/$1"
    },
    {
      "source": "/tinytex/.tlmgr",
      "destination": "/tinytex/"
    },
    {
      "source": "/r/(.*)/index.htm",
      "destination": "https://r.yihui.org/$1"
    },
    {
      "source": "/r/(.*)",
      "destination": "https://r.yihui.org/$1"
    },
    {
      "source": "/js/(.*)",
      "destination": "https://cdn.jsdelivr.net/npm/@xiee/utils/js/$1"
    },
    {
      "statusCode": 301,
      "source": "/gh/tinytex/tools/(.*)",
      "destination": "https://tinytex.yihui.org/$1"
    },
    {
      "statusCode": 301,
      "source": "/gh/(.*)",
      "destination": "https://github.com/yihui/$1"
    },
    {
      "source": "/knitr-jekyll/(.*)",
      "destination": "https://jekyll.yihui.org/$1"
    },
    {
      "source": "/recharts/(.*)",
      "destination": "https://recharts.yihui.org/$1"
    },
    {
      "source": "/media/js/center-images.js",
      "destination": "/js/center-img.js"
    },
    {
      "statusCode": 301,
      "source": "/tinytex/(.*)\\.(zip|exe|tgz|tar\\.gz)",
      "destination": "https://github.com/rstudio/tinytex-releases/releases/download/daily/$1.$2"
    },
    {
      "statusCode": 301,
      "source": "/tinytex/(.+)\\.(sh|bat|txt|profile)",
      "destination": "https://tinytex.yihui.org/$1.$2"
    },
    {
      "source": "/(knitr/demo|animation/example)s/",
      "destination": "/$1/"
    },
    {
      "source": "/formatR/",
      "destination": "/formatr/"
    },
    {
      "source": "/Rd2roxygen/",
      "destination": "/rd2roxygen/"
    },
    {
      "source": "/cn/2018/10/pod/",
      "destination": "/cn/2018/10/pot/"
    },
    {
      "source": "/cn/2018/09/index-zero/",
      "destination": "/cn/2018/09/inbox-zero/"
    },
    {
      "source": "/cn/tale/",
      "destination": "/cn/kids/2019/11/tale/"
    },
    {
      "source": "/cn/2008/11/bayesian-and-frequentist-talk-from-george-cassella/",
      "destination": "/cn/2008/11/bayesian-and-frequentist-talk-from-george-casella/"
    },
    {
      "source": "/cn/MSG-Yihui.pdf",
      "destination": "https://bookdown.org/xiangyun/msg/"
    },
    {
      "source": "/([^/]+)/guestbook.php",
      "destination": "/$1/about/"
    },
    {
      "source": "/en/2007/10/jokes-in-statistics/",
      "destination": "/en/2007/10/jokes-in-statistics-a-talk-to-be-given-in-cueb/"
    },
    {
      "source": "/cv/images/stat_in_med_yihui.pdf",
      "destination": "https://github.com/downloads/yihui/yihui.github.com/Medicine-2007-Yihui-Xie.pdf"
    },
    {
      "source": "/cv/images/Visualization_R_Paper_Yihui.pdf",
      "destination": "https://github.com/downloads/yihui/yihui.github.com/R-visualization-paper-2007-Yihui-Xie.pdf"
    }
  ]
}
