import { NavLink } from 'react-router-dom';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { NavLinkSkew } from 'components/NavLinkSkew/NavLinkSkew';
import { useMediaQuery } from 'hooks/useMedia';

import {
  DataWrapper,
  DescrWrapper,
  ImageWrapper,
  RecipeBlockWrapper,
  SubTitle,
  Time,
  TimeWrapper,
  TitleWrapper,
} from './RecipeBlock.styled';

export const RecipeBlock = ({ location, id, text, title, img, time }) => {
  const isRowBased = useMediaQuery('(min-width: 768px)');

  return (
    <RecipeBlockWrapper location={location}>
      {!isRowBased && location === 'favorite' ? (
        <NavLink to={`/recipe/${id}`}>
          <ImageWrapper location={location}>
            <img src={img} alt={title} />
          </ImageWrapper>
        </NavLink>
      ) : (
        <ImageWrapper location={location}>
          <img src={img} alt={title} />
        </ImageWrapper>
      )}
      <DataWrapper location={location}>
        <TitleWrapper>
          <SubTitle>
            <h3>{title}</h3>
          </SubTitle>
          {isRowBased && location === 'favorite' && (
            <DeleteBtn location={location} id={id} />
          )}
          {location === 'recipes' && <DeleteBtn location={location} id={id} />}
        </TitleWrapper>
        <DescrWrapper>{text}</DescrWrapper>
        <TimeWrapper>
          <Time>{time}</Time>
          {!isRowBased && location === 'recipes' && (
            <NavLinkSkew
              navigate={`/recipe/${id}`}
              location={location}
              text="See recipe"
              styled="olive"
            />
          )}
          {!isRowBased && location === 'favorite' && (
            <DeleteBtn location={location} id={id} />
          )}
          {isRowBased && (
            <NavLinkSkew
              navigate={`/recipe/${id}`}
              location={location}
              text="See recipe"
              styled={location === 'favorite' ? 'black' : 'olive'}
            />
          )}
        </TimeWrapper>
      </DataWrapper>
    </RecipeBlockWrapper>
  );
};
