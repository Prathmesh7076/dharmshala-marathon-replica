import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the race categories and distances?",
      answer: "OpenPhone uses Internet to provide you with additional phone numbers on top of your existing devices. Download OpenPhone on your mobile or use it on the web to make and receive calls and messages.",
    },
    {
      question: "How do I register for the marathon?",
      answer: "You can register through our website by clicking the 'Register Now' button and filling out the registration form with your details.",
    },
    {
      question: "What is the minimum age to participate?",
      answer: "The minimum age requirement varies by race category. Please check the specific requirements for your chosen distance.",
    },
    {
      question: "What is the route map and elevation?",
      answer: "Detailed route maps and elevation profiles are available in the Route section of our website.",
    },
    {
      question: "What items are included in the race kit?",
      answer: "Your race kit includes a bib number, timing chip, event t-shirt, and other race essentials.",
    },
    {
      question: "Is there a cutoff time for each category?",
      answer: "Yes, each race category has specific cutoff times to ensure runner safety and event logistics.",
    },
    {
      question: "Will medical support and hydration stations be available?",
      answer: "Yes, we have medical support teams and hydration stations positioned throughout the course.",
    },
  ];

  return (
    <section id="faqs" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/80 backdrop-blur-sm border-none rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
