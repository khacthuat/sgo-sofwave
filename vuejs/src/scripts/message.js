import { message } from "ant-design-vue";

// alert message

const messageAnt = {
    success: () => {
        message.success("Thao tác thành công");
    },
    error: () => {
        message.error("Thao tác thất bại");
    },
    warning: () => {
        message.warning("Cảnh báo!");
    },
};

export default messageAnt;
