import React from 'react';

export default function useTitle(title: string): void {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}
