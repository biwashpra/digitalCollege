import React, { useState } from "react";
import java from "../../assets/jav.jpg";
import BookCard from "./BookCard";

const BookCards = () => {
  //Card ON SELECT
  const [semester, setSemester] = useState("1st Semester");
  //Card ON Scroll
  const [index, setIndex] = useState(0);

  //card lists
  const cardList = {
    "1st Semester": [
      {
        image:
          "https://www.schandpublishing.com/uploads/bookimages/schand-books/9788125928577.jpg",
        title: "Introduction to Information Technology",
        // collegenote:
        //   "https://www.collegenote.net/pastpapers/TU/CSIT/17/introduction-to-information-technology/",
        description:
          "The main objective of this course is to provide students knowledge of fundamental concepts of computers and information technology.",
      },
      {
        image:
          "https://th.bing.com/th/id/OIP.fWAUxeWGHJlTxffKBugfbAHaJg?pid=ImgDet&rs=1",
        title: "C Programming",
        // collegenote:
        //   "https://www.collegenote.net/pastpapers/TU/CSIT/15/c-programming/",
        description:
          "This course is designed to familiarize students to the techniques of programming in C",
      },
      {
        image:
          "https://kecpublication.com/wp-content/uploads/2021/07/dIGITAL-lOGIC-768x972.jpg",
        title: "Digital Logic",
        // collegenote:
        //   "https://www.collegenote.net/pastpapers/TU/CSIT/16/digital-logic/",
        description:
          "The main objective of this course is to introduce the basic tools for the design of digital circuits and introducing methods and procedures suitable for a variety of digital design applications.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.f63c0d21ea85f24950d1f21360497cdc?rik=UMYq%2fq%2b%2bn3L6qw&riu=http%3a%2f%2fheritagebooks.com.np%2fwp-content%2fuploads%2f2019%2f05%2f1532767876dhanpat_rai0010.jpg&ehk=Guza5WtLFYjn8oQgBFzXf2VrflcTEjAuUmRc45hV2%2fA%3d&risl=&pid=ImgRaw&r=0",
        title: "Mathematics I",
        // collegenote:
        //   "https://www.collegenote.net/pastpapers/TU/CSIT/18/mathematics-i-calculus/",
        description:
          "This page contains Text and Recommended books of Mathematics I (Calculus) of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.029dd09a5049ae48bdd1f4c8842698a6?rik=uGH3kLw3calFOg&pid=ImgRaw&r=0",
        title: "Physics",
        // collegenote:
        //   "https://www.collegenote.net/pastpapers/TU/CSIT/19/physics/",
        description:
          "This page contains Text and Recommended books of Physics of CSIT.",
      },
    ],
    "2nd Semester": [
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Discrete Structure",
        description:
          "The course covers fundamental concepts of discrete structure like introduce logic, proofs, sets, relations, functions, counting, and probability, with an emphasis on applications in computer science.",
      },
      {
        image:
          "https://www.libreriainterponce.com/media/catalog/product/cache/7/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/o/b/object_oriented_pragramming.jpg",
        title: "Object Oriented Programming (C++)",
        description:
          "The course covers the basic concepts of object oriented programming using C++ programming language.",
      },
      {
        image:
          "https://3.bp.blogspot.com/-4NAOn3jCCWY/XMLCwwL0DbI/AAAAAAAALH8/vcxID9l0meAED7-UV6HZtUczBZhnMX93QCLcBGAs/s1600/58460357_555504301639779_8257758759015677952_n.jpg",
        title: "Microprocessor",
        description:
          "This course contains fundamental concepts of Microprocessor operations, basic I/O interfaces and Interrupts operations.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.d8d9e0d37d7e67683773a67f3a752ecb?rik=OXIRfHQHKJubWw&pid=ImgRaw&r=0",
        title: "Mathematics II",
        description:
          "This page contains Text and Recommended books of Mathematics II of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Statistics I",
        description:
          "To impart the knowledge of descriptive statistics, correlation, regression, sampling, theoretical as well as the applied knowledge of probability and some probability distributions",
      },
    ],
    "3rd Semester": [
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Data Structures and Algorithms(DSA)",
        description:
          "This page contains Text and Recommended books of DSA of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Numerical Method",
        description:
          "This page contains Text and Recommended books of Numerical Method of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Computer Architecture",
        description:
          "This page contains Text and Recommended books of Computer Architecture of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Computer Graphics",
        description:
          "This page contains Text and Recommended books of Computer Graphics of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Statistics II",
        description:
          "This page contains Text and Recommended books of Statistics II of CSIT.",
      },
    ],
    "4th Semester": [
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Theory of Computation(TOC)",
        description:
          "This page contains Text and Recommended books of Theory of Computation(TOC) of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Computer Networks",
        description:
          "This page contains Text and Recommended books of Computer Networks of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Operating Systems",
        description:
          "This page contains Text and Recommended books of Operating Systems of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Databse Management System(DBMS)",
        description:
          "This page contains Text and Recommended books of Databse Management System(DBMS) of CSIT.",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Artificial Intelligence(AI)",
        description:
          "This page contains Text and Recommended books of Artificial Intelligence(AI) of CSIT.",
      },
    ],
    "5th Semester": [
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Card 5-1",
        description: "This is a description for card 5-1",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Card 5-2",
        description: "This is a description for card 5-2",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Card 5-3",
        description: "This is a description for card 5-3",
      },
    ],
    "6th Semester": [
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Card 6-1",
        description: "This is a description for card 6-1",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Card 6-2",
        description: "This is a description for card 6-2",
      },
      {
        image:
          "https://th.bing.com/th/id/R.07faec3ea5090c63dcb9c93aa9616338?rik=q2Kcs2QOE1EmjA&pid=ImgRaw&r=0",
        title: "Card 6-3",
        description: "This is a description for card 6-3",
      },
    ],
    "7th Semester": [
      {
        image: java,
        title: "Card 7-1",
        description: "This is a description for card 7-1",
      },
      {
        image: java,
        title: "Card 7-2",
        description: "This is a description for card 7-2",
      },
      {
        image: java,
        title: "Card 7-3",
        description: "This is a description for card 7-3",
      },
    ],
    "8th Semester": [
      {
        image: java,
        title: "Card 8-1",
        description: "This is a description for card 8-1",
      },
      {
        image: java,
        title: "Card 8-2",
        description: "This is a description for card 8-2",
      },
      {
        image: java,
        title: "Card 8-3",
        description: "This is a description for card 8-3",
      },
    ],
  };
  return (
    <>
      {/* Courses sort by semester */}
      <section className="text-gray-900 body-font">
        <div className="py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-4">
            <div className="lg:w-1/2 mb-2 lg:mb-0">
              <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900 my-2">
                Courses
              </h1>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="bg-[#BE3455] text-white p-2 rounded-2xl cursor-pointer"
              >
                <option value="1st Semester">1st Semester</option>
                <option value="2nd Semester">2nd Semester</option>
                <option value="3rd Semester">3rd Semester</option>
                <option value="4th Semester">4th Semester</option>
                <option value="5th Semester">5th Semester</option>
                <option value="6th Semester">6th Semester</option>
                <option value="7th Semester">7th Semester</option>
                <option value="8th Semester">8th Semester</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <button
              onClick={(e) => {
                setIndex(Math.max(0, index - 1));
                e.preventDefault();
              }}
              disabled={index === 0}
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded m-4 cursor-pointer"
            >
              Prev
            </button>
            {cardList[semester].slice(index, index + 3).map((card, i) => (
              <BookCard
                key={i}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
            <button
              onClick={(e) => {
                setIndex(Math.min(cardList[semester].length - 3, index + 1));
                e.preventDefault();
              }}
              disabled={index >= cardList.length - 3}
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded m-4 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCards;
