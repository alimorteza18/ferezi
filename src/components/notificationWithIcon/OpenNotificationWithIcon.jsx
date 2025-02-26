
import { notification } from 'antd';
const OpenNotificationWithIcon = (message, description, type, placement) => {
  // type = type || 
  notification[type || "success"]({
    message,
    description,
    placement: placement || "bottomLeft", 
  });
};
notification.config({
  // placement: 'bottomRight',
  // bottom: 50,
  duration: 3,
  rtl: true,
});

export default OpenNotificationWithIcon 