# HTML 101

## HTML forms the structure of all web pages 

HTML -> hyper text markup language

The `<head>` tag configures the page and is not rendering the browser.
The `<title>` contains the name of the page and is rendered in the browser's tab.
Tags that have opening and closing elements are known as container elements.
Tags that do not have opening and closing elemnts are not container elements and are called self-closing tags (`/>`).
To make reading an HTML file easier, lines are nested within their parent elements.
Browsers read HTML and in a sense, HTML is like a big, long string. 
Browsers can read files or you can start a server in VS Code with **Go LIVE**

### Some of the most common elements are listed below
#### semantic elements include 
```
<ul> - unordered list
<ol> - ordered list
<li> - list item, must be contained by a `<ul>` or an `<ol>`
<header> - the header area of the page
<main> - the main area of the page
<body> - contains all other rendering HTML elements 
<footer> - the footer area of the page
<nav> - contains navigation elements, usually found inside of `<header>`
<p> - used for a single paragraph of text 
<img /> - used for images (note that this is self closing) must have a `src` attribute 
<a> - anchor tag, used to hyperlink elements with the `href` attribute 
<h1> - header text (largest)
<h2> - header text 
<h3> - header text 
<h4> - header text 
<h5> - header text 
<h6> - header text (smallest)
```
#### generic elements include
```
<div> - generic containing element
<section> - defines a section area for child elements
```
#### tags inside of `<head>`
<link> - used to link a stylesheet, only found in the `<head>`
