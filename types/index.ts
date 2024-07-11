export interface CountdownTimerProps {
  targetDate: string;
  onComplete: () => void;
}


export interface PaginationControlsProps {
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }

  export interface teachersDataTypes{
    classname:string,
    name:string,
    date:string,
    description:string,
    link:string
    status:string

  }