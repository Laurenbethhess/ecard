import React, { } from "react";
import { Link } from "react-router-dom";


function Home() {

    return (
        <div className="home_background">
            <div className="flex justify-center">
                <h1 className="py-8 text-4xl font-mono font-bold italic m-6">Send love to your loved ones</h1>
            </div>
            <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full h-96 overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                    <img
                        src="https://ak.imgag.com/imgag/product/siteassets/general/3497315/image.jpg"
                        className="block w-full"
                        alt="mcu1"
                    />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="py-8 text-1xl font-mono m-4">Get started here</p>
            </div>

            <div className="flex justify-center">
                <Link to="/new_card"><button className="bg-red-100 border-solid border-2 border-red-600 rounded-lg font-semibold px-6 py-2">Create</button></Link>
            </div>
            <br/>
        </div>    
    )

}

export default Home