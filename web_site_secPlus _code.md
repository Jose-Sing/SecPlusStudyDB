# Certification Prep Hub

## Dashboard



```html
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CertifyHero Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-tertiary-fixed": "#07006c",
                      "on-error": "#690005",
                      "surface-container-high": "#222a3d",
                      "surface-variant": "#2d3449",
                      "on-tertiary-container": "#0d0096",
                      "inverse-on-surface": "#283044",
                      "surface-bright": "#31394d",
                      "outline": "#8c909f",
                      "surface-container-low": "#131b2e",
                      "error": "#ffb4ab",
                      "tertiary-container": "#8083ff",
                      "surface-tint": "#adc6ff",
                      "inverse-surface": "#dae2fd",
                      "on-tertiary": "#1000a9",
                      "inverse-primary": "#005ac2",
                      "secondary-container": "#39485a",
                      "on-secondary-container": "#a7b6cc",
                      "primary-container": "#4d8eff",
                      "surface-container-lowest": "#060e20",
                      "surface": "#0b1326",
                      "on-secondary": "#233143",
                      "on-error-container": "#ffdad6",
                      "outline-variant": "#424754",
                      "secondary": "#b9c8de",
                      "on-primary-container": "#00285d",
                      "background": "#0b1326",
                      "surface-dim": "#0b1326",
                      "on-surface": "#dae2fd",
                      "on-surface-variant": "#c2c6d6",
                      "tertiary-fixed-dim": "#c0c1ff",
                      "tertiary": "#c0c1ff",
                      "primary-fixed": "#d8e2ff",
                      "error-container": "#93000a",
                      "on-primary-fixed-variant": "#004395",
                      "primary-fixed-dim": "#adc6ff",
                      "primary": "#adc6ff",
                      "surface-container": "#171f33",
                      "on-primary": "#002e6a",
                      "secondary-fixed-dim": "#b9c8de",
                      "surface-container-highest": "#2d3449",
                      "on-secondary-fixed-variant": "#39485a",
                      "on-tertiary-fixed-variant": "#2f2ebe",
                      "on-primary-fixed": "#001a42",
                      "on-secondary-fixed": "#0d1c2d",
                      "tertiary-fixed": "#e1e0ff",
                      "on-background": "#dae2fd",
                      "secondary-fixed": "#d4e4fa"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "margin-desktop": "48px",
                      "margin-mobile": "16px",
                      "container-max-width": "1280px",
                      "base": "8px",
                      "gutter": "24px"
              },
              "fontFamily": {
                      "body-md": ["Inter"],
                      "label-md": ["Inter"],
                      "headline-lg-mobile": ["Inter"],
                      "body-lg": ["Inter"],
                      "label-sm": ["Inter"],
                      "headline-md": ["Inter"],
                      "headline-lg": ["Inter"]
              },
              "fontSize": {
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                      "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                      "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                      "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "600"}],
                      "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                      "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
              }
            },
          },
        }
    </script>
<style>
        body {
            background-color: #0b1326;
            color: #dae2fd;
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: #1e293b;
            border: 1px solid #334155;
            transition: all 0.2s ease-in-out;
        }
        .glass-card:hover {
            border-color: #4d8eff;
            background: #2d3748;
        }
        .progress-ring-circle {
            transition: stroke-dashoffset 0.35s;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
        }
    </style>
</head>
<body class="flex min-h-screen">
<!-- SideNavBar -->
<aside class="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-40 bg-surface-container border-r border-outline-variant py-base gap-2">
<div class="px-6 py-8">
<h1 class="font-headline-md text-headline-md font-bold text-primary">CertifyHero</h1>
<p class="font-label-md text-on-surface-variant mt-1">Elite Certification Prep</p>
</div>
<nav class="flex-1 px-2 space-y-1">
<a class="flex items-center gap-3 text-primary font-bold border-r-2 border-primary bg-secondary-container/20 py-3 px-4 transition-transform duration-150 scale-[0.98]" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined">menu_book</span>
<span class="font-label-md text-label-md">Library</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined">edit_note</span>
<span class="font-label-md text-label-md">Practice</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined">terminal</span>
<span class="font-label-md text-label-md">Simulator</span>
</a>
<div class="pt-4 mt-4 border-t border-outline-variant">
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</div>
</nav>
</aside>
<div class="flex-1 md:ml-64 flex flex-col">
<!-- TopAppBar -->
<header class="sticky top-0 z-50 w-full h-16 bg-surface flex justify-between items-center px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
<div class="flex items-center gap-4">
<button class="md:hidden text-primary">
<span class="material-symbols-outlined">menu</span>
</button>
<div class="hidden md:flex items-center bg-surface-variant rounded-full px-4 py-1.5 gap-2 border border-outline-variant">
<span class="material-symbols-outlined text-on-surface-variant text-sm">search</span>
<input class="bg-transparent border-none text-label-md focus:ring-0 w-64 text-on-surface" placeholder="Search resources..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4 text-primary">
<span class="material-symbols-outlined hover:bg-surface-variant p-2 rounded-full cursor-pointer transition-all">local_fire_department</span>
<span class="material-symbols-outlined hover:bg-surface-variant p-2 rounded-full cursor-pointer transition-all">notifications</span>
</div>
<div class="h-8 w-8 rounded-full overflow-hidden border border-primary">
<img alt="User Profile Avatar" data-alt="A professional portrait of a tech-focused individual in a modern studio. The background is a deep navy gradient, matching a dark mode UI. The person is wearing a minimalist charcoal sweater, and the lighting is soft and cinematic, creating a focused and high-end professional atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnWDUkejOrPvG-n4RiVaD8ySvoOOtaPINwEs2mZpeRB9gd2eAzxKGTf-h3pbQaenxpgiHo7zjgFg9U7iUyFmnTEaqRunuZKQnBJpDMG-ilUTCmOn51DXxOhEyq9WnfzBqvJoekJYvarIEcPXsGrjcNcYbegj9TQOVQULSE3OEwjeh49gxDAcjbuiWJ5Ch2TMhuIF2rgGbkXTYGojhAlowQVEo8LNAtrg98tHCcnRS1CEBB5h8ClmyAHEj4z474EiJQOldAaliV7YfD"/>
</div>
</div>
</header>
<!-- Main Content -->
<main class="p-margin-mobile md:p-margin-desktop max-w-[1280px] mx-auto w-full space-y-gutter">
<!-- Welcome Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Welcome back, Alex</h2>
<p class="font-body-md text-body-md text-on-surface-variant">You're making great progress on your AWS journey.</p>
</div>
<div class="flex items-center gap-2 bg-primary-container/20 text-primary px-4 py-2 rounded-lg border border-primary/30">
<span class="material-symbols-outlined">auto_awesome</span>
<span class="font-label-md text-label-md">AI Insights: Focus on S3 storage next.</span>
</div>
</div>
<!-- Dashboard Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Target Certification Card -->
<div class="md:col-span-8 glass-card p-6 rounded-xl flex flex-col justify-between min-h-[240px]">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="h-12 w-12 bg-on-primary-container/10 flex items-center justify-center rounded-lg border border-primary/20">
<span class="material-symbols-outlined text-primary text-3xl">cloud</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">AWS Solutions Architect</h3>
<p class="font-label-md text-on-surface-variant uppercase tracking-wider">Associate Level (SAA-C03)</p>
</div>
</div>
<div class="text-right">
<div class="text-primary font-bold text-3xl">42</div>
<div class="font-label-sm text-on-surface-variant">DAYS LEFT</div>
</div>
</div>
<div class="mt-8 space-y-4">
<div class="flex justify-between font-label-md text-on-surface-variant">
<span>Module Progress</span>
<span class="text-primary">12 / 18 Modules</span>
</div>
<div class="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full transition-all duration-1000 w-[66%]"></div>
</div>
<div class="flex gap-4 pt-4">
<div class="flex items-center gap-1.5 font-label-sm text-on-surface-variant">
<span class="material-symbols-outlined text-sm">calendar_month</span>
                                Exam Date: Oct 24, 2024
                            </div>
<div class="flex items-center gap-1.5 font-label-sm text-on-surface-variant">
<span class="material-symbols-outlined text-sm">history</span>
                                142h Studied
                            </div>
</div>
</div>
</div>
<!-- Progress Ring Card -->
<div class="md:col-span-4 glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center">
<h3 class="font-label-md text-on-surface-variant mb-4 uppercase tracking-widest">Exam Readiness</h3>
<div class="relative flex items-center justify-center">
<svg class="w-40 h-40">
<circle class="text-surface-container-high" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-width="12"></circle>
<circle class="text-primary progress-ring-circle" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="154" stroke-linecap="round" stroke-width="12"></circle>
</svg>
<div class="absolute flex flex-col items-center">
<span class="text-4xl font-bold text-on-surface">65%</span>
<span class="text-sm text-on-surface-variant">Ready</span>
</div>
</div>
<button class="mt-6 w-full py-2 bg-secondary-container text-on-secondary-container font-label-md rounded-lg hover:bg-surface-variant transition-colors">
                        View Detailed Metrics
                    </button>
</div>
<!-- Continue Learning Section -->
<div class="md:col-span-12 lg:col-span-7">
<h3 class="font-headline-md text-headline-md mb-4 flex items-center gap-2">
                        Continue Learning
                    </h3>
<div class="relative overflow-hidden glass-card rounded-xl group">
<div class="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-br from-primary/20 to-transparent"></div>
<div class="relative p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div class="space-y-4 max-w-md">
<div class="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full font-label-sm">
                                    CURRENT MODULE
                                </div>
<div>
<h4 class="font-headline-md text-headline-md text-on-surface">Module 4: Virtual Private Cloud (VPC)</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Deep dive into subnets, routing tables, and internet gateways for resilient networking.</p>
</div>
<div class="space-y-2">
<div class="flex justify-between font-label-sm text-on-surface-variant">
<span>75% Complete</span>
<span>30m remaining</span>
</div>
<div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-[75%]"></div>
</div>
</div>
</div>
<button class="flex items-center justify-center gap-2 bg-primary text-on-primary font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
<span class="material-symbols-outlined" data-weight="fill">play_arrow</span>
                                Resume
                            </button>
</div>
</div>
</div>
<!-- Upcoming Tasks Section -->
<div class="md:col-span-12 lg:col-span-5">
<h3 class="font-headline-md text-headline-md mb-4">Upcoming Tasks</h3>
<div class="glass-card rounded-xl divide-y divide-outline-variant/30 overflow-hidden">
<!-- Task 1 -->
<div class="p-4 flex items-center justify-between hover:bg-surface-variant/50 transition-colors">
<div class="flex items-center gap-4">
<div class="p-2 bg-tertiary-container/20 text-tertiary rounded-lg">
<span class="material-symbols-outlined">quiz</span>
</div>
<div>
<p class="font-label-md text-on-surface">Practice Quiz</p>
<p class="font-label-sm text-error">Due Today</p>
</div>
</div>
<button class="p-2 hover:bg-surface-variant rounded-full transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</button>
</div>
<!-- Task 2 -->
<div class="p-4 flex items-center justify-between hover:bg-surface-variant/50 transition-colors">
<div class="flex items-center gap-4">
<div class="p-2 bg-on-secondary-container/10 text-secondary rounded-lg">
<span class="material-symbols-outlined">menu_book</span>
</div>
<div>
<p class="font-label-md text-on-surface">Read S3 Storage Classes</p>
<p class="font-label-sm text-on-surface-variant">Due Tomorrow</p>
</div>
</div>
<button class="p-2 hover:bg-surface-variant rounded-full transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</button>
</div>
<!-- Task 3 -->
<div class="p-4 flex items-center justify-between opacity-50 bg-surface-container-low cursor-not-allowed">
<div class="flex items-center gap-4">
<div class="p-2 bg-outline-variant/30 text-on-surface-variant rounded-lg">
<span class="material-symbols-outlined">lock</span>
</div>
<div>
<p class="font-label-md text-on-surface">Full Mock Exam</p>
<p class="font-label-sm text-on-surface-variant">Unlock after Module 6</p>
</div>
</div>
<span class="material-symbols-outlined text-on-surface-variant mr-2">lock</span>
</div>
</div>
</div>
</div>
<!-- Reading Controls / Study Tools -->
<div class="flex justify-center mt-12">
<div class="flex items-center gap-1 bg-surface-container-high rounded-full p-1 border border-outline-variant shadow-xl">
<button class="p-3 text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-1">
<span class="material-symbols-outlined">format_size</span>
<span class="text-[10px] font-bold uppercase">Size</span>
</button>
<div class="w-[1px] h-8 bg-outline-variant/30"></div>
<button class="p-3 text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-1">
<span class="material-symbols-outlined">center_focus_strong</span>
<span class="text-[10px] font-bold uppercase">Focus</span>
</button>
<div class="w-[1px] h-8 bg-outline-variant/30"></div>
<button class="p-3 text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-1">
<span class="material-symbols-outlined">dark_mode</span>
<span class="text-[10px] font-bold uppercase">Theme</span>
</button>
</div>
</div>
</main>
</div>
<!-- Mobile Navigation Shell -->
<nav class="md:hidden fixed bottom-0 left-0 w-full h-16 bg-surface-container border-t border-outline-variant flex items-center justify-around px-2 z-50">
<a class="flex flex-col items-center text-primary font-bold" href="#">
<span class="material-symbols-outlined" data-weight="fill">dashboard</span>
<span class="text-[10px] font-label-sm">Home</span>
</a>
<a class="flex flex-col items-center text-on-surface-variant" href="#">
<span class="material-symbols-outlined">menu_book</span>
<span class="text-[10px] font-label-sm">Library</span>
</a>
<a class="flex flex-col items-center text-on-surface-variant" href="#">
<span class="material-symbols-outlined">edit_note</span>
<span class="text-[10px] font-label-sm">Practice</span>
</a>
<a class="flex flex-col items-center text-on-surface-variant" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-[10px] font-label-sm">Settings</span>
</a>
</nav>
<script>
        // Micro-interaction for the progress ring on load
        window.addEventListener('load', () => {
            const circle = document.querySelector('.progress-ring-circle');
            if(circle) {
                const radius = circle.r.baseVal.value;
                const circumference = radius * 2 * Math.PI;
                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                const offset = circumference - (65 / 100 * circumference);
                circle.style.strokeDashoffset = offset;
            }
        });

        // Toggle Focus Mode (Simulated)
        document.querySelector('[data-icon="center_focus_strong"]')?.parentElement.addEventListener('click', () => {
            document.body.classList.toggle('focus-mode');
            // Logic would normally hide sidebar/header
            alert('Focus Mode activated: Distractions suppressed.');
        });
    </script>
</body></html>
```



