import { NotificationProps } from '../../types.ts';

export default function Notification(props: NotificationProps) {
  const { status, title, message } = props;

  let specialClasses = '';
  if (status === 'error') {
    specialClasses = 'error';
  }
  if (status === 'success') {
    specialClasses = 'success';
  }

  return (
    <section className={`notification ${specialClasses}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}
