# Custom markdown components

These are a list of custom react components available to you when writing .mdx documentation files.

If you'd like to request a custom markdown component, or create one yourself, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Available components

### AlertBox

Make some text standout.

```jsx
<AlertBox>Some important text.</AlertBox>
```

<img src="./assets/img/md/components/AlertBox1.png" />

```jsx
<AlertBox color="red"><b>Danger!</b> This documentation might explode.</AlertBox>
```
<img src="./assets/img/md/components/AlertBox2.png" />

#### props

* color (optional)
  * "blue" (default)
  * "red"
  * "yellow"
  * "green"
  * "indigo"
  * "purple"
  * "pink"

### DocLink

For linking internally to other docs pages. Utilizes next.js `<Link />` to not reload page.


```jsx
<DocLink href="/path/to/page">Page link</DocLink>
```

<img src="./assets/img/md/components/DocLink.png" />

#### props

* href (required) - the relative URL to a docs page (ex. cscalc/inner-workings/charts)
