import React from 'react'
import styled, {css} from 'styled-components/native'
import {View, ViewProps} from './themed-view'

export type PaperProps = ViewProps & {
  elevation?: 'low' | 'medium' | 'high'
}

const shadowColor = '#A466B7'
const shadowColorRgb = '164, 102, 183'

const elevationLow = css`
  box-shadow: 0.3px 0.5px 0.7px rgba(${shadowColorRgb}, 0.34),
    1px 2px 2.5px -2.5px rgba(${shadowColorRgb}, 0.34);
`

const elevationMedium = css`
  box-shadow: 0.3px 0.5px 0.7px rgba(${shadowColorRgb}, 0.36),
    0.8px 1.6px 2px -0.8px rgba(${shadowColorRgb}, 0.36),
    2.1px 4.1px 5.2px -1.7px rgba(${shadowColorRgb}, 0.36),
    5px 10px 12.6px -2.5px rgba(${shadowColorRgb}, 0.36);
`

const elevationHigh = css`
  box-shadow: 0.3px 0.5px 0.7px rgba(${shadowColorRgb}, 0.34),
    1.5px 2.9px 3.7px -0.4px rgba(${shadowColorRgb}, 0.34),
    2.7px 5.4px 6.8px -0.7px rgba(${shadowColorRgb}, 0.34),
    4.5px 8.9px 11.2px -1.1px rgba(${shadowColorRgb}, 0.34),
    7.1px 14.3px 18px -1.4px rgba(${shadowColorRgb}, 0.34),
    11.2px 22.3px 28.1px -1.8px rgba(${shadowColorRgb}, 0.34),
    17px 33.9px 42.7px -2.1px rgba(${shadowColorRgb}, 0.34),
    25px 50px 62.9px -2.5px rgba(${shadowColorRgb}, 0.34);
`

const elevations = {
  low: elevationLow,
  medium: elevationMedium,
  high: elevationHigh,
}

export const Paper = styled(View)<PaperProps>`
  ${p => (p.elevation ? elevations[p.elevation] : null)}
`

Paper.defaultProps = {
  elevation: 'low',
}
