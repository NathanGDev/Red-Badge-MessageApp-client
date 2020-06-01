import React from 'react';

export default function defer(Component: any) {
  const Defer = (props: any) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    return <Component mounted={mounted} {...props} />;
  };

  return Defer;
}