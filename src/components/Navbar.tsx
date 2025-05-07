
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-teachGrow-primary">
            <span className="text-teachGrow-dark">Learn</span>
            <span className="text-teachGrow-accent">X</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/#features">Features</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/#how-it-works">How It Works</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/#faq">FAQ</Link>
          </Button>
          <Button 
            variant="default"
            className="bg-teachGrow-primary text-white hover:bg-teachGrow-primary/90"
            asChild
          >
            <Link to="/register">Register Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
