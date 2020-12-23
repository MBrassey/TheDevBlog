## TheDevBlog

Full stack CMS type blog application utilizing ORM with Sequelize/MySQL and adhering to the Model-View-Controller paradigm. Handlebars Templating Engine was heavily utilized to modularize the views. On the back end, Express.js and SQL database are being used to provide robust REST API with multiple endpoints/routes. Authentication is required for the appropriate routes and user passwords are encrypted within the database using bcrypt. Test Driven Development has been demonstrated in this project using Jest.

![licensebadge](https://img.shields.io/badge/license-CC0_1.0_Universal-blue)

#### Issues

- [x] [Initial App & Backend](https://github.com/MBrassey/TheDevBlog/issues/1)
- [x] [Homepage, Authentication & Admin-Dashboard](https://github.com/MBrassey/TheDevBlog/issues/2)
- [x] [Complete Views & Refactor](https://github.com/MBrassey/TheDevBlog/issues/3)
- [x] [Create Readme, Screenshots & Gifs](https://github.com/MBrassey/TheDevBlog/issues/4)

#### Table of Contents

- [Requirements](#Requirements)
- [Installation](#Installation)
- [Usage](#Usage)
- [Screenshots](#Screenshots)
- [Questions](#Questions)
- [License](#License)

#### Requirements

    mysql or jawsdb
    node
    npm

#### Installation

    Create file: .env (in root directory)
        DB_NAME='<your_database_name>'
        DB_USER='<your_user_name>'
        DB_PW='<your_mysql_password>'

    npm i
    npm run migrate

#### Usage

    Usage: node server.js [ -h | -v | -l | -a ]
    or: npm start

    [options]

           -h          Display this message.
           -v          Show version.
           -l          Show license info.
           -a          What is TheDevBlog?

<h6><p align="right">:cyclone: Click the image(s) below to view the live <a id="Screenshots" href="https://TheDevBlog-mbrassey.herokuapp.com/">webapplication</a></p></h6>

[<img src="img/Preview.png">](https://TheDevBlog-mbrassey.herokuapp.com/)

> Setup
> [<img src="img/Preview.gif">](https://TheDevBlog-mbrassey.herokuapp.com/)

> User Routes
> [<img src="img/Preview1.gif">](https://TheDevBlog-mbrassey.herokuapp.com/api/users)

> Post Routes
> [<img src="img/Preview2.gif">](https://TheDevBlog-mbrassey.herokuapp.com/api/posts)

> Comment Routes
> [<img src="img/Preview3.gif">](https://TheDevBlog-mbrassey.herokuapp.com/api/comments)

> Tests Passing
> [<img src="img/Tests.png">](https://TheDevBlog-mbrassey.herokuapp.com/)

#### Questions

Contact me at [matt@brassey.io](mailto:matt@brassey.io) with any questions or comments.

#### License

`TheDevBlog` is published under the **CC0_1.0_Universal** license.

> The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.
