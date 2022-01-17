type ref = React.MutableRefObject<any>;

function showBar(barRef:ref) {
  const bar = barRef.current!;
  bar.className = 'cart-and-order-bar show';
}

export default showBar;