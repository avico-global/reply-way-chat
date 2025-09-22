import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/reply.png" />
        <link rel="shortcut icon" href="/reply.png" />
        <link rel="apple-touch-icon" href="/reply.png" />
      </Head>
      <body className="antialiased">
        {/* Theme init to avoid flash and ensure consistency */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try{
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored ? stored === 'dark' : prefersDark;
                  var root = document.documentElement;

                  // Tailwind dark utilities
                  root.classList.toggle('dark', isDark);

                  // CSS variable themes
                  root.classList.remove('theme-light', 'theme-dark');
                  root.classList.add(isDark ? 'theme-dark' : 'theme-light');

                  // Data attribute for optional targeting
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
