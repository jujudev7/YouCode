import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
      <Card className='mt-8'>
        <CardHeader>
          <CardTitle>Test card</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}