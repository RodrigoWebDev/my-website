//https://bestiejs.github.io/platform.js/

export const Debug = () => {
  return (
    <div class="p-2 max-w-3xl mx-auto my-8">
      <h2 class="text-3xl mb-4">System info</h2>

      <ul>
        <li>
          <strong>location.href:</strong> {location.href}
        </li>
        <li>
          <strong>innerHeight(Default):</strong> {innerHeight}
        </li>
        <li>
          <strong>outerHeight:</strong> {outerHeight}
        </li>
        <li>
          <strong>innerWidth(Default):</strong> {innerWidth}
        </li>
        <li>
          <strong>outerWidth:</strong> {outerWidth}
        </li>
        <li>
          <strong>navigator.userAgent:</strong> {navigator.userAgent}
        </li>
        <li>
          <strong>navigator.userAgentData(Chromium):</strong>
          {/* @ts-ignore */}
          {JSON.stringify(navigator.userAgentData)}
        </li>
        <li>
          <strong>navigator.language:</strong> {navigator.language}
        </li>
        <li>
          <strong>navigator.languages:</strong> {navigator.languages.join(", ")}
        </li>
        <li>
          <strong>navigator.platform(deprecated):</strong> {navigator.platform}
        </li>
        <li>
          <strong>navigator.vendor(deprecated):</strong> {navigator.vendor}
        </li>
        <li>
          {/* @ts-ignore */}
          <strong>navigator.oscpu(Firefox):</strong> {navigator.oscpu}
        </li>
        <li>
          <strong>navigator.appVersion(deprecated):</strong> {/* @ts-ignore */}
          {navigator.appVersion}
        </li>
        <li>
          <strong>navigator.onLine:</strong> {JSON.stringify(navigator.onLine)}
        </li>
        <li>
          <strong>navigator.cookieEnabled:</strong>{" "}
          {JSON.stringify(navigator.cookieEnabled)}
        </li>
      </ul>

      <h2 class="text-3xl my-4">Logs</h2>
    </div>
  );
};
