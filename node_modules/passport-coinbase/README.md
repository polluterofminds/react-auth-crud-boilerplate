# Passport-Coinbase

[Passport](http://passportjs.org/) strategy for authenticating with [Coinbase](https://coinbase.com/)
using the OAuth 2.0 API.

This module lets you authenticate using Coinbase in your Node.js applications.
By plugging into Passport, Coinbase authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-coinbase

## Usage

#### Configure Strategy

The Coinbase authentication strategy authenticates users using a Coinbase account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new CoinbaseStrategy({
        clientID: COINBASE_CLIENT_ID,
        clientSecret: COINBASE_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/coinbase/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        // ...
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'coinbase'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/coinbase',
      passport.authenticate('coinbase'));

    app.get('/auth/coinbase/callback', 
      passport.authenticate('coinbase', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/idris/passport-coinbase/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/idris/passport-coinbase.png)](http://travis-ci.org/idris/passport-coinbase)

## Credits

  - [Idris Mokhtarzada](https://github.com/idris)
  - Forked from [passport-github](https://github.com/jaredhanson/passport-github) by [Jared Hanson](https://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)
