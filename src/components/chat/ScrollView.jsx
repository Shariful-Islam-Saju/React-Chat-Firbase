import { useEffect, useRef } from "react";

const ScrollView = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [endRef]);

  return (
    <div>
      <div ref={endRef}></div> {/* End marker for scrolling */}
    </div>
  );
};

export default ScrollView;
