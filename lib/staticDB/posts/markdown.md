---
title: markdown
date: 2022-12-19
tags: [CSS]
categories: [前端]
keywords: demo
description: asdas
---

## A demo

`react-markdown` is a markdown component for React.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using `dangerouslySetInnerHTML`
* Lets you define your own components (to render `MyHeading` instead of `h1`)
* Has a lot of plugins

## Table of contents

Here is an example of a plugin in action
([`remark-toc`](https://github.com/remarkjs/remark-toc)).
This section is replaced by an actual table of contents.

## Syntax highlighting

Here is an example of a `asd2` plugin to highlight code:
[`rehype-highlight`](https://github.com/rehypejs/rehype-highlight).

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
	{'# Your markdown here'}
  </ReactMarkdown>,
  document.querySelector('#content')
)
```

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table
| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 123    |    123 |   123    |
| 123    |    123 |   123    |


## Tasklist

* [ ] to do
* [x] done



