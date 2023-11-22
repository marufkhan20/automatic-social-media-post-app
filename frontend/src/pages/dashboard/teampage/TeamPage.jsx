import React, { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'
import { BsBell, BsImageAlt } from 'react-icons/bs'
import { CiSettings, CiStar } from 'react-icons/ci';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Button, Dropdown, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must be smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
const TeamPage = () => {
    const [open3, setOpen3] = useState(false);

    const showModal3 = () => {
        setOpen3(true);
    };

    const handleOk3 = (e) => {
        console.log(e);
        setOpen3(false);
    };

    const handleCancel3 = (e) => {
        console.log(e);
        setOpen3(false);
    };
    const teamMembers = [
        { name: 'James Williams', email: 'jameswilliams@example.com', roles: [<CiSettings size={20} />, <IoMdAdd size={25} />, <AiOutlineEdit size={25} />, <CiStar size={25} />] },
    ];
    const [teamName, setTeamName] = useState("Vertex Team");
    const [description, setDescription] = useState(" We are vertex team and we are aim to developing leaders.");
    const [joinCode, setJoinCode] = useState("200416");
    const [logo, setLogo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const handleTeamNameChange = (e) => {
        const newName = e.target.value;
        if (newName.length <= 50) {
            setTeamName(newName);
        }
    };

    const handleDescriptionChange = (e) => {
        const newDescription = e.target.value;
        if (newDescription.length <= 800) {
            setDescription(newDescription);
        }
    };

    const handleJoinCodeChange = (e) => {
        const newJoinCode = e.target.value;
        if (newJoinCode.length <= 50) {
            setJoinCode(newJoinCode);
        }
    };

    const handleLogoChange = (e) => {
        const selectedLogo = e.target.files[0];
        setLogo(selectedLogo);
    };
    const [open, setOpen] = useState(false);



    const showModal = () => {
        setOpen(true);
    };


    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const [activeRow, setActiveRow] = useState(null);

    const toggleDropdown = (id) => {
        setActiveRow(activeRow === id ? null : id);
    };
    const items = [
        {
            key: '1',
            label: 'Edit',
            onClick: () => showModal3(),
        },
        {
            key: '2',
            label: 'Remove',
            // onClick: () => setIsUntrack(true),
        },
    ];
    const [isAdmin, setIsAdmin] = useState(true);
    const [isMembershipApproval, setIsMembershipApproval] = useState(true);
    const [isContentEditor, setIsContentEditor] = useState(true);
    const [isLeader, setIsLeader] = useState(true);


    return (
        <div>
            <DashboardLayout>
                <div
                    className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  px-5 md:px-10 pt-6 pb-10"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className='w-[150px] h-[150px] rounded-md flex justify-center items-center bg-gray-300'>
                                <BsImageAlt size={35} className='text-gray-400' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className="text-[25px] font-[500]">Vertex Team</p>
                                <p>
                                    We are vertex team and we are aim to developing leaders.
                                </p>
                                <p>
                                    Team Code:
                                    <span className='font-[500]'> 200416 </span>
                                </p>
                                <p>
                                    Members:
                                    <span className='font-[500]'> 1</span>
                                </p>


                            </div>

                        </div>

                    </div>
                    <div className='flex items-center gap-4'>
                        <button onClick={showModal} className='bg-[#FF5FC0] text-white py-2 px-6 rounded-md'>
                            Edit
                        </button>
                        <button className='bg-red-500 text-white py-2 px-6 rounded-md'>
                            Leave
                        </button>
                    </div>

                </div>
                <div
                    className="flex flex-col justify-start items-start gap-5 w-full bg-white rounded-md  mt-5 px-5 md:px-10 pt-6 pb-10 "
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="flex flex-col  w-full">
                        <div className="flex items-center gap-3">
                            <BsBell size={35} />
                            <p className="text-[25px] font-[500]">Join Request</p>
                        </div>
                        <div>
                            <p className='pt-5'>
                                There are no join requests at this time.

                            </p>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col justify-start items-start gap-3 w-full bg-white rounded-md px-5 md:px-10 py-6 mt-5' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="21" viewBox="0 0 35 21" fill="none">
                            <g clip-path="url(#clip0_1201_14)">
                                <path d="M29.565 9.19126H25.0681C24.1388 9.19065 23.2252 9.43114 22.4165 9.88925C21.7283 10.2797 21.1329 10.8148 20.6716 11.4577C20.3643 11.4041 20.0529 11.3773 19.7409 11.3775H15.24C14.9281 11.3772 14.6167 11.4041 14.3094 11.4577C13.8482 10.8147 13.2528 10.2796 12.5644 9.88925C11.7558 9.43114 10.8422 9.19065 9.91282 9.19126H5.41597C2.42784 9.19788 0.00712054 11.6186 0.000501633 14.6067V17.6595C0.00270794 17.9792 0.26245 18.2371 0.582164 18.2371H9.80852V19.8417C9.80852 20.1629 10.069 20.4233 10.3902 20.4233H24.5747C24.8959 20.4233 25.1564 20.1629 25.1564 19.8417V18.2371H34.3827C34.704 18.2371 34.9644 17.9767 34.9644 17.6554V14.6067C34.9578 11.6248 32.5468 9.2067 29.565 9.19126ZM9.8687 16.2715V16.3958C9.8687 16.452 9.8687 16.5042 9.8687 16.5603V16.793V17.0738H1.16383V14.6067C1.17044 12.261 3.07027 10.3612 5.41597 10.3546H9.91282C10.641 10.3538 11.3569 10.5417 11.9908 10.9001C12.4157 11.1404 12.7969 11.4511 13.118 11.8188C11.3079 12.6044 10.0648 14.3081 9.8687 16.2715ZM23.981 16.793V19.264H10.9879V16.7488C10.9879 16.7034 10.9879 16.6593 10.9879 16.6165C10.9879 16.547 10.9879 16.4774 10.9879 16.4079V16.3036C10.9879 16.2635 10.9879 16.2234 10.9879 16.1832V16.0549V16.0148V15.9706V15.8824L11.012 15.7861L11.0521 15.6417L11.0802 15.5454C11.6564 13.7989 13.2847 12.6164 15.1237 12.609L15.24 12.5448H19.7409C21.8767 12.5527 23.678 14.1379 23.9569 16.2554C23.9569 16.3437 23.9569 16.4319 23.981 16.5202C23.981 16.6112 23.981 16.702 23.981 16.793ZM33.8171 17.0778H25.1524V16.7288C25.1524 16.6847 25.1524 16.6405 25.1524 16.5964C25.1524 16.551 25.1524 16.5055 25.1524 16.46C25.1524 16.3958 25.1524 16.3276 25.1524 16.2635V16.2033V16.1351V16.0107V15.9907V15.9425V15.8984V15.8703V15.8182V15.762V15.734V15.6978V15.6617V15.6256V15.5374V15.4973V15.4451V15.393L25.1243 15.2927V15.2526V15.2165V15.1884V15.1483V15.0961L25.0681 14.9397C24.5454 13.5502 23.4794 12.4335 22.1157 11.8468C22.357 11.4896 22.6504 11.1705 22.9862 10.9001C23.62 10.5417 24.3359 10.3538 25.0641 10.3546H29.565C31.9106 10.3612 33.8105 12.261 33.8171 14.6067V17.0778ZM10.5587 1.22048C11.3254 1.98918 11.7554 3.03075 11.7545 4.11636C11.7525 6.37842 9.91724 8.21045 7.65517 8.20845C5.39311 8.20644 3.56107 6.3711 3.56308 4.10914C3.56509 1.84707 5.40043 0.0150384 7.66239 0.0170441C8.7496 0.0162418 9.79218 0.44948 10.5587 1.22048ZM9.73632 6.18266C10.287 5.63309 10.5959 4.88676 10.5948 4.10873C10.5946 3.33111 10.2855 2.58538 9.73552 2.03561C8.59004 0.89064 6.73344 0.891041 5.58847 2.03641C4.4435 3.18189 4.4439 5.03849 5.58927 6.18346C6.73474 7.32843 8.59135 7.32803 9.73632 6.18266ZM27.3219 0.0130327C29.5838 0.0150384 31.416 1.85028 31.414 4.11235C31.4119 6.37441 29.5766 8.20644 27.3146 8.20444C26.2274 8.20524 25.1849 7.772 24.4184 7.001C23.6517 6.2324 23.2215 5.19073 23.2225 4.10512C23.2246 1.84306 25.0599 0.0110269 27.3219 0.0130327ZM29.3925 6.18096C30.5374 5.03558 30.537 3.17888 29.3917 2.03391C28.2462 0.888935 26.3896 0.889336 25.2446 2.03471C24.694 2.58428 24.3851 3.33061 24.3862 4.10863C24.3864 4.88626 24.6955 5.63199 25.2454 6.18176C26.3909 7.32673 28.2475 7.32633 29.3925 6.18096ZM20.3807 3.39269C21.9814 4.98785 21.9859 7.57855 20.3908 9.17922C18.7956 10.7799 16.2049 10.7844 14.6042 9.18925C13.0036 7.59409 12.999 5.00339 14.5942 3.40272C15.3607 2.63171 16.4033 2.19848 17.4905 2.19928C18.5739 2.19878 19.6133 2.6279 20.3807 3.39269ZM17.4897 9.23057C19.1091 9.23097 20.4223 7.91852 20.4228 6.29899C20.424 5.52097 20.1151 4.77464 19.5644 4.22507C19.0146 3.6751 18.2689 3.36601 17.4913 3.36581C15.8718 3.36541 14.5585 4.67796 14.5581 6.29739C14.5577 7.91682 15.8701 9.23007 17.4897 9.23057Z" fill="#4A4A4A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1201_14">
                                    <rect width="35" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-[25px] font-[500]'>
                            Team Members
                        </p>
                    </div>
                    <div className='overflow-x-scroll md:overflow-hidden overflow-y-hidden w-full'>
                    <table className="w-full ">
                        <thead className=" text-gray-700">
                            <tr>
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Roles</th>
                            </tr>
                        </thead>

                        <tbody className='cursor-pointer'>
                            {teamMembers.map((member, index) => (
                                <tr key={index} className={`l text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="p-2">
                                        {member.name}
                                        <br />
                                        <small className="text-gray-600">(Admin)</small>
                                    </td>
                                    <td className="p-2">{member.email}</td>
                                    <Dropdown
                                        style={{
                                            width: '200px'
                                        }}
                                        menu={{
                                            items,
                                            selectable: false,
                                        }}
                                    >
                                        <td className="p-2 flex items-center gap-1 justify-center">
                                            {member.roles.map((role, roleIndex) => (
                                                <div key={roleIndex} className={`mt-2 text-gray-800 `} >
                                                    {role}

                                                </div>
                                            ))}
                                        </td>
                                    </Dropdown>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    </div>
                </div>
                <Modal
                    title={null}
                    closable={false}
                    visible={open}
                    centered
                    onCancel={handleCancel}
                    width={700}
                    wrapClassName="custom-modal"
                    footer={[
                        <Button
                            type="submit"
                            key="ok"
                            className="bg-[#012B6D] h-[48px] w-[140px] text-[18px] rounded-md text-white"
                            onClick={handleOk}
                        >
                            Save
                        </Button>,
                        <Button
                            key="cancel"
                            className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>,
                    ]}
                >
                    <div className="bg-[#012B6D] w-[328px] md:w-[700px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                        <h1 className="text-[25px] text-white">Edit Team</h1>
                    </div>
                    <div>
                        <form className='my-5'>
                            <div className="mb-4 flex items-center gap-2">
                                <label htmlFor="teamName" className="block font-medium">
                                    Team Name:
                                </label>
                                <input
                                    type="text"
                                    id="teamName"
                                    className="border rounded-md p-2 w-72 focus:outline-none"
                                    value={teamName}
                                    onChange={handleTeamNameChange}
                                    maxLength={50}
                                />
                                <p>
                                    ({teamName.length}/50)
                                </p>
                            </div>
                            <div className="mb-4 flex items-start gap-2">
                                <label htmlFor="description" className="block font-medium">
                                    Description:
                                </label>
                                <textarea
                                    id="description"
                                    className="border rounded-md p-2 w-72 focus:outline-none"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    maxLength={800}
                                    rows={4}
                                />
                                <p>
                                    ({description.length}/800)
                                </p>
                            </div>
                            <div className="mb-4 flex items-center gap-2 ml-3" >
                                <label htmlFor="joinCode" className="block font-medium">
                                    Join Code:
                                </label>
                                <input
                                    type="text"
                                    id="joinCode"
                                    className="border rounded-md p-2 w-72 focus:outline-none"
                                    value={joinCode}
                                    onChange={handleJoinCodeChange}
                                    maxLength={50}
                                />
                                <p>
                                    ({joinCode.length}/50)
                                </p>
                            </div>
                            <div className="mb-4 flex items-center gap-2" >
                                <label htmlFor="logo" className="block font-medium ml-11">
                                    Logo:
                                </label>
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            </div>

                        </form>
                    </div>

                </Modal>
                <Modal
                    title={null}
                    closable={false}
                    visible={open3}
                    centered
                    onCancel={handleCancel3}
                    wrapClassName="custom-modal" // Apply a custom CSS class to the Modal wrapper
                    footer={[
                        <Button
                            type="submit"
                            key="ok"
                            className="bg-[#012B6D] h-[48px] px-3 text-[18px] rounded-md text-white"
                            onClick={handleOk3}
                        >
                            Save Changes
                        </Button>,
                        <Button
                            key="cancel"
                            className="text-[18px] h-[48px] w-[122px] rounded-md border border-[#4A4A4A] text-[#4A4A4A]"
                            onClick={handleCancel3}
                        >
                            Cancel
                        </Button>,
                    ]}
                >
                    <div className="bg-[#012B6D] w-[328px] md:w-[520px] rounded-t-md p-5 ml-[-1.5rem] mt-[-1.3rem]">
                        <h1 className="text-[25px] text-white">Adjust Roles</h1>
                    </div>
                    <div>
                        <div className="p-4 flex flex-col justify-start items-start text-left">
                            <div className="mb-4  flex items-center gap-4 flex-row-reverse justify-start">
                                <label className="block text-gray-700">Admin</label>
                                <input
                                    type="checkbox"
                                    checked={isAdmin}
                                    onChange={() => setIsAdmin(!isAdmin)}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                            </div>

                            <div className="mb-4  flex items-center gap-4 flex-row-reverse justify-start">
                                <label className="block text-gray-700">Membership Approval</label>
                                <input
                                    type="checkbox"
                                    checked={isMembershipApproval}
                                    onChange={() => setIsMembershipApproval(!isMembershipApproval)}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                            </div>

                            <div className="mb-4  flex items-center gap-4 flex-row-reverse justify-start">
                                <label className="block text-gray-700">Content Editor</label>
                                <input
                                    type="checkbox"
                                    checked={isContentEditor}
                                    onChange={() => setIsContentEditor(!isContentEditor)}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                            </div>

                            <div className="mb-4 flex items-center gap-4 flex-row-reverse justify-start">
                                <label className="block text-gray-700">Leader</label>
                                <input
                                    type="checkbox"
                                    checked={isLeader}
                                    onChange={() => setIsLeader(!isLeader)}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                </Modal>
            </DashboardLayout>
        </div>
    )
}

export default TeamPage