import styled from '@emotion/styled';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 карточки в ряд */
  gap: 20px; /* Промежуток между карточками */
  justify-content: center; /* Выравниваем карточки по центру */
`;

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: #31261a;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #757575;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const DueDate = styled.p`
  color: #757575;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const Priority = styled.h3`
  color: ${({ priorityLevel }) => {
    switch (priorityLevel) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "green";
    }
  }};
  font-size: 1.2rem;
`;

export const Completed = styled.p`
  color: ${({ color }) => {
    switch (color) {
        case true:
            return "green";
        case false:
            return "red";
        default:
            return "red";
    }
}};
  font-size: 1rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Распределяем кнопки по краям контейнера */
  margin-top: 15px; /* Отступ сверху для кнопок */
`;
