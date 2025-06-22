import React from 'react';
import Frame from 'react-frame-component';
import { StyleSheetManager } from 'styled-components'; 
import PageRenderer from './PageRenderer';
import type { SiteData } from '../../types/page-builder';

interface IframePreviewProps {
  siteData: SiteData;
  selectedComponentId: string | null;
  onSelectComponent: (id: string | null) => void;
  onRemoveComponent: (id: string) => void;
  onMoveComponent: (id: string, direction: 'up' | 'down') => void;
}

const IframePreview: React.FC<IframePreviewProps> = (props) => {
  const googleFontsLink = document.querySelectorAll('link[href*="fonts.googleapis.com"]');

  const initialContent = `
    <!DOCTYPE html>
    <html>
      <head>
        ${(Array.from(googleFontsLink).map(link => link.outerHTML)).join('')}
        <link href="/src/index.css" rel="stylesheet">
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `;

  return (
    <Frame
      id="preview-iframe"
      initialContent={initialContent}
      className="w-full h-full border-none"
    >
      <StyleSheetManager target={(document.getElementById('preview-iframe') as HTMLIFrameElement)?.contentDocument?.head}>
        <>
          <PageRenderer {...props} />
        </>
      </StyleSheetManager>
    </Frame>
  );
};

export default IframePreview;
