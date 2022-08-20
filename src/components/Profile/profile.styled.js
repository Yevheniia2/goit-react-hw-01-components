import styled from "@emotion/styled";

export const Avatar = styled.img`
    width: 210px;
    height: 210px;
    border: 2px solid rgba(197, 201, 245, 0.521);
    background-color: #fff;
    margin-top: 10px;
        background: white radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
        box-shadow:
            inset #FF99CC 0 -3px 8px,
            inset #FF99CC 0 3px 8px,
            #FF99CC 0 3px 8px -3px;
`;

export const ProfileBox = styled.div`
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%);
    margin: 50px 0;
    text-align: center;
    width: 300px;
    background-color: #ffcba4;
`;

export const ProfileName = styled.p`
    font-size: 20px;
    font-weight: 600;
    display: block;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

export const Description = styled.div`
    background-color: #ffcba4;
    height: 350px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;

export const Tag = styled.p`
    font-size: 18px;
    color: grey;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Location = styled.p`
    font-size: 20px;
    color: grey;
    margin: 20px 0;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: inherit;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #FF99CC;
    border-top: 1px solid rgb(190, 194, 196);
    font-size: 18px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;   
`;

export const ProfileItem = styled.li`
    display: flex;
    flex-basis: calc(100% / 3 );
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 5px;
    :not(:last-child) {
        border-right: 1px solid #c0c0c0;
    }
`;

export const Label = styled.span`
    padding-bottom: 5px;
    color: grey;
`;

export const Quantity = styled.span`
    font-weight: 600;
`;