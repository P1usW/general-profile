import React, {useRef, useEffect} from 'react';

interface TransitionComponentProps {
    className: string,
    speed: number,
    vertical?: boolean,
    children?: React.ReactNode,
}

const TransitionComponent = ({className,
                              speed,
                              vertical = true,
                              children}: TransitionComponentProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function scrolling() {
            if (!divRef.current) return;
            if (vertical === true) divRef.current.style.transform  = `translateY(${window.scrollY / speed}px)`;
            else divRef.current.style.transform  = `translateX(${window.scrollY / speed}px)`;
        }

        if (divRef.current) {
            window.addEventListener('scroll', scrolling)
        }
        return () => {
            window.removeEventListener('scroll', scrolling)
        }
    }, [])

    return (
        <div ref={divRef}
             className={className}>
            {children}
        </div>
    );
};

export default TransitionComponent;