import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface Route {
  name: string
  href: string
  type?: string
  icon?: IconProp
}

export const RouteData: Route[] = [
  /** SUPPORT MENU LINKS */
  {
    name: 'Discord Server',
    href: 'https://infinitybots.gg/discord',
    type: 'Support'
  },
  {
    name: 'Developer(s)',
    href: 'https://infinitybots.gg/discord',
    type: 'Support'
  },
  /** QUEUE MENU LINKS */
  {
    name: 'Approval Templates',
    href: '/approval',
    type: 'Queue',
  },
  {
    name: 'Denial Templates',
    href: '/denial',
    type: 'Queue',
  }
  /** SOURCE MENU LINKS */
]