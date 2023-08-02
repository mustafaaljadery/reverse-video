import { Button, Upload } from 'antd';

interface Props {
  disabled: boolean;
  onChange: any;
  onRemove: any;
}

export function VideoUpload({ disabled, onChange, onRemove }: Props) {
  return (
    <>
      <Upload
        disabled={disabled}
        beforeUpload={() => {
          return false;
        }}
        accept="video/*"
        onChange={(info) => {
          if (info.fileList && info.fileList.length > 0) {
            onChange(info.fileList[0].originFileObj);
          }
        }}
        showUploadList={false}
      >
        <Button>Upload Video</Button>
      </Upload>
      <Button
        danger={true}
        disabled={!disabled}
        onClick={() => {
          onRemove(undefined);
        }}
      >
        Remove
      </Button>
    </>
  );
}
