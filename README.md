# Bug report for redirects from broken components.

## Setup

Clone the repo, `cd` into the folder and run:

```
npm install
npm start
```

Then open `http://localhost:8100/`.


## Problem description

One `Container` component with two children. The `Container` is set up redirect to the `HappyChild` on load. You have seen this as you got redirected to `http://localhost:8100/#/happy`.
When you now click on the link 'broken', you will see that the URL changes but the child component does not change. That's ok, because there was an error in the component. Now hit refresh in your browser.

Current behavior: The URL gets updated to `http://localhost:8100/#/happy`, because of the redirect in the container. However the `HappyChildComponent` won't get displayed.

Expected behavior: The redirect in `componentWillMount` of the `Container` will kick in before the `BrokenChildComponent` gets rendered and therefore the redirect will not only update the URL, but will also correctly display the `HappyChildComponent`.
