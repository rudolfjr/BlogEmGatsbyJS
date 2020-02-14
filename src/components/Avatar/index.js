import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query{
                avatarImage: file(relativePath: { eq: "rudolf-profile.jpg" }){
                    childImageSharp{
                        fixed( width: 60, height: 60){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

/* usando fluid 
const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query{
                avatarImage: file(relativePath: { eq: "rudolf-profile.jpg" }){
                    childImageSharp{
                        fluid( maxWidth: 60, maxHeight: 60){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    return <Img fluid={avatarImage.childImageSharp.fluid} />
}
*/

export default Avatar;