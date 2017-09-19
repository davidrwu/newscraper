<!DOCTYPE html>
<html lang='en'>
<head prefix='og: http://ogp.me/ns#'>
<meta charset='utf-8'>
<meta content='IE=edge' http-equiv='X-UA-Compatible'>
<meta content='object' property='og:type'>
<meta content='GitLab' property='og:site_name'>
<meta content='18-Week/Homework/Solutions/public/assets/javascript/index.js · master · UCLA-Coding-Boot-Camp / 04-2017-Class-Repository' property='og:title'>
<meta content='GitLab Community Edition' property='og:description'>
<meta content='https://uclax.bootcampcontent.com/assets/gitlab_logo-cdf021b35c4e6bb149e26460f26fae81e80552bc879179dd80e9e9266b14e894.png' property='og:image'>
<meta content='https://uclax.bootcampcontent.com/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/master/18-Week/Homework/Solutions/public/assets/javascript/index.js' property='og:url'>
<meta content='summary' property='twitter:card'>
<meta content='18-Week/Homework/Solutions/public/assets/javascript/index.js · master · UCLA-Coding-Boot-Camp / 04-2017-Class-Repository' property='twitter:title'>
<meta content='GitLab Community Edition' property='twitter:description'>
<meta content='https://uclax.bootcampcontent.com/assets/gitlab_logo-cdf021b35c4e6bb149e26460f26fae81e80552bc879179dd80e9e9266b14e894.png' property='twitter:image'>

<title>18-Week/Homework/Solutions/public/assets/javascript/index.js · master · UCLA-Coding-Boot-Camp / 04-2017-Class-Repository · GitLab</title>
<meta content='GitLab Community Edition' name='description'>
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon-075eba76312e8421991a0c1f89a89ee81678bcde72319dd3e8047e2a47cd3a42.ico" />
<link rel="stylesheet" media="all" href="/assets/application-cfac18c411d70e400787563fd154166cc7a4c518616fd7d8e19798971c0cada6.css" />
<link rel="stylesheet" media="print" href="/assets/print-68eed6d8135d858318821e790e25da27b2b4b9b8dbb1993fa6765d8e2e3e16ee.css" />
<script src="/assets/application-52571672ad644e9182f4e84978caa4eddddd92f0859cc22cbf30ea4e7df7aff2.js"></script>
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="m0Hr9fYp4xDML+BmjBw3KlbpYuKOkE9iDldzu36tIkzhYNTUOx28tLTEXehN8Xf9JUxluDDLDY4XAKpPYPQDwA==" />
<script>
//<![CDATA[
window.gon={};gon.api_version="v3";gon.default_avatar_url="https://uclax.bootcampcontent.com/assets/no_avatar-07eeb128b993e74003e8664cff0b8e1e7234cec0443766a6763df32ca3472c23.png";gon.default_issues_tracker="gitlab";gon.max_file_size=10;gon.relative_url_root="";gon.shortcuts_path="/help/shortcuts";gon.user_color_scheme="white";gon.current_user_id=230;gon.api_token="PyJoHmgPvx2wzBCq7UyL";
//]]>
</script>
<meta content='origin-when-cross-origin' name='referrer'>
<meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
<meta content='#474D57' name='theme-color'>
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-2d64ecc33893baab71adc15ff19a803a59911cc2651fb9d4d62af1379ff89aab.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-d08897d57e1bc9400024ac15465340e832a8e7b166b91624138d48ea2c739596.png" sizes="76x76" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-retina-81446c57f3351d1dacd0fb5f23ced74ba63d3878810bedea343999c6a12b3915.png" sizes="120x120" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-retina-e2a776da039936ac240e76615add47b25ab77c75a5fa2d1b3907f83d5502b911.png" sizes="152x152" />
<link color='rgb(226, 67, 41)' href='/assets/logo-d36b5212042cebc89b96df4bf6ac24e43db316143e89926c0db839ff694d2de4.svg' rel='mask-icon'>
<meta content='/assets/msapplication-tile-49c9c46afd2ab9bbf35e69138bc62f8c31fa55584bd494956ac6e58e6aadc813.png' name='msapplication-TileImage'>
<meta content='#30353E' name='msapplication-TileColor'>




<style>
  [data-user-is] {
    display: none !important;
  }
  
  [data-user-is="230"] {
    display: block !important;
  }
  
  [data-user-is="230"][data-display="inline"] {
    display: inline !important;
  }
  
  [data-user-is-not] {
    display: block !important;
  }
  
  [data-user-is-not][data-display="inline"] {
    display: inline !important;
  }
  
  [data-user-is-not="230"] {
    display: none !important;
  }
</style>

</head>

<body class='ui_charcoal' data-page='projects:blob:show'>
<script>
  window.project_uploads_path = "/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/uploads";
  window.markdown_preview_path = "/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/markdown_preview";
</script>

<header class='header-expanded navbar navbar-fixed-top navbar-gitlab'>
<div class='container-fluid'>
<div class='header-content'>
<button class='side-nav-toggle' type='button'>
<span class='sr-only'>Toggle navigation</span>
<i class="fa fa-bars"></i>
</button>
<button class='navbar-toggle' type='button'>
<span class='sr-only'>Toggle navigation</span>
<i class="fa fa-angle-left"></i>
</button>
<div class='navbar-collapse collapse'>
<ul class='nav navbar-nav'>
<li class='hidden-sm hidden-xs'>
<div class='has-location-badge search search-form'>
<form class="navbar-form" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<div class='search-input-container'>
<div class='search-location-badge'>
<span class='location-badge'>
<i class='location-text'>
This project
</i>
</span>
</div>
<div class='search-input-wrap'>
<div class='dropdown' data-url='/search/autocomplete'>
<input type="search" name="search" id="search" placeholder="Search" class="search-input dropdown-menu-toggle" spellcheck="false" tabindex="1" autocomplete="off" data-toggle="dropdown" />
<div class='dropdown-menu dropdown-select'>
<div class="dropdown-content"><ul>
<li>
<a class='is-focused dropdown-menu-empty-link'>
Loading...
</a>
</li>
</ul>
</div><div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
<i class='search-icon'></i>
<i class='clear-icon js-clear-input'></i>
</div>
</div>
</div>
<input type="hidden" name="group_id" id="group_id" />
<input type="hidden" name="project_id" id="search_project_id" value="40" />
<input type="hidden" name="search_code" id="search_code" value="true" />
<input type="hidden" name="repository_ref" id="repository_ref" value="master" />

