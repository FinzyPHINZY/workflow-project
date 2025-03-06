'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from './ui/breadcrumb';
import React from 'react';

const BreadcrumbHeader = () => {
  const pathName = usePathname();

  const paths = pathName === '/' ? [''] : pathName?.split('/');

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, i) => (
            <React.Fragment key={i + path}>
              <BreadcrumbItem>
                <BreadcrumbLink className="capitalize" href={`/${path}`}>
                  {path === '' ? 'home' : path}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;
