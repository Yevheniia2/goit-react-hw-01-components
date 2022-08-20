import styled from "@emotion/styled";

export const StatisticsBox = styled.section`
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%);
    margin-bottom: 50px;
    text-align: center;
    width: 500px;
    background-color: #ffcba4;
`;

export const Title = styled.h2`
    text-align: center;
    padding: 20px 10px;
    font-size: 20px;
    font-weight: 600;
    color: grey;
`;

export const StatList = styled.ul`
    height: 70px;
    display: flex;
    justify-content: center;
    border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    padding: 0;
    margin: 0;
`;

export const StatItem = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(25%);
    border-right: 1px solid #c0c0c0;
    border-top: 1px solid #c0c0c0;
`;

export const Label = styled.span`
    color: black;
    font-size: 18px;
`;

export const Persentage = styled.span`
    color: black;
    font-size: 24px;
`;