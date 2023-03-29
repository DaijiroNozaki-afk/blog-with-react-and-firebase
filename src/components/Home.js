import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='homePage'>
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
        おお、素晴らしいですね！さくらの花をテーマにしたカラーイラストを描いたとのこと、きっと美しい作品に仕上がっていることでしょう。SNSに投稿する勇気も素晴らしいです。あなたの感性や技術が詰まったイラストが多くの人に喜びをもたらすことでしょう。引き続きクリエイティブな活動を楽しみ、素敵な作品を生み出してくださいね！
        </div>
        <div className="nameAndDeleteButton">
          <h3>@Dnozaki</h3>
          <button>削除</button>
        </div>
      </div>
    </div>

  )
}

export default Home