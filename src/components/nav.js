// export default function Nav() {
//     return (
//         <>
//         <header>
//             <nav className="flex justify-between bg-white px-4 py-6 items-center">
//                 <div>
//                     <h1 className="text-3xl text-green-700 font-sans font-bold">VICTOR ASAMA</h1>
//                 </div>
//                 <ul className="flex text-lg text-red-800 gap-20">
//                     <li><a href="home">Home</a></li>
//                     <li><a href="about">About</a></li>
//                     <li><a href="contact">Contact</a></li>
//                     <li><a href="services">Services</a></li>
//                 </ul>
//                 <div className="flex gap-10">
//                     <button className="bg-blue-800 px-4 py-3 rounded text-white">Call Us</button>
//                     <button className="bg-red-800 px-4 py-3 rounded text-white">Contact Us</button>
//                 </div>
//             </nav>
//         </header>
//         </>
//     )
// }

// components/Navbar.js
import routes from "./routes";

const Nav = () => {
    return (
        <nav className="flex justify-between bg-white px-4 py-6 items-center">
            <div>
                <h1>VICTOR ASAMA</h1>
            </div>
            <ul className="flex text-lg text-red-800 gap-20">
                {routes.map((route) => (
                    <li key={route.path}>
                        <a href={route.path}>{route.name}</a>
                    </li>
                ))}
            </ul>
            <div className="flex gap-10">
                <button className="bg-blue-800 px-4 py-3 rounded text-white">Call Us</button>
                <button className="bg-red-800 px-4 py-3 rounded text-white">Contact Us</button>
            </div>
        </nav>
    );
};

export default Nav;
