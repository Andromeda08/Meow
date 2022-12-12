import type { FC } from 'react';

const Avatar: FC<{
  avatar: string;
  overlay?: string;
}> = ({ avatar, overlay }) => {
  return (
    <div className="avatar">
      <div className="image">
        <img src={ avatar } alt="Avatar image" />
      </div>
      { (overlay) ? (
        <div className="overlay">
          <img src={ overlay } alt="Overlay image" />
        </div>
      ) : <></> }
    </div>
  );
};

export default Avatar;