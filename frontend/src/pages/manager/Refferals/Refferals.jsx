import React, { useCallback, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import CopyToClipboard from "react-copy-to-clipboard";
import { GrCopy } from "react-icons/gr"
const Refferals = () => {
    const [value, setValue] = useState('HE832Kl');
    const [copied, setCopied] = useState(false);

    const handleValueChange = useCallback(({ target: { value } }) => {
        setValue(value);
        setCopied(false);
    }, []);

    const handleCopy = useCallback(() => {
        setCopied(true);
    }, []);
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <div>
            <DashboardLayout>
                <div className="flex flex-col gap-y-10 items-start justify-start w-full">
                    <div
                        className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5 md:px-10 pt-6 pb-10"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" viewBox="0 0 25 15" fill="none">
                                    <g clip-path="url(#clip0_1101_31)">
                                        <path d="M21.1178 6.56518H17.9058C17.242 6.56475 16.5894 6.73653 16.0118 7.06375C15.5202 7.34262 15.0949 7.72485 14.7654 8.18409C14.5459 8.14577 14.3235 8.12665 14.1007 8.12679H10.8858C10.6629 8.12657 10.4405 8.14577 10.221 8.18409C9.89155 7.72478 9.46627 7.34255 8.97458 7.06375C8.397 6.73653 7.74442 6.56475 7.0806 6.56518H3.86856C1.73418 6.56991 0.005094 8.29899 0.000366211 10.4334V12.6139C0.00194214 12.8423 0.187472 13.0265 0.415839 13.0265H7.0061V14.1726C7.0061 14.4021 7.19213 14.5881 7.42157 14.5881H17.5534C17.7828 14.5881 17.9688 14.4021 17.9688 14.1726V13.0265H24.5591C24.7885 13.0265 24.9746 12.8405 24.9746 12.611V10.4334C24.9698 8.30344 23.2477 6.57621 21.1178 6.56518ZM7.04908 11.6225V11.7113C7.04908 11.7514 7.04908 11.7887 7.04908 11.8288V11.995V12.1956H0.831312V10.4334C0.83604 8.75788 2.19306 7.40086 3.86856 7.39613H7.0806C7.60072 7.39556 8.11211 7.5298 8.56484 7.78581C8.86835 7.95745 9.14062 8.17937 9.36999 8.44197C8.07708 9.00315 7.18912 10.2201 7.04908 11.6225ZM17.1293 11.995V13.76H7.8485V11.9635C7.8485 11.931 7.8485 11.8995 7.8485 11.8689C7.8485 11.8193 7.8485 11.7696 7.8485 11.7199V11.6454C7.8485 11.6168 7.8485 11.5881 7.8485 11.5595V11.4678V11.4391V11.4076V11.3446L7.8657 11.2758L7.89435 11.1726L7.91441 11.1039C8.32601 9.85637 9.48905 9.01174 10.8027 9.00644L10.8858 8.9606H14.1007C15.6262 8.96619 16.9128 10.0985 17.1121 11.611C17.1121 11.6741 17.1121 11.7371 17.1293 11.8001C17.1293 11.8651 17.1293 11.93 17.1293 11.995ZM24.1551 12.1984H17.966V11.9491C17.966 11.9176 17.966 11.8861 17.966 11.8546C17.966 11.8221 17.966 11.7896 17.966 11.7572C17.966 11.7113 17.966 11.6626 17.966 11.6168V11.5738V11.5251V11.4362V11.4219V11.3875V11.356V11.336V11.2987V11.2586V11.2385V11.2127V11.187V11.1612V11.0981V11.0695V11.0322V10.995L17.9459 10.9233V10.8947V10.8689V10.8489V10.8202V10.7829L17.9058 10.6712C17.5325 9.67872 16.771 8.88109 15.7969 8.46203C15.9693 8.20687 16.1789 7.97894 16.4187 7.78581C16.8714 7.5298 17.3828 7.39556 17.9029 7.39613H21.1178C22.7933 7.40086 24.1504 8.75788 24.1551 10.4334V12.1984ZM7.54191 0.871773C8.08955 1.42084 8.39671 2.16482 8.39607 2.94025C8.39464 4.55601 7.08375 5.86461 5.46799 5.86318C3.85223 5.86174 2.54363 4.55078 2.54507 2.9351C2.5465 1.31934 3.85746 0.0107417 5.47315 0.0121744C6.24972 0.0116013 6.99442 0.321057 7.54191 0.871773ZM6.95452 4.41619C7.34786 4.02364 7.56849 3.49054 7.5677 2.93481C7.56756 2.37937 7.34678 1.8467 6.95395 1.45401C6.13575 0.636171 4.80961 0.636458 3.99177 1.45458C3.17393 2.27278 3.17422 3.59892 3.99234 4.41676C4.81054 5.2346 6.13668 5.23431 6.95452 4.41619ZM19.5156 0.00930904C21.1313 0.0107417 22.44 1.32163 22.4385 2.93739C22.4371 4.55315 21.1262 5.86174 19.5105 5.86031C18.7339 5.86089 17.9892 5.55143 17.4417 5.00071C16.8941 4.45172 16.5868 3.70766 16.5875 2.93223C16.589 1.31647 17.8999 0.00787637 19.5156 0.00930904ZM20.9946 4.41497C21.8125 3.59684 21.8122 2.27063 20.9941 1.45279C20.1759 0.634954 18.8497 0.63524 18.0319 1.45336C17.6385 1.84591 17.4179 2.37901 17.4187 2.93474C17.4188 3.49018 17.6396 4.02285 18.0325 4.41554C18.8507 5.23338 20.1768 5.23309 20.9946 4.41497ZM14.5577 2.42335C15.701 3.56275 15.7042 5.41325 14.5648 6.55659C13.4254 7.69992 11.5749 7.70315 10.4316 6.56375C9.28826 5.42435 9.28504 3.57385 10.4244 2.43051C10.9719 1.8798 11.7166 1.57034 12.4932 1.57091C13.2671 1.57056 14.0095 1.87707 14.5577 2.42335ZM12.4926 6.59326C13.6494 6.59355 14.5874 5.65609 14.5878 4.49928C14.5885 3.94355 14.3679 3.41046 13.9746 3.0179C13.5819 2.62507 13.0492 2.40429 12.4938 2.40415C11.337 2.40386 10.3989 3.3414 10.3986 4.49813C10.3984 5.65487 11.3358 6.59291 12.4926 6.59326Z" fill="#4A4A4A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1101_31">
                                            <rect width="25" height="15" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-[25px] font-[500]">Refferals</p>
                            </div>
                        </div>
                        <div className="md:px-5 py-5 flex flex-col gap-3">
                            <p className="text-[18px] font-[500]">
                                Your Refferals
                            </p>
                            <p className="pt-3">
                                For every 2 referrals with a paying subscription, you get $10 off your next payment!
                            </p>

                            <p className="text-[18px] font-[500]">
                                Your Code:
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="border rounded-md w-[275px] ">
                                    <input
                                        value={value}
                                        onChange={handleValueChange}
                                        className="focus:outline-none pl-3 py-[5px] border-r bg-white"
                                        disabled={isDisabled}
                                    />

                                    <CopyToClipboard text={value} onCopy={handleCopy}   >
                                        <button className=""><GrCopy size={20} className="ml-3 mt-[6px]" /></button>
                                    </CopyToClipboard>

                                </div>
                                {copied ? <span className="bg-blue-600 text-white py-2 px-5  rounded-full">Copied.</span> : null}
                            </div>
                            <p className="text-xs">
                                Want to refer somebody? Give them this code!
                            </p>
                            <p className="text-[18px] font-[500]">
                                Your Refferals:
                            </p>
                            <p>
                                None Yet!
                            </p>
                            <div className="border-t w-full">
                            </div>
                            <div>
                                <p className="text-[18px] font-[500] pt-4">
                                    Reffered By:
                                </p>
                                <div className="flex md:items-center md:flex-row flex-col gap-3 pt-5">
                                    <p className="text-[18px] font-[500]">
                                        Refferral Code:
                                    </p>
                                    <input type="text" name="" id="" className="px-5 w-[200px] focus:outline-none py-2 border rounded-md" />
                                    <button
                                        className="bg-[#012B6D] hover:bg-blue-900 text-white  py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Submit Refferal
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </DashboardLayout>
        </div>
    );
};

export default Refferals;