## Resorces library

```html
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CertifyHero Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-tertiary-fixed": "#07006c",
                      "on-error": "#690005",
                      "surface-container-high": "#222a3d",
                      "surface-variant": "#2d3449",
                      "on-tertiary-container": "#0d0096",
                      "inverse-on-surface": "#283044",
                      "surface-bright": "#31394d",
                      "outline": "#8c909f",
                      "surface-container-low": "#131b2e",
                      "error": "#ffb4ab",
                      "tertiary-container": "#8083ff",
                      "surface-tint": "#adc6ff",
                      "inverse-surface": "#dae2fd",
                      "on-tertiary": "#1000a9",
                      "inverse-primary": "#005ac2",
                      "secondary-container": "#39485a",
                      "on-secondary-container": "#a7b6cc",
                      "primary-container": "#4d8eff",
                      "surface-container-lowest": "#060e20",
                      "surface": "#0b1326",
                      "on-secondary": "#233143",
                      "on-error-container": "#ffdad6",
                      "outline-variant": "#424754",
                      "secondary": "#b9c8de",
                      "on-primary-container": "#00285d",
                      "background": "#0b1326",
                      "surface-dim": "#0b1326",
                      "on-surface": "#dae2fd",
                      "on-surface-variant": "#c2c6d6",
                      "tertiary-fixed-dim": "#c0c1ff",
                      "tertiary": "#c0c1ff",
                      "primary-fixed": "#d8e2ff",
                      "error-container": "#93000a",
                      "on-primary-fixed-variant": "#004395",
                      "primary-fixed-dim": "#adc6ff",
                      "primary": "#adc6ff",
                      "surface-container": "#171f33",
                      "on-primary": "#002e6a",
                      "secondary-fixed-dim": "#b9c8de",
                      "surface-container-highest": "#2d3449",
                      "on-secondary-fixed-variant": "#39485a",
                      "on-tertiary-fixed-variant": "#2f2ebe",
                      "on-primary-fixed": "#001a42",
                      "on-secondary-fixed": "#0d1c2d",
                      "tertiary-fixed": "#e1e0ff",
                      "on-background": "#dae2fd",
                      "secondary-fixed": "#d4e4fa"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "margin-desktop": "48px",
                      "margin-mobile": "16px",
                      "container-max-width": "1280px",
                      "base": "8px",
                      "gutter": "24px"
              },
              "fontFamily": {
                      "body-md": ["Inter"],
                      "label-md": ["Inter"],
                      "headline-lg-mobile": ["Inter"],
                      "body-lg": ["Inter"],
                      "label-sm": ["Inter"],
                      "headline-md": ["Inter"],
                      "headline-lg": ["Inter"]
              },
              "fontSize": {
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                      "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                      "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                      "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "600"}],
                      "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                      "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
              }
            },
          },
        }
    </script>
<style>
        body {
            background-color: #0b1326;
            color: #dae2fd;
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: #1e293b;
            border: 1px solid #334155;
            transition: all 0.2s ease-in-out;
        }
        .glass-card:hover {
            border-color: #4d8eff;
            background: #2d3748;
        }
        .progress-ring-circle {
            transition: stroke-dashoffset 0.35s;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
        }
    </style>
</head>
<body class="flex min-h-screen">
<!-- SideNavBar -->
<aside class="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-40 bg-surface-container border-r border-outline-variant py-base gap-2">
<div class="px-6 py-8">
<h1 class="font-headline-md text-headline-md font-bold text-primary">CertifyHero</h1>
<p class="font-label-md text-on-surface-variant mt-1">Elite Certification Prep</p>
</div>
<nav class="flex-1 px-2 space-y-1">
<a class="flex items-center gap-3 text-primary font-bold border-r-2 border-primary bg-secondary-container/20 py-3 px-4 transition-transform duration-150 scale-[0.98]" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined">menu_book</span>
<span class="font-label-md text-label-md">Library</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined">edit_note</span>
<span class="font-label-md text-label-md">Practice</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined">terminal</span>
<span class="font-label-md text-label-md">Simulator</span>
</a>
<div class="pt-4 mt-4 border-t border-outline-variant">
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</div>
</nav>
</aside>
<div class="flex-1 md:ml-64 flex flex-col">
<!-- TopAppBar -->
<header class="sticky top-0 z-50 w-full h-16 bg-surface flex justify-between items-center px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
<div class="flex items-center gap-4">
<button class="md:hidden text-primary">
<span class="material-symbols-outlined">menu</span>
</button>
<div class="hidden md:flex items-center bg-surface-variant rounded-full px-4 py-1.5 gap-2 border border-outline-variant">
<span class="material-symbols-outlined text-on-surface-variant text-sm">search</span>
<input class="bg-transparent border-none text-label-md focus:ring-0 w-64 text-on-surface" placeholder="Search resources..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4 text-primary">
<span class="material-symbols-outlined hover:bg-surface-variant p-2 rounded-full cursor-pointer transition-all">local_fire_department</span>
<span class="material-symbols-outlined hover:bg-surface-variant p-2 rounded-full cursor-pointer transition-all">notifications</span>
</div>
<div class="h-8 w-8 rounded-full overflow-hidden border border-primary">
<img alt="User Profile Avatar" data-alt="A professional portrait of a tech-focused individual in a modern studio. The background is a deep navy gradient, matching a dark mode UI. The person is wearing a minimalist charcoal sweater, and the lighting is soft and cinematic, creating a focused and high-end professional atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnWDUkejOrPvG-n4RiVaD8ySvoOOtaPINwEs2mZpeRB9gd2eAzxKGTf-h3pbQaenxpgiHo7zjgFg9U7iUyFmnTEaqRunuZKQnBJpDMG-ilUTCmOn51DXxOhEyq9WnfzBqvJoekJYvarIEcPXsGrjcNcYbegj9TQOVQULSE3OEwjeh49gxDAcjbuiWJ5Ch2TMhuIF2rgGbkXTYGojhAlowQVEo8LNAtrg98tHCcnRS1CEBB5h8ClmyAHEj4z474EiJQOldAaliV7YfD"/>
</div>
</div>
</header>
<!-- Main Content -->
<main class="p-margin-mobile md:p-margin-desktop max-w-[1280px] mx-auto w-full space-y-gutter">
<!-- Welcome Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Welcome back, Alex</h2>
<p class="font-body-md text-body-md text-on-surface-variant">You're making great progress on your AWS journey.</p>
</div>
<div class="flex items-center gap-2 bg-primary-container/20 text-primary px-4 py-2 rounded-lg border border-primary/30">
<span class="material-symbols-outlined">auto_awesome</span>
<span class="font-label-md text-label-md">AI Insights: Focus on S3 storage next.</span>
</div>
</div>
<!-- Dashboard Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Target Certification Card -->
<div class="md:col-span-8 glass-card p-6 rounded-xl flex flex-col justify-between min-h-[240px]">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="h-12 w-12 bg-on-primary-container/10 flex items-center justify-center rounded-lg border border-primary/20">
<span class="material-symbols-outlined text-primary text-3xl">cloud</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">AWS Solutions Architect</h3>
<p class="font-label-md text-on-surface-variant uppercase tracking-wider">Associate Level (SAA-C03)</p>
</div>
</div>
<div class="text-right">
<div class="text-primary font-bold text-3xl">42</div>
<div class="font-label-sm text-on-surface-variant">DAYS LEFT</div>
</div>
</div>
<div class="mt-8 space-y-4">
<div class="flex justify-between font-label-md text-on-surface-variant">
<span>Module Progress</span>
<span class="text-primary">12 / 18 Modules</span>
</div>
<div class="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full transition-all duration-1000 w-[66%]"></div>
</div>
<div class="flex gap-4 pt-4">
<div class="flex items-center gap-1.5 font-label-sm text-on-surface-variant">
<span class="material-symbols-outlined text-sm">calendar_month</span>
                                Exam Date: Oct 24, 2024
                            </div>
<div class="flex items-center gap-1.5 font-label-sm text-on-surface-variant">
<span class="material-symbols-outlined text-sm">history</span>
                                142h Studied
                            </div>
</div>
</div>
</div>
<!-- Progress Ring Card -->
<div class="md:col-span-4 glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center">
<h3 class="font-label-md text-on-surface-variant mb-4 uppercase tracking-widest">Exam Readiness</h3>
<div class="relative flex items-center justify-center">
<svg class="w-40 h-40">
<circle class="text-surface-container-high" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-width="12"></circle>
<circle class="text-primary progress-ring-circle" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="154" stroke-linecap="round" stroke-width="12"></circle>
</svg>
<div class="absolute flex flex-col items-center">
<span class="text-4xl font-bold text-on-surface">65%</span>
<span class="text-sm text-on-surface-variant">Ready</span>
</div>
</div>
<button class="mt-6 w-full py-2 bg-secondary-container text-on-secondary-container font-label-md rounded-lg hover:bg-surface-variant transition-colors">
                        View Detailed Metrics
                    </button>
</div>
<!-- Continue Learning Section -->
<div class="md:col-span-12 lg:col-span-7">
<h3 class="font-headline-md text-headline-md mb-4 flex items-center gap-2">
                        Continue Learning
                    </h3>
<div class="relative overflow-hidden glass-card rounded-xl group">
<div class="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-br from-primary/20 to-transparent"></div>
<div class="relative p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div class="space-y-4 max-w-md">
<div class="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full font-label-sm">
                                    CURRENT MODULE
                                </div>
<div>
<h4 class="font-headline-md text-headline-md text-on-surface">Module 4: Virtual Private Cloud (VPC)</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Deep dive into subnets, routing tables, and internet gateways for resilient networking.</p>
</div>
<div class="space-y-2">
<div class="flex justify-between font-label-sm text-on-surface-variant">
<span>75% Complete</span>
<span>30m remaining</span>
</div>
<div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-[75%]"></div>
</div>
</div>
</div>
<button class="flex items-center justify-center gap-2 bg-primary text-on-primary font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
<span class="material-symbols-outlined" data-weight="fill">play_arrow</span>
                                Resume
                            </button>
</div>
</div>
</div>
<!-- Upcoming Tasks Section -->
<div class="md:col-span-12 lg:col-span-5">
<h3 class="font-headline-md text-headline-md mb-4">Upcoming Tasks</h3>
<div class="glass-card rounded-xl divide-y divide-outline-variant/30 overflow-hidden">
<!-- Task 1 -->
<div class="p-4 flex items-center justify-between hover:bg-surface-variant/50 transition-colors">
<div class="flex items-center gap-4">
<div class="p-2 bg-tertiary-container/20 text-tertiary rounded-lg">
<span class="material-symbols-outlined">quiz</span>
</div>
<div>
<p class="font-label-md text-on-surface">Practice Quiz</p>
<p class="font-label-sm text-error">Due Today</p>
</div>
</div>
<button class="p-2 hover:bg-surface-variant rounded-full transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</button>
</div>
<!-- Task 2 -->
<div class="p-4 flex items-center justify-between hover:bg-surface-variant/50 transition-colors">
<div class="flex items-center gap-4">
<div class="p-2 bg-on-secondary-container/10 text-secondary rounded-lg">
<span class="material-symbols-outlined">menu_book</span>
</div>
<div>
<p class="font-label-md text-on-surface">Read S3 Storage Classes</p>
<p class="font-label-sm text-on-surface-variant">Due Tomorrow</p>
</div>
</div>
<button class="p-2 hover:bg-surface-variant rounded-full transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</button>
</div>
<!-- Task 3 -->
<div class="p-4 flex items-center justify-between opacity-50 bg-surface-container-low cursor-not-allowed">
<div class="flex items-center gap-4">
<div class="p-2 bg-outline-variant/30 text-on-surface-variant rounded-lg">
<span class="material-symbols-outlined">lock</span>
</div>
<div>
<p class="font-label-md text-on-surface">Full Mock Exam</p>
<p class="font-label-sm text-on-surface-variant">Unlock after Module 6</p>
</div>
</div>
<span class="material-symbols-outlined text-on-surface-variant mr-2">lock</span>
</div>
</div>
</div>
</div>
<!-- Reading Controls / Study Tools -->
<div class="flex justify-center mt-12">
<div class="flex items-center gap-1 bg-surface-container-high rounded-full p-1 border border-outline-variant shadow-xl">
<button class="p-3 text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-1">
<span class="material-symbols-outlined">format_size</span>
<span class="text-[10px] font-bold uppercase">Size</span>
</button>
<div class="w-[1px] h-8 bg-outline-variant/30"></div>
<button class="p-3 text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-1">
<span class="material-symbols-outlined">center_focus_strong</span>
<span class="text-[10px] font-bold uppercase">Focus</span>
</button>
<div class="w-[1px] h-8 bg-outline-variant/30"></div>
<button class="p-3 text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-1">
<span class="material-symbols-outlined">dark_mode</span>
<span class="text-[10px] font-bold uppercase">Theme</span>
</button>
</div>
</div>
</main>
</div>
<!-- Mobile Navigation Shell -->
<nav class="md:hidden fixed bottom-0 left-0 w-full h-16 bg-surface-container border-t border-outline-variant flex items-center justify-around px-2 z-50">
<a class="flex flex-col items-center text-primary font-bold" href="#">
<span class="material-symbols-outlined" data-weight="fill">dashboard</span>
<span class="text-[10px] font-label-sm">Home</span>
</a>
<a class="flex flex-col items-center text-on-surface-variant" href="#">
<span class="material-symbols-outlined">menu_book</span>
<span class="text-[10px] font-label-sm">Library</span>
</a>
<a class="flex flex-col items-center text-on-surface-variant" href="#">
<span class="material-symbols-outlined">edit_note</span>
<span class="text-[10px] font-label-sm">Practice</span>
</a>
<a class="flex flex-col items-center text-on-surface-variant" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-[10px] font-label-sm">Settings</span>
</a>
</nav>
<script>
        // Micro-interaction for the progress ring on load
        window.addEventListener('load', () => {
            const circle = document.querySelector('.progress-ring-circle');
            if(circle) {
                const radius = circle.r.baseVal.value;
                const circumference = radius * 2 * Math.PI;
                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                const offset = circumference - (65 / 100 * circumference);
                circle.style.strokeDashoffset = offset;
            }
        });

        // Toggle Focus Mode (Simulated)
        document.querySelector('[data-icon="center_focus_strong"]')?.parentElement.addEventListener('click', () => {
            document.body.classList.toggle('focus-mode');
            // Logic would normally hide sidebar/header
            alert('Focus Mode activated: Distractions suppressed.');
        });
    </script>
</body></html>
```



