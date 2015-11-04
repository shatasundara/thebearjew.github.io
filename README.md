## jry.io

This is my personal website, blog, and portfolio - you'll find me writing about hackathons, JavaScript/Node, Git/Github, or other things I find interesting.

I'm notorious for being fickle with the design of this site. It might magically get nuked one night in a fit of design induced rage.

### The Blog-Posts Submodule

My site is separated into two parts: 

- [Rendered site](https://github.com/thebearjew/thebearjew.github.io) - HTML, Markdown, and SASS used by Jekyll for layouts and styling
- [Blog posts](https://github.com/thebearjew/blog-posts) - A separate repository just for blog posts to be rendered by Jekyll

**Problem**: The first version I designed had UI commits mixed with blog post commits - it was disorganized and ugly.

**Solution**: Separate the posts from the rendered site to work on drafts of new posts without cluttering commit history of the main site. This also allows for modularization of the blog^[1] - posts can be imported to a new design at any time.

**Application**: I used Git feature called [Submodules](http://www.git-scm.com/book/en/v2/Git-Tools-Submodules) which allows for **repos inside of repos** - pretty awesome right?

To add a submodule for posts to a Jekyll site, use the following commands (described in #20)

- `git submodule add https://github.com/github-username/blog-posts` adds the submodule and generates `.gitmodules` file
- `mv blog-posts/ _posts/` changes the name to "_posts"
-  Edit `.gitmodules`, changing `path:` variable to `_path`
- `git add _posts` (no trailing slash)
- `git submodule sync` syncing the submodule with the parent repository

[[Stack Overflow Reference](http://stackoverflow.com/questions/4526910/rename-a-git-submodule)]

At this point, there is a working submodule, renamed to Jekyll's default `_posts` directory which it will now read for all posts!

### Pre-Push Hook (Important)
In order to keep your blog-posts up to date every time you make push commits to your Jekyll site, use [Git Hooks](http://www.git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to automatically pull your submodule every time you push the Rendered Site.

To add a new pre-push Git hook, navigate to `.git/hooks/` and make a new file `touch pre-push`. Add the following lines to the file:

``` bash
echo "_posts submodule being pulled..."
exec git submodule foreach git pull origin master
```
That is the bare minimum Bash required to keep your submodule up to date whenever you run `git push <remote> <branch>` (minus the `echo` of course).

I would love for some suggestion on how to make the pre-push hook better. If you have a knack for Bash, open an issue and let me know.

--
[1]: For real modularization, the theme should be completely detached from the HTML/Markdown content. Unfortunately, themes are not easy to make completely separate from the Jekyll structure because they depend on the HTML and Markdown being rendered.
