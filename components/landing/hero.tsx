'use client'
import React from 'react'
import { ArrowRight, CircleCheck, Shield, Sparkles, Wallet, Zap } from 'lucide-react'
import stellar from '../../public/stellar.png'
import skartnet from '../../public/StarknetIcon.png'
import { useTheme } from '@material-tailwind/react'


interface Info {
  id: number;
  icon: React.ReactNode;
  label: string;
}

const infos : Info[] = [
  {
    id: 1,
    icon: <Zap className='w-3.5 lg:w-4 lg:h-4 h-3.5'/>,
    label: 'Instant Payments'
  },
  {
    id: 2,
    icon : <Shield className='w-3.5 lg:w-4 lg:h-4 h-3.5'/>,
    label: 'Military-Grade',
  },
  {
    id: 3,
    icon: <CircleCheck className='w-3.5 lg:w-4 lg:h-4 h-3.5'/>,
    label: 'Zero Fees'
  }
]

const escrowCardInfos = [
  {
    id: 1,
    label: 'Payrolls',
  }, 
  {
    id: 2,
    label: 'Escrow',
  }, 
  {
    id:3,
    label: 'Disputes'
  }
]

const InfoCard = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex items-center justify-start gap-2 lg:gap-3 rounded-xl border-[0.74px] relative group border-[var(--hero-border)] w-full h-12.5 p-2.5 bg-[var(--hero-card)]'>
      {children}
    </div>
  )
}

