import Menu from "../components/Menu";
import './Home.css'

function Home(){
    const userStatus = [
        {userId : "마블리", cDate : "2일", img : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"}
    ];

    const list = [
        {id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물입니다.'},
        {id: 2, title: '두 번째 게시물', content: '두 번째 게시물입니다.'},
        {id: 3, title: '세 번째 게시물', content: '세 번째 게시물입니다.'},
        {id: 4, title: '네 번째 게시물', content: '네 번째 게시물입니다.'},
        {id: 5, title: '다섯 번째 게시물', content: '다섯 번째 게시물입니다.'},
        {id: 6, title: '여섯 번째 게시물', content: '여섯 번째 게시물입니다.'},
        {id: 7, title: '일곱 번째 게시물', content: '일곱 번째 게시물입니다.'},

    ];
    return(
        <div className="container">
            <div className="row">
                {list.map(item=>(
                    <div className="col-sm-12 col-md-12 col-lg-12" key={item.id}>
                        <div className="boradImg">
                            <img src="https://img.hankyung.com/photo/202403/01.36047379.1.jpg"
                            alt="프로필 이미지" />
                        </div>
                        <div className="userInfo">
                            <strong>마블리</strong>
                            <p>2일</p>
                        </div>
                        <Menu title={item.title} content={item.content} />
                        <span>
                            <strong>마블리</strong> 
                            <p>좋아요~!</p> 
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;