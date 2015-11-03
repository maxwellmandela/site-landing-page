# Landing page for lakehub official site 

This project uses Zurb foundation as css framework + Compass. a node server has
also been included. It is purely html, js and css (SCSS). No Ruby or other backend
knowledge required.

To get started ensure you have the following

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## How to contribute
If you’d like to add features (or bug fixes) to improve the example application, you can fork the repo and make pull requests.

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

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