## Practice Lab

```html
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Practice Lab | CertifyHero</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .flashcard-inner {
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
        }
        .flashcard-flipped .flashcard-inner {
            transform: rotateY(180deg);
        }
        .flashcard-front, .flashcard-back {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
        .flashcard-back {
            transform: rotateY(180deg);
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #0b1326;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 10px;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed": "#07006c",
                        "on-error": "#690005",
                        "surface-container-high": "#222a3d",
                        "surface-variant": "#2d3449",
                        "on-tertiary-container": "#0d0096",
                        "inverse-on-surface": "#283044",
                        "surface-bright": "#31394d",
                        "outline": "#8c909f",
                        "surface-container-low": "#131b2e",
                        "error": "#ffb4ab",
                        "tertiary-container": "#8083ff",
                        "surface-tint": "#adc6ff",
                        "inverse-surface": "#dae2fd",
                        "on-tertiary": "#1000a9",
                        "inverse-primary": "#005ac2",
                        "secondary-container": "#39485a",
                        "on-secondary-container": "#a7b6cc",
                        "primary-container": "#4d8eff",
                        "surface-container-lowest": "#060e20",
                        "surface": "#0b1326",
                        "on-secondary": "#233143",
                        "on-error-container": "#ffdad6",
                        "outline-variant": "#424754",
                        "secondary": "#b9c8de",
                        "on-primary-container": "#00285d",
                        "background": "#0b1326",
                        "surface-dim": "#0b1326",
                        "on-surface": "#dae2fd",
                        "on-surface-variant": "#c2c6d6",
                        "tertiary-fixed-dim": "#c0c1ff",
                        "tertiary": "#c0c1ff",
                        "primary-fixed": "#d8e2ff",
                        "error-container": "#93000a",
                        "on-primary-fixed-variant": "#004395",
                        "primary-fixed-dim": "#adc6ff",
                        "primary": "#adc6ff",
                        "surface-container": "#171f33",
                        "on-primary": "#002e6a",
                        "secondary-fixed-dim": "#b9c8de",
                        "surface-container-highest": "#2d3449",
                        "on-secondary-fixed-variant": "#39485a",
                        "on-tertiary-fixed-variant": "#2f2ebe",
                        "on-primary-fixed": "#001a42",
                        "on-secondary-fixed": "#0d1c2d",
                        "tertiary-fixed": "#e1e0ff",
                        "on-background": "#dae2fd",
                        "secondary-fixed": "#d4e4fa"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-desktop": "48px",
                        "margin-mobile": "16px",
                        "container-max-width": "1280px",
                        "base": "8px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "body-md": ["Inter"],
                        "label-md": ["Inter"],
                        "headline-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "label-sm": ["Inter"],
                        "headline-md": ["Inter"],
                        "headline-lg": ["Inter"]
                    },
                    "fontSize": {
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                },
            },
        }
    </script>
</head>
<body class="bg-background text-on-background font-body-md selection:bg-primary/30 min-h-screen flex flex-col">
<!-- TopAppBar -->
<header class="bg-surface docked full-width top-0 sticky z-50 border-b border-outline-variant flex justify-between items-center w-full px-margin-desktop h-16">
<div class="flex items-center gap-6">
<span class="font-headline-md text-headline-md font-bold text-primary">CertifyHero</span>
<div class="hidden md:flex gap-4 items-center">
<span class="font-label-md text-label-md text-primary font-bold">Practice</span>
<span class="font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-colors px-3 py-1 rounded cursor-pointer">Dashboard</span>
<span class="font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-colors px-3 py-1 rounded cursor-pointer">Library</span>
</div>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary hover:bg-surface-variant p-2 rounded-full transition-colors" data-icon="local_fire_department">local_fire_department</button>
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant p-2 rounded-full transition-colors" data-icon="notifications">notifications</button>
<div class="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User Profile Avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrfaDZ0ny3gb6f7Oj4KOHP8lrKOMFNBVHeBCQh-zWYFmBrNoA-dBsdi1w35DQirysdKER_YDvFz_bU5TOrzyN0KYhDWbB8bInUlp_5903UI9Oi26ojSJm4t8CGphcJWuukjmrUP4T6bO4xCMw8g8fAcQKsHNRxIGqGAJ21v9zxaxOuH1rZGXekejdXsI4qOaVEAdLlcmSrAE53j-xiw5_b84T37-kGd3VGqyB0xJk6U_WD1fev08-TEq3DKWxqPLGRB1rNANEDpE_7"/>
</div>
</div>
</header>
<div class="flex flex-1 overflow-hidden">
<!-- SideNavBar -->
<aside class="bg-surface-container docked fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-40 border-r border-outline-variant hidden md:flex flex-col py-base gap-2">
<div class="px-4 py-4 mb-4">
<h2 class="font-label-md text-label-md text-primary uppercase tracking-widest opacity-70">Study Domains</h2>
</div>
<nav class="flex-1 overflow-y-auto custom-scrollbar px-2 space-y-4">
<!-- Domain Item -->
<div class="px-2 space-y-2">
<div class="flex justify-between items-center px-2">
<span class="font-label-md text-label-md text-on-surface">Cloud Concepts</span>
<span class="font-label-sm text-label-sm text-primary">82%</span>
</div>
<div class="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
<div class="bg-primary h-full w-[82%]"></div>
</div>
</div>
<!-- Domain Item Active -->
<div class="px-2 space-y-2 py-2 bg-secondary-container/20 rounded-lg border-l-2 border-primary">
<div class="flex justify-between items-center px-2">
<span class="font-label-md text-label-md text-primary font-bold">Cloud Security</span>
<span class="font-label-sm text-label-sm text-primary">45%</span>
</div>
<div class="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
<div class="bg-primary h-full w-[45%]"></div>
</div>
</div>
<!-- Domain Item -->
<div class="px-2 space-y-2">
<div class="flex justify-between items-center px-2">
<span class="font-label-md text-label-md text-on-surface">Core Services</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">21%</span>
</div>
<div class="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
<div class="bg-on-surface-variant h-full w-[21%]"></div>
</div>
</div>
<!-- Domain Item -->
<div class="px-2 space-y-2">
<div class="flex justify-between items-center px-2">
<span class="font-label-md text-label-md text-on-surface">Billing &amp; Pricing</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">0%</span>
</div>
<div class="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
<div class="bg-on-surface-variant h-full w-0"></div>
</div>
</div>
</nav>
<div class="p-4 border-t border-outline-variant mt-auto">
<button class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors w-full px-2 py-3 font-label-md text-label-md" onclick="toggleFocusMode()">
<span class="material-symbols-outlined" data-icon="visibility_off">visibility_off</span>
<span>Focus Mode</span>
</button>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 md:ml-64 p-margin-mobile md:p-gutter flex flex-col items-center justify-center relative bg-background">
<!-- Deck Progress -->
<div class="w-full max-w-2xl mb-8 flex justify-between items-center">
<div class="flex flex-col">
<span class="font-headline-md text-headline-md text-on-surface">Cloud Security</span>
<span class="font-label-md text-label-md text-on-surface-variant">Flashcard 12 of 48</span>
</div>
<div class="flex gap-2">
<span class="bg-secondary-container/30 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm border border-outline-variant">Level 3 Spacing</span>
</div>
</div>
<!-- Flashcard Container -->
<div class="w-full max-w-2xl h-[400px] perspective-1000 cursor-pointer group" id="flashcard-container">
<div class="flashcard-inner relative w-full h-full shadow-2xl rounded-xl">
<!-- Card Front -->
<div class="flashcard-front absolute w-full h-full bg-surface-container-high border border-outline-variant rounded-xl flex flex-col items-center justify-center p-12 text-center overflow-hidden">
<div class="absolute top-4 left-4 opacity-20">
<span class="material-symbols-outlined text-6xl" data-icon="help">help</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface leading-tight">
                            What is the Shared Responsibility Model?
                        </h3>
<p class="mt-8 font-label-md text-label-md text-on-surface-variant animate-pulse">Click to flip card</p>
</div>
<!-- Card Back -->
<div class="flashcard-back absolute w-full h-full bg-surface-container-highest border border-primary/30 rounded-xl flex flex-col items-center justify-center p-12 text-center">
<div class="absolute top-4 right-4 opacity-30 text-primary">
<span class="material-symbols-outlined text-6xl" data-icon="verified">verified</span>
</div>
<div class="space-y-6 text-left w-full">
<p class="font-body-lg text-body-lg text-on-surface">
                                It defines that <strong class="text-primary">security and compliance</strong> is a shared responsibility between the <strong class="text-secondary">cloud provider</strong> and the <strong class="text-secondary">customer</strong>.
                            </p>
<ul class="space-y-3 font-body-md text-body-md text-on-surface-variant list-disc list-inside">
<li><span class="text-primary">Provider:</span> Security "of" the Cloud.</li>
<li><span class="text-primary">Customer:</span> Security "in" the Cloud.</li>
</ul>
</div>
</div>
</div>
</div>
<!-- Controls (Initial State: Hidden difficulty until flip) -->
<div class="w-full max-w-2xl mt-12 flex flex-col items-center gap-6" id="card-controls">
<!-- Flip Action -->
<button class="bg-primary hover:bg-primary-container text-on-primary px-12 py-4 rounded-lg font-label-md text-label-md font-bold transition-all transform active:scale-95 shadow-lg shadow-primary/20 flex items-center gap-2" id="flip-btn">
<span class="material-symbols-outlined" data-icon="flip">flip</span>
<span>Flip Card</span>
</button>
<!-- Difficulty Ratings (Hidden initially) -->
<div class="hidden flex flex-wrap justify-center gap-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-500" id="difficulty-actions">
<button class="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-outline-variant bg-surface-container hover:bg-error-container/20 hover:border-error transition-all group min-w-[120px]">
<span class="font-label-md text-label-md text-error">Hard</span>
<span class="font-label-sm text-label-sm text-on-surface-variant group-hover:text-error">Repeat in 1m</span>
</button>
<button class="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-outline-variant bg-surface-container hover:bg-tertiary-container/20 hover:border-tertiary transition-all group min-w-[120px]">
<span class="font-label-md text-label-md text-tertiary">Medium</span>
<span class="font-label-sm text-label-sm text-on-surface-variant group-hover:text-tertiary">Repeat in 1d</span>
</button>
<button class="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-outline-variant bg-surface-container hover:bg-primary/20 hover:border-primary transition-all group min-w-[120px]">
<span class="font-label-md text-label-md text-primary">Easy</span>
<span class="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary">Repeat in 4d</span>
</button>
</div>
</div>
<!-- Visual Context Background (Subtle) -->
<div class="absolute inset-0 -z-10 opacity-5 pointer-events-none overflow-hidden">
<div class="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
<div class="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px]"></div>
</div>
</main>
</div>
<!-- Mobile Navigation (Visible on small screens) -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container border-t border-outline-variant flex justify-around items-center px-4 z-50">
<button class="flex flex-col items-center text-on-surface-variant hover:text-primary">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="text-[10px] font-label-sm">Home</span>
</button>
<button class="flex flex-col items-center text-primary">
<span class="material-symbols-outlined" data-icon="edit_note" style="font-variation-settings: 'FILL' 1;">edit_note</span>
<span class="text-[10px] font-label-sm">Practice</span>
</button>
<button class="flex flex-col items-center text-on-surface-variant hover:text-primary">
<span class="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span class="text-[10px] font-label-sm">Library</span>
</button>
<button class="flex flex-col items-center text-on-surface-variant hover:text-primary">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="text-[10px] font-label-sm">Settings</span>
</button>
</nav>
<script>
        const cardContainer = document.getElementById('flashcard-container');
        const flipBtn = document.getElementById('flip-btn');
        const difficultyActions = document.getElementById('difficulty-actions');

        function toggleFlip() {
            cardContainer.classList.toggle('flashcard-flipped');
            
            if (cardContainer.classList.contains('flashcard-flipped')) {
                flipBtn.classList.add('hidden');
                difficultyActions.classList.remove('hidden');
            } else {
                flipBtn.classList.remove('hidden');
                difficultyActions.classList.add('hidden');
            }
        }

        cardContainer.addEventListener('click', toggleFlip);
        flipBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFlip();
        });

        function toggleFocusMode() {
            const sidebar = document.querySelector('aside');
            const main = document.querySelector('main');
            sidebar.classList.toggle('hidden');
            main.classList.toggle('md:ml-64');
        }

        // Add keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                toggleFlip();
            }
        });
    </script>
</body></html>
```



