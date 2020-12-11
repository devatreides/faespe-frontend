import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LinkActive({ href, children }) {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.asPath.includes(href)) {
    className = `${className} active-link text-lg shadow-lg text-white`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
