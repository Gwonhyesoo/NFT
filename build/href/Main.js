import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import axios from 'axios';

function Main() {
  
  const [tokenInfo, setTokenInfo] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      const tokenURI = await nft.tokenURI(0);
      const { data } = await axios.get(tokenURI);
      setTokenInfo(data.result);
    };
    init();
  }, []);

  if(typeof tokenInfo === 'undefined') {
    return '로딩중...';
  }
 
  return (
    <div className='container'>
        
    <div class="dropdown">
      <button class="dropbtn">문서</button>
      <div class="dropdown-content">
        <a href="">문서등록</a>
        <a href="">문서 조회</a>
      </div>
      </div>
      &nbsp;

      <div class="dropdown3">
    <button class="dropbtn">로그인</button>
      <div class="dropdown-content">
        <a href="href\login.html">로그인</a>
        <a href="">로그아웃</a>
      </div>
      </div>
      &nbsp;

      <div class="dropdown4">
      <button class="dropbtn">마이페이지</button>
      <div class="dropdown-content">
        <a href="#">문서 등록 이력(공무원)</a>
        <a href="#">내 정보 관리/로그아웃</a>
      </div>
      </div>
      &nbsp;

    <div class="dropdown5">
      <button class="dropbtn">회원가입</button>
      <div class="dropdown-content">
        <a href="href\signup.html">회원가입</a>
      </div>
      </div>
      &nbsp;
      
      <div class="dropdown7">
      <button class="dropbtn">사용자 관리(Admin)</button>
      <div class="dropdown-content">
        <a href="#">회원가입 승인/거부</a>
        <a href="#">회원관리</a>
      </div>
      </div>
      &nbsp;

      <button class="home"><a href="#">홈</a></button>


       <br>
       </br>
       <br>
       </br>
       <br>
       </br>
       <br>
       </br>
       <br></br>
       <br>
       </br>


  <div className='row'>
    <div className='col-sm-12'>
      <h1 className='text-center'>{tokenInfo.name}</h1>
      <div className="jumbotron">
        <p className="lead text-center">{tokenInfo.description}</p>
        <img src={tokenInfo.image} className="img-fluid" />
      </div>
    </div>
  </div>


</div>
  );
}


export default Main;