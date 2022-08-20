import styled from "@emotion/styled";

export const TableBox = styled.table`
    padding: 20px;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%);
    margin-bottom: 50px;
    text-align: center;
    width: 500px;
    background-color: #ffffff;
    color: gray;
    font-size: 18px;
`;

export const TableHeadBox = styled.thead`
    background-color: #FF99CC;
`;

export const TableBody = styled.tbody`
    text-align: center;
`;

export const TableRow = styled.tr`
    :nth-of-type(2n) {
        background-color: #ffcba4;
    }
    :nth-of-type(2n-1) {
        background-color: #ffe5b4;
    }
`;

export const TableCell = styled.td`
    padding: 0;
    font-size: 14px;
    line-height: 30px;
    border: 1px solid #f0f9fa;
    color: rgb(71, 69, 69);
`;

export const TableHeadName = styled.th`
    line-height: 20px;
    padding: 10px 20px;
    color: grey;
    text-transform: uppercase;
    border: 0.5px solid #f0f9fa;
    background-color: #FF99CC;
`;