# Setup

Follow these steps to get a development environment up and running on your machine.

1. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

  To check if Git is installed on your machine

  ```shell-session
  git --version
  ```

2. [Install Node.js](https://nodejs.org/en/download/)

  To check if Node.js is installed on your machine

  ```shell-session
  node -v
  ```

  To check if npm is installed on your machine

  ```shell-session
  npm -v
  ```

4. Clone this [repository](https://github.com/Light-and-Health-Research-Center/docs)

  ```shell-session
  cd /path/to/where/i/want/to/clone/repo
  ```

  ```shell-session
  git clone https://github.com/Light-and-Health-Research-Center/docs
  ```

5. Install dependencies

  ```shell-session
  cd /docs
  ```

  ```shell-session
  yarn
  ```

6. [Create Github personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

7. Add .env variables

  In the /docs root directory, create a fill `.env.local`. In the file put the following environment variable

  ```js
  GITHUB_OAUTH2_TOKEN="YOUR PERSONAL ACCESS TOKEN HERE"
  ```

8. Run developement mode

  ```shell-session
  yarn dev
  ```

9. Open app

  Open a browser and navigate to the URL `localhost:3000`, where the application should be running.



