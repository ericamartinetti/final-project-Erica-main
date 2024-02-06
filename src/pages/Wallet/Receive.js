import MainLayout from "../../layouts/MainLayout";
import Actionheader from '@organisms/Actionheader';
import FormReceive from "@organisms/FormReceive";
export default function Receive() {
    return (
        <MainLayout header={<Actionheader title="Receive" />}>
            <div className="flex justify-center mb-16">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_42_165)">
                        <path d="M25 25H50V50H25V25Z" fill="black" />
                        <path d="M75 0V75H0V0H75ZM62.5 12.5H12.5V62.5H62.5V12.5ZM50 150H25V175H50V150Z" fill="black" />
                        <path d="M75 125V200H0V125H75ZM12.5 137.5V187.5H62.5V137.5H12.5ZM150 25H175V50H150V25Z" fill="black" />
                        <path d="M125 0V75H200V0H125ZM187.5 12.5V62.5H137.5V12.5H187.5ZM100 12.5V0H112.5V25H100V50H87.5V12.5H100ZM100 75V50H112.5V75H100ZM75 100V87.5H87.5V75H100V100H112.5V87.5H175V100H125V112.5H87.5V100H75ZM75 100V112.5H25V100H12.5V112.5H0V87.5H37.5V100H75ZM200 112.5H187.5V87.5H200V112.5ZM187.5 112.5H175V137.5H200V125H187.5V112.5ZM137.5 112.5H162.5V125H150V137.5H137.5V112.5ZM162.5 150V137.5H150V150H137.5V162.5H112.5V175H150V150H162.5ZM162.5 150H200V162.5H175V175H162.5V150ZM112.5 137.5V150H125V125H87.5V137.5H112.5Z" fill="black" />
                        <path d="M87.5 150H100V187.5H150V200H87.5V150ZM200 175V200H162.5V187.5H187.5V175H200Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_42_165">
                            <rect width="200" height="200" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <FormReceive />
        </MainLayout>
    )
}