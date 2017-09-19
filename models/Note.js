<!DOCTYPE html>
<html lang='en'>
<head prefix='og: http://ogp.me/ns#'>
<meta charset='utf-8'>
<meta content='IE=edge' http-equiv='X-UA-Compatible'>
<meta content='object' property='og:type'>
<meta content='GitLab' property='og:site_name'>
<meta content='18-Week/Homework/Solutions/models/Note.js · master · UCLA-Coding-Boot-Camp / 04-2017-Class-Repository' property='og:title'>
<meta content='GitLab Community Edition' property='og:description'>
<meta content='https://uclax.bootcampcontent.com/assets/gitlab_logo-cdf021b35c4e6bb149e26460f26fae81e80552bc879179dd80e9e9266b14e894.png' property='og:image'>
<meta content='https://uclax.bootcampcontent.com/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/master/18-Week/Homework/Solutions/models/Note.js' property='og:url'>
<meta content='summary' property='twitter:card'>
<meta content='18-Week/Homework/Solutions/models/Note.js · master · UCLA-Coding-Boot-Camp / 04-2017-Class-Repository' property='twitter:title'>
<meta content='GitLab Community Edition' property='twitter:description'>
<meta content='https://uclax.bootcampcontent.com/assets/gitlab_logo-cdf021b35c4e6bb149e26460f26fae81e80552bc879179dd80e9e9266b14e894.png' property='twitter:image'>

<title>18-Week/Homework/Solutions/models/Note.js · master · UCLA-Coding-Boot-Camp / 04-2017-Class-Repository · GitLab</title>
<meta content='GitLab Community Edition' name='description'>
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon-075eba76312e8421991a0c1f89a89ee81678bcde72319dd3e8047e2a47cd3a42.ico" />
<link rel="stylesheet" media="all" href="/assets/application-cfac18c411d70e400787563fd154166cc7a4c518616fd7d8e19798971c0cada6.css" />
<link rel="stylesheet" media="print" href="/assets/print-68eed6d8135d858318821e790e25da27b2b4b9b8dbb1993fa6765d8e2e3e16ee.css" />
<script src="/assets/application-52571672ad644e9182f4e84978caa4eddddd92f0859cc22cbf30ea4e7df7aff2.js"></script>
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="vuS7jPT+0jRT5+TQ/ncOFN2ogvYi/Bo9ZcYWBvLvFy3ExYStOcqNkCsMWV4/mk7Drg2FrJynWNF8kc/y7LY2oQ==" />
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
<input type="hidden" name="path" id="path" value="18-Week/Homework/Solutions/models/Note.js" />
</form>


