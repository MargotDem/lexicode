const data = {
    'npm': {
        links: [
            { link: 'https://www.w3schools.com/nodejs/nodejs_npm.asp', name: 'w3schools'},
            { link: 'https://www.npmjs.com/', name: 'npmjs.com'}
        ],
        tags: ['front', 'js', 'config']
    },
    'span': {
        links: [
            { link: 'https://www.w3schools.com/tags/tag_span.asp', name: 'w3schools'}
        ],
        tags: ['css'],
    },
    'package': {
        links: [
            { link: 'https://www.w3schools.com/nodejs/nodejs_npm.asp', name: 'w3schools'}
        ],
        tags: ['front', 'js', 'config']
    },
    'nodejs': {
        links: [
            { link: 'https://www.w3schools.com/nodejs/nodejs_intro.asp', name: 'w3schools'}
        ],
        tags: ['front', 'js', 'config', 'back']
    },
    'single page application': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Single-page_application', name: 'wikipedia'}
        ],
        tags: ['theory', 'front']
    },
    'closure': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Closure_(computer_programming)', name: 'wikipedia'}
        ],
        tags: ['theory']
    },
    'oocss': {
        links: [
            { link: 'https://www.alsacreations.com/article/lire/1641-Bonnes-pratiques-en-CSS--BEM-et-OOCSS.html', name: '(French) alsacreations.com'}
        ],
        tags: ['css']
    },
    'legacy code': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Legacy_code', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'bem': {
        links: [
            { link: 'https://en.bem.info/methodology/quick-start/', name: 'en.bem.info'},
            { link: 'https://www.alsacreations.com/article/lire/1641-Bonnes-pratiques-en-CSS--BEM-et-OOCSS.html', name: '(French) alsacreations.com'}
        ],
        tags: ['css']
    },
    'build pipeline': {
        links: [
            { link: 'https://reactjs.org/docs/add-react-to-an-existing-app.html', name: 'React: add React to an existing app'},
            { link: 'https://survivejs.com/webpack/appendices/comparison/', name: 'comparison of build tools'}
        ],
        tags: ['js', 'config', 'production']
    },
    'continuous delivery': {
        links: [
            { link: 'https://devops.com/continuous-delivery-pipeline/', name: 'devops.com'}
        ],
        tags: ['production', 'config']
    },
    'modules (nodejs)': {

        links: [
            { link: 'https://www.w3schools.com/nodejs/nodejs_modules.asp', name: 'w3schools'}
        ],
        tags: ['front', 'js', 'config']
    },
    'http': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'parsing': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Parsing', name: 'wikipedia'},
            { link: 'https://www.webopedia.com/TERM/P/parse.html', name: 'webopedia.com'},
            { link: 'https://www.techopedia.com/definition/3853/parse', name: 'techopedia.com'}
        ],
        tags: ['general', 'theory', 'ai']
    },
    'source code': {
        links: [
            { link: 'https://www.webopedia.com/TERM/S/source_code.html', name: 'webopedia.com'}
        ],
        tags: ['general']
    },
    'object code': {
        links: [
            { link: 'https://www.webopedia.com/TERM/O/object_code.html', name: 'webopedia'}
        ],
        tags: ['general']
    },
    'heroku': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Heroku', name: 'wikipedia'},
            { link: 'https://www.heroku.com/', name: 'heroku.com'},
            { link: 'https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack', name: 'Heroku - Buildpack for create-react-app'}
        ],
        tags: ['general', 'production']
    },
    'let': {
        links: [
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let', name: 'developer.mozilla.org'}
        ],
        tags: ['js']
    },
    'const': {
        links: [
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const', name: 'developer.mozilla.org'}
        ],
        tags: ['js']
    },
    'arrow function': {
        links: [
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions', name: 'developer.mozilla.org'}
        ],
        tags: ['js']
    },
    'callback': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Callback_(computer_programming)', name: 'wikipedia'}
        ],
        tags: ['theory']
    },
    'dry': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself', name: 'wikipedia'}
        ],
        tags: ['theory', 'general']
    },
    'single responsibility principle': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Single_responsibility_principle', name: 'wikipedia'}
        ],
        tags: ['theory', 'general']
    },
    'scalability': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Scalability', name: 'wikipedia'}
        ],
        tags: ['theory', 'general']
    },
    'single source of truth': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Single_source_of_truth', name: 'wikipedia'},
            { link: 'https://www.computer.org/csdl/mags/so/2015/04/mso2015040018.pdf', name: 'Gerard J. Holzmann'}
        ],
        tags: ['theory']
    },
    'url': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/URL', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'uri': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'natural language processing': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Natural_language_processing', name: 'wikipedia'}
        ],
        tags: ['ai']
    },
    'lint': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Lint_(software)', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'progressive web app': {
        links: [
            { link: 'https://developers.google.com/web/progressive-web-apps/', name: 'developers.google.com'},
            { link: 'https://en.wikipedia.org/wiki/Progressive_web_app', name: 'wikipedia'}
        ],
        tags: ['front', 'general']
    },
    'service worker': {
        links: [
            { link: 'https://developers.google.com/web/fundamentals/primers/service-workers/', name: 'developers.googles.com - fundamentals - service workers'},
            { link: 'https://developers.google.com/web/ilt/pwa/introduction-to-service-worker', name: 'developers.google.com - pwa - introduction to service workers'}
        ],
        tags: ['general', 'config', 'js']
    },
    'web app manifest': {
        links: [
            { link: 'https://developers.google.com/web/fundamentals/web-app-manifest/', name: 'developers.google.com'}
        ],
        tags: ['general', 'production']
    },
    'es6 import': {
        text: "",
        links: [
            { link: 'https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281', name: 'stack overflow'}
        ],
        tags: ['front', 'js']
    },
    'higher order function': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Higher-order_function', name: 'wikipedia'}
        ],
        tags: ['theory']
    },
    'decorators': {
        links: [
            { link: 'https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841', name: 'medium.com'}
        ],
        tags: ['js', 'python']
    },
    'webpack': {
        links: [
            { link: 'https://webpack.js.org/concepts/', name: 'webpack.js.org'},
            { link: 'https://survivejs.com/webpack/what-is-webpack/', name: 'survivejs.com - what is webpack'},
            { link: 'https://blog.andrewray.me/webpack-when-to-use-and-why/', name: 'blog.andrewray.me'}
        ],
        tags: ['js', 'config', 'production']
    },
    'bundling': {
        links: [
            { link: 'https://reactjs.org/docs/code-splitting.html', name: 'reactjs.org - code splitting'},
            { link: 'https://webpack.js.org/', name: 'webpacks.js.org'},
            { link: 'http://browserify.org/', name: 'browserify.org'}
        ],
        tags: ['js', 'config', 'production']
    },
    'code editor (text editor)': {
        links: [
            { link: 'https://www.codeschool.com/beginners-guide-to-web-development/choosing-an-ide-or-text-editor', name: 'codeschool.com - choosing and IDE or text editor'}
        ],
        tags: ['basics']
    },
    'integrated development environment': {
        links: [
            { link: 'https://www.codeschool.com/beginners-guide-to-web-development/choosing-an-ide-or-text-editor', name: 'codeschool.com - choosing and IDE or text editor'}
        ],
        tags: ['basics']
    },
    'debugging': {
        links: [
            { link: 'https://www.codeschool.com/beginners-guide-to-web-development/choosing-an-ide-or-text-editor', name: 'codeschool - choosing and IDE or text editor'}
        ],
        tags: ['basics']
    },
    'deploying': {
        links: [
            { link: '', name: ''}
        ],
        tags: ['basics']
    },
    'html': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/HTML', name: 'wikipedia'},
            { link: 'https://www.codecademy.com/learn/learn-html', name: 'codecademy course'}
        ],
        tags: ['basics']
    },
    'css (cascading style sheets)': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets', name: 'wikipedia'},
            { link: 'https://www.codecademy.com/learn/learn-css', name: 'codecademy course'}
        ],
        tags: ['basics']
    },
    'javascript': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/JavaScript', name: 'wikipedia'},
            { link: 'https://www.javascript.com/', name: 'javascript.com'},
            { link: 'https://www.codecademy.com/learn/introduction-to-javascript', name: 'codecademy course'}
        ],
        tags: ['basics']
    },
    'php': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/PHP', name: 'wikipedia'},
            { link: 'http://php.net/', name: 'php.net'}
        ],
        tags: ['basics']
    },
    'crud': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Create,_read,_update_and_delete', name: 'wikipedia'}
        ],
        tags: ['basics']
    },
    'bread': {
        links: [
            { link: 'http://paul-m-jones.com/archives/291', name: 'paul-m-jones.com - article'}
        ],
        tags: ['basics', 'general']
    },
    'favicon': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Favicon#cite_note-photoshop-3', name: 'wikipedia'},
            { link: 'http://www.favicon.cc/', name: 'favicon.cc - favicon generator'},
            { link: 'https://favicon.io/', name: 'favicon.io - simple favicon generator'}
        ],
        tags: ['general', 'basics']
    },
    'code splitting': {
        links: [
            { link: 'https://reactjs.org/docs/code-splitting.html', name: 'reactjs.org - code splitting'},
            { link: 'https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting', name: 'create-react-app documentation'}
        ],
        tags: ['js', 'production', 'config']
    },
    'accessibility': {
        links: [
            { link: 'https://www.w3.org/WAI/intro/accessibility.php', name: 'w3.org - accessibility'},
            { link: 'https://reactjs.org/docs/accessibility.html', name: 'reactjs.org - accessibility'}
        ],
        tags: ['basics', 'general']
    },
    'redux': {
        links: [
            { link: 'https://redux.js.org/', name: 'redux.js.org'}
        ],
        tags: ['front', 'js', 'back']
    },
    'pure functions': {
        links: [
            { link: 'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976', name: 'medium'},
            { link: 'https://reactjs.org/docs/components-and-props.html', name: 'reactjs.org - components and props' }
        ],
        tags: ['theory']
    },
    'in-memory database': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/In-memory_database', name: 'wikipedia'}
        ],
        tags: ['theory', 'back']
    },
    'i18n': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Internationalization_and_localization', name: 'wikipedia'},
            { link: 'https://react.i18next.com/', name: 'react-i18next ex of a tool helping you i18n-ing your app'}
        ],
        tags: ['front', 'general']
    },
    'universal javascript': {
        links: [
            { link: 'https://medium.com/monitisemea/isomorphic-universal-javascript-496dc8c4341a', name: 'medium'}
        ],
        tags: ['js', 'front', 'back']
    },
    'server-side rendering': {
        links: [
            { link: 'https://medium.freecodecamp.org/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d', name: 'medium - server-side and client-side rendering'}
        ],
        tags: ['back', 'front', 'basics']
    },
    'client-side rendering': {
        links: [
            { link: 'https://medium.freecodecamp.org/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d', name: 'medium - server-side and client-side rendering'}
        ],
        tags: ['back', 'front', 'basics']
    },
    'routing': {
        links: [
            { link: 'https://softwareengineering.stackexchange.com/questions/135495/in-mvc-what-is-the-difference-between-controller-and-router', name: 'softwareengineering.stackexchange.com'}
        ],
        tags: ['basics', 'back']
    },
    'caching': {
        links: [
            { link: 'https://en.wikipedia.org/wiki/Cache_(computing)', name: 'wikipedia'},
            { link: 'http://whatis.techtarget.com/definition/caching', name: 'whatis.techtarget.com'}
        ],
        tags: ['front', 'basics', 'config']
    },
    'scraping': {
          links: [
              { link: 'https://github.com/JonasCz/How-To-Prevent-Scraping', name: 'github.com/JonasCz/How-To-Prevent-Scraping'},
              { link: 'https://codesandbox.io/s/github/divyenduz/React-Email-Scraping-Protection/tree/master/', name: 'codesandbox.io example of react email scraping protection'}
          ],
          tags: ['basics', 'front']
    },
    'lazy loading': {
          links: [
              { link: 'https://webpack.js.org/guides/lazy-loading/', name: 'webpack.js.org'}
          ],
          tags: ['general']
    },
    'resolving': {
      links: [
        {link: 'https://softwareengineering.stackexchange.com/questions/302404/what-does-resolving-mean-in-programing', name: 'softwareengineering.stackexchange.com'}
      ],
      tags: ['general']
    }
}


export default data;


/*

'': {
        links: [
            { link: '', name: ''}
        ],
        tags: []
    }

*/
