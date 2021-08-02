## [Home](../README.md) / Folder Structure

```
i_love_dog/
  ...
  src/
    assets
    context
    app-constants
    components
      /libraries
      /own
    i18n
    pages/
        /private/
            Home
        /public/
            Login
    store
    routes
    services
    styles
    utils
```

`assets` is the place where stores image _(eg: Assets/images/logo.png)_, fonts, icons
<br/>

`components/libraries` import library ui like antd, material-ui,...

In `components/own/index.js`, exporting components that you need

```js
export { Button } from "@material-ui/core";
export { Skeleton } from "@material-ui/lab";
```

:x: do not directly import components

```diff
// bad
- import Button from 'material-ui/core/Button';
- import Button from 'antd/Button';

// good
+ import Button from 'components/libraries/button';
+ import { Button } from 'components/libraries';
```

<br/>

`components/own` contain **Reusable components** that can be used multiple times in your application
<br/>

`app-constants` store files that there are variables whose value cannot change once it has been assigned

```js
export enum HTTP_CODE = {
  InternalServerError: 500,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
};
```

`context` for themes, language,... [more](https://reactjs.org/docs/Context.html#when-to-use-Context)

This point is to avoid put a lot of logic in one file. An example for splitting config theme:

In `router/index.js`, wrapping page by `Context/Theme.Context`. You see! There's no logic theme in that file and what's more code seem to easy to read

```diff
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
+ import ThemeProvider from "context/theme.context";

const Root = () => {
  return (
+    <ThemeProvider>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
+    </ThemeProvider>
  );
};

export default Root;
```

In `context/theme.context.js`

```js
import React, { createContext, useContext } from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export const ThemesContext = createContext(null);

const ThemesProvider = (props) => {
  return (
    <ThemesContext.Provider>
      <CssBaseline />
      <ThemeProvider {...props}></ThemeProvider>
    </ThemesContext.Provider>
  );
};

export const useThemesContext = () => useContext(ThemesContext);

export default ThemesProvider;
```

<br/>

`i18n` provides multiple languages
<br/>

`Pages`

- public: being able to access without login
- private: must have to login to view pages
  <br/>

`store` that have contains reducer, action,... Depending on the project, maybe it is [redux](https://redux.js.org) / [redux-sage](https://redux-saga.js.org/) / [easy-peasy](https://easy-peasy.vercel.app)/ Context-api
<br/>

`routes` that is in charge of navigation configuration
<br/>

`services` supply api to save data to backend through http
<br/>

`styles` include global css
<br/>

`utils` contains reusable logic that like lodash
