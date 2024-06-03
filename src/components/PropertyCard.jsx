
// src/components/PropertyCard.jsx

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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PropertyCard = ({ property }) => {
  return (
    <Card className="max-w-sm mx-auto my-4">
      <CardHeader>
        <img src={property.imageUrl} alt={property.name} className="w-full h-48 object-cover rounded-t-lg" />
        <CardTitle>{property.name}</CardTitle>
        <CardDescription>{property.address}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">{property.price}</p>
        <p>{property.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline">View Details</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to view more details about this property</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
