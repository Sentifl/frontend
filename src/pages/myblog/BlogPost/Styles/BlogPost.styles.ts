import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 140vh;
  background-color: #0e0e0e;
  color: white;
`;

export const TopSection = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #333;
  overflow: hidden;
  margin-top: 80px;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  position: absolute;
  top: 0;
  left: 0;
`;

export const TopRightContent = styled.div`
  position: absolute;
  top: 30px;
  right: 50px;
  color: #aaa;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SongTitleWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 20px;
  border-radius: 30px;
  gap: 10px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const SongTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
`;

export const CategoryAndTitle = styled.div`
  position: absolute;
  top: 60%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 80px;
`;

export const Category = styled.div`
  font-size: 16px;
  color: white;
  margin-bottom: 5px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: white;
  margin: 0;
`;

export const ViewCount = styled.div`
  color: #aaa;
  font-size: 14px;
`;

export const BottomRightContent = styled.div`
  position: absolute;
  bottom: 50px;
  right: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Date = styled.div`
  color: #aaa;
  font-size: 14px;
  margin-right: 10px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: white;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 80px;
  max-width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding: 10px;
`;

export const PostHeartIcon = styled.div`
  background-color: #1e1e1e;
  padding: 5px 15px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d9d9d9;
  }
`;

export const PostCommentIcon = styled.div`
  background-color: #1e1e1e;
  padding: 5px 15px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d9d9d9;
  }
`;

export const PostHeartCount = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: white;
  &:hover {
    color: black;
  }
`;

export const PostCommentCount = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: white;
  &:hover {
    color: black;
  }
`;

export const SidebarWrapper = styled.div`
  width: 350px;
  margin-left: 20px;
  margin-right: 40px;
  overflow-y: hidden;
`;

export const PostContent = styled.div`
  flex-grow: 1;
  position: relative;
  min-width: 500px;
  max-width: 1000px;
  word-wrap: break-word;
  padding: 40px;
  padding-bottom: 120px;
  font-size: 16px;
  line-height: 1.6;
  background: #0e0e0e;
  border-radius: 8px;
  p {
    margin-bottom: 20px;
  }
  overflow-y: auto;
`;

export const FixedBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;

export const InputField = styled.input`
  flex: 1;
  background-color: #444;
  border: none;
  padding: 10px;
  margin: 0 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
`;

export const Icon = styled.span`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  margin: 0 10px;
  transition: color 0.3s, opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const HeartIcon = styled(Icon)`
  &:hover {
    color: red;
  }
`;

export const CommentSection = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  border-top: 1px solid #333;
`;

export const CommentTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
`;

export const Comment = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #444;
  color: #b5b5b5;
`;

export const CommentAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CommentAuthor = styled.div`
  font-size: 14px;
  color: #aaa;
`;

export const CommentDate = styled.div`
  font-size: 12px;
  color: #777;
  margin-right: 10px;
`;

export const CommentText = styled.p`
  font-size: 14px;
  color: #ddd;
  margin-top: 10px;
`;

export const CommentActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const CommentActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #444;
  border-radius: 5px;
  overflow: hidden;
`;

export const CommentActionButton = styled.button`
  background: #333;
  color: white;
  font-size: 14px;
  border: none;
  padding: 8px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #555;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #444;
  }
`;

export const CommentHeartIcon = styled.span`
  font-size: 14px;
  color: #aaa;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const CommentHeartCount = styled.span`
  font-size: 14px;
  color: #aaa;
  margin-right: 10px;
`;

export const ReplyButton = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
