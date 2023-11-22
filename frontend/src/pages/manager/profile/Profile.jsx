import React, { useCallback, useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, message } from 'antd';
import PersonalInfo from './PersonalInfo';
import LoginInfo from './LoginInfo';
import { BsBell } from 'react-icons/bs';
import { Checkbox } from 'antd';
import ManagerLayout from '../../../components/layout/ManagerLayout';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const ProfileManager = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: '/images/user.jpg',
        },
    ]);
    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };


    return (
        <div>
            <ManagerLayout>
                <div className="flex flex-col gap-y-10 items-start justify-start w-full">
                    <div
                        className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5 md:px-10 pt-6 pb-10"
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" viewBox="0 0 17 20" fill="none">
                                    <g clip-path="url(#clip0_1101_198)">
                                        <path d="M8.43479 10.7743C8.45549 10.7743 8.4762 10.7743 8.50104 10.7743C8.50932 10.7743 8.51761 10.7743 8.52589 10.7743C8.53831 10.7743 8.55487 10.7743 8.5673 10.7743C9.78055 10.7536 10.7619 10.3271 11.4866 9.51139C13.0808 7.71429 12.8157 4.63354 12.7868 4.33954C12.6832 2.1325 11.6398 1.0766 10.7785 0.583851C10.1367 0.215321 9.38717 0.0165631 8.55073 0H8.52175C8.51761 0 8.50932 0 8.50518 0H8.48034C8.02071 0 7.11802 0.0745342 6.2526 0.567288C5.38303 1.06004 4.32299 2.11594 4.21947 4.33954C4.19048 4.63354 3.92547 7.71429 5.51968 9.51139C6.24017 10.3271 7.22154 10.7536 8.43479 10.7743ZM5.32506 4.44306C5.32506 4.43064 5.3292 4.41822 5.3292 4.40994C5.46585 1.44099 7.57351 1.12215 8.4762 1.12215H8.49276C8.50104 1.12215 8.51346 1.12215 8.52589 1.12215C9.6439 1.147 11.5445 1.60248 11.6729 4.40994C11.6729 4.42236 11.6729 4.43478 11.677 4.44306C11.6812 4.47205 11.971 7.28778 10.6543 8.77019C10.1325 9.35818 9.43686 9.64803 8.52175 9.65631C8.51346 9.65631 8.50932 9.65631 8.50104 9.65631C8.49276 9.65631 8.48862 9.65631 8.48034 9.65631C7.56937 9.64803 6.86957 9.35818 6.35197 8.77019C5.03935 7.29607 5.32092 4.46791 5.32506 4.44306ZM17.0104 15.8841C17.0145 16.0994 17.0186 17.205 16.8116 17.7557C16.7702 17.8634 16.6915 17.9545 16.5963 18.0166C16.4721 18.0952 13.4948 19.9959 8.51346 19.9959C3.5321 19.9959 0.554873 18.0994 0.430649 18.0166C0.33127 17.9545 0.256736 17.8634 0.215328 17.7557C-0.00413334 17.2008 7.43242e-06 16.0952 0.00414822 15.8799C0.00414822 15.8758 0.00414822 15.8716 0.00414822 15.8675C0.00828901 15.8344 0.00828901 15.8012 0.00828901 15.764C0.0331337 14.9482 0.0869639 13.0311 1.88407 12.4141C1.89649 12.4099 1.90891 12.4058 1.92547 12.4017C3.80125 11.9255 5.34576 10.8489 5.36233 10.8364C5.61491 10.6584 5.96274 10.7205 6.14079 10.9731C6.31885 11.2257 6.25674 11.5735 6.00415 11.7516C5.93375 11.7971 4.28572 12.9482 2.22361 13.4783C1.25881 13.8219 1.15115 14.853 1.12216 15.7971C1.12216 15.8344 1.11802 15.8675 1.11802 15.9006C1.10974 16.2733 1.13872 16.8489 1.20498 17.1801C1.87992 17.5611 4.52589 18.882 8.50932 18.882C12.5093 18.882 15.1387 17.5652 15.8095 17.1843C15.8758 16.853 15.9006 16.2774 15.8965 15.9048C15.8923 15.8716 15.8923 15.8385 15.8923 15.8012C15.8634 14.8571 15.7557 13.8261 14.7909 13.4824C12.7288 12.9524 11.0808 11.8054 11.0104 11.7557C10.7578 11.5776 10.6957 11.2298 10.8737 10.9772C11.0518 10.7246 11.3996 10.6625 11.6522 10.8406C11.6687 10.853 13.2215 11.9296 15.089 12.4058C15.1015 12.4099 15.118 12.4141 15.1304 12.4182C16.9275 13.0311 16.9814 14.9482 17.0062 15.7681C17.0062 15.8054 17.0104 15.8385 17.0104 15.8716C17.0104 15.8758 17.0104 15.8799 17.0104 15.8841Z" fill="#4A4A4A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1101_198">
                                            <rect width="17" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-[25px] font-[500]">Update Your Profile</p>
                            </div>

                        </div>
                        <div className='flex flex-col justify-start items-start gap-5 w-full'>
                            <Upload
                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                listType="picture-circle"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal  centered visible={previewOpen}  title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img alt="example" style={{ width: '50%' , height: '50%' , objectFit: 'cover'  }} src={previewImage} className='mx-auto' />
                            </Modal>

                            <div className='md:w-[75%] w-full'>
                                <PersonalInfo />
                            </div>
                            <div className="border-t w-full">
                            </div>
                            <div className=' md:w-[75%] w-full'>
                                <LoginInfo />
                            </div>
                        </div>

                    </div>
                    <div
                        className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5 md:px-10 pt-6 pb-10 "
                        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <BsBell size={35} />
                                <p className="text-[25px] font-[500]">Update Your Profile</p>
                            </div>

                        </div>
                        <div className='flex   flex-col gap-5 mt-3'>
                            <div className='flex md:flex-row flex-col  md:items-center gap-3'>
                                <p className='text-base font-bold'>
                                    Sounds:
                                </p>
                                <Checkbox onChange={onChange} className='text-base'>Play chime when a post completes processing.</Checkbox>
                            </div>
                            <div className='flex  md:flex-row flex-col md:items-center gap-3'>
                                <p className='text-base font-bold'>
                                    Comment Notification:
                                </p>
                                <Checkbox onChange={onChange} className='text-base'>Get a pop-up on Vizzlie when it's time for a scheduled comment to go out.</Checkbox>
                            </div>
                            <div className='flex  md:flex-row flex-col md:items-center gap-3'>
                                <p className='text-base font-bold'>
                                    Shift-Enter warning:
                                </p>
                                <Checkbox onChange={onChange} className='text-base'>Show Shift-Enter warning when sending texts.</Checkbox>
                            </div>
                            <div className='flex md:flex-row flex-col  md:items-center gap-3'>
                                <p className='text-base font-bold'>
                                    Text Messages:
                                </p>
                                <Checkbox onChange={onChange} className='text-base'>Play chime when a post completes processing.</Checkbox>
                            </div>
                            <div className="mb-4 mt-7">
                                <button
                                    className="bg-[#FF5FC0]  text-white py-2 px-4 rounded-md "

                                >
                                    Save All Notification Settings
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </ManagerLayout>
        </div>
    )
}

export default ProfileManager