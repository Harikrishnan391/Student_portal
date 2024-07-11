"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import PaginationControls from "./PaginationControls";
import { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { format, isPast, parseISO } from "date-fns";
import { Teachers } from "@/constants/index";
import CountdownTimer from "./CountdownTimer";
import { SquareArrowOutUpRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const UpcomingClasses = () => {
  const [activeTimers, setActiveTimers] = useState<number[]>([]);
  const [showBookedOnly, setShowBookedOnly] = useState(false);
  const [teachers, setTeachers] = useState(Teachers);
  const PAGE_SIZE = 5;
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? PAGE_SIZE.toString();

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return isPast(date) ? (
      <span className="flex place-items-center">
        <span className="w-2 h-2 me-3 bg-red-500 rounded-full"></span>
        <span className="text-red-500">Live</span>
      </span>
    ) : (
      format(date, "do MMM h a")
    );
  };

  const handleConfirm = (index: number) => {
    const updatedTeachers = [...teachers];
    updatedTeachers[index].status = "booked";
    setTeachers(updatedTeachers);

    setActiveTimers((prevTimers) => [...prevTimers, index]);
  };

  const handleCloseTimer = (index: number) => {
    setActiveTimers((prevTimers) => prevTimers.filter((i) => i !== index));
  };

  const toggleShowBookedOnly = () => {
    setShowBookedOnly((prev) => !prev);
  };

  const filteredTeachers = showBookedOnly
    ? teachers.filter((teacher) => teacher.status === "booked")
    : teachers;

  const indexOfLastItem = Number(page) * Number(per_page);
  const indexOfFirstItem = indexOfLastItem - Number(per_page);
  const currentItems = filteredTeachers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="bg-white rounded-2xl">
      <div className="py-3 ml-3 mr-3 flex justify-between">
        <div className="ml-3">
          <span>Upcoming Classes</span>
          <span className="block text-sm text-gray-500">For next 7 days</span>
        </div>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={toggleShowBookedOnly}
            checked={showBookedOnly}
          />
          Booked only
        </label>
      </div>

      {/* Table View for Larger Screens */}
      <div className="hidden lg:block py-1 ml-2 mr-2">
        <Table>
          <TableCaption>A list of upcoming classes</TableCaption>
          <TableHeader className="bg-slate-100">
            <TableRow>
              <TableHead className="w-[100px]">Classname</TableHead>
              <TableHead className="w-[100px]">Instructor</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium whitespace-nowrap">
                  {index + 1}. {user.classname}
                  <span className="ml-3 block text-gray-400 text-sm">
                    {formatDate(user.date)}
                  </span>
                </TableCell>
                <TableCell className="flex items-center justify-between px-2 text-center">
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src={user.link} />
                    </Avatar>
                    <div className="ml-3 flex flex-col">
                      <span className="block mt-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {user.name}
                      </span>
                      <span className="block text-gray-500 text-sm">
                        Additional
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {isPast(parseISO(user.date)) ? (
                    <Button variant="outline" className="bg-blue-500">
                      Join now
                      <SquareArrowOutUpRight className="w-5 h-5" />
                    </Button>
                  ) : activeTimers.includes(index) ||
                    user.status === "booked" ? (
                    <div className="flex items-center justify-center">
                      <CountdownTimer
                        targetDate={user.date}
                        onComplete={() => handleCloseTimer(index)}
                      />
                    </div>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="hover:bg-slate-200"
                        >
                          Book Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Are You Sure!</DialogTitle>
                          <DialogDescription>
                            Anyone with this link can view this. Lorem ipsum,
                            dolor sit amet consectetur adipisicing elit.
                            Perferendis, tempora?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="sm:justify-end">
                          <DialogClose asChild>
                            <Button type="button" variant="secondary">
                              Close
                            </Button>
                          </DialogClose>
                          <Button
                            type="submit"
                            className="bg-blue-500"
                            onClick={() => handleConfirm(index)}
                          >
                            Confirm
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Card View for Smaller Screens */}
      <div className="block lg:hidden py-1 ml-2 mr-2">
        {currentItems.map((user, index) => (
          <div key={index} className="border rounded-lg p-4 mb-2">
            <div className="font-medium">
              {index + 1}. {user.classname}
              <span className="ml-3 block text-gray-400 text-sm">
                {formatDate(user.date)}
              </span>
            </div>
            <div className="flex items-center justify-between px-2 text-center my-2">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src={user.link} />
                </Avatar>
                <div className="ml-3 flex flex-col">
                  <span className="block mt-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {user.name}
                  </span>
                  <span className="block text-gray-500 text-sm">
                    Additional
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              {isPast(parseISO(user.date)) ? (
                <Button variant="outline" className="bg-blue-500 w-full">
                  Join now
                  <SquareArrowOutUpRight className="w-5 h-5" />
                </Button>
              ) : activeTimers.includes(index) || user.status === "booked" ? (
                <div className="flex items-center justify-center">
                  <CountdownTimer
                    targetDate={user.date}
                    onComplete={() => handleCloseTimer(index)}
                  />
                </div>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="hover:bg-slate-200 w-full"
                    >
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Are You Sure!</DialogTitle>
                      <DialogDescription>
                        Anyone with this link can view this. Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit. Perferendis,
                        tempora?
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-end">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                      <Button
                        type="submit"
                        className="bg-blue-500"
                        onClick={() => handleConfirm(index)}
                      >
                        Confirm
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        ))}
      </div>
{/** pagination component */}
      <div className="flex justify-center py-4">
        <PaginationControls
          hasNextPage={indexOfLastItem < filteredTeachers.length}
          hasPrevPage={indexOfFirstItem > 0}
        />
      </div>
    </div>
  );
};

export default UpcomingClasses;
