interface Course{

    id: numeber;
    title : string;
    instructor : string;
    category : string;
    rating : number;
    totalEnrollments : number;
    availableSpots : number;
    description : string;
    courseColor : string;
    courseUrl : string;
    videoUrl : string;
    summary : string;
    isFull?: boolean;
}