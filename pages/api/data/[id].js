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
    },
    {
      "title": "my New Ticket",
      "body": "test",
      "priority": "high",
      "user_email": "Sa7ar@g.dev",
      "id": "Vwc2rpV"
    },
    {
      "title": "another one",
      "body": "asd",
      "priority": "low",
      "user_email": "Sa7ar@g.dev",
      "id": "o7NsgMT"
    },
    {
      "title": "Clean up the mess Marios desk",
      "body": "ay kalam",
      "priority": "medium",
      "user_email": "Sa7ar@g.dev",
      "id": "8pU4aLa"
    },
    {
      "title": "Hola~",
      "body": "It's Me ",
      "priority": "high",
      "user_email": "Sa7ar@g.dev",
      "id": "VTRCh8W"
    }
  ];

  export default function handler(req, res) {
    const { id } = req.query;
    const ticket = tickets.find(ticket => ticket.id === id);
  
    if (ticket) {
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  }