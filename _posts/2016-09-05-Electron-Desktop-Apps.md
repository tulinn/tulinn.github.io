---
layout: default
title: "Electron Desktop Apps"
date: 2016-09-05 00:18:23 +0700
summary: "Electron is a framework to build cross platform desktop applications with web technologies like JavaScript, HTML, and CSS. One of the main reasons Electron is recommended as the framework to develop a desktop application, is because Electron uses the same technology web applications use."
---

## {{page.title}}

<p style="color:#A7AEB4;">{{ page.date | date: '%B %Y' }}</p>

* * *

Electron is a framework to build cross platform desktop applications with web technologies like JavaScript, HTML, and CSS. One of the main reasons Electron is recommended as the framework to develop a desktop application, is because Electron uses the same technology web applications use. Thus, it will be faster to prototype, less costly to build and easy to convert the desktop application to a web application in the future if needed. Another reason is the easy maintenance; desktop applications are easy to maintain and often connect better than web applications. An Electron application runs the same regardless of the operating system. 

<div class="PageNavigation">
{% if page.next.url %}
<a href="{{page.next.url}}"><i title="Back" class="fa fa-long-arrow-left" style="color:#ffb400;"></i></a>
<a href="{{page.next.url}}" style="color:#ffb400;">Back to "{{page.next.title}}"</a>
{% endif %}
{% if page.previous.url %}
<br />
<a href="{{page.previous.url}}"><i title="Next" class="fa fa-long-arrow-right" style="color:#ffb400;"></i></a>
<a href="{{page.previous.url}}" style="color:#ffb400;">Next to "{{page.previous.title}}"</a>
{% endif %}
</div>