<div class='search-autocomplete-opts hide' data-autocomplete-path='/search/autocomplete' data-autocomplete-project-id='40' data-autocomplete-project-ref='master'></div>
</form>

</div>

</li>
<li class='visible-sm visible-xs'>
<a title="Search" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/search"><i class="fa fa-search"></i>
</a></li>
<li>
<a title="Todos" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/dashboard/todos"><i class="fa fa-bell fa-fw"></i>
</a></li>
<li>
<a title="New project" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/projects/new"><i class="fa fa-plus fa-fw"></i>
</a></li>
<li>
<a class="logout" title="Sign out" data-toggle="tooltip" data-placement="bottom" data-container="body" rel="nofollow" data-method="delete" href="/users/sign_out"><i class="fa fa-sign-out"></i>
</a></li>
</ul>
</div>
<h1 class='title'><a href="/groups/UCLA-Coding-Boot-Camp">UCLA-Coding-Boot-Camp</a> / <a class="project-item-select-holder" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository">04-2017-Class-Repository</a><i data-target=".js-dropdown-menu-projects" data-toggle="dropdown" class="fa fa-chevron-down dropdown-toggle-caret js-projects-dropdown-toggle"></i> &middot; <a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master">Files</a></h1>
<div class='js-dropdown-menu-projects'>
<div class='dropdown-menu dropdown-select dropdown-menu-projects'>
<div class="dropdown-title"><span>Go to a project</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search your projects" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>

</div>
</div>
</header>

<script>
  var findFileURL = "/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/find_file/master";
</script>

<div class='page-sidebar-expanded page-with-sidebar'>
<div class='nicescroll sidebar-expanded sidebar-wrapper'>
<div class='header-logo'>
<a id='logo'>
<svg width="36" height="36" id="tanuki-logo">
  <path id="tanuki-right-ear" class="tanuki-shape" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"/>
  <path id="tanuki-left-ear" class="tanuki-shape" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"/>
  <path id="tanuki-nose" class="tanuki-shape" fill="#e24329" d="M18,34.38 3,14 33,14 Z"/>
  <path id="tanuki-right-eye" class="tanuki-shape" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"/>
  <path id="tanuki-left-eye" class="tanuki-shape" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"/>
  <path id="tanuki-right-cheek" class="tanuki-shape" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"/>
  <path id="tanuki-left-cheek" class="tanuki-shape" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"/>
</svg>

</a>
<a class="gitlab-text-container-link" title="Dashboard" id="js-shortcuts-home" href="/"><div class='gitlab-text-container'>
<h3>GitLab</h3>
</div>
</a></div>
<ul class='nav nav-sidebar'>
<li class=""><a title="Go to group" class="back-link" href="/groups/UCLA-Coding-Boot-Camp"><i class="fa fa-caret-square-o-left fa-fw"></i>
<span>
Go to group
</span>
</a></li><li class='separate-item'></li>
<li class="home"><a title="Project" class="shortcuts-project" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository"><i class="fa fa-bookmark fa-fw"></i>
<span>
Project
</span>
</a></li><li class=""><a title="Activity" class="shortcuts-project-activity" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/activity"><i class="fa fa-dashboard fa-fw"></i>
<span>
Activity
</span>
</a></li><li class="active"><a title="Files" class="shortcuts-tree" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master"><i class="fa fa-files-o fa-fw"></i>
<span>
Files
</span>
</a></li><li class=""><a title="Commits" class="shortcuts-commits" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/commits/master"><i class="fa fa-history fa-fw"></i>
<span>
Commits
</span>
</a></li><li class=""><a title="Pipelines" class="shortcuts-pipelines" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/pipelines"><i class="fa fa-ship fa-fw"></i>
<span>
Pipelines
<span class='count ci_counter'>0</span>
</span>
</a></li><li class=""><a title="Builds" class="shortcuts-builds" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/builds"><i class="fa fa-cubes fa-fw"></i>
<span>
Builds
<span class='count builds_counter'>0</span>
</span>
</a></li><li class=""><a title="Graphs" class="shortcuts-graphs" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/graphs/master"><i class="fa fa-area-chart fa-fw"></i>
<span>
Graphs
</span>
</a></li><li class=""><a title="Milestones" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/milestones"><i class="fa fa-clock-o fa-fw"></i>
<span>
Milestones
</span>
</a></li><li class=""><a title="Issues" class="shortcuts-issues" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/issues"><i class="fa fa-exclamation-circle fa-fw"></i>
<span>
Issues
<span class='count issue_counter'>0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="shortcuts-merge_requests" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/merge_requests"><i class="fa fa-tasks fa-fw"></i>
<span>
Merge Requests
<span class='count merge_counter'>0</span>
</span>
</a></li><li class=""><a title="Members" class="team-tab tab" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/project_members"><i class="fa fa-users fa-fw"></i>
<span>
Members
</span>
</a></li><li class=""><a title="Labels" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/labels"><i class="fa fa-tags fa-fw"></i>
<span>
Labels
</span>
</a></li><li class=""><a title="Wiki" class="shortcuts-wiki" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/wikis/home"><i class="fa fa-book fa-fw"></i>
<span>
Wiki
</span>
</a></li><li class=""><a title="Forks" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/forks"><i class="fa fa-code-fork fa-fw"></i>
<span>
Forks
</span>
</a></li><li class='hidden'>
<a title="Network" class="shortcuts-network" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/network/master">Network
</a></li>
<li class='hidden'>
<a class="shortcuts-new-issue" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/issues/new">Create a new issue
</a></li>
</ul>

<div class='collapse-nav'>
<a class="toggle-nav-collapse" title="Open/Close" href="#"><i class="fa fa-angle-left"></i></a>

