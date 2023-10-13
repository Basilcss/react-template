# React.js & Basil.css template

Minimal code example to show how Basil.css works with React.js.

### in main.tsx

```
import "basilcss"
```

### The template

```js
export default function App() {
  return (
    <main className="row">
      <img
        className="pic col-8 full-width vh-50 big:col-4  big:vh-100"
        src="https://source.unsplash.com/random"
        alt="lorem"
      />
      <div className="m-b-1 col-8 big:col-4 big:flex-col-justifyCenter-alignCenter">
        <div className="big:w-80">
          <h1 className="m-b-1">Lorem, ipsum dolor.</h1>
          <p className="big:w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quam dolores suscipit neque commodi repellat, deserunt temporibus
            ducimus quidem corporis nobis nihil inventore at officia a
            recusandae quasi ex odit.
          </p>
        </div>
      </div>
    </main>
  )
}
```
