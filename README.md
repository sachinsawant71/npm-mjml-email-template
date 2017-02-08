# NPM MJML email template

This is a simple project to scaffold an email template from an MJML code.

"MJML is a markup language designed to reduce the pain of coding a responsive email. Its semantic syntax makes it easy and straightforward while its rich standard components library fastens your development time and lightens your email codebase. MJML’s open-source engine takes care of translating the MJML you wrote into responsive HTML."

 + https://mjml.io
 + https://www.npmjs.com/package/mjml

## install packages

```
    $ npm install
```

If `./node_modules/.bin` is not already in your path, you should add it like this :

```
    $ export PATH="$PATH:./node_modules/.bin"
```


## Email structure and MJML to HTML conversion

The email template provided by default is based on 4 files :
 - `src/template.html` -> the core file, which is used to build the final email.html template
 - `src/template-parts/head.mjml` -> head include, this is where you should put your global font and classes declarations
 - `src/template-parts/header.mjml` -> header portion include
 - `src/template-parts/footer.mjml` -> footer portion include

Of course this hierarchy is not limited and you can use/add more includes of your own.

To build your template, you have 2 choices :

### build HTML once

```
    $ npm run build
```

You'll find a compiled HTML file named `template.html` in the `build` folder.


### build HTML and rebuild on every MJML code modification (watch)

```
    $ npm run watch
```

Currently, there is no live reloading so you'll have to abuse of the `Cmd-R` shortcut to reload the template in your browser.

For a complete documentation, please refer to the [npm package](https://www.npmjs.com/package/mjml) and official [mjml documentation](https://mjml.io/documentation/)

### Testing email

This package provide a testing mail method driven by node sendmail library which does not require any smtp configuration.

To test email localy you'll have to run a [mailhog](https://github.com/mailhog/MailHog) installation, please refer to the mailhog installation guide for further documentation about mailhog.

#### Testing email with Mailhog (the docker way)

If you use Mailhog with Docker, you just use this command line :

```
    docker run -p 1025:1025 -p 8025:8025 mailhog/mailhog
```

Then simply get `http://localhost:8025` in a browser to see the Mailhog interface.

Sending a test email is done by using `$ npm run test`. 
Before that you should open and configure settings in `sendmail.js`.

`Ctrl-C` to stop the mailhog docker container.