</div>
<a class="sidebar-user" title="Profile" href="/u/davidrwu"><img alt="Profile" class="avatar avatar s36" src="https://secure.gravatar.com/avatar/3c4ddaa8be0656ed9a61bbd56a0e7b17?s=120&amp;d=identicon" />
<div class='username'>
davidrwu
</div>
</a></div>
<div class='content-wrapper controls-dropdown-visible'>


<div class='flash-container'>
</div>


<div class='container-fluid container-limited'>
<div class='content'>
<div class='clearfix'>


<div class='tree-holder' id='tree-holder'>
<div class='nav-block'>
<div class='tree-ref-holder'>
<form class="project-refs-form" action="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/refs/switch" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<select name="ref" id="ref" class="project-refs-select select2 select2-sm"><optgroup label="Branches"><option selected="selected" value="master">master</option></optgroup><optgroup label="Tags"></optgroup></select>
<input type="hidden" name="destination" id="destination" value="blob" />
<input type="hidden" name="path" id="path" value="18-Week/Homework/Solutions/public/assets/javascript/index.js" />
</form>


</div>
<ul class='breadcrumb repo-breadcrumb'>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master">04-2017-Class-Repository
</a></li>
<li>
<a href="#">..</a>
</li>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master/18-Week/Homework/Solutions/public/assets/javascript">javascript</a>
</li>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/master/18-Week/Homework/Solutions/public/assets/javascript/index.js"><strong>
index.js
</strong>
</a></li>
</ul>
</div>
<ul class='blob-commit-info hidden-xs'>
<li class='commit js-toggle-container' id='commit-84a2fc04'>
<div class='commit-row-title'>
<span class='item-title'>
<a class="commit-row-message" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/commit/84a2fc04eafe5de5c8a9a7b099c638ec79607b7a">add 20.1 and 18 solutions</a>
</span>
<div class='pull-right'>
<button class="btn btn-clipboard" data-clipboard-text="84a2fc04eafe5de5c8a9a7b099c638ec79607b7a" type="button"><i class="fa fa-clipboard"></i></button>
<a class="commit_short_id" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/commit/84a2fc04eafe5de5c8a9a7b099c638ec79607b7a">84a2fc04</a>
</div>
</div>
<div class='commit-row-info'>
by
<a class="commit-author-link has-tooltip" title="cameron.manavian@gmail.com" href="/u/cmanavian"><img class="avatar s24" width="24" alt="" src="https://secure.gravatar.com/avatar/27b124369621f4597afa77963542a402?s=48&amp;d=identicon" /> <span class="commit-author-name">Cameron Manavian</span></a>
<div class='committed_ago'>
<time class="time_ago js-timeago js-timeago-pending" datetime="2017-09-16T19:44:04Z" title="Sep 16, 2017 7:44pm" data-toggle="tooltip" data-placement="top" data-container="body">2017-09-16 12:44:04 -0700</time><script>
//<![CDATA[
$('.js-timeago-pending').removeClass('js-timeago-pending').timeago()
//]]>
</script> &nbsp;
</div>
<a class="pull-right" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/84a2fc04eafe5de5c8a9a7b099c638ec79607b7a">Browse Files</a>
</div>
</li>

</ul>
<div class='blob-content-holder' id='blob-content-holder'>
<article class='file-holder'>
<div class='file-title'>
<i class="fa fa-file-text-o fa-fw"></i>
<strong>
index.js
</strong>
<small>
4.77 KB
</small>
<div class='file-actions hidden-xs'>
<div class='btn-group tree-btn-group'>
<a class="btn btn-sm" target="_blank" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/raw/master/18-Week/Homework/Solutions/public/assets/javascript/index.js">Raw</a>
<a class="btn btn-sm" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blame/master/18-Week/Homework/Solutions/public/assets/javascript/index.js">Blame</a>
<a class="btn btn-sm" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/commits/master/18-Week/Homework/Solutions/public/assets/javascript/index.js">History</a>
<a class="btn btn-sm" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/315aee89cd71e382f781a6d81f4e7b37f5615c47/18-Week/Homework/Solutions/public/assets/javascript/index.js">Permalink</a>
</div>
<div class='btn-group' role='group'>
<a class="btn btn-file-option" rel="nofollow" data-method="post" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FUCLA-Coding-Boot-Camp%2F04-2017-Class-Repository%2Fedit%2Fmaster%2F18-Week%2FHomework%2FSolutions%2Fpublic%2Fassets%2Fjavascript%2Findex.js&amp;namespace_key=231">Edit</a>
<a class="btn btn-default" rel="nofollow" data-method="post" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.+Try+to+replace+this+file+again.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FUCLA-Coding-Boot-Camp%2F04-2017-Class-Repository%2Fblob%2Fmaster%2F18-Week%2FHomework%2FSolutions%2Fpublic%2Fassets%2Fjavascript%2Findex.js&amp;namespace_key=231">Replace</a>
<a class="btn btn-remove" rel="nofollow" data-method="post" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.+Try+to+delete+this+file+again.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FUCLA-Coding-Boot-Camp%2F04-2017-Class-Repository%2Fblob%2Fmaster%2F18-Week%2FHomework%2FSolutions%2Fpublic%2Fassets%2Fjavascript%2Findex.js&amp;namespace_key=231">Delete</a>
</div>

