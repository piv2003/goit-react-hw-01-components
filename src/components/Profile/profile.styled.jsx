import styled from '@emotion/styled';

const UserProfile = styled.div`
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
  padding: 25px 10px 0;
  background-color: #f0f0f0;
  box-shadow: 5px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
const Userinfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserAvatar = styled.img`
  display: block;
  width: 150px;
  border: none;
  border-radius: 15em;
  box-shadow: 2px -3px 17px -3px rgba(0, 0, 0, 0.85);
  margin-bottom: 35px;
  background-color: rgba(200, 200, 100, 0.9);
`;

const UserName = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;
const UserTag = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  color: grey;
`;
const UserLocation = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  color: darkgreen;
`;
const UserStats = styled.ul`
  display: flex;
  flex-wrap: none;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    display: flex;
    flex-basis: calc((100% / 3) - 20px - 2px);
    flex-direction: column;
    padding: 2px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 250, 0.15);
    box-shadow: 1px -3px 7px -3px rgba(0, 0, 0, 0.85);
  }
`;
const UserStatsLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #77d;
`;
const UserStatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export {
  UserProfile,
  Userinfo,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsLabel,
  UserStatsQuantity,
};
