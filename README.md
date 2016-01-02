# Landing page for lakehub official site 

This project uses Zurb foundation as css framework + Compass. a node server has
also been included. It is purely html, js and css (SCSS). No Ruby or other backend
knowledge required.


## Get started

This project has been generated using [yeoman](http://yeoman.io) with [foundation-5 generator](https://github.com/juliancwirko/generator-zf5)


## How to contribute
If you’d like to add features (or bug fixes) to improve the example application, you can fork the repo and make pull requests.

1. Fork it
2. run `npm install` and `bower install` to install project depedancies.
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request

To keep you forked repo with the upstream repo read through [this for
instructions](http://2buntu.com/articles/1459/keeping-your-forked-repo-synced-with-the-upstream-source/)

## Quickstart

When you're working on your project immediately after having it in your
local repo, move to the root of the app.

1. Install node compontents `npm install` 
2. Install bower components `bower install`

#### CSS vs SCSS
You should write your stylesheets in SCSS and use compass to preprocess it to
app.css ( do not edit app.css manually)

Use compass watch for precompiling 
```bash
bundle exec compass watch
```

Use the node server by running `node server.js` which will start your server in
port 8000
