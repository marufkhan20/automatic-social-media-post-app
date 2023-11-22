import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const Upload2 = () => {
    return (
        <div className='flex flex-col justify-center gap-5 items-center'>
            <div className='flex items-center gap-3'>
                <label htmlFor="" className='text-[18px] font-[500]'>Into Folder</label>

                <select
                    id="postSelector"
                    name="postSelector"
                    className='focus:outline-none border p-2 w-64'
                >
                    <option value=""></option>
                </select>
            </div>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text p-4">Click or drag file to this area to upload</p>
            </Dragger>

        </div>
    )
}

export default Upload2