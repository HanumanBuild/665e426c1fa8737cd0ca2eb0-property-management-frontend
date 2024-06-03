
// src/components/Footer.jsx

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto">
        <Card className="bg-gray-800 border-none">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch with us through the following channels:</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Email: contact@propertymanagement.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline" className="text-white border-white">Facebook</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline" className="text-white border-white">Twitter</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline" className="text-white border-white">Instagram</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
          <Separator className="my-4" />
          <CardFooter className="text-center">
            <p>&copy; {new Date().getFullYear()} Property Management. All rights reserved.</p>
          </CardFooter>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
