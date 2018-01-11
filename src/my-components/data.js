const data = {
    'npm': {
        text: 'NPM is a package manager for Node.js packages, or modules if you like. There are thousands of free packages to download and use on their site. The npm is installed on your computer when you install Node.js',
        links: [
            { link: 'https://www.w3schools.com/nodejs/nodejs_npm.asp', name: 'w3schools'},
            { link: 'https://www.npmjs.com/', name: 'npmjs.com'}
        ],
        tags: ['front', 'js', 'config']
    },
    'span': {
        text: 'The <span> tag is used to group inline-elements in a document. The <span> tag provides a way to add a hook to a part of a text or a part of a document.',
        links: [
            { link: 'https://www.w3schools.com/tags/tag_span.asp', name: 'w3schools'}
        ],
        tags: ['front', 'css'],
    },
    'package': {
        text: 'A package in Node.js contains all the files you need for a module. Modules are JavaScript libraries you can include in your project.',
        links: [
            { link: 'https://www.w3schools.com/nodejs/nodejs_npm.asp', name: 'w3schools'}
        ],
        tags: ['front', 'js', 'config']
    },
    'nodejs': {
        text: 'Node.js is an open source server framework. Node.js allows you to run JavaScript on the server. It runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.',
        links: [
            { link: 'https://www.w3schools.com/nodejs/nodejs_intro.asp', name: 'w3schools'}
        ],
        tags: ['front', 'js', 'config', 'back']
    },
    'single page application': {
        text: 'A single-page application (SPA) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Single-page_application', name: 'wikipedia'}
        ],
        tags: ['theory', 'front']
    },
    'closure': {
        text: 'In programming languages, closures are techniques for implementing lexically scoped name binding in languages with first-class functions. A closure is a record storing a function together with an environment: a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created. A closure—unlike a plain function—allows the function to access those captured variables through the closure\'s copies of their values or references, even when the function is invoked outside their scope. //////Example: The following program fragment defines a higher-order function startAt with a parameter x and a nested function incrementBy. The nested function incrementBy has access to x, because incrementBy is in the lexical scope of x, even though x is not local to incrementBy. The function startAt returns a closure containing a copy of the value of x or a copy of the reference to x from this invocation of startAt, and the function incrementBy, which adds the value of y to the value of x:////// function startAt(x)///----function incrementBy(y)///--------return x + y///----return incrementBy//////variable closure1 = startAt(1);///variable closure2 = startAt(5);//////Note that, as startAt returns a function, the variables closure1 and closure2 are of function type. Invoking closure1(3) (Meaning y=3) will return 4, while invoking closure2(3) (Meaning y=3) will return 8. While closure1 and closure2 refer to the same function incrementBy, the associated environments differ, and invoking the closures will bind the name x to two distinct variables with different values in the two invocations, thus evaluating the function to different results.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Closure_(computer_programming)', name: 'wikipedia'}
        ],
        tags: ['theory']
    },
    'oocss': {
        text: 'Object oriented CSS is a CSS methodology which consists in finding « css objects », ie « visual patterns », so as to define reusable css classes. It is a design-first approach to web development: first spot visual patterns, then name then, rather than semantically naming your classes (instead of .last-articles-box you would have .links-box, instead of .comment-title: .tiny-title)',
        links: [
            { link: 'https://www.alsacreations.com/article/lire/1641-Bonnes-pratiques-en-CSS--BEM-et-OOCSS.html', name: '(French) alsacreations.com'}
        ],
        tags: ['css', 'front']
    },
    'legacy code': {
        text: 'Legacy code is source code that relates to a no-longer supported or manufactured operating system or other computer technology. The term was first used by computer scientist George Olivetti to describe code maintained by an administrator that did not develop the code.///The term can also mean code inserted into modern software for the purpose of maintaining an older or previously supported feature.///More recently, the software engineering community has developed other interpretations for the term legacy code. Among the most prevalent are source code inherited from someone else and source code inherited from an older version of the software.///Michael Feathers introduced a definition of legacy code as code without tests, which reflects the perspective of legacy code being difficult to work with in part due to a lack of automated regression tests.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Legacy_code', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'bem': {
        text: 'BEM is a naming methodology that implements the OOCSS methodology. It is a component-based approach to front-end web development. BEM stands for Block Element Modifier.//////-A block is a standalone entity that is meaningful on its own.///-An element is a part of a block that has no standalone meaning and is semantically tied to its block.///-A modifier is a flag on a block or element.//////You can use them to change appearance or behaviour. Using BEM brings modularity, reusability and structure to your CSS.',
        links: [
            { link: 'https://en.bem.info/methodology/quick-start/', name: 'en.bem.info'},
            { link: 'https://www.alsacreations.com/article/lire/1641-Bonnes-pratiques-en-CSS--BEM-et-OOCSS.html', name: '(French) alsacreations.com'}
        ],
        tags: ['css', 'front']
    },
    'build pipeline': {
        text: 'A modern build pipeline typically consists of:///- A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.///- A bundler, such as webpack or Browserify. It lets you write modular code and bundle it together into small packages to optimize load time.///- A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.',
        links: [
            { link: 'https://reactjs.org/docs/add-react-to-an-existing-app.html', name: 'React: add React to an existing app'},
            { link: 'https://survivejs.com/webpack/appendices/comparison/', name: 'comparison of build tools'}
        ],
        tags: ['js', 'config', 'production']
    },
    'continuous delivery': {
        text: 'Continuous Delivery (CD) is a software strategy that enables organizations to deliver new features to users as fast and efficiently as possible. The core idea of CD is to create a repeatable, reliable and incrementally improving process for taking software from concept to customer. The goal of Continuous Delivery is to enable a constant flow of changes into production via an automated software production line. The Continuous Delivery pipeline is what makes it all happen. The pipeline breaks down the software delivery process into stages. Each stage is aimed at verifying the quality of new features from a different angle to validate the new functionality and prevent errors from affecting your users. The pipeline should provide feedback to the team and visibility into the flow of changes to everyone involved in delivering the new feature/s. There is no such thing as The Standard Pipeline, but a typical CD pipeline will include the following stages: build automation and continuous integration; test automation; and deployment automation.',
        links: [
            { link: 'https://devops.com/continuous-delivery-pipeline/', name: 'devops.com'}
        ],
        tags: ['production', 'config']
    },
    'modules (nodejs)': {
        text: 'Consider modules to be the same as JavaScript libraries: a set of functions you want to include in your application. Node.js has a set of built-in modules which you can use without any further installation.',
        links: [
            { link: 'https://www.w3schools.com/nodejs/nodejs_modules.asp', name: 'w3schools'}
        ],
        tags: ['front', 'js', 'config']
    },
    'http': {
        text: 'The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, and hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web. Hypertext is structured text that uses logical links (hyperlinks) between nodes containing text. HTTP is the protocol to exchange or transfer hypertext.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'parsing': {
        text: 'Syntax analysis or syntactic analysis is the process of analysing a string of symbols, either in natural language or in computer languages, conforming to the rules of a formal grammar. The term has slightly different meanings in different branches of linguistics and computer science.//////Compilers must parse source code to be able to translate it into object code. Likewise, any application that processes complex commands must be able to parse the commands.///Parsing is often divided into lexical analysis and semantic parsing. Lexical analysis concentrates on dividing strings into components, called tokens, based on punctuationand other keys. Semantic parsing then attempts to determine the meaning of the string.//////Computer language : to parse, is where a string of commands – usually a program – is separated into more easily processed components, which are analyzed for correct syntax and then attached to tags that define each component. The computer can then process each program chunk and transform it into machine language.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Parsing', name: 'wikipedia'},
            { link: 'https://www.webopedia.com/TERM/P/parse.html', name: 'webopedia.com'},
            { link: 'https://www.techopedia.com/definition/3853/parse', name: 'techopedia.com'}
        ],
        tags: ['general', 'theory', 'ai']
    },
    'source code': {
        text: 'Program instructions in their original form. Initially, a programmer writes a program in a particular programming language. This form of the program is called the source program, or more generically, source code. To execute the program, however, the programmer must translate it into machine language, the language that the computer understands. The first step of this translation process is usually performed by a utility called a compiler. The compiler translates the source code into a form called object code. Sometimes the object code is the same as machine code; sometimes it needs to be translated into machine language by a utility called an assembler. Source code is the only format that is readable by humans',
        links: [
            { link: 'https://www.webopedia.com/TERM/S/source_code.html', name: 'webopedia.com'}
        ],
        tags: ['general']
    },
    'object code': {
        text: 'The code produced by a compiler. Programmers write programs in a form called source code. The source code consists of instructions in a particular language. Computers, however, can only execute instructions written in a low-level language called machine language. To get from source code to machine language, the programs must be transformed by a compiler.',
        links: [
            { link: 'https://www.webopedia.com/TERM/O/object_code.html', name: 'webopedia'}
        ],
        tags: ['general']
    },
    'heroku': {
        text: 'Heroku is a cloud platform as a service (PaaS) supporting several programming languages that is used as a web application deployment model. ',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Heroku', name: 'wikipedia'},
            { link: 'https://www.heroku.com/', name: 'heroku.com'},
            { link: 'https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack', name: 'Heroku - Buildpack for create-react-app'}
        ],
        tags: ['general', 'production']
    },
    'let': {
        text: 'let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope. Variables declared by let have as their scope the block in which they are defined, as well as in any contained sub-blocks. In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function.',
        links: [
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let', name: 'developer.mozilla.org'}
        ],
        tags: ['js']
    },
    'const': {
        text: 'Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can\'t be redeclared.',
        links: [
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const', name: 'developer.mozilla.org'}
        ],
        tags: ['js']
    },
    'arrow function': {
        text: 'An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.///Syntax: ([arguments]) => { statements }',
        links: [
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions', name: 'developer.mozilla.org'}
        ],
        tags: ['js']
    },
    'callback': {
        text: 'In computer programming, a callback is any executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at a given time. This execution may be immediate as in a synchronous callback, or it might happen at a later time as in an asynchronous callback.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Callback_(computer_programming)', name: 'wikipedia'}
        ],
        tags: ['theory']
    },
    'dry': {
        text: 'In software engineering, don\'t repeat yourself (DRY) is a principle of software development aimed at reducing repetition of software patterns, replacing them with abstractions; and several copies of the same data, using data normalization to avoid redundancy. The DRY principle is stated as "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system"',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself', name: 'wikipedia'}
        ],
        tags: ['theory', 'general']
    },
    'single responsibility principle': {
        text: 'The single responsibility principle is a computer programming principle that states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility. Robert C. Martin expresses the principle as, "A class should have only one reason to change."',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Single_responsibility_principle', name: 'wikipedia'}
        ],
        tags: ['theory', 'general']
    },
    'scalability': {
        text: 'Scalability is the capability of a system, network, or process to handle a growing amount of work, or its potential to be enlarged to accommodate that growth. Scaling: two types: horizontal (deploy more machines that run the server or algorithm) and vertical (upgrading the machine that runs the server or algorithm to a more powerful machine)',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Scalability', name: 'wikipedia'}
        ],
        tags: ['theory', 'general']
    },
    'single source of truth': {
        text: 'In information systems design and theory, single source of truth (SSOT), is the practice of structuring information models and associated schemata such that every data element is stored exactly once. Any possible linkages to this data element (possibly in other areas of the relational schema or even in distant federated databases) are by reference only. Because all other locations of the data just refer back to the primary "source of truth" location, updates to the data element in the primary location propagate to the entire system without the possibility of a duplicate value somewhere being forgotten.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Single_source_of_truth', name: 'wikipedia'},
            { link: 'https://www.computer.org/csdl/mags/so/2015/04/mso2015040018.pdf', name: 'Gerard J. Holzmann'}
        ],
        tags: ['theory']
    },
    'url': {
        text: 'A Uniform Resource Locator (URL), colloquially termed a web address, is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it. A URL is a specific type of Uniform Resource Identifier (URI), although many people use the two terms interchangeably.///URLs occur most commonly to reference web pages (http), but are also used for file transfer (ftp), email (mailto), database access (JDBC), and many other applications.///Most web browsers display the URL of a web page above the page in an address bar. A typical URL could have the form http://www.example.com/index.html, which indicates a protocol (http), a hostname (www.example.com), and a file name (index.html)',
        links: [
            { link: 'https://en.wikipedia.org/wiki/URL', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'uri': {
        text: 'In information technology, a Uniform Resource Identifier (URI) is a string of characters used to identify a resource. Such identification enables interaction with representations of the resource over a network, typically the World Wide Web, using specific protocols. Schemes specifying a concrete syntax and associated protocols define each URI.///The most common form of URI is the Uniform Resource Locator (URL), frequently referred to informally as a web address. More rarely seen in usage is the Uniform Resource Name (URN), which was designed to complement URLs by providing a mechanism for the identification of resources in particular namespaces.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Uniform_Resource_Identifier', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'natural language processing': {
        text: 'Natural language processing (NLP) is a field of computer science, artificial intelligence concerned with the interactions between computers and human (natural) languages, and, in particular, concerned with programming computers to fruitfully process large natural language data. Challenges in natural language processing frequently involve speech recognition, natural language understanding, and natural language generation.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Natural_language_processing', name: 'wikipedia'}
        ],
        tags: ['ai']
    },
    'lint': {
        text: 'In computer programming, lint is historically a Unix utility that flags some suspicious and non-portable constructs (likely to be bugs) in C language source code. Generically, lint or a linter is any tool that detects and flags errors in programming languages, including stylistic errors. The term lint-like behavior is sometimes applied to the process of flagging suspicious language usage. Lint-like tools generally perform static analysis of source code.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Lint_(software)', name: 'wikipedia'}
        ],
        tags: ['general']
    },
    'progressive web app': {
        text: 'Progressive Web App (PWA) are web applications that are regular web pages or websites, but can appear to the user like traditional applications or native mobile applications. The application type attempts to combine features offered by most modern browsers with the benefits of mobile experience.',
        links: [
            { link: 'https://developers.google.com/web/progressive-web-apps/', name: 'developers.google.com'},
            { link: 'https://en.wikipedia.org/wiki/Progressive_web_app', name: 'wikipedia'}
        ],
        tags: ['front', 'general']
    },
    'service worker': {
        text: 'A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don\'t need a web page or user interaction (rich offline experiences, periodic background syncs, push notifications—functionality that would normally require a native application). It\'s essentially a JavaScript file that runs separately from the main browser thread, intercepting network requests, caching or retrieving resources from the cache, and delivering push messages (receive /deliver push messages from a server when the app is not active, which lets your app show push notifications to the user, even when it is not open in the browser).',
        links: [
            { link: 'https://developers.google.com/web/fundamentals/primers/service-workers/', name: 'developers.googles.com - fundamentals - service workers'},
            { link: 'https://developers.google.com/web/ilt/pwa/introduction-to-service-worker', name: 'developers.google.com - pwa - introduction to service workers'}
        ],
        tags: ['general', 'config']
    },
    'web app manifest': {
        text: 'The web app manifest is a simple JSON file that gives you, the developer, the ability to control how your app appears to the user in areas where they would expect to see apps (for example, a mobile device\'s home screen), direct what the user can launch, and define its appearance at launch. Web app manifests provide the ability to save a site bookmark to a device\'s home screen.',
        links: [
            { link: 'https://developers.google.com/web/fundamentals/web-app-manifest/', name: 'developers.google.com'}
        ],
        tags: ['general', 'production']
    },
    'es6 import': {
        text: "import A from './A'///It only works if A.js has the default export: export default 42. It doesn't matter what name you use when importing.//////But this is a named import called A:///import { A } from './A'///The name matters. There has to be export const A = 42 in A.js.//////A module can only have one default export, but as many named exports as you'd like. You can import them all together: import A, { myA, Something } from './A'",
        links: [
            { link: 'https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281', name: 'stack overflow'}
        ],
        tags: ['front', 'js']
    },
    'higher order function': {
        text: 'In mathematics and computer science, a higher-order function (also functional, functional form or functor) is a function that does at least one of the following: - takes one or more functions as arguments (i.e., procedural parameters), - returns a function as its result. All other functions are first-order functions',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Higher-order_function', name: 'wikipedia'}
        ],
        tags: ['theory']
    },
    'decorators': {
        text: 'In Python, decorators provide a very simple syntax for calling higher-order functions. A Python decorator is a function that takes another function, extending the behavior of the latter function without explicitly modifying it.',
        links: [
            { link: 'https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841', name: 'medium.com'}
        ],
        tags: ['js', 'python']
    },
    'webpack': {
        text: 'Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into one or more bundles.//////Other def: Webpack is a build tool that puts all of your assets, including Javascript, images, fonts, and CSS, in a dependency graph. Webpack lets you use require() in your source code to point to local files, like images, and decide how they\'re processed in your final Javascript bundle, like replacing the path with a URL pointing to a CDN.',
        links: [
            { link: 'https://webpack.js.org/concepts/', name: 'webpack.js.org'},
            { link: 'https://survivejs.com/webpack/what-is-webpack/', name: 'survivejs.com - what is webpack'},
            { link: 'https://blog.andrewray.me/webpack-when-to-use-and-why/', name: 'blog.andrewray.me'}
        ],
        tags: ['js', 'config', 'production']
    },
    'bundling': {
        text: 'Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once. Webpack and Browserify are two renownn bundlers.',
        links: [
            { link: 'https://reactjs.org/docs/code-splitting.html', name: 'reactjs.org - code splitting'},
            { link: 'https://webpack.js.org/', name: 'webpacks.js.org'},
            { link: 'http://browserify.org/', name: 'browserify.org'}
        ],
        tags: ['js', 'config', 'production']
    },
    'code editor (text editor)': {
        text: 'A code editor is a text editor that provides useful features for writing code, such as standardized colors to display different parts of code. There are many plugins available for these editors, for example to format your HTML code.',
        links: [
            { link: 'https://www.codeschool.com/beginners-guide-to-web-development/choosing-an-ide-or-text-editor', name: 'codeschool.com - choosing and IDE or text editor'}
        ],
        tags: ['basics']
    },
    'integrated development environment': {
        text: 'IDEs are tools that usually combine code editors, debuggers, and built-in tools for compiling and running applications.',
        links: [
            { link: 'https://www.codeschool.com/beginners-guide-to-web-development/choosing-an-ide-or-text-editor', name: 'codeschool.com - choosing and IDE or text editor'}
        ],
        tags: ['basics']
    },
    'debugging': {
        text: 'Debuggers are programs that help you find bugs in your code while it’s running so you can remove them before you release an application or website into the world. With the debugger, you can set breakpoints on certain lines of your code, and then whenever that code is executed, the IDE will pause the running application and let you inspect the value of all the variables at that moment in time — in other words, the state of your application.',
        links: [
            { link: 'https://www.codeschool.com/beginners-guide-to-web-development/choosing-an-ide-or-text-editor', name: 'codeschool - choosing and IDE or text editor'}
        ],
        tags: ['basics']
    },
    'deploying': {
        text: 'The process of putting a website / web app out on the web. Before deploying an application, you develop it on your computer, in a certain environment (development environment). There can be a lot of considerations to take into account when deploying an app (setting up the production environment).',
        links: [
            { link: '', name: ''}
        ],
        tags: ['basics']
    },
    'html': {
        text: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets(CSS) and JavaScript it forms a triad of cornerstone technologies for the World Wide Web.///Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages.///HTML elements (such as <div>, <p>, <form>) are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/HTML', name: 'wikipedia'},
            { link: 'https://www.codecademy.com/learn/learn-html', name: 'codecademy course'}
        ],
        tags: ['basics']
    },
    'css (cascading style sheets)': {
        text: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications. You build the structure and elements of your web page with HTML, then apply "styles" to it with CSS (colors, fonts, shadows, position on the page, height and width...)',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets', name: 'wikipedia'},
            { link: 'https://www.codecademy.com/learn/learn-css', name: 'codecademy course'}
        ],
        tags: ['basics']
    },
    'javascript': {
        text: 'JavaScript, or JS, is a programming language (technically, it\'s a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language). Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production.///It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine',
        links: [
            { link: 'https://en.wikipedia.org/wiki/JavaScript', name: 'wikipedia'},
            { link: 'https://www.javascript.com/', name: 'javascript.com'},
            { link: 'https://www.codecademy.com/learn/introduction-to-javascript', name: 'codecademy course'}
        ],
        tags: ['basics']
    },
    'php': {
        text: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. PHP code may be embedded into HTML code, or it can be used in combination with various web template systems, web content management systems, and web frameworks.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/PHP', name: 'wikipedia'},
            { link: 'http://php.net/', name: 'php.net'}
        ],
        tags: ['basics']
    },
    'crud': {
        text: 'CRUD stands for Create, Read, Update and Delete. It is used to describe a certain type of application where the user (or administrators) can read entries (blog posts, jokes, definitions), update them, create new ones, and delete some. Creating a simple CRUD web application is a good exercise for newbie developers. Technically, ',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Create,_read,_update_and_delete', name: 'wikipedia'}
        ],
        tags: ['basics']
    },
    'bread': {
        text: 'A more precise acronym for the same idea as CRUD (create, read, update, delete): Browse, Read, Edit, Add, Delete. Read does indeed refer to both reading the list of entries to choose from, and the fact of reading the contents of one of such entries, therefore it is more correct to divide the Read part in CRUD into Browse (all entries) and Read (one of them).',
        links: [
            { link: 'http://paul-m-jones.com/archives/291', name: 'paul-m-jones.com - article'}
        ],
        tags: ['basics', 'general']
    },
    'favicon': {
        text: 'A favicon (short for favorite icon), also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons, associated with a particular website or web page. You can create such an icon and upload it to a website (or web page) by several means, and web browsers will then make use of it (typically, it\'s the icon in the adress bar and next to the page\'s name in the bookmarks bar.',
        links: [
            { link: 'https://en.wikipedia.org/wiki/Favicon#cite_note-photoshop-3', name: 'wikipedia'},
            { link: 'http://www.favicon.cc/', name: 'favicon.cc - favicon generator'},
            { link: 'https://favicon.io/', name: 'favicon.io - simple favicon generator'}
        ],
        tags: ['general', 'basics']
    },
    'code splitting': {
        text: 'Bundling (merging all your code into a single file to load an entire app at once) is great, but as your app grows, your bundle will grow too. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.///To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime.///Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app.///(If you are using create-react-app, this is already configured for you and you can start using it immediately.)',
        links: [
            { link: 'https://reactjs.org/docs/code-splitting.html', name: 'reactjs.org - code splitting'},
            { link: 'https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting', name: 'create-react-app documentation'}
        ],
        tags: ['js', 'production', 'config']
    },
    'accessibility': {
        text: 'Web accessibility (also referred to as a11y) is the design and creation of websites that can be used by everyone (meaning that people with disabilities can access the web). Accessibility support is necessary to allow assistive technology to interpret web pages.',
        links: [
            { link: 'https://www.w3.org/WAI/intro/accessibility.php', name: 'w3.org - accessibility'},
            { link: 'https://reactjs.org/docs/accessibility.html', name: 'reactjs.org - accessibility'}
        ],
        tags: ['basics', 'general']
    }
}


export default data;


/*

'': {
        text: '',
        links: [
            { link: '', name: ''}
        ],
        tags: []
    }

*/


