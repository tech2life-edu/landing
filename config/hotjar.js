export const initHotjar = () => {
    // Reemplaza "YOUR_HOTJAR_ID" con tu ID de Hotjar
    const hotjarId = "3494379";
  
    // Agrega el código de seguimiento de Hotjar
    if (typeof window !== "undefined") {
      // Crea un elemento de script
      const script = document.createElement("script");
      script.innerHTML = `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${hotjarId},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
  
      // Agrega el script al documento
      document.head.appendChild(script);
    }
  };