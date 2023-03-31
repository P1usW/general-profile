import React, {useEffect, useRef} from 'react';

interface TC {
    children?: React.ReactNode,
    className: string
}

const TransitionContainer = (props: TC) => {
    const wrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function scrolling() {
            if (!wrapper.current) return;
            wrapper.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${-window.scrollY}, 0, 1)`
        }

        if (wrapper.current) {
            window.addEventListener('scroll', scrolling)
        }
        return () => {
            window.removeEventListener('scroll', scrolling)
        }
    }, [])

    return (
        <div className={props.className} ref={wrapper}>
            {props.children}
        </div>
    );
};

export default TransitionContainer;