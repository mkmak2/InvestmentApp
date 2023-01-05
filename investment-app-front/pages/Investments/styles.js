import styled from 'styled-components';

export const MainContent = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   background: #000000; 
   background: -webkit-linear-gradient(to right, #434343, #000000);  
   background: linear-gradient(to left, #333333, #000000); 

   .header{
    min-height: 100px;
    width: 60%;
    text-align: left;
    padding-left: 150px;
    padding-top: 20px;
    font-size: 50px;
    color: #fff;
    border-bottom:  5px solid grey ;

    #back{
        display: inline-block;
        position: fixed;
        font-size: 30px;
        left: 20px;
        top: 20px;
        color: #E6B325;
    }

    #back:hover{
        cursor: pointer;
    }

    span{
        color: #E6B325;
    }
   }
`;

export const Content = styled.div`
   
    background: #000000; 
    background: -webkit-linear-gradient(to right, #434343, #000000);  
    background: linear-gradient(to left, #333333, #000000); 
    width: 100%;
    display: flex;
    padding-top: 50px;
`;

export const Filters = styled.div`
   width: 20%;
   height: 500px;
   background-color: rgba(34, 34, 34, 0.5);
   border-radius: 20px;
   margin-left: 10px;
   color: #fff;
   padding: 10px;
`;

export const Container = styled.div`
   width: 70%;
   background-color: rgba(34, 34, 34, 0.5 );
   border-radius: 20px;
   margin-left: 30px;
   padding: 10px;
   margin-bottom: 30px;

   .sort{
        width: 100%;
        height: 100px;
        border-bottom: 2px solid #E6B325;
        padding-top: 50px;
        color: #fff;

    select{
        color: #fff;
        border: 2px solid grey;
        border-radius: 5px;
        padding: 3px;
        font-family: 'Martian Mono', monospace;
    }

    option{
        color: black;
        background-color: grey;
        border: none;
    }



   }

   .investments{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

   }
`;

///HERE ARE COMPONENTS USED ONLY IN SINGLE INVESTMENT SITE

export const InvestmentContent = styled.div`
   margin-top: 50px;
   margin-bottom: 50px;
   width: 100%;
   min-height: 200px;
   padding-top: 50px;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;

   .general-info{
        width: 45vw;
        min-height: 200px;

        h2{
            color: #E6B325;
        }

        span{
            display: block;
            margin-top: 10px;
            color: grey;
        }

        p{
            color: white;
            margin-top: 50px;
            text-align: justify;
        }

       
   }

   .prices{
    width: 30vw;
    min-height: 400px;
    background-color: blue;
   }

   .chart{
    width: 80vw;
    min-height: 400px;
    background-color: blue;
    margin-top: 50px;
   }
`;

