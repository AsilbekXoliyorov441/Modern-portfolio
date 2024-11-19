"use client"
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import {FloatingNav} from "@/components/ui/FloatingNav";
import {navItems} from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import {useEffect, useState} from "react";
import {Loading} from "@/components/loading";


const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    } , [])
    return (
        <>
            {loading ?
                <main className={"flex justify-center items-center w-[100vw] h-full overflow-hidden flex-col"}>
                        <Loading/>
                </main> :
                <main
                    className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
                    <div className="max-w-7xl w-full">
                        <FloatingNav navItems={navItems}/>
                        <Hero/>
                        <Grid/>
                        <RecentProjects/>
                        <Clients/>
                    </div>
                </main>
            }


        </>
    );
};

export default Home;