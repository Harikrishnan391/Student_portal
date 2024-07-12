import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { assignments } from "@/constants/assignments";

const Asssignments = () => {
  return (
    <div className="bg-white px-3 py-2 rounded-lg">
      <div className="py-3 ml-3">
        <span>Assignments ({assignments.length})</span>
      </div>
      <div className="mx-2 space-y-4">
        {assignments.map((assignment, index) => (
          <Card key={index} className="h-20">
            <CardHeader>
              <CardTitle className="text-sm">{assignment.title}</CardTitle>
              <CardDescription>
                Deadline - {assignment.deadline}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Asssignments;
