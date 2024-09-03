import {Suspense} from 'react';
import Loading from '../../loading';

export async function generateStaticParams(){
    const tickets = await fetch('/api/data').then((res) => res.json());

    
    return tickets.map((ticket)=> ({
        id: ticket.id,
    }))
}

async function getTicket(id){
    await new Promise((resolve) => setTimeout(resolve, 3000))
    
    const res = await fetch("/api/data/"+ id, {
        next: {
          revalidate: 60
        }
      })
      
      if(!res.ok){
        //notFound
      } 

      return res.json()
}

export default async function TicketDetails({ params }){
    
    const  ticket = await getTicket(params.id)

    return(
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <Suspense fallback={<Loading />}>
                    <h3>{ticket.title}</h3>
                    <small>Created by {ticket.user_email}</small>
                    <p>{ticket.body}</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                </Suspense>
            </div>
        </main>
    )
}