const hero = () => {


  return (
    <section className='w-full min-h-screen text-[var(--hero-text)] flex items-center justify-center bg-white relative'>

      <div className='absolute z-3 bg-gradient-to-br from-[#10B981] to-[#00000000] w-64.5 h-64.5 lg:w-99 lg:h-99 rounded-full opacity-20 lg:opacity-10 blur-3xl top-[80%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

      <div className='absolute z-3 bg-gradient-to-br from-[#3B82F6] to-[#00000000] w-73.5 h-73.5 lg:w-99 lg:h-99 rounded-full opacity-20 lg:opacity-10 blur-3xl top-[10%] lg:top-[45%] left-[55%] lg:left-[45%] -translate-x-[45%] -translate-y-[45%]'></div>

      <div className='absolute z-3 bg-gradient-to-br from-[#8B5CF6] to-[#00000000]  w-68 h-68 lg:w-121 lg:h-121 rounded-full opacity-20 lg:opacity-10 blur-3xl lg:top-[53%] left-[40%] lg:left-[53%] -translate-x-[53%] -translate-y-[53%] top-[25%]'></div>

      <div className='h-full w-full flex flex-col lg:flex-row items-center justify-center font-[var(--font-sans)] lg:p-5 gap-12 lg:gap-6 my-30'>

        {/* first container */}
        <div className='flex flex-col w-[90%] md:w-[70%] lg:max-w-176 lg:max-h-168.5 h-auto relative gap-5'>
          {/* Simplifying Crypto Payments for Business card */}
          <div className='flex items-center justify-around rounded-full border-[0.74px] relative group border-[var(--hero-border)] w-78 h-7.5 px-1.5 bg-[var(--hero-card)]'>
            <Sparkles className='text-[var(--hero-text)] w-[14.5px] h-[14.5px]' />
            <p className='font-medium text-xs'>
              Simplifying Crypto Payments for Business 
            </p>
          <ArrowRight className='text-[var(--hero-p-text)] w-[13.99px] h-[13.99px]'/>
          </div>
          {/* header text */}
          <h1 className='font-bold text-4xl lg:text-7xl'>
              The Future of
            <span className='bg-gradient-to-r from-[var(--hero-gradient-text-start)] via-[var(--hero-gradient-text-middle)] via-16% lg:via-33% to-[var(--hero-gradient-text-end)] to-33% lg:to-66% bg-clip-text text-transparent block'>
              Payroll on
            </span>
              Blockchain
          </h1>
          {/* paragraph text */}
          <p className='text-base lg:text-lg font-normal text-[var(--hero-p-text)] lg:w-[90%]'>
            Built for modern businesses. Designed for global payments. Powered by blockchain technology.
          </p>
          {/* benefits and actions */}
          <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between w-full gap-2 lg:gap-3'>
            {infos.map((info) => (
            <InfoCard key={info.id}>
              <div className='rounded-[12px] w-7 lg:w-8 h-7 lg:h-8 bg-gradient-to-r from-[var(--hero-icon-gradient-start)] to-[var(--hero-icon-gradient-end)] flex items-center justify-center'>
                {info.icon}
              </div>
              <span className='font-semibold text-xs inline'>
                {info.label}
              </span>
            </InfoCard>
            ))}
          </div>
          {/* buttons */}
          <div className='flex w-full lg:w-auto flex-col lg:flex-row gap-2 lg:gap-3'>
            <button className='bg-[var(--hero-text)] rounded-[16px] lg:w-47 h-11 lg:h-12.5 p-3 text-[var(--hero-card)] font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer'>
              <Wallet className='w-4 h-4'/>
              <span>
                Connect Wallet
              </span>
            </button>

            <button className='border-[0.74px] border-[var(--hero-border)] rounded-[16px] lg:w-38.5 h-11.5 lg:h-12.5 p-3 text-[var(--hero-text)] font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer'>
              <span>
                Read Docs
              </span>
              <ArrowRight className='w-4 h-4'/>
            </button>
          </div>
        </div>
            

        {/* main card */}
        <div className='flex flex-col lg:border-2 w-[90%] md:w-[70%]  lg:max-w-176 lg:max-h-168.5 h-auto items-center justify-between gap-6 lg:gap-3 rounded-xl border-[1.34px] relative group border-[var(--hero-border)] min-h-12.5 p-6 bg-[var(--hero-card)]' style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
          {/* top floating card */}
          <div className='border-[1.47px] w-22.5 lg:w-23.5 h-22.25 lg:h-23.25 border-[var(--hero-border)] absolute z-2 bg-[var(--hero-card)] rounded-[16px] -top-4 -right-4.5 flex flex-col justify-between items-center p-4 shadow-2xl lg:border-2 transform rotate-8' style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
            <p className='text-[var(--hero-text)] text-3xl font-bold'>
              8
            </p>

            <p className='text-xs font-normal text-[var(--hero-p-text)]'>
              Payrolls
            </p>
          </div>
          {/* bottom floating card */}
          <div className='border-[1.47px] w-20 lg:w-20.5 h-22.25 lg:h-22.75 border-[var(--hero-border)] absolute z-2 bg-[var(--hero-card)] rounded-[16px] -bottom-6 lg:bottom-[-5] -left-4 flex flex-col justify-between items-center p-4.5 lg:border-2 transform -rotate-8' style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
            <p className='text-[var(--hero-text)] text-3xl font-bold'>
              2s
            </p>

            <p className='text-xs font-normal text-[var(--hero-p-text)]'>
              Speed
            </p>
          </div>

          {/* first row */}
          <div className='text-[var(--hero-text-p)] flex justify-between items-center w-full'>
            <div className='flex items-center gap-3 '>
              <div className='bg-gradient-to-br from-[var(--hero-gradient-text-start)] via-[var(--hero-gradient-text-middle)] to-[var(--hero-gradient-text-end)] w-12.5 h-12.5 rounded-[16px] flex items-center justify-center'>
                <Wallet className='w-6 h-6 text-[#FAFAFA]'/>
              </div>

              <div className=''>
                <p className=' text-xs font-normal text-[var(--hero-p-text)]'>
                  Escrow Dashboard
                </p>
                <h4 className='text-base font-bold'>
                  Multi-Chain Platform
                </h4>
              </div>
            </div>

            <div className='border-[var(--hero-border)] border-[1.34px] w-17.25 h-10 rounded-[16px] font-bold text-xs flex items-center justify-center lg:border-2'>
              <span className='text-base mb-0.75'>●</span> ACT
            </div>
          </div>
          {/* second row */}
          <div className='w-full'>
            <p className=' text-xs font-normal text-[var(--hero-p-text)]'>
              Total Locked in Escrow
            </p>

            <p className='text-[var(--hero-text)] text-4xl font-bold'>
              $847,500.00
            </p>

            <p className='text-[var(--hero-text)] text-xs font-semibold ml-4'>
              12 Active Contracts
            </p>
          </div>
          {/* third and fourth row */}
          <div className='w-full flex flex-col gap-4'>
            {/* third row */}
            <div className='flex justify-between items-center gap-3 text-[var(--hero-text-p)] font-bold text-xs w-full'>

            <div className='rounded-[16px] border-[var(--hero-border)] border-[1.34px] p-4 w-full h-33.5 flex flex-col justify-between lg:border-2'>
              <div className='flex justify-between items-center w-full'>
                <div className='bg-[var(--hero-card)] w-10 h-10 rounded-[12px] flex justify-center items-center' style={{boxShadow: '0px 4px 20px 0px rgba(139, 92, 246, 0.25)'}}>
                  <img src={stellar.src} alt="" className='w-6 h-5'/>
                </div>
                <ArrowRight className='text-[var(--hero-p-text)] w-[13.99px] h-[13.99px]'/>
              </div>

              <p className='text-xs font-normal text-[var(--hero-p-text)]'>
                Stellar
              </p>

              <p className='text-[var(--hero-text)] text-lg font-bold'>
                $500k
              </p>
            </div>

            <div className='rounded-[16px] border-[var(--hero-border)] border-[1.34px] p-4 w-full h-33.5 flex flex-col justify-between lg:border-2'>
              <div className='flex justify-between items-center w-full'>
                <div className='bg-[var(--hero-card)] w-10 h-10 rounded-[12px] flex justify-center items-center' style={{boxShadow: '0px 4px 20px 0px rgba(139, 92, 246, 0.25)'}}>
                  <img src={skartnet.src} alt="" className='w-6 h-5'/>
                </div>
                <ArrowRight className='text-[var(--hero-p-text)] w-[13.99px] h-[13.99px]'/>
              </div>

              <p className='text-xs font-normal text-[var(--hero-p-text)]'>
                Starknet
              </p>

              <p className='text-[var(--hero-text)] text-lg font-bold'>
                $347.5k
              </p>
            </div>
          </div>
          {/* fourth row */}
          <div className='flex justify-between items-center gap-3 text-[var(--hero-text-p)] font-bold text-xs w-full'>
            {escrowCardInfos.map((escrowCardInfo)=> (
              <div key={escrowCardInfo.id} className='border-[var(--hero-border)] border-[1.34px] h-11 w-full flex items-center justify-center rounded-[16px] lg:border-2'>
              {escrowCardInfo.label}
            </div>
            ))}
          </div>
          </div>
        </div>

      </div>

      
    </section>
  )
}

export default hero
