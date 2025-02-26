import classes from "./ChildCardSkeleton.module.scss";
const ChildCardSkeleton = () => {
  return (
    <div className={classes.container}>
      <div className={`${classes.skeletonChildWrapper} px-3 py-2  rounded-lg `}>
        <div className="flex flex-row gap-1 mb-2">
          <div className={`${classes.skeleton} ${classes.skeletonImage}`} />
          <div className={`${classes.skeleton} ${classes.skeletonTitle}`} />
        </div>
        <div className={`${classes.skeleton} ${classes.skeletonText}`} />
       
        <div className={classes.shimmerWrapper}>
          <div className={classes.shimmer}></div>
        </div>
      </div>
      <div className={classes.borderBottom} />
    </div>
  );
};

export default ChildCardSkeleton;
