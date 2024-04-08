import Menu from "../components/Menu";
import './Home.css'
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";

function Home(){

    const list = [
        {id: 1, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '생막창과 삼겹살이 맛있는 #불막열삼합정점 #합정막창 #상수막창', userId : "마블리", cDate : "2일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 2, boardImg : "https://roout.co.kr/m/p/u/gvGpTB9/f/i/7mxAM7h6jnD.jpg", content: '두 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201912/15/07712b9e-e451-49c7-a65c-fb94b6dcda0b.jpg"},
        {id: 3, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '세 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 4, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '네 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 5, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '다섯 번째 게시물입니다.', userId : "마동석", cDate : "4일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 6, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '여섯 번째 게시물입니다.', userId : "마동석", cDate : "5일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 7, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '일곱 번째 게시물입니다.', userId : "마동석", cDate : "16일",profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
    ];

    const iconList = [
        {like: <FaRegHeart />, cmt : <FaRegComment />, dm: <HiOutlinePaperAirplane />}
    ];

    const like = [
        {likeCnt: 56},
        {likeCnt: 70},
        {likeCnt: 180},
        {likeCnt: 15},
        {likeCnt: 15},
        {likeCnt: 33},
        {likeCnt: 12},
    ]

    return(
        <div>
            <div className="row">
                {list.map((item, index) => (
                    <div className="col-sm-12 col-md-12 col-lg-12" key={item.id}>
                        <Menu
                            profileImg={item.profileImg} 
                            userId={item.userId}
                            boardImg={item.boardImg} 
                            content={item.content}
                            cDate={item.cDate}
                            title={item.title}
                            icons={iconList[0]}
                            likeCnt={like[index].likeCnt} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;