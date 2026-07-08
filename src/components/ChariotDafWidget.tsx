import { useEffect, useRef } from 'react';

const CHARIOT_SCRIPT_ID = 'chariot-connect-script';
const CHARIOT_SCRIPT_SRC = 'https://cdn.givechariot.com/chariot-connect.umd.js';

interface ChariotDafWidgetProps {
  connectId: string;
}

function loadChariotScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById(CHARIOT_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript?.dataset.loaded === 'true') {
      resolve();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Chariot script')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.id = CHARIOT_SCRIPT_ID;
    script.src = CHARIOT_SCRIPT_SRC;
    script.async = true;
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      resolve();
    }, { once: true });
    script.addEventListener('error', () => reject(new Error('Failed to load Chariot script')), {
      once: true,
    });
    document.body.appendChild(script);
  });
}

export default function ChariotDafWidget({ connectId }: ChariotDafWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!connectId || !containerRef.current) return;

    let widget: HTMLElement | null = null;
    let cancelled = false;

    loadChariotScript()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        widget = document.createElement('chariot-connect');
        widget.setAttribute('cid', connectId);
        containerRef.current.appendChild(widget);
      })
      .catch(() => {
        // Widget falls back to manual DAF instructions on the page.
      });

    return () => {
      cancelled = true;
      widget?.remove();
    };
  }, [connectId]);

  if (!connectId) return null;

  return <div ref={containerRef} className="min-h-[52px]" />;
}