## Exam Simulator

```html
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CertifyHero | Exam Simulator</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed": "#07006c",
                        "on-error": "#690005",
                        "surface-container-high": "#222a3d",
                        "surface-variant": "#2d3449",
                        "on-tertiary-container": "#0d0096",
                        "inverse-on-surface": "#283044",
                        "surface-bright": "#31394d",
                        "outline": "#8c909f",
                        "surface-container-low": "#131b2e",
                        "error": "#ffb4ab",
                        "tertiary-container": "#8083ff",
                        "surface-tint": "#adc6ff",
                        "inverse-surface": "#dae2fd",
                        "on-tertiary": "#1000a9",
                        "inverse-primary": "#005ac2",
                        "secondary-container": "#39485a",
                        "on-secondary-container": "#a7b6cc",
                        "primary-container": "#4d8eff",
                        "surface-container-lowest": "#060e20",
                        "surface": "#0b1326",
                        "on-secondary": "#233143",
                        "on-error-container": "#ffdad6",
                        "outline-variant": "#424754",
                        "secondary": "#b9c8de",
                        "on-primary-container": "#00285d",
                        "background": "#0b1326",
                        "surface-dim": "#0b1326",
                        "on-surface": "#dae2fd",
                        "on-surface-variant": "#c2c6d6",
                        "tertiary-fixed-dim": "#c0c1ff",
                        "tertiary": "#c0c1ff",
                        "primary-fixed": "#d8e2ff",
                        "error-container": "#93000a",
                        "on-primary-fixed-variant": "#004395",
                        "primary-fixed-dim": "#adc6ff",
                        "primary": "#adc6ff",
                        "surface-container": "#171f33",
                        "on-primary": "#002e6a",
                        "secondary-fixed-dim": "#b9c8de",
                        "surface-container-highest": "#2d3449",
                        "on-secondary-fixed-variant": "#39485a",
                        "on-tertiary-fixed-variant": "#2f2ebe",
                        "on-primary-fixed": "#001a42",
                        "on-secondary-fixed": "#0d1c2d",
                        "tertiary-fixed": "#e1e0ff",
                        "on-background": "#dae2fd",
                        "secondary-fixed": "#d4e4fa"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-desktop": "48px",
                        "margin-mobile": "16px",
                        "container-max-width": "1280px",
                        "base": "8px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "body-md": ["Inter"],
                        "label-md": ["Inter"],
                        "headline-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "label-sm": ["Inter"],
                        "headline-md": ["Inter"],
                        "headline-lg": ["Inter"]
                    },
                    "fontSize": {
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                },
            },
        }
    </script>
<style>
        body { background-color: #0b1326; color: #dae2fd; font-family: 'Inter', sans-serif; overflow-x: hidden; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-panel { backdrop-filter: blur(12px); background-color: rgba(30, 41, 59, 0.7); border: 1px solid #334155; }
        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; }
        .pulse-red { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
    </style>
</head>
<body class="flex flex-col min-h-screen">
<!-- Top Navigation Bar -->
<header class="bg-surface docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-margin-desktop h-16 border-b border-outline-variant">
<div class="flex items-center gap-base">
<span class="font-headline-md text-headline-md font-bold text-primary">CertifyHero</span>
<span class="font-label-md text-label-md text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded ml-2">SIMULATOR V2.4</span>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary" data-icon="timer">timer</span>
<span class="font-label-md text-label-md font-bold text-primary">02:59:45</span>
</div>
<div class="flex gap-4">
<button class="material-symbols-outlined text-primary hover:bg-surface-variant transition-colors p-2 rounded-full" data-icon="local_fire_department">local_fire_department</button>
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant transition-colors p-2 rounded-full" data-icon="notifications">notifications</button>
<div class="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant">
<img alt="User Profile Avatar" data-alt="A professional headshot of a confident software engineer with a blurred high-tech office background. The lighting is soft and cinematic, following the dark-themed aesthetic with cool blue and slate tones. The overall mood is professional, focused, and scholarly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDscrhHz0oj5HecSyKDDTccqQRYngVW-KhQaFSNbwvAvWXmRZVWqZ9kJyQX_GieZCXQSMsfVc8WEVFOKJVVLfm01TtqxwozEl9sK4V-dqefqWEhcdWm303XbX-0RVb2KsWb8pFO4W91RKnaFGMcc7uiEADsJ0L4-qt_R5SoLWIBmnFFfJ6F0wJogGM9fQ_HugE8XoN5eGjrIFntpaBkYJeAH6IyP4S0hiQCgiagrOkLN0VKet4WP3bQbhFe1aOvJlWekPNihGOHqFvy"/>
</div>
</div>
</div>
</header>
<div class="flex flex-1">
<!-- Sidebar Navigation -->
<nav class="hidden md:flex flex-col h-[calc(100vh-64px)] w-64 bg-surface-container border-r border-outline-variant py-base gap-2 sticky top-16">
<div class="px-4 py-4 mb-4">
<h2 class="font-headline-md text-headline-md font-bold text-primary">Simulator</h2>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">Elite Certification Prep</p>
</div>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span class="font-label-md text-label-md">Library</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="edit_note">edit_note</span>
<span class="font-label-md text-label-md">Practice</span>
</a>
<a class="flex items-center gap-3 text-primary font-bold border-r-2 border-primary bg-secondary-container/20 py-3 px-4 transition-transform duration-150 scale-[0.98]" href="#">
<span class="material-symbols-outlined" data-icon="terminal">terminal</span>
<span class="font-label-md text-label-md">Simulator</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant py-3 px-4 hover:bg-surface-variant transition-colors mt-auto" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<!-- Main Content Area -->
<main class="flex-1 p-margin-desktop bg-surface">
<div class="max-w-container-max-width mx-auto">
<!-- Hero Section: Exam Identity -->
<div class="relative overflow-hidden rounded-xl bg-surface-container-high border border-outline-variant mb-gutter">
<div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_0%,_transparent_70%)]"></div>
<div class="relative z-10 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="bg-primary/20 text-primary px-3 py-1 rounded-full text-label-sm font-label-sm">LEVEL: PROFESSIONAL</span>
<span class="text-on-surface-variant font-label-sm">• Exam SAP-C02</span>
</div>
<h1 class="font-headline-lg text-headline-lg mb-4 text-on-surface">AWS Certified Solutions Architect (Professional)</h1>
<div class="flex flex-wrap gap-8">
<div class="flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Duration</span>
<span class="font-headline-md text-headline-md text-on-surface">180 Minutes</span>
</div>
<div class="flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Questions</span>
<span class="font-headline-md text-headline-md text-on-surface">75 Items</span>
</div>
<div class="flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Pass Mark</span>
<span class="font-headline-md text-headline-md text-on-surface">75%</span>
</div>
</div>
</div>
<button class="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md font-bold shadow-xl hover:opacity-90 transition-all active:scale-95 flex items-center gap-2">
<span class="material-symbols-outlined" data-icon="play_arrow">play_arrow</span>
                            BEGIN SIMULATION
                        </button>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<!-- Left: Rules & Question Area -->
<div class="lg:col-span-2 space-y-gutter">
<!-- Simulation Rules -->
<div class="bg-surface-container p-6 rounded-xl border border-outline-variant">
<h3 class="font-headline-md text-headline-md mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary" data-icon="gavel">gavel</span>
                                Rules &amp; Protocol
                            </h3>
<ul class="space-y-4">
<li class="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30">
<span class="material-symbols-outlined text-primary mt-0.5" data-icon="verified_user">verified_user</span>
<div>
<p class="font-body-md text-body-md font-semibold text-on-surface">Proctored Environment</p>
<p class="font-label-md text-label-md text-on-surface-variant">Browser focus is monitored. Leaving the simulation tab more than 3 times will result in automatic submission.</p>
</div>
</li>
<li class="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30">
<span class="material-symbols-outlined text-primary mt-0.5" data-icon="flag">flag</span>
<div>
<p class="font-body-md text-body-md font-semibold text-on-surface">Flagging System</p>
<p class="font-label-md text-label-md text-on-surface-variant">You may flag questions for review. Flagged questions can be accessed instantly from the navigator grid.</p>
</div>
</li>
<li class="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30">
<span class="material-symbols-outlined text-primary mt-0.5" data-icon="save">save</span>
<div>
<p class="font-body-md text-body-md font-semibold text-on-surface">Progressive Save</p>
<p class="font-label-md text-label-md text-on-surface-variant">Answers are saved automatically as you navigate. No data will be lost in case of connectivity issues.</p>
</div>
</li>
</ul>
</div>
<!-- Focused Reading Controls -->
<div class="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-outline-variant">
<div class="flex gap-4">
<button class="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-variant text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="format_size">format_size</span>
<span class="font-label-sm text-label-sm">Text Size</span>
</button>
<button class="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-variant text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="visibility_off">visibility_off</span>
<span class="font-label-sm text-label-sm">Focus Mode</span>
</button>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span class="font-label-sm text-label-sm">Tutorial</span>
</div>
</div>
</div>
<!-- Right: Question Navigator Grid -->
<div class="lg:col-span-1 space-y-gutter">
<div class="bg-surface-container p-6 rounded-xl border border-outline-variant flex flex-col h-full">
<h3 class="font-headline-md text-headline-md mb-6">Question Navigator</h3>
<!-- Legend -->
<div class="grid grid-cols-2 gap-2 mb-6">
<div class="flex items-center gap-2 bg-surface-container-low p-2 rounded border border-outline-variant/20">
<div class="w-3 h-3 bg-primary rounded-sm"></div>
<span class="font-label-sm text-label-sm">Completed</span>
</div>
<div class="flex items-center gap-2 bg-surface-container-low p-2 rounded border border-outline-variant/20">
<div class="w-3 h-3 bg-tertiary rounded-sm"></div>
<span class="font-label-sm text-label-sm">Flagged</span>
</div>
<div class="flex items-center gap-2 bg-surface-container-low p-2 rounded border border-outline-variant/20">
<div class="w-3 h-3 border border-outline-variant rounded-sm"></div>
<span class="font-label-sm text-label-sm">Not Visited</span>
</div>
<div class="flex items-center gap-2 bg-surface-container-low p-2 rounded border border-primary/50">
<div class="w-3 h-3 bg-surface-variant border border-primary rounded-sm"></div>
<span class="font-label-sm text-label-sm">Current</span>
</div>
</div>
<!-- Grid -->
<div class="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-5 gap-2 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
<!-- Question Items Generated with Loop Mock -->
<script>
                                    document.addEventListener('DOMContentLoaded', () => {
                                        const gridContainer = document.querySelector('.grid-cols-5.md\\:grid-cols-8.lg\\:grid-cols-5');
                                        for (let i = 1; i <= 75; i++) {
                                            const item = document.createElement('div');
                                            let classes = "h-10 flex items-center justify-center font-label-md text-label-md rounded border transition-all cursor-pointer ";
                                            
                                            if (i === 1) classes += "bg-surface-variant border-primary text-primary font-bold";
                                            else if (i < 15) classes += "bg-primary text-on-primary border-primary";
                                            else if (i === 24 || i === 45) classes += "bg-tertiary text-on-tertiary border-tertiary";
                                            else classes += "bg-surface-container-low border-outline-variant/30 text-on-surface-variant hover:border-primary";
                                            
                                            item.className = classes;
                                            item.innerText = i;
                                            gridContainer.appendChild(item);
                                        }
                                    });
                                </script>
</div>
<div class="mt-8 pt-6 border-t border-outline-variant">
<div class="flex justify-between items-center mb-4">
<span class="font-label-md text-label-md text-on-surface-variant">Completion</span>
<span class="font-label-md text-label-md text-on-surface">14 / 75 (18%)</span>
</div>
<div class="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full w-[18%]"></div>
</div>
</div>
</div>
</div>
</div>
<!-- Footer Stats Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-gutter mb-margin-desktop">
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant hover:bg-surface-variant/30 transition-colors">
<div class="flex items-center justify-between mb-4">
<span class="text-on-surface-variant font-label-sm uppercase tracking-wide">Average Pace</span>
<span class="material-symbols-outlined text-primary" data-icon="speed">speed</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-md text-headline-md text-on-surface">2:14</span>
<span class="font-label-md text-label-md text-on-surface-variant">/ question</span>
</div>
<p class="mt-2 font-label-sm text-label-sm text-primary">On track for 15m remaining</p>
</div>
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant hover:bg-surface-variant/30 transition-colors">
<div class="flex items-center justify-between mb-4">
<span class="text-on-surface-variant font-label-sm uppercase tracking-wide">Score Trend</span>
<span class="material-symbols-outlined text-tertiary" data-icon="trending_up">trending_up</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-md text-headline-md text-on-surface">82%</span>
<span class="font-label-md text-label-md text-on-surface-variant">Est. Project.</span>
</div>
<p class="mt-2 font-label-sm text-label-sm text-tertiary">+4% from last simulation</p>
</div>
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant hover:bg-surface-variant/30 transition-colors">
<div class="flex items-center justify-between mb-4">
<span class="text-on-surface-variant font-label-sm uppercase tracking-wide">Weakest Domain</span>
<span class="material-symbols-outlined text-error" data-icon="warning">warning</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-headline-md text-headline-md text-on-surface">Domain 3</span>
<span class="font-label-md text-label-md text-on-surface-variant">(Hybrid Cloud)</span>
</div>
<p class="mt-2 font-label-sm text-label-sm text-error">Only 64% correct in Practice</p>
</div>
</div>
</div>
</main>
</div>
<!-- Mobile Navigation (Bottom Bar) -->
<div class="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container border-t border-outline-variant px-4 h-16 flex items-center justify-around z-50">
<button class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="text-[10px] uppercase mt-0.5">Home</span>
</button>
<button class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="edit_note">edit_note</span>
<span class="text-[10px] uppercase mt-0.5">Practice</span>
</button>
<button class="flex flex-col items-center text-primary">
<span class="material-symbols-outlined" data-icon="terminal">terminal</span>
<span class="text-[10px] uppercase mt-0.5">Exam</span>
</button>
<button class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="text-[10px] uppercase mt-0.5">Profile</span>
</button>
</div>
<script>
        // Micro-interactions and focus effects
        document.querySelectorAll('.grid-cols-5 > div').forEach(item => {
            item.addEventListener('mouseenter', () => {
                if(!item.classList.contains('bg-primary') && !item.classList.contains('bg-tertiary')) {
                    item.style.backgroundColor = '#2d3748';
                }
            });
            item.addEventListener('mouseleave', () => {
                if(!item.classList.contains('bg-primary') && !item.classList.contains('bg-tertiary')) {
                    item.style.backgroundColor = '';
                }
            });
        });

        // Atmospheric clock update
        let seconds = 10785; // 02:59:45
        const timerSpan = document.querySelector('[data-icon="timer"]').nextElementSibling;
        setInterval(() => {
            seconds--;
            const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
            const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const s = (seconds % 60).toString().padStart(2, '0');
            timerSpan.innerText = `${h}:${m}:${s}`;
        }, 1000);
    </script>
</body></html>
```
