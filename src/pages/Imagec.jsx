import axios from 'axios'
import { useEffect, useState } from 'react';
function Hel()
{
    return (
            <>
                <div className="container mx-auto">
                    <GetdataImage />
                </div>
            </>
        )
    }
    
    function GetdataImage()
    {
        const [datajs , setDatajs] = useState([])
        useEffect(()=>{
                var config = {
                    method: 'get',
                    url: 'https://pixabay.com/api/?key=32604632-21674ec802d79d4463bccb11b&per_page=200&image_type=photo',
                    headers: { 
                    'Cookie': '__cf_bm=AYn..80ulE9BLke2OgPi3J6glrO_aliprj1wc4aSzfg-1672843628-0-ATusjVOagetrSvaTElNT9ISCiTEfXRNWHH+0w7WqYn/QhOCkBla0Ofu0wtuFjysNDionavnb1lfZLhzZo3M/8RA=; anonymous_user_id=None; csrftoken=eoIr10cBvxPXMYelAd1kMIjuiufnHWM7zkmfIdzO7WEosz2YcQUAyGMKjVKe77Tv'
                    }
                };
                
                axios(config)
                .then(function (response) {
                    setDatajs(response.data.hits);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },[])
            return (
    
            <div className="grid-cols-3 p-5 space-y-2  lg:space-y-0 lg:grid lg:gap-3 " >
     
                {datajs.map((a,index)=>(
                    <Fetchdata data={a} index={index}/>
                ))}    
                </div>
    
            )
    
    }
    function Fetchdata(props)
    {
        const [rendom,seRand] = useState(Math.floor(Math.random())*1000)
        var data = props.data;
        var index = props.index;
        return (
            <div className="w-full h-full rounded-lg relative" id={index}>
                <a href={data.largeImageURL} download={data.type+data.id+".jpg"}  className='curser-pointer bottom-2 left-2  p-4 absolute w-20 h-20'>
                    <div class="flex items-center justify-center flex-1 h-full p-2 bg-gray-900/20 border border-2 hover:bg-gray-900/50 hover:text-black text-white shadow w-full rounded-full">
                        <div class="relative">
                        <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                    </div>
                </a>
                <img src={data.webformatURL} className="block object-cover object-center w-full h-full rounded-lg"
                alt="image" />
        </div>
        )
    }
export default Hel;