import HoverVideoPlayer from 'react-hover-video-player';
import axios from 'axios'
import { useEffect, useState } from 'react';
function Hel()
{
    return (
            <>
                <div className="container mx-auto">
                    <GetdataVideo />
                </div>
            </>
        )
    }
    
    function GetdataVideo()
    {
        const [datajs , setDatajs] = useState([])
        useEffect(()=>{
                var config = {
                    method: 'get',
                    url: 'https://pixabay.com/api/videos/?key=32604632-21674ec802d79d4463bccb11b&per_page=200',
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
                <a href={data.videos.large.url} download={data.type+data.id+".jpg"}  className='curser-pointer bottom-2 z-10  left-2  p-4 absolute w-20 h-20'>
                    <div class="flex items-center justify-center flex-1 h-full p-2 bg-gray-900/20 border border-2 hover:bg-gray-900/50 hover:text-black text-white shadow w-full rounded-full">
                        <div class="relative">
                        <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                    </div>
                </a>
                <HoverVideoPlayer
                    videoSrc={data.videos.small.url}
                    loadingOverlay={
                        <div role="status" className='w-full h-full flex place-content-center place-items-center'>
                            <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                       }
                     />
                 </div>
        )
    }
export default Hel;