import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try{
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored ? stored === 'dark' : prefersDark;
                  var root = document.documentElement;
                  root.classList.toggle('dark', isDark);
                  root.classList.remove('theme-light', 'theme-dark');
                  root.classList.add(isDark ? 'theme-dark' : 'theme-light');
                  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                }catch(e){}
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
