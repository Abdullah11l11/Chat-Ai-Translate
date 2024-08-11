import classes from './FormContainer.module.css'

const FromContainer: React.FC<{children: React.ReactNode}> = (props) => {
  return <div className={classes.holder}>{props.children}</div>
}

export default FromContainer