import { useEffect } from 'react';

const Protection = () => {
    useEffect(() => {
        // Disable Right Click
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        // Disable Drag and Drop
        const handleDragStart = (e) => {
            e.preventDefault();
        };

        // Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, etc.)
        const handleKeyDown = (e) => {
            // F12
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // Ctrl+Shift+I (DevTools)
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
            }
            // Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
            }
            // Ctrl+U (View Source)
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null; // This component doesn't render anything visible
};

export default Protection;
