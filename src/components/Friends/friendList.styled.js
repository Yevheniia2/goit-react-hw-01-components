import styled from "@emotion/styled";

export const Container = styled.ul`
    width: 300px;
    align-items: center;
    list-style: none;
    padding: 0;
    background-color: rgb(218, 223, 224);
`;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    background-color: #ffcba4;
    border-radius: 8px;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%);
    :not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
`;