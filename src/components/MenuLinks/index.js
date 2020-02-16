import React from 'react';

import links from './content';
import getThemeColor from '../../utils/getThemeColor';
import * as S from './styled';

const MenuLinks = () => (
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            { links.map((link, i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink
                        paintDrip 
                        hex={getThemeColor()}
                        to={link.url} 
                        title={link.label} 
                        activeClassName="active"
                    > 
                        {link.label} 
                    </S.MenuLinksLink>
                </S.MenuLinksItem>
            )) }
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
);

export default MenuLinks;