</div>
</div>
<div class='file-content code js-syntax-highlight'>
<div class='line-numbers'>
<a class='diff-line-num' data-line-number='1' href='#L1' id='L1'>
<i class="fa fa-link"></i>
1
</a>
<a class='diff-line-num' data-line-number='2' href='#L2' id='L2'>
<i class="fa fa-link"></i>
2
</a>
<a class='diff-line-num' data-line-number='3' href='#L3' id='L3'>
<i class="fa fa-link"></i>
3
</a>
<a class='diff-line-num' data-line-number='4' href='#L4' id='L4'>
<i class="fa fa-link"></i>
4
</a>
<a class='diff-line-num' data-line-number='5' href='#L5' id='L5'>
<i class="fa fa-link"></i>
5
</a>
<a class='diff-line-num' data-line-number='6' href='#L6' id='L6'>
<i class="fa fa-link"></i>
6
</a>
<a class='diff-line-num' data-line-number='7' href='#L7' id='L7'>
<i class="fa fa-link"></i>
7
</a>
<a class='diff-line-num' data-line-number='8' href='#L8' id='L8'>
<i class="fa fa-link"></i>
8
</a>
<a class='diff-line-num' data-line-number='9' href='#L9' id='L9'>
<i class="fa fa-link"></i>
9
</a>
<a class='diff-line-num' data-line-number='10' href='#L10' id='L10'>
<i class="fa fa-link"></i>
10
</a>
<a class='diff-line-num' data-line-number='11' href='#L11' id='L11'>
<i class="fa fa-link"></i>
11
</a>
<a class='diff-line-num' data-line-number='12' href='#L12' id='L12'>
<i class="fa fa-link"></i>
12
</a>
<a class='diff-line-num' data-line-number='13' href='#L13' id='L13'>
<i class="fa fa-link"></i>
13
</a>
<a class='diff-line-num' data-line-number='14' href='#L14' id='L14'>
<i class="fa fa-link"></i>
14
</a>
<a class='diff-line-num' data-line-number='15' href='#L15' id='L15'>
<i class="fa fa-link"></i>
15
</a>
<a class='diff-line-num' data-line-number='16' href='#L16' id='L16'>
<i class="fa fa-link"></i>
16
</a>
<a class='diff-line-num' data-line-number='17' href='#L17' id='L17'>
<i class="fa fa-link"></i>
17
</a>
<a class='diff-line-num' data-line-number='18' href='#L18' id='L18'>
<i class="fa fa-link"></i>
18
</a>
<a class='diff-line-num' data-line-number='19' href='#L19' id='L19'>
<i class="fa fa-link"></i>
19
</a>
<a class='diff-line-num' data-line-number='20' href='#L20' id='L20'>
<i class="fa fa-link"></i>
20
</a>
<a class='diff-line-num' data-line-number='21' href='#L21' id='L21'>
<i class="fa fa-link"></i>
21
</a>
<a class='diff-line-num' data-line-number='22' href='#L22' id='L22'>
<i class="fa fa-link"></i>
22
</a>
<a class='diff-line-num' data-line-number='23' href='#L23' id='L23'>
<i class="fa fa-link"></i>
23
</a>
<a class='diff-line-num' data-line-number='24' href='#L24' id='L24'>
<i class="fa fa-link"></i>
24
</a>
<a class='diff-line-num' data-line-number='25' href='#L25' id='L25'>
<i class="fa fa-link"></i>
25
</a>
<a class='diff-line-num' data-line-number='26' href='#L26' id='L26'>
<i class="fa fa-link"></i>
26
</a>
<a class='diff-line-num' data-line-number='27' href='#L27' id='L27'>
<i class="fa fa-link"></i>
27
</a>
<a class='diff-line-num' data-line-number='28' href='#L28' id='L28'>
<i class="fa fa-link"></i>
28
</a>
<a class='diff-line-num' data-line-number='29' href='#L29' id='L29'>
<i class="fa fa-link"></i>
29
</a>
<a class='diff-line-num' data-line-number='30' href='#L30' id='L30'>
<i class="fa fa-link"></i>
30
</a>
<a class='diff-line-num' data-line-number='31' href='#L31' id='L31'>
<i class="fa fa-link"></i>
31
</a>
<a class='diff-line-num' data-line-number='32' href='#L32' id='L32'>
<i class="fa fa-link"></i>
32
</a>
<a class='diff-line-num' data-line-number='33' href='#L33' id='L33'>
<i class="fa fa-link"></i>
33
</a>
<a class='diff-line-num' data-line-number='34' href='#L34' id='L34'>
<i class="fa fa-link"></i>
34
</a>
<a class='diff-line-num' data-line-number='35' href='#L35' id='L35'>
<i class="fa fa-link"></i>
35
</a>
<a class='diff-line-num' data-line-number='36' href='#L36' id='L36'>
<i class="fa fa-link"></i>
36
</a>
<a class='diff-line-num' data-line-number='37' href='#L37' id='L37'>
<i class="fa fa-link"></i>
37
</a>
<a class='diff-line-num' data-line-number='38' href='#L38' id='L38'>
<i class="fa fa-link"></i>
38
</a>
<a class='diff-line-num' data-line-number='39' href='#L39' id='L39'>
<i class="fa fa-link"></i>
39
</a>
<a class='diff-line-num' data-line-number='40' href='#L40' id='L40'>
<i class="fa fa-link"></i>
40
</a>
<a class='diff-line-num' data-line-number='41' href='#L41' id='L41'>
<i class="fa fa-link"></i>
41
</a>
<a class='diff-line-num' data-line-number='42' href='#L42' id='L42'>
<i class="fa fa-link"></i>
42
</a>
<a class='diff-line-num' data-line-number='43' href='#L43' id='L43'>
<i class="fa fa-link"></i>
43
</a>
<a class='diff-line-num' data-line-number='44' href='#L44' id='L44'>
<i class="fa fa-link"></i>
44
</a>
<a class='diff-line-num' data-line-number='45' href='#L45' id='L45'>
<i class="fa fa-link"></i>
45
</a>
<a class='diff-line-num' data-line-number='46' href='#L46' id='L46'>
<i class="fa fa-link"></i>
46
</a>
<a class='diff-line-num' data-line-number='47' href='#L47' id='L47'>
<i class="fa fa-link"></i>
47
</a>
<a class='diff-line-num' data-line-number='48' href='#L48' id='L48'>
<i class="fa fa-link"></i>
48
</a>
<a class='diff-line-num' data-line-number='49' href='#L49' id='L49'>
<i class="fa fa-link"></i>
49
</a>
<a class='diff-line-num' data-line-number='50' href='#L50' id='L50'>
<i class="fa fa-link"></i>
50
</a>
<a class='diff-line-num' data-line-number='51' href='#L51' id='L51'>
<i class="fa fa-link"></i>
51
</a>
<a class='diff-line-num' data-line-number='52' href='#L52' id='L52'>
<i class="fa fa-link"></i>
52
</a>
<a class='diff-line-num' data-line-number='53' href='#L53' id='L53'>
<i class="fa fa-link"></i>
53
</a>
<a class='diff-line-num' data-line-number='54' href='#L54' id='L54'>
<i class="fa fa-link"></i>
54
</a>
<a class='diff-line-num' data-line-number='55' href='#L55' id='L55'>
<i class="fa fa-link"></i>
55
</a>
<a class='diff-line-num' data-line-number='56' href='#L56' id='L56'>
<i class="fa fa-link"></i>
56
</a>
<a class='diff-line-num' data-line-number='57' href='#L57' id='L57'>
<i class="fa fa-link"></i>
57
</a>
<a class='diff-line-num' data-line-number='58' href='#L58' id='L58'>
<i class="fa fa-link"></i>
58
</a>
<a class='diff-line-num' data-line-number='59' href='#L59' id='L59'>
<i class="fa fa-link"></i>
59
</a>
<a class='diff-line-num' data-line-number='60' href='#L60' id='L60'>
<i class="fa fa-link"></i>
60
</a>
<a class='diff-line-num' data-line-number='61' href='#L61' id='L61'>
<i class="fa fa-link"></i>
61
</a>
<a class='diff-line-num' data-line-number='62' href='#L62' id='L62'>
<i class="fa fa-link"></i>
62
</a>
<a class='diff-line-num' data-line-number='63' href='#L63' id='L63'>
<i class="fa fa-link"></i>
63
</a>
<a class='diff-line-num' data-line-number='64' href='#L64' id='L64'>
<i class="fa fa-link"></i>
64
</a>
<a class='diff-line-num' data-line-number='65' href='#L65' id='L65'>
<i class="fa fa-link"></i>
65
</a>
<a class='diff-line-num' data-line-number='66' href='#L66' id='L66'>
<i class="fa fa-link"></i>
66
</a>
<a class='diff-line-num' data-line-number='67' href='#L67' id='L67'>
<i class="fa fa-link"></i>
67
</a>
<a class='diff-line-num' data-line-number='68' href='#L68' id='L68'>
<i class="fa fa-link"></i>
68
</a>
<a class='diff-line-num' data-line-number='69' href='#L69' id='L69'>
<i class="fa fa-link"></i>
69
</a>
<a class='diff-line-num' data-line-number='70' href='#L70' id='L70'>
<i class="fa fa-link"></i>
70
</a>
<a class='diff-line-num' data-line-number='71' href='#L71' id='L71'>
<i class="fa fa-link"></i>
71
</a>
<a class='diff-line-num' data-line-number='72' href='#L72' id='L72'>
<i class="fa fa-link"></i>
72
</a>
<a class='diff-line-num' data-line-number='73' href='#L73' id='L73'>
<i class="fa fa-link"></i>
73
</a>
<a class='diff-line-num' data-line-number='74' href='#L74' id='L74'>
<i class="fa fa-link"></i>
74
</a>
<a class='diff-line-num' data-line-number='75' href='#L75' id='L75'>
<i class="fa fa-link"></i>
75
</a>
<a class='diff-line-num' data-line-number='76' href='#L76' id='L76'>
<i class="fa fa-link"></i>
76
</a>
<a class='diff-line-num' data-line-number='77' href='#L77' id='L77'>
<i class="fa fa-link"></i>
77
</a>
<a class='diff-line-num' data-line-number='78' href='#L78' id='L78'>
<i class="fa fa-link"></i>
78
</a>
<a class='diff-line-num' data-line-number='79' href='#L79' id='L79'>
<i class="fa fa-link"></i>
79
</a>
<a class='diff-line-num' data-line-number='80' href='#L80' id='L80'>
<i class="fa fa-link"></i>
80
</a>
<a class='diff-line-num' data-line-number='81' href='#L81' id='L81'>
<i class="fa fa-link"></i>
81
</a>
<a class='diff-line-num' data-line-number='82' href='#L82' id='L82'>
<i class="fa fa-link"></i>
82
</a>
<a class='diff-line-num' data-line-number='83' href='#L83' id='L83'>
<i class="fa fa-link"></i>
83
</a>
<a class='diff-line-num' data-line-number='84' href='#L84' id='L84'>
<i class="fa fa-link"></i>
84
</a>
<a class='diff-line-num' data-line-number='85' href='#L85' id='L85'>
<i class="fa fa-link"></i>
85
</a>
<a class='diff-line-num' data-line-number='86' href='#L86' id='L86'>
<i class="fa fa-link"></i>
86
</a>
<a class='diff-line-num' data-line-number='87' href='#L87' id='L87'>
<i class="fa fa-link"></i>
87
</a>
<a class='diff-line-num' data-line-number='88' href='#L88' id='L88'>
<i class="fa fa-link"></i>
88
</a>
<a class='diff-line-num' data-line-number='89' href='#L89' id='L89'>
<i class="fa fa-link"></i>
89
</a>
<a class='diff-line-num' data-line-number='90' href='#L90' id='L90'>
<i class="fa fa-link"></i>
90
</a>
<a class='diff-line-num' data-line-number='91' href='#L91' id='L91'>
<i class="fa fa-link"></i>
91
</a>
<a class='diff-line-num' data-line-number='92' href='#L92' id='L92'>
<i class="fa fa-link"></i>
92
</a>
<a class='diff-line-num' data-line-number='93' href='#L93' id='L93'>
<i class="fa fa-link"></i>
93
</a>
<a class='diff-line-num' data-line-number='94' href='#L94' id='L94'>
<i class="fa fa-link"></i>
94
</a>
<a class='diff-line-num' data-line-number='95' href='#L95' id='L95'>
<i class="fa fa-link"></i>
95
</a>
<a class='diff-line-num' data-line-number='96' href='#L96' id='L96'>
<i class="fa fa-link"></i>
96
</a>
<a class='diff-line-num' data-line-number='97' href='#L97' id='L97'>
<i class="fa fa-link"></i>
97
</a>
<a class='diff-line-num' data-line-number='98' href='#L98' id='L98'>
<i class="fa fa-link"></i>
98
</a>
<a class='diff-line-num' data-line-number='99' href='#L99' id='L99'>
<i class="fa fa-link"></i>
99
</a>
<a class='diff-line-num' data-line-number='100' href='#L100' id='L100'>
<i class="fa fa-link"></i>
100
</a>
<a class='diff-line-num' data-line-number='101' href='#L101' id='L101'>
<i class="fa fa-link"></i>
101
</a>
<a class='diff-line-num' data-line-number='102' href='#L102' id='L102'>
<i class="fa fa-link"></i>
102
</a>
<a class='diff-line-num' data-line-number='103' href='#L103' id='L103'>
<i class="fa fa-link"></i>
103
</a>
<a class='diff-line-num' data-line-number='104' href='#L104' id='L104'>
<i class="fa fa-link"></i>
104
</a>
<a class='diff-line-num' data-line-number='105' href='#L105' id='L105'>
<i class="fa fa-link"></i>
105
</a>
<a class='diff-line-num' data-line-number='106' href='#L106' id='L106'>
<i class="fa fa-link"></i>
106
</a>
<a class='diff-line-num' data-line-number='107' href='#L107' id='L107'>
<i class="fa fa-link"></i>
107
</a>
<a class='diff-line-num' data-line-number='108' href='#L108' id='L108'>
<i class="fa fa-link"></i>
108
</a>
<a class='diff-line-num' data-line-number='109' href='#L109' id='L109'>
<i class="fa fa-link"></i>
109
</a>
<a class='diff-line-num' data-line-number='110' href='#L110' id='L110'>
<i class="fa fa-link"></i>
110
</a>
<a class='diff-line-num' data-line-number='111' href='#L111' id='L111'>
<i class="fa fa-link"></i>
111
</a>
<a class='diff-line-num' data-line-number='112' href='#L112' id='L112'>
<i class="fa fa-link"></i>
112
</a>
<a class='diff-line-num' data-line-number='113' href='#L113' id='L113'>
<i class="fa fa-link"></i>
113
</a>
<a class='diff-line-num' data-line-number='114' href='#L114' id='L114'>
<i class="fa fa-link"></i>
114
</a>
<a class='diff-line-num' data-line-number='115' href='#L115' id='L115'>
<i class="fa fa-link"></i>
115
</a>
<a class='diff-line-num' data-line-number='116' href='#L116' id='L116'>
<i class="fa fa-link"></i>
116
</a>
<a class='diff-line-num' data-line-number='117' href='#L117' id='L117'>
<i class="fa fa-link"></i>
117
</a>
<a class='diff-line-num' data-line-number='118' href='#L118' id='L118'>
<i class="fa fa-link"></i>
118
</a>
<a class='diff-line-num' data-line-number='119' href='#L119' id='L119'>
<i class="fa fa-link"></i>
119
</a>
<a class='diff-line-num' data-line-number='120' href='#L120' id='L120'>
<i class="fa fa-link"></i>
120
</a>
<a class='diff-line-num' data-line-number='121' href='#L121' id='L121'>
<i class="fa fa-link"></i>
121
</a>
<a class='diff-line-num' data-line-number='122' href='#L122' id='L122'>
<i class="fa fa-link"></i>
122
</a>
<a class='diff-line-num' data-line-number='123' href='#L123' id='L123'>
<i class="fa fa-link"></i>
123
</a>
<a class='diff-line-num' data-line-number='124' href='#L124' id='L124'>
<i class="fa fa-link"></i>
124
</a>
<a class='diff-line-num' data-line-number='125' href='#L125' id='L125'>
<i class="fa fa-link"></i>
125
</a>
<a class='diff-line-num' data-line-number='126' href='#L126' id='L126'>
<i class="fa fa-link"></i>
126
</a>
</div>
<div class='blob-content' data-blob-id='673237d1e6b3875d31e70fd89d410dcd095ea2ba'>
<pre class="code highlight"><code><span id="LC1" class="line"><span class="cm">/* gloabl bootbox */</span></span>
<span id="LC2" class="line"><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">ready</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></span>
<span id="LC3" class="line">  <span class="c1">// Setting a reference to the article-container div where all the dynamic content will go</span></span>
<span id="LC4" class="line">  <span class="c1">// Adding event listeners to any dynamically generated &quot;save article&quot;</span></span>
<span id="LC5" class="line">  <span class="c1">// and &quot;scrape new article&quot; buttons</span></span>
<span id="LC6" class="line">  <span class="kd">var</span> <span class="nx">articleContainer</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.article-container&quot;</span><span class="p">);</span></span>
<span id="LC7" class="line">  <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="s2">&quot;.btn.save&quot;</span><span class="p">,</span> <span class="nx">handleArticleSave</span><span class="p">);</span></span>
<span id="LC8" class="line">  <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="s2">&quot;.scrape-new&quot;</span><span class="p">,</span> <span class="nx">handleArticleScrape</span><span class="p">);</span></span>
<span id="LC9" class="line"></span>
<span id="LC10" class="line">  <span class="c1">// Once the page is ready, run the initPage function to kick things off</span></span>
<span id="LC11" class="line">  <span class="nx">initPage</span><span class="p">();</span></span>
<span id="LC12" class="line"></span>
<span id="LC13" class="line">  <span class="kd">function</span> <span class="nx">initPage</span><span class="p">()</span> <span class="p">{</span></span>
<span id="LC14" class="line">    <span class="c1">// Empty the article container, run an AJAX request for any unsaved headlines</span></span>
<span id="LC15" class="line">    <span class="nx">articleContainer</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span></span>
<span id="LC16" class="line">    <span class="nx">$</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s2">&quot;/api/headlines?saved=false&quot;</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC17" class="line">      <span class="c1">// If we have headlines, render them to the page</span></span>
<span id="LC18" class="line">      <span class="k">if</span> <span class="p">(</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC19" class="line">        <span class="nx">renderArticles</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></span>
<span id="LC20" class="line">      <span class="p">}</span></span>
<span id="LC21" class="line">      <span class="k">else</span> <span class="p">{</span></span>
<span id="LC22" class="line">        <span class="c1">// Otherwise render a message explaing we have no articles</span></span>
<span id="LC23" class="line">        <span class="nx">renderEmpty</span><span class="p">();</span></span>
<span id="LC24" class="line">      <span class="p">}</span></span>
<span id="LC25" class="line">    <span class="p">});</span></span>
<span id="LC26" class="line">  <span class="p">}</span></span>
<span id="LC27" class="line"></span>
<span id="LC28" class="line">  <span class="kd">function</span> <span class="nx">renderArticles</span><span class="p">(</span><span class="nx">articles</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC29" class="line">    <span class="c1">// This function handles appending HTML containing our article data to the page</span></span>
<span id="LC30" class="line">    <span class="c1">// We are passed an array of JSON containing all available articles in our database</span></span>
<span id="LC31" class="line">    <span class="kd">var</span> <span class="nx">articlePanels</span> <span class="o">=</span> <span class="p">[];</span></span>
<span id="LC32" class="line">    <span class="c1">// We pass each article JSON object to the createPanel function which returns a bootstrap</span></span>
<span id="LC33" class="line">    <span class="c1">// panel with our article data inside</span></span>
<span id="LC34" class="line">    <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">articles</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC35" class="line">      <span class="nx">articlePanels</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">createPanel</span><span class="p">(</span><span class="nx">articles</span><span class="p">[</span><span class="nx">i</span><span class="p">]));</span></span>
<span id="LC36" class="line">    <span class="p">}</span></span>
<span id="LC37" class="line">    <span class="c1">// Once we have all of the HTML for the articles stored in our articlePanels array,</span></span>
<span id="LC38" class="line">    <span class="c1">// append them to the articlePanels container</span></span>
<span id="LC39" class="line">    <span class="nx">articleContainer</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">articlePanels</span><span class="p">);</span></span>
<span id="LC40" class="line">  <span class="p">}</span></span>
<span id="LC41" class="line"></span>
<span id="LC42" class="line">  <span class="kd">function</span> <span class="nx">createPanel</span><span class="p">(</span><span class="nx">article</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC43" class="line">    <span class="c1">// This functiont takes in a single JSON object for an article/headline</span></span>
<span id="LC44" class="line">    <span class="c1">// It constructs a jQuery element containing all of the formatted HTML for the</span></span>
<span id="LC45" class="line">    <span class="c1">// article panel</span></span>
<span id="LC46" class="line">    <span class="kd">var</span> <span class="nx">panel</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span></span>
<span id="LC47" class="line">      <span class="p">[</span></span>
<span id="LC48" class="line">        <span class="s2">&quot;&lt;div class=&#39;panel panel-default&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC49" class="line">        <span class="s2">&quot;&lt;div class=&#39;panel-heading&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC50" class="line">        <span class="s2">&quot;&lt;h3&gt;&quot;</span><span class="p">,</span></span>
<span id="LC51" class="line">        <span class="s2">&quot;&lt;a class=&#39;article-link&#39; target=&#39;_blank&#39; href=&#39;&quot;</span> <span class="o">+</span> <span class="nx">article</span><span class="p">.</span><span class="nx">url</span> <span class="o">+</span> <span class="s2">&quot;&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC52" class="line">        <span class="nx">article</span><span class="p">.</span><span class="nx">headline</span><span class="p">,</span></span>
<span id="LC53" class="line">        <span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">,</span></span>
<span id="LC54" class="line">        <span class="s2">&quot;&lt;a class=&#39;btn btn-success save&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC55" class="line">        <span class="s2">&quot;Save Article&quot;</span><span class="p">,</span></span>
<span id="LC56" class="line">        <span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">,</span></span>
<span id="LC57" class="line">        <span class="s2">&quot;&lt;/h3&gt;&quot;</span><span class="p">,</span></span>
<span id="LC58" class="line">        <span class="s2">&quot;&lt;/div&gt;&quot;</span><span class="p">,</span></span>
<span id="LC59" class="line">        <span class="s2">&quot;&lt;div class=&#39;panel-body&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC60" class="line">        <span class="nx">article</span><span class="p">.</span><span class="nx">summary</span><span class="p">,</span></span>
<span id="LC61" class="line">        <span class="s2">&quot;&lt;/div&gt;&quot;</span><span class="p">,</span></span>
<span id="LC62" class="line">        <span class="s2">&quot;&lt;/div&gt;&quot;</span></span>
<span id="LC63" class="line">      <span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">)</span></span>
<span id="LC64" class="line">    <span class="p">);</span></span>
<span id="LC65" class="line">    <span class="c1">// We attach the article&#39;s id to the jQuery element</span></span>
<span id="LC66" class="line">    <span class="c1">// We will use this when trying to figure out which article the user wants to save</span></span>
<span id="LC67" class="line">    <span class="nx">panel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;_id&quot;</span><span class="p">,</span> <span class="nx">article</span><span class="p">.</span><span class="nx">_id</span><span class="p">);</span></span>
<span id="LC68" class="line">    <span class="c1">// We return the constructed panel jQuery element</span></span>
<span id="LC69" class="line">    <span class="k">return</span> <span class="nx">panel</span><span class="p">;</span></span>
<span id="LC70" class="line">  <span class="p">}</span></span>
<span id="LC71" class="line"></span>
<span id="LC72" class="line">  <span class="kd">function</span> <span class="nx">renderEmpty</span><span class="p">()</span> <span class="p">{</span></span>
<span id="LC73" class="line">    <span class="c1">// This function renders some HTML to the page explaining we don&#39;t have any articles to view</span></span>
<span id="LC74" class="line">    <span class="c1">// Using a joined array of HTML string data because it&#39;s easier to read/change than a concatenated string</span></span>
<span id="LC75" class="line">    <span class="kd">var</span> <span class="nx">emptyAlert</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span></span>
<span id="LC76" class="line">      <span class="p">[</span></span>
<span id="LC77" class="line">        <span class="s2">&quot;&lt;div class=&#39;alert alert-warning text-center&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC78" class="line">        <span class="s2">&quot;&lt;h4&gt;Uh Oh. Looks like we don&#39;t have any new articles.&lt;/h4&gt;&quot;</span><span class="p">,</span></span>
<span id="LC79" class="line">        <span class="s2">&quot;&lt;/div&gt;&quot;</span><span class="p">,</span></span>
<span id="LC80" class="line">        <span class="s2">&quot;&lt;div class=&#39;panel panel-default&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC81" class="line">        <span class="s2">&quot;&lt;div class=&#39;panel-heading text-center&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC82" class="line">        <span class="s2">&quot;&lt;h3&gt;What Would You Like To Do?&lt;/h3&gt;&quot;</span><span class="p">,</span></span>
<span id="LC83" class="line">        <span class="s2">&quot;&lt;/div&gt;&quot;</span><span class="p">,</span></span>
<span id="LC84" class="line">        <span class="s2">&quot;&lt;div class=&#39;panel-body text-center&#39;&gt;&quot;</span><span class="p">,</span></span>
<span id="LC85" class="line">        <span class="s2">&quot;&lt;h4&gt;&lt;a class=&#39;scrape-new&#39;&gt;Try Scraping New Articles&lt;/a&gt;&lt;/h4&gt;&quot;</span><span class="p">,</span></span>
<span id="LC86" class="line">        <span class="s2">&quot;&lt;h4&gt;&lt;a href=&#39;/saved&#39;&gt;Go to Saved Articles&lt;/a&gt;&lt;/h4&gt;&quot;</span><span class="p">,</span></span>
<span id="LC87" class="line">        <span class="s2">&quot;&lt;/div&gt;&quot;</span><span class="p">,</span></span>
<span id="LC88" class="line">        <span class="s2">&quot;&lt;/div&gt;&quot;</span></span>
<span id="LC89" class="line">      <span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">)</span></span>
<span id="LC90" class="line">    <span class="p">);</span></span>
<span id="LC91" class="line">    <span class="c1">// Appending this data to the page</span></span>
<span id="LC92" class="line">    <span class="nx">articleContainer</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">emptyAlert</span><span class="p">);</span></span>
<span id="LC93" class="line">  <span class="p">}</span></span>
<span id="LC94" class="line"></span>
<span id="LC95" class="line">  <span class="kd">function</span> <span class="nx">handleArticleSave</span><span class="p">()</span> <span class="p">{</span></span>
<span id="LC96" class="line">    <span class="c1">// This function is triggered when the user wants to save an article</span></span>
<span id="LC97" class="line">    <span class="c1">// When we rendered the article initially, we attatched a javascript object containing the headline id</span></span>
<span id="LC98" class="line">    <span class="c1">// to the element using the .data method. Here we retrieve that.</span></span>
<span id="LC99" class="line">    <span class="kd">var</span> <span class="nx">articleToSave</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s2">&quot;.panel&quot;</span><span class="p">).</span><span class="nx">data</span><span class="p">();</span></span>
<span id="LC100" class="line">    <span class="nx">articleToSave</span><span class="p">.</span><span class="nx">saved</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></span>
<span id="LC101" class="line">    <span class="c1">// Using a patch method to be semantic since this is an update to an existing record in our collection</span></span>
<span id="LC102" class="line">    <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></span>
<span id="LC103" class="line">      <span class="na">method</span><span class="p">:</span> <span class="s2">&quot;PUT&quot;</span><span class="p">,</span></span>
<span id="LC104" class="line">      <span class="na">url</span><span class="p">:</span> <span class="s2">&quot;/api/headlines&quot;</span><span class="p">,</span></span>
<span id="LC105" class="line">      <span class="na">data</span><span class="p">:</span> <span class="nx">articleToSave</span></span>
<span id="LC106" class="line">    <span class="p">}).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC107" class="line">      <span class="c1">// If successful, mongoose will send back an object containing a key of &quot;ok&quot; with the value of 1</span></span>
<span id="LC108" class="line">      <span class="c1">// (which casts to &#39;true&#39;)</span></span>
<span id="LC109" class="line">      <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">ok</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC110" class="line">        <span class="c1">// Run the initPage function again. This will reload the entire list of articles</span></span>
<span id="LC111" class="line">        <span class="nx">initPage</span><span class="p">();</span></span>
<span id="LC112" class="line">      <span class="p">}</span></span>
<span id="LC113" class="line">    <span class="p">});</span></span>
<span id="LC114" class="line">  <span class="p">}</span></span>
<span id="LC115" class="line"></span>
<span id="LC116" class="line">  <span class="kd">function</span> <span class="nx">handleArticleScrape</span><span class="p">()</span> <span class="p">{</span></span>
<span id="LC117" class="line">    <span class="c1">// This function handles the user clicking any &quot;scrape new article&quot; buttons</span></span>
<span id="LC118" class="line">    <span class="nx">$</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s2">&quot;/api/fetch&quot;</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC119" class="line">      <span class="c1">// If we are able to succesfully scrape the NYTIMES and compare the articles to those</span></span>
<span id="LC120" class="line">      <span class="c1">// already in our collection, re render the articles on the page</span></span>
<span id="LC121" class="line">      <span class="c1">// and let the user know how many unique articles we were able to save</span></span>
<span id="LC122" class="line">      <span class="nx">initPage</span><span class="p">();</span></span>
<span id="LC123" class="line">      <span class="nx">bootbox</span><span class="p">.</span><span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;&lt;h3 class=&#39;text-center m-top-80&#39;&gt;&quot;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">message</span> <span class="o">+</span> <span class="s2">&quot;&lt;h3&gt;&quot;</span><span class="p">);</span></span>
<span id="LC124" class="line">    <span class="p">});</span></span>
<span id="LC125" class="line">  <span class="p">}</span></span>
<span id="LC126" class="line"><span class="p">});</span></span></code></pre>

</div>
</div>


</article>
</div>

</div>

</div>
</div>
</div>
</div>
</div>



</body>
</html>

