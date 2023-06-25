export default function App() {
  return (
    <main className="row m-2 vh-80 big:vh-100 big:m-0 fade-in">
      <div className="col-8 big:col-4 big:flex-col-right-center">
        <h2 className="m-b-2 big:t-left big:w-70">Basil.css and React.js</h2>
        <p className="m-b-2 big:t-left big:w-70">
          By using Basil you speed up your development by only sprinkling the
          bare minimum of basil on your spaghetti code. Basil only uses CSS
          grids, flexbox, fontsize, margin, padding and media queries. That
          leaves you to style the rest of the app with whatever CSS method you
          want.
        </p>
        <a
          className=" m-b-2 full-width big:w-30"
          href="https://docs-basilcss.vercel.app/"
        >
          <button className="btn-primary m-b-2 full-width big:w-90">
            Try Basil.css
          </button>
        </a>
      </div>
      <div className="col-8 big:col-4 big:flex-row-center-center">
        <img
          className="full-width big:w-60"
          src="https://images.pexels.com/photos/4750310/pexels-photo-4750310.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="image of a basil plant from pexels.com"
        />
      </div>
    </main>
  )
}
