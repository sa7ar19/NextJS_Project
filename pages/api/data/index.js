import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'pages/api/data/index.js');




const tickets = [
    {
      "id": "1",
      "title": "fix the fiiter links please",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, corrupti! Nihil iusto esse nam dolores numquam eum inventore fugit neque sint, error id quisquam non impedit et sed nulla possimus!",
      "priority": "low",
      "user_email": "mario@g.dev"
    },
    {
      "id": "2",
      "title": "Add in a new stylesheet",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis saepe non enim cupiditate dicta iusto molestiae necessitatibus laborum sed, omnis rem commodi blanditiis totam odio cumque vel nam ad?",
      "priority": "high",
      "user_email": "trujan@g.dev"
    },
    {
      "id": "3",
      "title": "fix the header links please",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perspiciatis harum! Hic quia modi ex minus asperiores eaque voluptatibus obcaecati. Maxime ipsa perspiciatis soluta pariatur veritatis totam temporibus asperiores error.",
      "priority": "medium",
      "user_email": "ehab@g.dev"
    },
    {
      "id": "4",
      "title": "Add a new card",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, corrupti! Nihil iusto esse nam dolores numquam eum inventore fugit neque sint, error id quisquam non impedit et sed nulla possimus!",
      "priority": "low",
      "user_email": "sahar@g.dev"
    }
  ];

  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(tickets);
    } else if (req.method === 'POST') {
      const { title, body, priority } = req.body;
  
      if (!title || !body || !priority ) {
        res.status(400).json({ message: 'Title, body and priority are required' });
        return;
      }
  
      // Create a new user object
      const newTicket = {
        id: String(tickets.length + 1), // Generate a new ID
        title,
        body,
        priority,
        user_emil: "asd@gml.c"
      };
  
      // Add the new user to the array
      tickets.push(newTicket);
  
      // Serialize the updated data
      const updatedData = `
              import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'pages/api/data/index.js');

let tickets = ${JSON.stringify(tickets, null, 2)};

export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(tickets);
    } else if (req.method === 'POST') {
      const { title, body, priority } = req.body;
  
      if (!title || !body || !priority ) {
        res.status(400).json({ message: 'Title, body and priority are required' });
        return;
      }
  
      // Create a new user object
      const newTicket = {
        id: String(tickets.length + 1), // Generate a new ID
        title,
        body,
        priority,
        user_emil: "asd@gml.c"
      };
  
      // Add the new user to the array
      tickets.push(newTicket);

    // Serialize the updated data (tickets array)
    const updatedData = \`
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'pages/api/data/index.js');

let tickets = \${JSON.stringify(tickets, null, 2)};
export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(tickets);
    } else if (req.method === 'POST') {
      const { title, body, priority } = req.body;
  
      if (!title || !body || !priority ) {
        res.status(400).json({ message: 'Title, body and priority are required' });
        return;
      }
  
      // Create a new user object
      const newTicket = {
        id: String(tickets.length + 1), // Generate a new ID
        title,
        body,
        priority,
        user_emil: "asd@gml.c"
      };
  
      // Add the new user to the array
      tickets.push(newTicket);
      

      
    fs.writeFileSync(filePath, updatedData);

    res.status(201).json(newTicket);
  } else {
    res.status(405).json({ message: 'Only GET and POST requests are allowed' });
  }
}
\`;

    // Write the updated data back to the file
    fs.writeFileSync(filePath, updatedData);

    // Send a response with the new ticket data
    res.status(201).json(newTicket);
  } else {
    res.status(405).json({ message: 'Only GET and POST requests are allowed' });
  }
}

              `;
  
      // Write the updated data back to the file
      fs.writeFileSync(filePath, updatedData);
  
      res.status(201).json(newTicket);
    } else {
      res.status(405).json({ message: 'Only GET and POST requests are allowed' });
    }
  }