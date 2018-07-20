import React from 'react'
import withWidth, { MEDIUM } from 'react-width'

import ReactJSAcademyLogo from '../../logos/ReactJSAcademy'
import DesktopMenu from './DesktopMenu'
import PhoneMenu from './PhoneMenu'
import Grid from '../../layout/Grid'
import styled from '../../../../node_modules/styled-components'
import { blue1 } from '../../../styles'

export { DesktopMenu, PhoneMenu }

const MenuContainer = styled.div`
  padding: 20px;
  background-color: ${blue1(0.75)};
`

const Menu = ({ width }) => {
  const canIGuessTheScreenSizeUsingJS = typeof window !== 'undefined'

  return (
    <Grid>
      <MenuContainer>
        <ReactJSAcademyLogo />
        {canIGuessTheScreenSizeUsingJS && width < MEDIUM ? (
          <PhoneMenu />
        ) : (
          <DesktopMenu />
        )}
      </MenuContainer>
    </Grid>
  )
}

export default withWidth()(Menu)
