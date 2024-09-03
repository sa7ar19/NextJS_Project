import CreateForm from "./CreateForm";

export default function CreateTicket(){
    return(
        <main>
            <h2 className="text-primary text-center">Add a New Ticket</h2>
            <h6 className="text-center mb-4">You can Add just 2 tickets : this is a frontend page(No DB)</h6>
            
            <CreateForm />
        </main>
    )
}