import styled from 'styled-components';

export const Investment = styled.div`
	border-bottom: 3px solid grey;
	border-left: 3px solid grey;
    border-radius: 3px;
	width: 400px;
	background-color: rgba(34, 34, 34, 0.8);
    margin-top: 50px;
    color: #fff;
    padding: 10px;
    position: relative;

    .name{
        color: #E6B325;
        font-size: 20px;
        border-bottom: 1px solid #E6B325;
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;

        span{
            display: block;
        }

        #link{
            display: block;
        }
    }

    .info{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        #last{
            width: 90%;
        }
        
        span{
            display: block;
            width: 40%;
            margin-top: 20px;
        }

        p{
            margin-top: 0;
            color: grey;
        }
    }
`;

