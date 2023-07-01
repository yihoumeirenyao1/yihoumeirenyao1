<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ if eq  .Title  .Site.Title }}{{ .Site.Title }}{{ else }}{{ with .Title }}{{.}} on {{ end }}{{ .Site.Title }}{{ end }}</title>
    <link>{{ .Permalink }}</link>
    <description>Recent content {{ if ne  .Title  .Site.Title }}{{ with .Title }}in {{.}} {{ end }}{{ end }}on {{ .Site.Title }}</description>
    <generator>Hugo -- gohugo.io</generator>{{ with .Site.LanguageCode }}
    <language>{{.}}</language>{{end}}{{ with .Site.Author.email }}
    <managingEditor>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</managingEditor>{{end}}{{ with .Site.Author.email }}
    <webMaster>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</webMaster>{{end}}{{ with .Site.Copyright }}
    <copyright>{{.}}</copyright>{{end}}{{ if not .Date.IsZero }}
    <lastBuildDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</lastBuildDate>{{ end }}
    <atom:link href="{{.Permalink}}" rel="self" type="application/rss+xml" />
    {{ range (first 10 (where (cond .IsHome .Site .Data).Pages.ByDate.Reverse "Params.date" "!=" nil)) }}
    {{ if (not (in .Content "<!--# ON_HOLD -->")) }}
    <item>
      <title>{{ .Title }}</title>
      <link>{{ .Permalink }}</link>
      <pubDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</pubDate>
      {{ with or (or .Params.author (index $.Site.Params.author .Section)) "" }}<author>{{.}}</author>{{end}}
      <guid>{{ .Permalink }}</guid>
      <description>
        {{ `<![CDATA[` | safeHTML }}
        {{ if eq .Section "en" }}
        {{ (replaceRE "\v" "" .Content) | safeHTML }}
        {{ (printf "<script>location.href='%s';</script>" .Permalink) | safeHTML }}
        {{ else }}
        {{ .Content | replaceRE `<!--#?(.|\n)*?-->` "" | safeHTML | truncate 100 (print "[...] <" .Permalink ">" | markdownify) | safeHTML }}
        {{ end }}
        {{ `]]>` | safeHTML }}
      </description>
    </item>
    {{ end }}
    {{ end }}
  </channel>
</rss>
