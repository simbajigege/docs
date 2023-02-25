import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

import { Linkedin, Twitter } from 'react-feather';
import { DiscordIcon } from '@site/src/icons';

export default function HomeFooter({ className }) {
  const { colorMode } = useColorMode();

  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        <div>
          <img src={`/logo/${colorMode}.svg`} alt="Logo" className="h-10" />
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://community.dyte.io">
            <DiscordIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://twitter.com/dyte_io">
            <Twitter className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://linkedin.com/company/dyteio">
            <Linkedin className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; Dyte since 2020. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
