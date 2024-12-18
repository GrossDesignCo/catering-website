import cx from 'classnames';

interface FormItemProps {
  className?: string;
  children?: React.ReactNode;
}

export const FormItem = ({ className, children }: FormItemProps) => {
  return <div className={cx('form-item', className)}>{children}</div>;
};
