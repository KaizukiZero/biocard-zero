import style from '@/styles/biocard.module.css'
import Image from 'next/image'
import Swal from 'sweetalert2'

import ic_github from "@/images/icons/gh.png"
import ic_linken from "@/images/icons/lin.png"
import ic_facebook from "@/images/icons/fb.png"
import ic_twitter from "@/images/icons/tw.png"
import ic_instagram from "@/images/icons/ig.png"
import { useState } from 'react';
import axios from 'axios';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const BioCard = () => {
    const [mydata,setmydata] = useState()

    async function FetchData() {

        const {value:myurl} = await Swal.fire({
            title: "Enter Your Usename",
            text: "Username Github not email ",
            input: "text",
        })

        axios.get("https://api.github.com/users/"+myurl)
        .then((res)=>{
            const data = res.data;

            if(data.bio == null){
                data.bio = "Bio not setting"
            }
            if(data.location == null){
                data.location = timezone
            }
            const profile = 
            {
                "name": data.name,
                "bio": data.bio,
                "username": data.login,
                "avatar": data.avatar_url,
                "location": data.location,
            }
            setmydata(profile)
            // return false
        }).catch((err)=>{
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "You Can't Fetch Data"
            }).then((result) => {
                console.error(err)
                location.reload()
                return false
            })
        })
    }

       
    if(!mydata){
        FetchData()
        return false
    }else{
        console.log('pass')
    }

    // return false

    return (
    <div className={style.biocard + ' ' + style.centered}>
        <div className={style.card}>
            <div className={style.img_profile}>
                <img src={mydata.avatar}></img>
            </div>
            <div className={style.profile_card}>
                <div className={style.profile_name}>{mydata.name}</div>
                <div className={style.profile_position}>{mydata.bio + ' / ' + mydata.location }</div>
                <div className={style.profile_social}>
                    <a href={'https://github.com/'+mydata.username}>
                    <Image className={style.sc_icon} src={ic_github} alt="ic"></Image>
                    </a>
                    <a href='https://www.linkedin.com/'>
                    <Image className={style.sc_icon} src={ic_linken} alt="ic"></Image>
                    </a>
                    <a href={'https://facebook.com/'+mydata.username}>
                    <Image className={style.sc_icon} src={ic_facebook} alt="ic"></Image>
                    </a>
                    <a href='https://www.twitter.com/'>
                    <Image className={style.sc_icon} src={ic_twitter} alt="ic"></Image>
                    </a>
                    <a href='https://www.instagram.com/'>
                    <Image className={style.sc_icon} src={ic_instagram} alt="ic"></Image>
                    </a>
                </div>
            </div>
        </div>
        <div className={style.bio}>
            <p className='text-bio'>
            Do anim do velit culpa non laborum ex qui tempor nostrud magna. Laborum anim excepteur eu reprehenderit tempor. Nostrud et commodo anim do amet ut adipisicing irure cillum culpa officia adipisicing nostrud. Cupidatat enim est duis nisi laboris tempor culpa qui commodo reprehenderit irure.

            Fugiat eu dolor irure exercitation nisi velit excepteur non fugiat duis. Fugiat veniam occaecat excepteur duis minim. Enim magna laboris commodo in do adipisicing consectetur ut quis sunt. In cupidatat ipsum ea laborum. Culpa minim ex culpa eu exercitation culpa amet duis ea sint enim proident cupidatat. Ut pariatur voluptate eu velit adipisicing nostrud.
            </p>
        </div>
        <footer>
            <div>
                reference designed by Zarin Ficklin
            </div>
        </footer>
    </div>
    )
}
  
  export default BioCard
  