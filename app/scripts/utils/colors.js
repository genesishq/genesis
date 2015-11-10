/*
 * This file is part of a sample todo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Color from 'color'

/**
 * These are colors used throughout the application.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

export const base = '#fff'
export const accent = '#40E0D0'

export const background = '#2f3545'

export const contrastLight = '#fbfcfc'
export const contrastMedium = '#969696'
export const contrastDark = '#2f2f2f'

export const fontBase = '#222'
export const fontSubtle = '#888'

export const linkBase = accent
export const LinkHover = new Color(accent).darken(0.05).hexString()
