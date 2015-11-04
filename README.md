### jry.io

This is my website and blog. I am notorious for being extremely fickle when it
comes to the design and layout of my site (often nuking several weeks of work
for a new style or feature).

All in all, I am rather looking forward to writing more and securing a good
style to maintain for several years to come.

### The blog-posts submodule

My site is separated into two parts: 

- [Rendered site](https://github.com/thebearjew/thebearjew.github.io)
- [Blog posts](https://github.com/thebearjew/blog-posts)

Using the super awesome Git submodule feature, I tricked Jekyll into thinking
its `_posts` directory was unchanged when really it's a separate repository for
only blog posts.

The process is described in [this pull request](https://github.com/thebearjew/thebearjew.github.io/pull/19):

- `git submodule add https://github.com/thebearjew/blog-posts`
- `mv blog-posts/ _posts/`
-  Edit `.gitmodules` file and change `path: ` variable to `_posts/`
- `git add _posts` (no trailing forward slash)
- `git submodule sync`

At this point, there is a working submodule, renamed to Jekyll's default `_posts` directory and ready render posts.
