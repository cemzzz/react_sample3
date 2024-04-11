import Menu from "../components/Menu";
import Recommendation from "../components/Recommendation";
import React, { useState, useEffect } from 'react';
import './Home.css'
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";

function Home(){
    
    // const list = [
    //     {id: 1, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '생막창과 삼겹살이 맛있는 #불막열삼합정점 #합정막창 #상수막창', userId : "마블리", cDate : "2일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
    //     {id: 2, boardImg : "https://roout.co.kr/m/p/u/gvGpTB9/f/i/7mxAM7h6jnD.jpg", content: '두 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201912/15/07712b9e-e451-49c7-a65c-fb94b6dcda0b.jpg"},
    //     {id: 3, boardImg : "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2023%2F10%2Fhamburgerking-2023.jpg?cbr=1&q=90", content: '세 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
    //     {id: 4, boardImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JF5H6wF9Lnazsk2P4IFAVAlz6TFWTf5JhgNSauR3Zw&s", content: '네 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
    //     {id: 5, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '다섯 번째 게시물입니다.', userId : "마동석", cDate : "4일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
    //     {id: 6, boardImg : "https://image.newsis.com/2023/04/24/NISI20230424_0001249271_web.jpg", content: '여섯 번째 게시물입니다.', userId : "마동석", cDate : "5일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
    //     {id: 7, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '일곱 번째 게시물입니다.', userId : "마동석", cDate : "16일",profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
    // ];
    const iconList = [
        {like: <FaRegHeart />, cmt : <FaRegComment />, dm: <HiOutlinePaperAirplane />}
    ];
    // const like = [
    //     {likeCnt: 56},
    //     {likeCnt: 70},
    //     {likeCnt: 180},
    //     {likeCnt: 15},
    //     {likeCnt: 15},
    //     {likeCnt: 33},
    //     {likeCnt: 12},
    //     {likeCnt: 52},
    // ]

    const recommendations = [
        {id: 1, userName: "브록레스너", profileImg: "https://i.namu.wiki/i/xl7WXBmp2VQ7mQRz53DlZ_7S1O4CEA_6RERhydKMTPYsdK9oXAcvqhtijh_rHQNw1fYt7skGA4vnMOJNg40jQA.webp"},
        {id: 2, userName: "강호동", profileImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/20231002_Jang_Won-young_%28%EC%9E%A5%EC%9B%90%EC%98%81%29.jpg/800px-20231002_Jang_Won-young_%28%EC%9E%A5%EC%9B%90%EC%98%81%29.jpg"},
        {id: 3, userName: "바티스타", profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMGJ85etcZExQHwBTctMC6RMtGhABfhM8ekgEzV9drg&s"},
        {id: 4, userName: "로니콜먼", profileImg: "https://i.namu.wiki/i/wM1NIm8GSJ_N4aQZG8Yph6E3OML46jhX1W6N6cs5K_bOvKVlp6iWhPizLlKOiYOKLbUwtSvCcph6qzE2tNK7xA.webp"},
        {id: 5, userName: "최예나", profileImg: "https://i.namu.wiki/i/2xZhQPaKlDgvkrL_bkhgo4UpJswzK8Y59paeOh7GO3hcKBXTKm_lkDxBcePbMAZzT6A98h6YB0CLV1tanvz6_w.webp"},
    ];

    let [boardList, setBoardList] = useState([]);

    useEffect(() => {
        async function fetchBoardList() {
            try {
                const res = await fetch(`http://localhost:4000/snsBoardList.dox`);
                const jsonData = await res.json();
                setBoardList(jsonData);
            } catch (error) {
                console.log("에러!:", error);
            }
        }
        fetchBoardList();
    }, []);

    return(
        <div className="home-container">
            <div className="row">
                {boardList.map((item, index) => (
                    <div className="col-sm-12 col-md-12 col-lg-12" key={item.boardNo}>
                        <Menu 
                            boardNo={item.boardNo}
                            userId={item.userId}
                            profileImg={item.profileImage}
                            images={[`http://localhost:4000/${item.imageUrl}`]} 
                            content={item.content} 
                            cDate={item.cDateTime} 
                            icons={iconList[0]}
                            // likeCnt={like[index].likeCnt} 
                        />
                    </div>
                ))}   
            </div>

            <div className="recommendation-column">
                <p>회원님을 위한 추천</p>
                {recommendations.map((user) => (
                    <Recommendation key={user.id} userName={user.userName} profileImg={user.profileImg} />
                ))}
            </div>
        </div>
    )
}
export default Home;