</div>
<ul class='breadcrumb repo-breadcrumb'>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master">04-2017-Class-Repository
</a></li>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master/18-Week">18-Week</a>
</li>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master/18-Week/Homework">Homework</a>
</li>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master/18-Week/Homework/Solutions">Solutions</a>
</li>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/tree/master/18-Week/Homework/Solutions/models">models</a>
</li>
<li>
<a href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/master/18-Week/Homework/Solutions/models/Note.js"><strong>
Note.js
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
Note.js
</strong>
<small>
617 Bytes
</small>
<div class='file-actions hidden-xs'>
<div class='btn-group tree-btn-group'>
<a class="btn btn-sm" target="_blank" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/raw/master/18-Week/Homework/Solutions/models/Note.js">Raw</a>
<a class="btn btn-sm" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blame/master/18-Week/Homework/Solutions/models/Note.js">Blame</a>
<a class="btn btn-sm" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/commits/master/18-Week/Homework/Solutions/models/Note.js">History</a>
<a class="btn btn-sm" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/315aee89cd71e382f781a6d81f4e7b37f5615c47/18-Week/Homework/Solutions/models/Note.js">Permalink</a>
</div>
<div class='btn-group' role='group'>
<a class="btn btn-file-option" rel="nofollow" data-method="post" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FUCLA-Coding-Boot-Camp%2F04-2017-Class-Repository%2Fedit%2Fmaster%2F18-Week%2FHomework%2FSolutions%2Fmodels%2FNote.js&amp;namespace_key=231">Edit</a>
<a class="btn btn-default" rel="nofollow" data-method="post" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.+Try+to+replace+this+file+again.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FUCLA-Coding-Boot-Camp%2F04-2017-Class-Repository%2Fblob%2Fmaster%2F18-Week%2FHomework%2FSolutions%2Fmodels%2FNote.js&amp;namespace_key=231">Replace</a>
<a class="btn btn-remove" rel="nofollow" data-method="post" href="/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.+Try+to+delete+this+file+again.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FUCLA-Coding-Boot-Camp%2F04-2017-Class-Repository%2Fblob%2Fmaster%2F18-Week%2FHomework%2FSolutions%2Fmodels%2FNote.js&amp;namespace_key=231">Delete</a>
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
</div>
<div class='blob-content' data-blob-id='9a9430f7e6a5ba0e63af03ea7a0754d6e76a3f41'>
<pre class="code highlight"><code><span id="LC1" class="line"><span class="c1">// Note model</span></span>
<span id="LC2" class="line"><span class="c1">// ==========</span></span>
<span id="LC3" class="line"></span>
<span id="LC4" class="line"><span class="c1">// Require mongoose</span></span>
<span id="LC5" class="line"><span class="kd">var</span> <span class="nx">mongoose</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;mongoose&quot;</span><span class="p">);</span></span>
<span id="LC6" class="line"><span class="c1">// Create the schema class using mongoose&#39;s schema method</span></span>
<span id="LC7" class="line"><span class="kd">var</span> <span class="nx">Schema</span> <span class="o">=</span> <span class="nx">mongoose</span><span class="p">.</span><span class="nx">Schema</span><span class="p">;</span></span>
<span id="LC8" class="line"></span>
<span id="LC9" class="line"><span class="c1">// Create the noteSchema with the schema object</span></span>
<span id="LC10" class="line"><span class="kd">var</span> <span class="nx">noteSchema</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Schema</span><span class="p">({</span></span>
<span id="LC11" class="line">  <span class="c1">// The headline is the article associate with the note</span></span>
<span id="LC12" class="line">  <span class="na">_headlineId</span><span class="p">:</span> <span class="p">{</span></span>
<span id="LC13" class="line">    <span class="na">type</span><span class="p">:</span> <span class="nx">Schema</span><span class="p">.</span><span class="nx">Types</span><span class="p">.</span><span class="nx">ObjectId</span><span class="p">,</span></span>
<span id="LC14" class="line">    <span class="na">ref</span><span class="p">:</span> <span class="s2">&quot;Headline&quot;</span></span>
<span id="LC15" class="line">  <span class="p">},</span></span>
<span id="LC16" class="line">  <span class="c1">// date is just a string</span></span>
<span id="LC17" class="line">  <span class="na">date</span><span class="p">:</span> <span class="nb">String</span><span class="p">,</span></span>
<span id="LC18" class="line">  <span class="c1">// as is the noteText</span></span>
<span id="LC19" class="line">  <span class="na">noteText</span><span class="p">:</span> <span class="nb">String</span></span>
<span id="LC20" class="line"><span class="p">});</span></span>
<span id="LC21" class="line"></span>
<span id="LC22" class="line"><span class="c1">// Create the Note model using the noteSchema</span></span>
<span id="LC23" class="line"><span class="kd">var</span> <span class="nx">Note</span> <span class="o">=</span> <span class="nx">mongoose</span><span class="p">.</span><span class="nx">model</span><span class="p">(</span><span class="s2">&quot;Note&quot;</span><span class="p">,</span> <span class="nx">noteSchema</span><span class="p">);</span></span>
<span id="LC24" class="line"></span>
<span id="LC25" class="line"><span class="c1">// Export the Note model</span></span>
<span id="LC26" class="line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">Note</span><span class="p">;</span></span></code></pre>

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

