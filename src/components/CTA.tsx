
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-teachGrow-primary text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Earning as an Online Teacher?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our growing community of educators and start building your online teaching business today.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-teachGrow-primary hover:bg-gray-100 text-lg px-8"
          asChild
        >
          <Link to="/register">Register Now for ₹999/year</Link>
        </Button>
        <p className="mt-6 text-sm opacity-90">
          Limited time offer - Early access benefits for the first 20 teachers only!
        </p>
      </div>
    </section>
  );
};

export default CTA;
