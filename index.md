---
layout: default
---

## Articles

* * *

{% for post in site.posts %}
  <h3>{{ post.title }}</h3>
  <p style="color:#A7AEB4;">{{ post.date | date: '%B %Y' }}</p>
  {{ post.summary }} 

  [READ MORE]({{ post.url }})

  * * *


{% endfor %} 



<!-- 
## Live Operations in Mobile Gaming

<p style="color:#A7AEB4;">MAY 14, 2017</p>

Live Operations are the changes to the game after it goes live. Running live game operations require analyzing player behavior, setting weekly / daily events accordingly, modifying game parameters, rewarding players and communicating the events to players.

[READ MORE](./another-page.html)

* * *

## File Organization in an Electron App

<p style="color:#A7AEB4;">SEPTEMBER 24, 2016</p>

File organization of a programming project is vital for good engineering principles such as abstraction. It is also a good software engineering practice as good file organization makes it easier to maintain and modify the code.

[READ MORE](./another-page.html)

* * *

## Electron Desktop Apps

<p style="color:#A7AEB4;">SEPTEMBER 05, 2016</p>

Electron is a framework to build cross platform desktop applications with web technologies like JavaScript, HTML, and CSS. One of the main reasons Electron is recommended as the framework to develop a desktop application, is because Electron uses the same technology web applications use.

[READ MORE](./another-page.html)




Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
``` -->
