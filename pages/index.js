import Head from "next/head";
import { NextSeo } from "next-seo";

//Made by Nigel Dias
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Backdrop from "@mui/material/Backdrop";
import { Dialog, Transition } from "@headlessui/react";
import event6 from "../public/assets/newsletter.webp";
import event7 from "../public/assets/newsletter_dark.webp";
import { GrClose } from "react-icons/gr";
import CircularProgress from "@mui/material/CircularProgress";
import Contact from "@/components/ContactUs";
import {
  motion,
  transform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import event1 from "../public/assets/minerva_event_1.webp";
import event2 from "../public/assets/orientation.webp";
import event3 from "../public/assets/runway.webp";
import background from "../public/assets/background.webp";
import foreground from "../public/assets/foreground.webp";
import { Avatar, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, Fragment } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AnimatedHeading from "@/animatedComponents/Heading";
import UpdatedNewsCard from "@/components/UpdatedNewsCard";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import { IoMdClose } from "react-icons/io";
import UpdatedAnimatedTimelineItem from "@/components/UpdateAnimatedTimelineItem";

const CustomLeftArrow = ({ onClick }) => (
  <div
    onClick={() => onClick()}
    className="w-10 h-10 relative z-50 bg-pink react-multiple-carousel__arrow "
  >
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full absolute h-full -z-10 -right-1 border p-4 rounded-full border-black bg-blue"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full absolute h-full -z-20 -right-2 border p-4 rounded-full border-black bg-yellow"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
    <button className=" w-full h-full bottom-10 border p-4 rounded-full border-black bg-pink">
      <BsArrowLeft style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
  </div>
);
const CustomRightArrow = ({ onClick }) => (
  <div
    onClick={() => onClick()}
    className="w-1 h-1 relative z-50 bg-pink react-multiple-carousel__arrow right-0 "
  >
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full absolute h-full -z-10 -left-1 border p-4 rounded-full border-black bg-blue"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full absolute h-full -z-20 -left-2 border p-4 rounded-full border-black bg-yellow"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full h-full bottom-10 border p-4 rounded-full border-black bg-pink"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
  </div>
);

export default function HomeComponent() {
  const router = useRouter();
  const [data, setData] = useState([]); //This refers to the 6 news articles featured in the home page
  const [open, setOpen] = useState(false); // Loading circular progress bar(Backdrop)
  const isSmallScreen = useMediaQuery({ maxWidth: 429 });
  const [dark, setDark] = useState(false);
  const [openDialogue, setOpenDialogue] = useState(false);
  const handleClickOpen = () => {
    setOpenDialogue(true);
  };

  const handleClose = (value) => {
    setOpenDialogue(false);
  };
  useEffect(() => {
    localStorage.getItem("mode") == "dark" ? setDark(true) : setDark(false);

    setOpenDialogue(true);
  }, []);
  function closeModal() {
    setOpenDialogue(false);
  }

  useEffect(() => {
    const getTrendingArticles = async () => {
      const response = await fetch("/api/trendingarticles", {
        cache: "force-cache",
        next: { revalidate: 86400 },
      });
      setData(await response.json());
    };

    getTrendingArticles();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 481 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 481, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={dark ? "dark" : ""}>
      <NextSeo
        title="Minerva - The Official Journalism Club of PES University"
        description="Minerva is Bangalore's first student-run college newspaper. We are a group of thinkers that challenge people through good journalism."
        canonical="https://minervapesu.vercel.app"
        openGraph={{
          url: "https://minervapesu.vercel.app",
          title: "Minerva - The Official Journalism Club of PES University",
          description: "Bangalore's first student-run college newspaper",
          siteName: "Minerva PESU",
          images: {
            url: "https://instagram.fblr22-2.fna.fbcdn.net/v/t51.2885-19/325223888_155195430611563_546588007529315167_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fblr22-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ZO1nlFyW8aoAX9YugF2&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBezyb3Stb9bm06G-NbT8SRc7X7xmfuMCz8MVh9VPd-Xg&oe=6519D231&_nc_sid=ee9879",
            width: 850,
            height: 650,
            alt: "Minerva Logo",
          },
        }}
      />

      <Head>
        <title>Minerva - The Official Journalism Club of PES University</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="minerva, journalism, journalist, pes, university, articles, news, events, club"
        ></meta>
        <meta
          name="title"
          content="Minerva - The Official Journalism Club of PES University"
        ></meta>
        <meta name="language" content="en"></meta>
        <meta name="author" content="Minerva Web Dev Team"></meta>
      </Head>
      <Headers dark={dark} setDark={setDark} />
      <div className="flex flex-col">
        <div
          className="w-screen -z-20"
          style={{
            height: "90vh",
            backgroundImage: `url(${background.src})`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-screen h-screen z-0 bg-[rgba(0,0,0,0.7)] absolute"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10 w-full">
            <motion.div
              className="h-full w-screen md:w-full  flex flex-col items-start md:items-center justify-center"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div
                style={{ transform: "translate(0,-30%)" }}
                className="pl-5 pt-7 md:pl-12"
              >
                <h1 className="lg:text-6xl font-georgia font-bold text-white sm:text-3xl md:text-6xl text-3xl">
                  Introducing Minerva
                </h1>
                <p className="text-lg sm:text-lg font-georgia font-light mt-8 mb-4 text-white md:text-3xl lg:text-3xl">
                  Bangalore&apos;s first student-run college newspaper
                </p>
                <p className="text-md font-georgia hidden md:flex font-light md:text-xl pr-3 text-white">
                  We are a group of thinkers that challenge people through good
                  journalism.
                </p>
              </div>
            </motion.div>

            <div className=" items-end justify-end h-screen hidden md:flex">
              <div className="pb-8 pr-8 z-10">
                <Image
                  className="w-auto h-auto "
                  alt="Illustration of the roman goddess of wisdom"
                  src={foreground}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className=" animate-bounce flex flex-row relative z-100 justify-center">
          <button className="animate-bounce z-90 absolute bottom-12 border p-4 rounded-full border-black bg-yellow">
            <BsArrowDown size={16} />
          </button>
          <button className="animate-bounce z-80 absolute bottom-11 border p-4 rounded-full border-black bg-blue">
            <BsArrowDown size={16} />
          </button>
          <button className="animate-bounce z-90 absolute bottom-10 border p-4 rounded-full border-black bg-pink">
            <BsArrowDown size={16} />
          </button>
        </div>
        <div className="px-0 bg-white dark:bg-greyBlack pt-8 sm:px-6 md:px-12">
          <div className="md:flex md:flex-row flex flex-col sm:flex sm:flex-col md:mt-16 sm:-mx-2 mx-5 ">
            <div className="basis-3/6 pr-2 ">
              <UpdatedHeading># Trending</UpdatedHeading>

              {data.length >= 1 && (
                <div>
                  <UpdatedNewsCard
                    i={2}
                    imageURL={`${data[0].imageURL}`}
                    headline={`${data[0].title}`}
                    writerName={`${data[0].writerName}`}
                    genre={`${data[0].genre}`}
                    date={`${data[0].createdAt}`}
                    desc={`${data[0].description}`}
                    id={`${data[0]._id}`}
                    newArticle={true}
                    bigger={true}
                  />
                  <UpdatedNewsCard
                    i={2}
                    imageURL={`${data[1].imageURL}`}
                    headline={`${data[1].title}`}
                    writerName={`${data[1].writerName}`}
                    genre={`${data[1].genre}`}
                    date={`${data[1].createdAt}`}
                    desc={`${data[1].description}`}
                    id={`${data[1]._id}`}
                    newArticle={true}
                    bigger={true}
                  />
                </div>
              )}
            </div>
            <div className="basis-2/4 pl-3 pt-15 flex flex-col sm:flex sm:flex-col">
              <div className="flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl text-#1D1D1D dark:text-white font-gilroy font-bold -ml-5 md:ml-8 lg:pb-2">
                  Recent News
                </h2>
                <Link
                  href={"/allnews"}
                  className=" text-otherblue dark:text-blue underline text-sm font-georgia pr-4 pt-2 hover:text-hoverbeigeText justify-center hidden  sm:hidden "
                >
                  View More
                </Link>
              </div>
              <div className="md:hidden">
                {" "}
                {/* Render carousel for small screens */}
                <Carousel
                  draggable={isSmallScreen ? true : false}
                  responsive={responsive}
                  showDots={isSmallScreen ? true : false}
                  customLeftArrow={<></>} // Hide the left arrow button
                  customRightArrow={<></>} // Hide the right arrow button
                  removeArrowOnDeviceType={["sm", "md"]}
                  className="py-3 sm:py-6 justify-center -ml-5"
                >
                  {/* Render news cards as carousel items */}
                  {data.map((val, i) => (
                    <UpdatedNewsCard
                      key={i}
                      i={i}
                      imageURL={`${val.imageURL}`}
                      writerName={`${val.writerName}`}
                      headline={`${val.title}`}
                      genre={`${val.genre}`}
                      date={`${val.createdAt}`}
                      desc={`${val.description}`}
                      id={`${val._id}`}
                      newArticle={true}
                      darkMode={dark ? true : false}
                    />
                  ))}
                </Carousel>
              </div>
              <div
                style={{ maxHeight: "110vh" }}
                className=" hidden md:block overflow-auto"
              >
                {data.slice(2, -1).map((val, i) => {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: -60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <UpdatedNewsCard
                        key={i}
                        i={i}
                        imageURL={`${val.imageURL}`}
                        writerName={`${val.writerName}`}
                        headline={`${val.title}`}
                        genre={`${val.genre}`}
                        date={`${val.createdAt}`}
                        desc={`${val.description}`}
                        id={`${val._id}`}
                        newArticle={true}
                        horizontal={true}
                        darkMode={dark ? true : false}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden md:flex w-full mt-8 justify-center">
            <div className="relative">
              <button
                className="bg-pink border border-black relative z-40 x-6 my-1  font-gilroy font-bolder rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                type="submit"
                onClick={() => {
                  router.push("/allnews", undefined, { scroll: false });
                }}
              >
                View More
              </button>
              <button className="bg-yellow border min-w-max border-black absolute top-1 left-1 z-30 x-6 my-1 font-merriweather font-small rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                View More
              </button>
              <button className="bg-blue border min-w-max border-black absolute top-2 left-2 z-20 x-6 my-1 font-merriweather font-small rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                View More
              </button>
            </div>
          </div>
          <motion.div
            className="bg-[#428797] dark:bg-yellowBackground p-8 mt-20 mb-10 w-full rounded-md"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <UpdatedHeading>Our Timeline</UpdatedHeading>
            <div className="hidden md:flex">
              <Timeline id="timeline" className="px-1 " position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent
                    className="pt-8 pb-32 font-typewritter"
                    color="text.secondary"
                  >
                    <p className="text-white">14th Apr 2023, 12:00pm</p>
                    <p className="text-white">10th Floor, BE Block</p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ width: "auto", padding: "0px" }}>
                      <Avatar className="w-14 h-14 sm:w-32 sm:h-32">
                        <Image alt="Runaway Runway poster" src={event3}></Image>
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="py-8">
                    <h4 className="text-white font-semibold font-gilroy">
                      Runaway Runway
                    </h4>
                    <p className="font-georgia text-white">
                      Runway from buying expensive material in the name of
                      fashion run-towards sustainable and recyclable eco-chic
                      designs
                    </p>

                    <div>
                      <div className="relative">
                        <button
                          className="bg-pink border border-black font-gilroy font-bolder relative z-40 x-6 my-1 font-merriweather rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                          type="submit"
                          onClick={() => {
                            window.location.href =
                              "https://www.instagram.com/p/Cq0K-B-JLoC/?utm_source=ig_web_copy_link";
                          }}
                        >
                          View More
                        </button>
                        <button className="bg-yellow border border-black absolute top-1 left-1 z-30 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                        <button className="bg-blue border border-black absolute top-2 left-2 z-20 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    className="pt-8 pb-32 font-typewriter"
                    color="text.secondary"
                  >
                    <p className="text-white font-georgia">
                      8th Feb 2023, 2:45PM
                    </p>
                    <p className="text-white font-georgia">
                      Seminar Hall 3,BE Block
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ width: "auto", padding: "0px" }}>
                      <Avatar className="w-14 h-14 sm:w-32 sm:h-32">
                        <Image
                          alt="Rethink Retrospect Reflect poster"
                          src={event1}
                        ></Image>
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="py-8">
                    <h4 className="text-md font-gilroy text-white font-semibold">
                      Rethink Retrospect Reflect
                    </h4>
                    <p className="font-georgia text-white">
                      Watch the screenplay, write a report on it and stand a
                      chance to win Ant Man tickets!
                    </p>
                    <div>
                      <div className="relative">
                        <button
                          className="bg-pink border border-black relative z-40 x-6 my-1 font-gilroy font-bolder rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                          type="submit"
                          onClick={() => {
                            window.location.href =
                              "https://www.instagram.com/p/CoSP_WVSf2k/?utm_source=ig_web_copy_link";
                          }}
                        >
                          View More
                        </button>
                        <button className="bg-yellow border border-black absolute top-1 -right-1 z-30 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                        <button className="bg-blue border border-black absolute top-2 -right-2 z-20 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    className="pt-8 pb-32 font-typewriter"
                    color="text.secondary"
                  >
                    <p className="text-white font-georgia">
                      12th Apr 2023, 2:45PM
                    </p>
                    <p className="text-white font-georgia">MRD Auditorium</p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ width: "auto", padding: "0px" }}>
                      <Avatar className="w-14 h-14 sm:w-32 sm:h-32">
                        <Image
                          alt="Minerva Orientation poster"
                          src={event2}
                        ></Image>
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="py-8">
                    <h4 className="text-md font-semibold font-gilroy text-white">
                      Minerva Orientation
                    </h4>
                    <p className="font-georgia text-white">
                      Come learn more about what our club has in store for all
                      of you this year
                    </p>
                    <div>
                      <div className="relative">
                        <button
                          className="bg-pink border border-black font-gilroy font-bolder relative z-40 x-6 my-1 font-merriweather rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                          type="submit"
                          onClick={() => {
                            window.location.href =
                              "https://www.instagram.com/p/Cq0K-B-JLoC/?utm_source=ig_web_copy_link";
                          }}
                        >
                          View More
                        </button>
                        <button className="bg-yellow border border-black absolute top-1 left-1 z-30 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                        <button className="bg-blue border border-black absolute top-2 left-2 z-20 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div className="flex flex-col w-full items-center md:hidden">
              <UpdatedAnimatedTimelineItem
                title={"Runaway Runway"}
                time={"14th Apr 2023, 12:00pm"}
                venue={"10th Floor, BE Block"}
                desc={`Runway from buying expensive material in the name of
                        fashion run-towards sustainable and recyclable eco-chic
                        designs`}
                img={event3}
              ></UpdatedAnimatedTimelineItem>
              <div className="h-8 w-1 my-4 bg-yellow rounded-sm"></div>
              <UpdatedAnimatedTimelineItem
                title={"Rethink Retrospect Reflect"}
                time={"8th Feb 2023, 2:45PM"}
                venue={"Seminar Hall 3,BE Block"}
                desc={`Watch the screenplay, write a report on it and stand a
                        chance to win Ant Man tickets!`}
                img={event1}
              ></UpdatedAnimatedTimelineItem>
              <div className="h-8 w-1 my-4 bg-yellow rounded-sm"></div>
              <UpdatedAnimatedTimelineItem
                title={"Minerva Orientation"}
                time={"12th Apr 2023, 2:45PM"}
                venue={"MRD Auditorium"}
                desc={`Come learn more about what our club has in store for all
                        of you this year`}
                img={event2}
              ></UpdatedAnimatedTimelineItem>
            </div>
          </motion.div>
          <div id="featuringPES" className="flex">
            <UpdatedHeading>Featuring PESU</UpdatedHeading>
          </div>
          <Carousel
            draggable={isSmallScreen ? true : false}
            responsive={responsive}
            showDots={isSmallScreen ? true : false}
            customLeftArrow={isSmallScreen ? <></> : <CustomLeftArrow />} // Hide the left arrow button
            customRightArrow={isSmallScreen ? <></> : <CustomRightArrow />} // Hide the right arrow button
            className="pb-4 pt-3 "
          >
            <div className="md:flex md:flex-row  flex-col mx-10 sm:mx-5 md:mx-10 ">
              <div className="basis-3/5 relative md:hidden">
                <img
                  src="https://cie.pes.edu/wp-content/uploads/2023/04/CIE-Timeline-1-1.jpg"
                  className="w-full mt-3 mb-19 relative z-10 -translate-x-1 aspect-video"
                ></img>
                <div className="absolute w-full  md:mt-8 mt-1  md:mb-24 mb-1 z-1  bg-blue top-2 md:top-4 left-1 md:left-4 aspect-video"></div>
                <div className="absolute w-full md:mt-8 mt-1 md:mb-24 mb-1 z-0 bg-white dark:bg-black top-1 md:top-3 left-0.5 md:left-3 aspect-video"></div>
              </div>
              <div className="basis-2/5 pt-7 pb-3 -translate-x-3">
                <div className="pb-0.1 pt-0.5">
                  <h5
                    /* style={{ width:"50%" }}*/
                    className="absolute sm:relative z-20 sm:w-50% w-100% md:text-4xl text-[16px] sm:pt-3  sm:pb-1  sm:mr-5 ml-3   text-[#428897] dark:text-blue font-han font-bold"
                  >
                    {"The stepping stone to entrepreneurship".toUpperCase()}
                  </h5>
                </div>
                <p className="  mx-3 mt-20  text-14px sm:mt-5  md:text-20px font-georgia text-#1D1D1D  dark:text-white">
                  Centre for Innovation and Entrepreneurship
                  <a
                    className="underline"
                    onClick={() => {
                      window.location.href = "https://cie.pes.edu";
                    }}
                  >
                    (CIE)
                  </a>
                  is founded on the vision to impart innovation and
                  entrepreneurial skills to students and aims to enablestudents
                  and startups to transform ideas into market-ready products,
                  while keeping sustainability in mind.
                  <sup className="text-sm sm:text-sm">
                    [1](https://cie.pes.edu/about-us/)
                  </sup>
                  It combines technology, innovation and entrepreneurship,
                  leading to innovation in STEM with an entrepreneurial focus.
                  CIE is directed by Prof.CIE is also a part of nine industry
                  programs. The Centre for Innovation and Entrepreneurship
                  provides an eye-opening opportunity for students to learn
                  about the world of entrepreneurship and see their ideas
                  fruition to life.
                </p>
              </div>
              <div className="basis-3/5 relative -translate-x-3 hidden md:block">
                <img
                  src="https://cie.pes.edu/wp-content/uploads/2023/04/CIE-Timeline-1-1.jpg"
                  className="w-full mt-8 mb-24 relative z-10 aspect-video"
                ></img>
                <div className="absolute w-full  mt-8 mb-24 z-0 bg-blue top-4 left-4 aspect-video"></div>
                <div className="absolute w-full mt-8 mb-24 z-0 bg-white dark:bg-black top-3 left-3 aspect-video"></div>
              </div>
            </div>

            <div className="md:flex md:flex-row  flex-col mx-10 sm:mx-5 md:mx-10">
              <div className="basis-3/5 relative md:hidden">
                <img
                  alt="Centre for Innovation and Entrepreneurship"
                  src="data:image/png;base64,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"
                  className="w-full mt-3  mb-19 relative z-10 -translate-x-1 aspect-video"
                ></img>
                <div className="absolute w-full  md:mt-8 mt-1  md:mb-24 mb-1 z-0 bg-blue top-2 md:top-4 left-1 md:left-4 aspect-video"></div>
                <div className="absolute w-full md:mt-8 mt-1 md:mb-24 mb-1 z-0 bg-white dark:bg-black top-1 md:top-3 left-0.5 md:left-3 aspect-video"></div>
              </div>
              <div className="basis-2/5 pt-7 pb-5 -translate-x-3 md:translate-x-1">
                <div className="sm:pb-10 pt-0.5 pb-10">
                  <h5
                    /* style={{ width:"50%" }}*/
                    className="absolute md:relative z-20 md:w-50% w-100% md:text-4xl text-[16px] md:pt-3  md:pb-1  md:mr-5 ml-3   text-[#428897] dark:text-blue font-han font-bold"
                  >
                    {"Rising Innovators of PESU".toUpperCase()}
                  </h5>
                </div>
                <p className="  mx-3 mt-18 pt-10 pb-3 text-14px md:-mt-5  md:text-20px font-georgia text-#1D1D1D  dark:text-white">
                  PESU Venture Labs
                  <a
                    className="underline"
                    onClick={() => {
                      window.location.href = "https://pesuventurelabs.com/";
                    }}
                  >
                    (PVL)
                  </a>
                  , a venture studio launched under the partnership of PESU and
                  CoCreate ventures, is a fund equipped with execution and
                  acceleration capabilities. It aims to find solutions to
                  questions like - &lsquo;Can entrepreneurship fund research and
                  scholarships?&rsquo; and &lsquo;Can we create a funnel of
                  fundable deep tech companies that are category creators for
                  the existing VC ecosystem?&rsquo;
                  <sup>[1](https://pesuventurelabs.com/about)</sup>. PVL
                  provides resources, mentoring, and, funding and support to
                  individuals looking for guidance.
                  <sup>
                    [2](https://www.pesuventurelabs.com/opportunities)
                  </sup>{" "}
                  PESU Venture Labs provides students with an riveting
                  opportunity to innovate freely and feel pride in having built
                  their ideas from ground up.
                </p>
              </div>
              <div className="basis-3/5 relative translate-x-1 hidden md:block">
                <img
                  alt="PESU Venture Labs"
                  src="data:image/png;base64,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"
                  className="w-full mt-8 mb-24 relative z-10 aspect-video"
                ></img>
                <div className="absolute w-full  mt-8 mb-24 z-0 bg-blue top-4 left-4 aspect-video"></div>
                <div className="absolute w-full mt-8 mb-24 z-0 bg-white dark:bg-black top-3 left-3 aspect-video"></div>
              </div>
            </div>
          </Carousel>
          <div className="pt-16">
            <Contact />
          </div>

          <Footer />
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Transition appear show={openDialogue} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel
                      className={`w-full max-w-4xl rounded-none ${
                        dark ? "bg-greyBlack" : "bg-backgroundModal"
                      } transform overflow-hidden px-5 py-6 md:px-10 md:py-10 text-left align-middle shadow-xl transition-all`}
                    >
                      <div className="grid grid-cols-2 items-start">
                        <div className="relative">
                          <h2
                            style={{
                              textShadow:
                                "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
                            }}
                            className="relative sm:text-xl md:text-4xl text-sm font-han  z-30 outline-2 text-white"
                          >
                            {"Join our Newsletter".toUpperCase()}
                          </h2>
                          <h2
                            style={{
                              position: "absolute",
                              zIndex: "5",
                              color: "#EFFF00",
                              textShadow:
                                "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
                            }}
                            className="sm:text-xl md:text-4xl text-sm font-han z-20 -top-[4px] -left-[4px] sm:-top-[6px] sm:-left-[6px]"
                          >
                            {"Join our Newsletter".toUpperCase()}
                          </h2>
                          <h2
                            style={{
                              color: "#DE99FF",
                              position: "absolute",
                              zIndex: "10",
                              textStroke: "1px black",
                              textShadow:
                                "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
                            }}
                            className="sm:text-xl md:text-4xl text-sm font-han z-10 -top-[2px] -left-[2px]  sm:-top-[3px] sm:-left-[3px]"
                          >
                            {"Join our Newsletter".toUpperCase()}
                          </h2>
                        </div>
                        <div className="flex flex-col md:pt-4 items-end relative">
                          <div
                            style={{ color: dark ? "black" : "white" }}
                            onClick={handleClose}
                            className={`absolute z-10 top-1 md:top-5 -right-1 border   border-otherblue p-1   ${
                              dark ? "bg-greyBlack" : "bg-backgroundModal"
                            }`}
                          >
                            <GrClose
                              style={{
                                background: dark ? "black" : "white",
                                fill: dark ? "black" : "white",
                              }}
                              className={`md:text-xl text-sm  ${
                                dark ? "text-white" : "text-greyBlack"
                              }`}
                            />
                          </div>
                          <div
                            style={{ color: dark ? "black" : "white" }}
                            onClick={handleClose}
                            className={`border z-20 relative border-softViolet p-1   ${
                              dark ? "bg-greyBlack" : "bg-backgroundModal"
                            }`}
                          >
                            <IoMdClose
                              className={`md:text-xl text-sm ${
                                dark ? "text-white" : "text-black"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className=" flex items-center h-40  md:h-auto justify-center ">
                          <Image
                            alt="Minerva Newsletter Logo"
                            className="w-32 h-32 md:w-64 md:h-64"
                            src={dark ? event7 : event6}
                            priority={true}
                          ></Image>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-col items-start md:items-end relative">
                            <p
                              className={`text-black md:mt-8 font-questrial font-semibold text-[10px] md:text-lg ${
                                dark ? "text-white" : "text-black"
                              }`}
                            >
                              <span className="text-londonYellow dark:text-yellow">
                                Subscribe
                              </span>{" "}
                              to our newsletter
                            </p>
                            <p
                              className={`text-black pb-4 font-questrial font-semibold text-[10px] md:text-lg dark:text-white  ${
                                dark ? "text-white" : "text-black"
                              }`}
                            >
                              for the latest articles and{" "}
                              <span className="text-otherblue dark:text-blue">
                                exclusive content
                              </span>
                            </p>

                            <TextField
                              InputProps={{
                                style: {
                                  borderRadius: "0",
                                  color: "black",
                                  background: "white",
                                  border: "black",
                                  height: isSmallScreen ? "32px" : "auto",
                                  fontSize: isSmallScreen ? "10px" : "18px",
                                },
                              }}
                              color="secondary"
                              placeholder="Name"
                              className="font-georgia w-full  text-black border border-black placeholder:text-gray-500  outline-none focus:ring-black focus:border-black focus:ring-1 drop-shadow-[4px_4px_0px_rgba(222,153,255,1)] md:drop-shadow-[8px_8px_0px_rgba(222,153,255,1)]"
                            ></TextField>

                            <TextField
                              InputProps={{
                                style: {
                                  borderRadius: "0",
                                  color: "black",
                                  background: "white",
                                  height: isSmallScreen ? "32px" : "auto",
                                  fontSize: isSmallScreen ? "10px" : "18px",
                                  marginTop: isSmallScreen ? "12px" : "16px",
                                },
                              }}
                              placeholder="Email"
                              className="font-georgia w-full text-md md:text-md mt-6 py-3 text-black border border-black placeholder:text-gray-500  outline-none focus:ring-black focus:border-black focus:ring-1 drop-shadow-[4px_4px_0px_rgba(159,225,240,1)] md:drop-shadow-[8px_8px_0px_rgba(159,225,240,1)]"
                            ></TextField>
                          </div>
                          <div className="flex justify-center md:justify-start">
                            <div className="mt-6 relative">
                              <button className="bg-yellow text-xs md:text-lg z-10 px-3 md:px-6 top-2 left-2 rounded-lg  py-2 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText absolute">
                                Subscribe
                              </button>
                              <button className="bg-blue z-30 text-xs md:text-lg px-3 md:px-6 top-1 left-1 rounded-lg  py-2 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText absolute">
                                Subscribe
                              </button>
                              <button
                                className="bg-pink px-3 md:px-6 text-xs md:text-lg z-40 rounded-lg relative  py-2 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText"
                                onClick={async () => {
                                  try {
                                    const response = await axios.post(
                                      "/api/contactUs",
                                      data
                                    );
                                    console.log(response);
                                    if ((response.data = "Finished")) {
                                      alert("Thank you for your response!");
                                    }
                                  } catch (e) {
                                    alert("Failed to send.");
                                  }
                                  setData({
                                    Name: "",
                                    Email: "",
                                    Subject: "",
                                    Message: "",
                                  });
                                }}
                              >
                                Subscribe
                              </button>
                              <button></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
}
