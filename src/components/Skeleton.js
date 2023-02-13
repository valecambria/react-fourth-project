import classNames from 'classnames'

function Skeleton({times, className}){

    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    )
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-red-200',
        'via-white',
        'to-red-200'
    )

    const boxes = Array(times).fill(0).map((_, i) => {
        return ( <div key={i} className={outerClassNames}>
            <div className={innerClassNames}></div>
        </div>
        )
    })
    return boxes
}

export default Skeleton