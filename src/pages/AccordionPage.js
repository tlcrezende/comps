import Accordion from "../components/Accordion";


function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "oi",
      content: "content"
    },
    {
      id: 2,
      label: "oi",
      content: "content"
    },
    {
      id: 3,
      label: "oi",
      content: "content"
    }
  ]

  return <Accordion items={items}/>  
}

export default AccordionPage;
