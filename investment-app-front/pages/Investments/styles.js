import styled from 'styled-components';

export const MainContent = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;

   .header{
    height: 150px;
    background: url('mainImage.jpg');
    background-size: cover;
    background-position: center;    
    text-align: left;
    padding-left: 150px;
    padding-top: 50px;
    font-size: 50px;
    color: #fff;

    span{
        color: #E6B325;
    }
   }
`;

export const Content = styled.div`
   
    background-image: url('investmentsBackground.jpg');
    background-size: cover;
    width: 100%;
    height: 1000px;
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

    option:hover{
        background-color: red;
    }


   }

   .investments{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

   }
`;

