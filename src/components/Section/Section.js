import { SectionStyled } from "./Section.styled"
import PropTypes from 'prop-types';


export const Section = ({mainTitle,title, children}) => {
    return <SectionStyled>
    {mainTitle && <h1>{mainTitle}</h1>}
    {title && <h2>{title}</h2>}
    {children}
    </SectionStyled>
    
}

Section.propTypes = {
    mainTitle: PropTypes.string,
    title: PropTypes.string,
}
 
