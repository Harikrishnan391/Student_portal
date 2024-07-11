import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Asssignments = () => {
  return (
    <div className="bg-white  px-3 py-2 rounded-lg">
      <div className="py-3 ml-3">
        <span>Assignments (4)</span>
      </div>
      <div className="mx-2 space-y-4 ">
        <Card className="h-20">
          <CardHeader>
            <CardTitle className="text-sm">Logo design for a Airline</CardTitle>
            <CardDescription>Deadline - 20/06/2024</CardDescription>
          </CardHeader>
        </Card>

        <Card className="h-20">
          <CardHeader>
            <CardTitle className="text-sm">
              UIUX Design - Ecommerce Mobile app
            </CardTitle>
            <CardDescription>Deadlin - 22/06/2024</CardDescription>
          </CardHeader>
        </Card>

        <Card className="h-20">
          <CardHeader>
            <CardTitle className="text-sm">
              User Persona and User journey
            </CardTitle>
            <CardDescription>Deadlin - 22/06/2024</CardDescription>
          </CardHeader>
        </Card>

        <Card className="h-20">
          <CardHeader>
            <CardTitle className="text-sm">Typefaces</CardTitle>
            <CardDescription>Deadlin - 22/06/2024</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Asssignments;
