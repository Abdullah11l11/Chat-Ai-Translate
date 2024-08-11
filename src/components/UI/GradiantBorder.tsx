import classes from './GradiantBorder.module.css'

type PropsGradiantBorder = {
  children: React.ReactNode;
  className: string;
};

const GradiantBorder: React.FC<PropsGradiantBorder> = (props) => {

  const newClassName = `${classes['gradiant-border']} ${props.className}`

  return <div className={newClassName}>{props.children}</div>;
};

export default GradiantBorder;
