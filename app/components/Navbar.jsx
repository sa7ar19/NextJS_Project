import Link from "next/link";
import Image from "next/image";
import logo from "./02.png";

export default function Navbar() {
    return ( 
        <nav>
            <Image
            className="rounded-lg"
            src={logo}
            alt="SM Logo"
            width={70}
            quality={100}
            ></Image>
           <h1>Luka Helpdesk</h1> 
           <Link href='/'>Dashboard</Link>
           <Link href='/tickets'>Tickets</Link>
           <Link href='/tickets/create'>Create One</Link>
        </nav>
    );
}
