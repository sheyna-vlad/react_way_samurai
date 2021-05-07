import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.center}>
            <div className={classes.lds_heart}>
                <div/>
            </div>
        </div>

    )
}

export default Preloader
