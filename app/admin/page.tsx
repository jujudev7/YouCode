/* eslint-disable @next/next/no-img-element */
import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
  } from '@/components/layout/layout';
  import Link from 'next/link';
  
  export default async function CoursesPage() {
    return (
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Cours</LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <Link href="/admin/courses">Cours</Link>
        </LayoutContent>
      </Layout>
    );
  }