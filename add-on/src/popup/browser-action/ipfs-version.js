'use strict'
/* eslint-env browser, webextensions */

const browser = require('webextension-polyfill')
const html = require('choo/html')

function statusEntry ({ label, labelLegend, value, check, valueClass = '' }) {
  const offline = browser.i18n.getMessage('panel_statusOffline')
  label = label ? browser.i18n.getMessage(label) : null
  labelLegend = labelLegend ? browser.i18n.getMessage(labelLegend) : label
  value = value || value === 0 ? value : offline
  return html`
      <div title="${labelLegend}" class="ma0 pa0" style="line-height: 0.25">
        <!-- <span class="f7 fw4 small-caps no-user-select ${check ? '' : 'o-60'}">${label}</span> -->
        <span class="f7 tr monospace force-select-all ${valueClass}" title="${value}">${value}</span>
      </div>
    `
}

module.exports = function ipfsVersion ({
  gatewayVersion
}) {
  return html`
  ${statusEntry({
    label: 'panel_statusGatewayVersion',
    value: gatewayVersion,
    check: gatewayVersion
  })}
  `
}