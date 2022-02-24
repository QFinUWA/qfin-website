# QFin Website
Official Website for QFin UWA

## Setup
Note: this project is using `npm` as opposed to `yarn`
```bash
npm install
```

## Development
```bash
npm start # starts a development server (localhost:3000)
```

## Testing
Note: currently no testing is implemented
```bash
npm run test
```

## Deployment
```bash
npm run build # or alternative `predeploy`
npm run deploy
```

The app deploys to [https://qfinuwa.github.io/qfin-website/](https://qfinuwa.github.io/qfin-website/)

On running `npm run deploy` the built app is pushed to `origin/gh-pages` where github pages serves the site.

## Getting Started
### Contributing
Head over to `Issues` and find an unresolved and unassigned issue, once found you may self-assign the issue (or if you do not have the permissions you may ask someone to do so for you).

#### Branching
Once assigned an issue you should branch off from the most recent commit to `staging`:
```bash
git checkout staging
git pull origin staging
```

And then branch off from there:
```bash
# remember to replace what's in <> brackets
git checkout -b \#<issue-number>-<issue-description>
```

Branch names should be in [kebab-case](https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)

#### Pull Requests
Once you have worked on your issue and are satisfied with your work (be sure to test it!) then you can open a pull request into `staging` (or the applicable branch).

Assign at least one reviewer to your pull request so that they can double change your changes. They may request changes on the pull request. Pushing to the branch once the pull request is opened will update the pull request and the reviewers will review your code again.

Once all reviewers are happy with the pull request and don't want any further changes they will approve your pull request.

When your pull request is fully approved you may merge your branch into `staging` via the pull request. You should then test `staging` to see that your changes were applied as intended and nothing broke.

### Style
#### Casings
A list of the different casings can be found [here](https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)
|Language|Style|
|:--:|:--:|
|HTML|kebab case|
|CSS|kebab case|
|JS|Camel case|
|JSX|Camel case|

## Implementation Details
### Directory Structure

```
/src
    /pages
        /*          # contains all pages -- typically nested same as the routing
    /components
        /assets     # contains all static assets for the site
        /*          # contains all components for the site
```

### Routing
Routing is done manually in `/src/App.js`

In order to add your own page and route it follow these steps:
1. under the `/src/pages` dir write a react component
2. In `/src/App.js` import the react component
3. Append a `Route` component to the children of the `Routes` component
   1. Set the path to the desired path for the page component to render
   2. Set the element to the page component: `<Component />`
