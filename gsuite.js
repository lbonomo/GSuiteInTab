"use strict";

/* globals browser */

const OpenTab = (tabs, url) => {  
  if ( tabs.length === 0 ) {
    // console.log('Create new tab');
    browser.tabs.create({ url:url });
  } else {
    let tab = tabs[0]
    let tabId = tab.id
    // console.log(`Go to tab: ${url} (${tabId})`);
    browser.tabs.update(tabId, {active: true });
  }
}

const onError = (error) => {
  console.log(`Error: ${error}`);
}

const QueryTabs = (url) => { 
  // console.log(`Click: ${url}`);
  let domain = (new URL(url));
  let querying = browser.tabs.query({url:`${domain.protocol}//${domain.hostname}/*`});
  querying.then((tabs) => {
    OpenTab(tabs, url)
  }, onError);
}

window.addEventListener("click", LoadClick)

function LoadClick(e) {
  switch ( e.target.id ) {
    case 'calendar':
      QueryTabs('https://calendar.google.com/');
      break;
    case 'tasks':
      QueryTabs('https://tasks.google.com/embed/?origin=https://mail.google.com&fullWidth=1&lfhs=2&pli=1');
      break;
    case 'contacts':
      QueryTabs('https://contacts.google.com/');
      break;
    case 'keep':
      QueryTabs('https://keep.google.com/');
      break;
    case 'drive':
      QueryTabs('https://drive.google.com/');
      break;
    default:
      return;
  }
}

