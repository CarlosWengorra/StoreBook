import React from "react";
import { Link } from "react-router-dom";
import list from "../list.json";
import Cards from "./Cards";

function Course() {
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
        <div className="mt-24 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <Link to="/">
          <button className=" text-center mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Course;
