import { Eye, Zap, AlertTriangle, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Image from "next/image";
import { ReusableCard } from "./ReusableCard";

export function Hero() {
  return (
    <main className='flex-1'>
      <section className='w-full py-4 md:py-6 lg:py-8 xl:py-14'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Detect Threats in Real-Time
                </h1>
                <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                  SafeGuard AI analyzes video feeds to detect violent behavior,
                  enhancing public safety without constant human oversight.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>
                  Get Started
                </Button>
                <Button variant='outline'>Learn More</Button>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='AI-powered video analysis'
                width={600}
                height={400}
                className='rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
        <div className='container px-4 md:px-6'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
            Key Features
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <ReusableCard
              title='Real-Time Analysis'
              subtitle='Continuously monitor video feeds and detect threats as they happen.'
            />
            <ReusableCard
              title='AI-Powered'
              subtitle='Utilizes advanced machine learning algorithms for accurate threat detection.'
            />
            <ReusableCard
              title='Instant Alerts'
              subtitle='Receive immediate notifications when potential threats are identified.'
            />
            <ReusableCard
              title='Privacy-Focused'
              subtitle='Ensures data protection and compliance with privacy regulations.'
            />
          </div>
        </div>
      </section>
      <section className='w-full py-8 md:py-12 lg:py-16'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  How It Works
                </h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Our AI-powered system analyzes video feeds in real-time,
                  detecting spatial and temporal features associated with
                  violent behavior. Trained on extensive labeled data, it
                  provides accurate threat detection without the need for
                  constant human monitoring.
                </p>
              </div>
              <Button className='bg-primary text-primary-foreground hover:bg-primary/90 w-fit'>
                Learn More
              </Button>
            </div>
            <div className='flex items-center justify-center'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='AI video analysis process'
                width={600}
                height={400}
                className='rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Ready to Enhance Public Safety?
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                Join the growing number of organizations using SafeGuard AI to
                protect their communities.
              </p>
            </div>
            <div className='space-x-4'>
              <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>
                Get Started Now
              </Button>
              <Button variant='outline'>Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
