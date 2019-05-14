import React from 'react';
import styled from 'styled-components/native';

const AVATAR_SIZE = 60;
const Root = styled.View`
    height: 140;
    alignSelf: stretch;
    paddingTop: 50;
    backgroundColor: ${props => props.theme.WHITE};
`;
const Heading = styled.View`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
  paddingLeft: 15;
  paddingTop: 5;
`;
const Avatar = styled.Image`
    height: ${AVATAR_SIZE};
    width: ${AVATAR_SIZE};
    borderRadius: ${AVATAR_SIZE/ 2};
`
const UsernameContainer = styled.View`
    flex: 1;
    paddingLeft: 10;
    alignSelf: stretch;
`;

const FullName = styled.Text`
    color: ${props => props.theme.SECONDARY};
    fontWeight: bold;
    fontSize: 18;
`
const UserName = styled.Text`
    color: ${props => props.theme.SECONDARY};
    fontSize: 15;
    opacity: 0.8;
`
const MetaContainer = styled.View`
    flex: 0.8;
    flexDirection: row;
`
const MetaBox = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`
const MetaText = styled.Text`
    color: ${props => props.theme.SECONDARY};
    fontSize: 16;
    fontWeight: 600;

`
const MetaTextNumber = styled.Text`
    color: ${props => props.theme.PRIMARY};
`

const ProfileHeader = (props) => {
  return (
    <Root>
        <Heading>
            <Avatar source={{ uri: props.avatar }} />
            <UsernameContainer>
                <FullName>
                    {props.firstName} {props.lastName}
                </FullName>
                <UserName>
                    @{props.username}
                </UserName>
            </UsernameContainer>
        </Heading>
        <MetaContainer>
            <MetaBox>
                <MetaText><MetaTextNumber> {props.tweetCount}</MetaTextNumber> tweets </MetaText>
            </MetaBox>
            <MetaBox>
                <MetaText><MetaTextNumber> {props.followersCount}</MetaTextNumber> followers </MetaText>
            </MetaBox>
            <MetaBox>
                <MetaText><MetaTextNumber> {props.followingsCount}</MetaTextNumber> followings </MetaText>
            </MetaBox>
            <MetaBox>
                <MetaText><MetaTextNumber> 3</MetaTextNumber> likes </MetaText>
            </MetaBox>
        </MetaContainer>
    </Root>
  )
}

export default ProfileHeader;