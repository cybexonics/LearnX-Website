
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What subjects can I teach?",
      answer: "You can teach any subject you're knowledgeable in—school subjects, college courses, coding, languages, hobbies, or professional skills. There are no restrictions on the topics you can offer.",
    },
    {
      question: "Can I upload my own videos?",
      answer: "Yes, our platform supports both live teaching sessions and pre-recorded content. You can upload videos that you've created, conduct live classes, or offer a mix of both teaching styles.",
    },
    {
      question: "How do I get paid?",
      answer: "We process payments via direct bank transfer. Earnings are calculated every 15 days and transferred to your registered bank account or UPI ID after reaching the minimum threshold.",
    },
    {
      question: "What is the commission structure?",
      answer: "You keep 90% of all student subscription fees, while we retain just 10% as a platform fee. Early registrants get 0% commission for the first month as part of our special offer.",
    },
    {
      question: "What technical equipment do I need?",
      answer: "For basic teaching, you'll need a computer with a webcam and reliable internet connection. For higher quality videos, we recommend a good microphone and adequate lighting.",
    },
    {
      question: "Can I set my own prices?",
      answer: "Yes, you have complete control over your course pricing within our recommended ranges based on your subject and experience level.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teachGrow-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about teaching on our platform.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
