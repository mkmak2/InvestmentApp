import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
   background-color: rgba(34, 34, 34, 0.5);
   border-radius: 20px;
   margin-left: 10px;
   color: #fff;
   padding: 10px;

   #filter-header{
    display: block;
    font-size: 28px;
    margin-bottom: 30px;
   }

   .checkboxes{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 10px;
   }

   .single-checkbox{
    margin-top: 10px;
    font-size: 12px;
    color: grey;
    display: flex;
    align-items:center;
    
    .pure-checkbox{
        -webkit-appearance: none;
        width: 10px;
        height: 10px;
        background-color: #282A3A;
        display: inline-block;
        border-radius: 1px;
        cursor: pointer;
    }

    label{
        cursor: pointer;
    }

    .pure-checkbox:checked{
        background-color: #E6B325;
    }   
}

    button{
        border: 2px solid grey;
        border-radius: 5px;
        color: grey;
        margin-top: 20px;
        margin-right: 20px;
        width: 100px;   
        height: 30px;
        font-size: 18px;
        transition: 0.2s;
    }

    button:hover{
        border: 3px solid white;
        color: white;
        cursor: pointer;
    }

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
        height: 50px;
        border-bottom: 2px solid #E6B325;
        padding-top: 10px;
        color: #fff;
        display: flex;    

        .page{
            width: 20px;
            height: 20px;
            margin-left: 5px;
            line-high: 100%;
            text-align: center;
            color: #E6B325;
        }

        .arrow{
            color: #E6B325;
        }

        .arrow:hover{
            cursor: pointer;
        }

        #right{
            margin-left: 5px;
        }

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
    width: 40vw;
    min-height: 400px;

    h2{
        color:  #E6B325;

        span{
            color: white;
        }
    }

    h3{
        color: #E6B325;
    }


    .full-prices{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        max-height: 500px;
        
        span:nth-child(2n){
            color: grey;
        }
    
        span{
            display: block;
            color: white;
        }
    }
   }

   .chart{
    width: 100%;
    min-height: 400px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #E6B325;

    .chart-box{
        width: 100%;
        min-height: 500px;
        display: flex;
        justify-content: space-around;
    }

    .all-charts{
        width: 60vw;
        min-height: 400px;
    }

    .options{
        width: 20vw;
        height: 100%;

        button:hover{
            cursor: pointer;
            color: white;
            border: 3px solid white;
        }

        .predict{
            position: relative;
            width: 90%;
            left: 50%;
            transform: translate(-50%,0);
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;

            button{
                border: 2px solid grey;
                border-radius: 5px;
                color: grey;
                height: 40px;
                margin-bottom: 30px;
                transition: 0.2s;
            }

            button:hover{
                cursor: pointer;
                color: white;
                border: 3px solid white;
            }

            span{
                display: block;
                margin-bottom: 10px;
            }

            span:nth-child(3){
                color: white;
            }

            @keyframes wave {
                0%, 60%, 100% {
                    transform: initial;
                }
            
                30% {
                    transform: translateY(-15px);
                }
            }

            .dots{
               position: relative;
               min-width: 60px;
               display: flex;
               justify-content: space-evenly;
               align-items: top;
               margin-top: 10px;
            }

            .dot{
                width: 10px;
                height:10px;
                background-color: white;
                border-radius: 50%;
                animation: wave 1.3s linear infinite;

                &:nth-child(2) {
			        animation-delay: -1.1s;
		        }

                &:nth-child(3) {
                    animation-delay: -0.9s;
                }
            }
        }
    }

    .single-chart{
        width: 100%;
        height: 400px;
        margin-top: 50px;
    }

   }
`;

export const StyledSelect = styled.select`
   width: 40%;
   height: 30px;
   border: none;
   border-radius: 0px;
   background-color: rgba(60, 60, 61, 0.5);
   color: white;
   font-family: 'Martian Mono', monospace;

   option{
        background-color: rgba(60, 60, 61, 0.5);
   }
`;

export const StyledButton = styled.button`
    height: 30px;
    border: 2px solid grey;
    border-radius: 5px;
    color: grey;
    position: relative;
    left: 50%;
    margin-top: 10px;
    transform: translate(-50%, 0);
    transition:  0.2s;
`;

export const StyledIconAdd = styled(FontAwesomeIcon)`
   color: ${props => props.color};
   
   &:hover{
    cursor:pointer;
   }
`;