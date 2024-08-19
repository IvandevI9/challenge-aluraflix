import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BotonesNav from './BotonesNav';
import { useGlobalContext } from '../../../contexts/GlobalContext';

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.img`
  width: 35px;
  height: 35px;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }

  // Cambiar imagen en hover
  &:hover {
    content: url(${(props) => (props.botonSeleccionado === props.boton ? `/img/icono-${props.boton}-activo.png` : `/img/icono-${props.boton}-activo.png`)});
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Mantiene el color del texto del enlace */
`;

const Pstyled = styled.p`



  @media (max-width: 600px) {
    font-weight: 900;
    display: ${(props) => (props.botonSeleccionado === props.boton ? 'block' : 'none')};
  }
`;

const Nav = () => {
  const { botonSeleccionado } = useGlobalContext();
  return (
    <NavStyled>
      <StyledLink to="/">
        <BotonesNav boton="home">
          <ImgContainer
            src={botonSeleccionado === 'home' ? '/img/icono-home-activo.png' : '/img/icono-home.png'}
            botonSeleccionado={botonSeleccionado}
            boton="home"
          />
          <Pstyled botonSeleccionado={botonSeleccionado} boton="home">
            HOME
          </Pstyled>
        </BotonesNav>
      </StyledLink>
      <StyledLink to="/nuevovideo">
        <BotonesNav boton="nuevo-video">
          <ImgContainer
            src={botonSeleccionado === 'nuevo-video' ? '/img/icono-nuevo-video-activo.png' : '/img/icono-nuevo-video.png'}
            botonSeleccionado={botonSeleccionado}
            boton="nuevo-video"
          />
          <Pstyled botonSeleccionado={botonSeleccionado} boton="nuevo-video">
            NUEVO VIDEO
          </Pstyled>
        </BotonesNav>
      </StyledLink>
    </NavStyled>
  );
};

export default Nav;