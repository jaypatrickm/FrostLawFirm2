import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  path1: string;
  url1: string;
  path2?: string;
  url2?: string;
  path3?: string;
  url3?: string;
};

const Breadcrumbs: NextPage<Props> = ({ path1, url1 }) => {
  return (
    <div className="py-2 px-4">
      <Link href={url1}>
        <a className="underline text-frost-blue">{path1}</a>
      </Link>
    </div>
  );
};

export default Breadcrumbs;
