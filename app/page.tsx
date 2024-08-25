import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, in possimus perspiciatis omnis distinctio ut tenetur voluptas nam? Voluptatibus, ducimus doloribus officia odit quaerat nisi molestias. Fugit totam dicta non.</p>

      <div className="flex justify-center my-8">
        <Link href='/tickets'>
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team ...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga ea temporibus consectetur cupiditate dolorum, ut quos officiis voluptate beatae. Natus eligendi placeat veniam a modi possimus eius eum dolorum?</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde expedita placeat rem quasi, voluptates veritatis quos, cum quae eligendi necessitatibus laudantium! Vel ea ipsa commodi, accusantium facere itaque. Esse, quos?</p>
      </div>
    </main>
  )
}
