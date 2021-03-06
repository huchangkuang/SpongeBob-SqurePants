const string = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::before {
    box-sizing: border-box;
}

*::after {
    box-sizing: border-box;
}

.face {
    height: 55vh;
    background: #fddb21;
    position: relative;
     overflow: hidden;
}

.eye {
    position: absolute;
    top: 100px;
    border: 5px solid black;
    background: #ffffff;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: blink forwards infinite 6s ease-in-out;
}
.eye.left {
    right: 50%;
}
.eye.right{
    left: 50%;
}

.eye::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 60px;
    border: 4px solid black;
    width: 55px;
    height: 55px;
    border-radius: 50px;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 153, 255, 1) 35%, rgba(0, 153, 255, 1) 100%);
}

.eyelash{
    position: absolute;
    top: 50px;
    left: 50%;
    width: 15px;
    height: 50px;
    background: black;
}
#e1{
    transform: translate(-155px,15px) rotate(-45deg) ;
    transform-origin: bottom;
}
#e2{
    transform: translateX(-105px);
}
#e3{
    transform: translate(-65px,15px) rotate(45deg) ;
    transform-origin: bottom;
}
#e4{
    transform: translate(45px,15px) rotate(-45deg) ;
    transform-origin: bottom;
}
#e5{
    transform: translateX(95px);
}
#e6{
    transform: translate(140px,15px) rotate(45deg) ;
    transform-origin: bottom;
}
#nose{
    position: absolute;
    border: 5px solid black;
    width: 75px;
    height: 120px;
    top: 210px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #fddb21;
}
#nose::before{
    position: absolute;
    content: "";
    width: 60px;
    height: 35px;
    background: #fddb21;
    bottom: -5px;
    left: 2px;
}
.cheek{
    position: absolute;
    border: 5px solid #d73c12;
    left: 50%;
    top: 250px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #fddb21;
}
.cheek::before{
    content: "";
    position: absolute;
    width: 70px;
    height: 30px;
    bottom: -5px;
    left: 5px;
    background: #fddb21;
}
.cheek.left{
    transform: translateX(-200px);
}
.cheek.right{
    transform: translateX(120px);
}
.bubble{
    background: #d73c12;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
}
.b1{
    transform: translate(10px,25px);
}
.b2{
    transform: translate(30px,10px);
}
.b3{
    transform: translate(55px,20px);
}
.b3::before{
    content: "";
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    transform: translate(-5px,6px) rotate(45deg);
    background: #fddb21;
}
#mouth{
    width: 360px;
    height: 60px;
    position: relative;
    left: 50%;
    top: 330px;
    transform: translateX(-50%);
    overflow: hidden;
    display: flex;
    justify-content: center;
}

#mouth2{
    border: 5px solid black;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    position: absolute;
    background: #fddb21;
    bottom: 0;
}
.corner{
    border: 5px solid ;
    border-color: transparent black transparent transparent;
    height: 30px;
    position: absolute;
    top: 330px;
    left: 50%;
}
#c1{
    transform: translateX(-186px) rotate(30deg);
}
#c2{
    transform: translateX(174px) rotate(-30deg);
}
.tooth{
    border: 5px solid black;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 7px;
    position: absolute;
    left: 50%;
    top: 385px;
}
#t1{
    transform: translateX(-60px) rotate(8deg);
}
#t2{
    transform: translateX(10px) rotate(-5deg);
}
.hole{
    border-radius: 50%;
    background: #aeac0c;
    position: absolute;
    left: 50%;
}
#h1{
    width: 80px;
    height: 80px;
    transform: translate(-290px,40px);
}
#h2{
    width: 40px;
    height: 40px;
    transform: translate(-270px,180px);
}
#h3{
    width: 30px;
    height: 30px;
    transform: translate(-270px,340px);
}
#h4{
    width: 30px;
    height: 30px;
    transform: translate(270px,60px);
}
#h5{
    width: 80px;
    height: 80px;
    transform: translate(200px,440px);
}
#h6{
    width: 80px;
    height: 80px;
    transform: translate(-240px,460px);
}
.jaw-container{
    position: absolute;
    width: 300px;
    height: 50px;
    left: 50%;
    top: 470px;
    transform: translateX(-50%);
    overflow: hidden;
}
#j1{
    border: 4px solid #d73c12;
    width:110px;
    height:110px;
    border-radius: 50%;
    left: 50%;
    bottom: 40px;
    position: absolute;
    transform: translateX(-90px)
}
#j2{
    border: 4px solid #d73c12;
    width:80px;
    height:80px;
    border-radius: 50%;
    left: 50%;
    bottom: 30px;
    position: absolute;
    transform: translateX(-15px)
}
@keyframes blink{
    0%, 2%, 60%, 62%, 100% {
        transform: scale(1,1);
    }
    1%, 61% {
        transform: scale(1.5,0.1);
    }
}`
export default string