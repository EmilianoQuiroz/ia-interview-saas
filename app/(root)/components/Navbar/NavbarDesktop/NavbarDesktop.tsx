import { links } from '../Navbar.data'
import { Button } from '@/components/UI/button'
import Link from 'next/link'

export function NavbarDesktop() {
  return (
    <div className='hidden md:flex items-center gap-4 text-lg'>
        {links.map((link) => (
            <Button key={link.name} asChild variant='ghost' className='text-white'>
                <Link href={link.href}>{link.name}</Link>
            </Button>
        ))}
    </div>
  )
}
