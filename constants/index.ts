export const navigationLinks = [
    {
      href: "/library",
      label: "Library",
    },
  
    {
      img: "/icons/user.svg",
      selectedImg: "/icons/user-fill.svg",
      href: "/my-profile",
      label: "My Profile",
    },
  ];
  
  export const adminSideBarLinks = [
    {
      img: "/icons/admin/home.svg",
      route: "/admin",
      text: "Home",
    },
    {
      img: "/icons/admin/users.svg",
      route: "/admin/users",
      text: "All Users",
    },
    {
      img: "/icons/admin/book.svg",
      route: "/admin/books",
      text: "All Books",
    },
    {
      img: "/icons/admin/bookmark.svg",
      route: "/admin/borrow-records",
      text: "Borrow Records",
    },
    {
      img: "/icons/admin/user.svg",
      route: "/admin/account-requests",
      text: "Account Requests",
    },
  ];
  
  export const FIELD_NAMES = {
    fullName: "Full name",
    email: "Email",
    universityId: "University ID Number",
    password: "Password",
    universityCard: "Upload University ID Card",
  };
  
  export const FIELD_TYPES = {
    fullName: "text",
    email: "email",
    universityId: "number",
    password: "password",
  };
  
  export const sampleCourses = [
    {
      id: 1,
      title: "The Complete Web Developer Bootcamp",
      instructor: "Angela Yu",
      category: "Web Development",
      rating: 4.8,
      totalEnrollments: 1500,
      availableSpots: 2000,
      description:
        "This comprehensive bootcamp covers everything you need to know to become a full-stack web developer, from HTML to backend programming.",
      courseColor: "#1c1f40",
      courseUrl: "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A complete guide to becoming a web developer. Learn HTML, CSS, JavaScript, Node.js, and more in this all-in-one course.",
    },
    {
      id: 2,
      title: "Python for Data Science and Machine Learning",
      instructor: "Jose Portilla",
      category: "Data Science / Python",
      rating: 4.9,
      totalEnrollments: 3200,
      availableSpots: 5000,
      description:
        "Learn Python programming and how to use it for data science and machine learning, including libraries like pandas, NumPy, and scikit-learn.",
      courseColor: "#fffdf6",
      courseUrl: "https://miro.medium.com/v2/resize:fit:1073/1*wq5NfjT_bg8YukwVCpwahA.jpeg",
      videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A deep dive into using Python for data analysis, machine learning, and data visualization with real-world projects.",
    },
    {
      id: 3,
      title: "Mastering React",
      instructor: "Andrew Mead",
      category: "Web Development / React",
      rating: 4.7,
      totalEnrollments: 1800,
      availableSpots: 2000,
      description:
        "A hands-on guide to mastering React.js, covering both the fundamentals and advanced concepts like hooks and state management.",
      courseColor: "#f8e036",
      courseUrl: "https://miro.medium.com/v2/resize:fit:680/1*C4yGTDSLSz86TCakrza2HQ.jpeg",
      videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "From the basics to advanced React concepts, this course will take you from beginner to expert React developer.",
    },
    {
      id: 4,
      title: "The Complete Digital Marketing Course",
      instructor: "Daragh Walsh",
      category: "Marketing",
      rating: 4.6,
      totalEnrollments: 2500,
      availableSpots: 4000,
      description:
        "Learn all the essentials of digital marketing including SEO, social media marketing, email marketing, and more.",
      courseColor: "#ed6322",
      courseUrl: "https://nxtshiksha.com/wp-content/uploads/2024/11/SEARCH-ENGINE-OPTIMIZATION.webp",
      videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A comprehensive course that covers SEO, PPC, social media marketing, email marketing, and analytics to boost your digital marketing skills.",
    },
    {
      id: 5,
      title: "Introduction to JavaScript",
      instructor: "Jonas Schmedtmann",
      category: "Web Development / JavaScript",
      rating: 4.7,
      totalEnrollments: 4500,
      availableSpots: 5000,
      description:
        "A beginner-friendly introduction to JavaScript, covering the fundamentals and essential concepts in an engaging and interactive way.",
      courseColor: "#ffffff",
      courseUrl: "https://wedevs.academy/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-20-at-15.35.51_bb32c4ab.jpg",
      videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A deep dive into the basics of JavaScript programming, including data types, loops, and functions.",
    },
    {
      id: 6,
      title: "Advanced SQL for Data Analysis",
      instructor: "Dan Sullivan",
      category: "Data Science / SQL",
      rating: 4.8,
      totalEnrollments: 1200,
      availableSpots: 1500,
      description:
        "Take your SQL skills to the next level by learning advanced techniques for data analysis and manipulation in real-world scenarios.",
      courseColor: "#080c0d",
      courseUrl: "https://i.ytimg.com/vi/JGshlnQTBpc/maxresdefault.jpg",
      videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "Master complex SQL queries, join multiple tables, and perform advanced data analysis using SQL techniques.",
    },
    {
      id: 7,
      title: "Data Structures and Algorithms in Java",
      instructor: "John Purcell",
      category: "Computer Science / Java",
      rating: 4.9,
      totalEnrollments: 1400,
      availableSpots: 2000,
      description:
        "Learn essential data structures and algorithms in Java, including stacks, queues, linked lists, and sorting algorithms.",
      courseColor: "#100f15",
      courseUrl: "https://courses.wscubetech.com/s/store/courses/5f7edfd90cf212378353d729/cover.jpg?v=2",
      videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A practical and project-based approach to understanding data structures and algorithms using Java.",
    },
    {
      id: 8,
      title: "Financial Modeling for Beginners",
      instructor: "Aswath Damodaran",
      category: "Finance",
      rating: 4.8,
      totalEnrollments: 950,
      availableSpots: 1000,
      description:
        "Learn the fundamentals of financial modeling with a focus on Excel, valuation, and financial forecasting for real-world decision making.",
      courseColor: "#ffffff",
      courseUrl: "https://img-c.udemycdn.com/course/750x422/920604_7c3f_8.jpg",
      videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "A hands-on introduction to financial modeling techniques for forecasting and business analysis.",
    },
  ];
  
  
  export const sorts = [
    {
      value: "oldest",
      label: "Oldest",
    },
    {
      value: "newest",
      label: "Newest",
    },
    {
      value: "available",
      label: "Available",
    },
    {
      value: "highestRated",
      label: "Highest Rated",
    },
  ];
  
  export const userRoles = [
    {
      value: "user",
      label: "User",
      bgColor: "bg-[#FDF2FA]",
      textColor: "text-[#C11574]",
    },
    {
      value: "admin",
      label: "Admin",
      bgColor: "bg-[#ECFDF3]",
      textColor: "text-[#027A48]",
    },
  ];
  
  export const borrowStatuses = [
    {
      value: "overdue",
      label: "Overdue",
      bgColor: "bg-[#FFF1F3]",
      textColor: "text-[#C01048]",
    },
    {
      value: "borrowed",
      label: "Borrowed",
      bgColor: "bg-[#F9F5FF]",
      textColor: "text-[#6941C6]",
    },
    {
      value: "returned",
      label: "Returned",
      bgColor: "bg-[#F0F9FF]",
      textColor: "text-[#026AA2]",
    },
  ];