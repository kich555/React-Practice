import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
} from 'react';

import './InfiniteScrollLoop.scss';

const GERMAN_DIGITS = [
  '짜장면',
  '짬뽕',
  '탕수육',
  '전가복',
  '어향동고',
  '팔보채',
  '멘보샤',
];

export default function InfiniteScrollLoop({
  surroundingBackup = 8,
  outerStyle,
  innerStyle,
  children,
}) {
  const contentRef = useRef(null);
  const scrollRef = useRef(null);
  const [height, setHeight] = useState(0);
  const backupHeight = height * surroundingBackup;

  useEffect(() => {
    setInterval(() => {
      scrollRef.current.scrollTop += 1;
    }, 0.5);
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }

      // console.log(height / GERMAN_DIGITS.length);
      console.log('current scroll', scroll % height);
    }
  }, [height]);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      scrollRef.current.scrollTop = backupHeight;
    }
  });

  return (
    <div className="infinite-scroll-loop-outer" style={outerStyle}>
      <div className="box"></div>
      <div
        className="infinite-scroll-loop-inner"
        ref={scrollRef}
        style={{
          height: 300,
          ...innerStyle,
        }}
        onScroll={handleScroll}
      >
        {Array(surroundingBackup)
          .fill()
          .map(() => (
            <div>{children}</div>
          ))}
        <div ref={contentRef}>{children}</div>
        {Array(surroundingBackup)
          .fill()
          .map(() => (
            <div>{children}</div>
          ))}
      </div>
    </div>
  );
}

// ReactDOM.render(
//   <InfiniteScrollLoop>
//     {Array.from(GERMAN_DIGITS.entries()).map(([index, digit]) => (
//       <div>{digit}</div>
//     ))}
//   </InfiniteScrollLoop>,
//   document.querySelector('main'),
// );
