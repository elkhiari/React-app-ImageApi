import { useState } from "react";


function Navigatiob () 
{

    const [Btn ,setBtn] = useState(0);
    const [clasd , setClasd] = useState('w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden') 
    const changeBtn = () =>{
        (Btn == 0?setBtn(1):setBtn(0))
        (Btn == 0 ? setClasd('w-full block flex-grow lg:flex lg:items-center lg:w-auto') :  setClasd('w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden') )
        
    }
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 shadow-md">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54"  xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="eecf0ddccf"><path d="M 104 70 L 337.5 70 L 337.5 305 L 104 305 Z M 104 70 " clip-rule="nonzero"/></clipPath><clipPath id="aabd8c8327"><path d="M 37.5 66.75 L 279 66.75 L 279 308.25 L 37.5 308.25 Z M 37.5 66.75 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#eecf0ddccf)"><path fill="#ffde59" d="M 337.5 187.5 C 337.5 251.875 285.257812 304.117188 220.882812 304.117188 C 156.507812 304.117188 104.265625 251.875 104.265625 187.5 C 104.265625 123.125 156.507812 70.882812 220.882812 70.882812 C 285.257812 70.882812 337.5 123.125 337.5 187.5 Z M 337.5 187.5 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#aabd8c8327)"><path fill="#ffffff" d="M 158.242188 308.242188 C 91.640625 308.242188 37.5 254.101562 37.5 187.5 C 37.5 120.898438 91.640625 66.757812 158.242188 66.757812 C 224.84375 66.757812 278.984375 120.898438 278.984375 187.5 C 278.984375 254.101562 224.84375 308.242188 158.242188 308.242188 Z M 158.242188 75.011719 C 96.179688 75.011719 45.753906 125.4375 45.753906 187.5 C 45.753906 249.5625 96.179688 299.988281 158.242188 299.988281 C 220.304688 299.988281 270.734375 249.5625 270.734375 187.5 C 270.734375 125.4375 220.222656 75.011719 158.242188 75.011719 Z M 158.242188 75.011719 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                <span className="font-semibold text-xl tracking-tight">Eclipse</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={changeBtn} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={clasd}>
                <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="/image" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Image
                    </a>
                    <a href="/video" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Video
                    </a>
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Blog
                    </a>
                </div>
                <div>
                    <a href="https://elkhiarii.me"  target="_blank" rel="noreferrer" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">About me</a>
                </div>
            </div>
        </nav>
    )
}

export default Navigatiob;
