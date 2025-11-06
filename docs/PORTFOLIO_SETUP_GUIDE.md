# Portfolio Setup Guide

This guide shows you where to add your personal information to customize the portfolio. All configuration is centralized in one main file.

---

## 📋 Main Configuration File

**Location:** `src/data/resume.tsx`

This is the **only file** you need to edit to customize your entire portfolio. It contains all your personal data in a structured format.

---

## 🎯 Sections to Update

### 1. **Personal Information**
**Lines:** 4-14

```
name: "Your Full Name"
initials: "YN"
url: "https://yourwebsite.com"
location: "City, Country"
locationLink: "https://www.google.com/maps/place/yourcity"
description: "Your professional tagline"
summary: "Your professional summary/bio"
avatarUrl: "/your-avatar.png"
```

**Avatar Image Location:** `public/your-avatar.png`
- Replace `/me.png` with your image filename
- Store images in the `public/` folder

---

### 2. **Skills**
**Lines:** 15-27

Add or remove skills from the array:
```
skills: [
  "Your Skill 1",
  "Your Skill 2",
  "Your Skill 3",
]
```

---

### 3. **Contact Information**
**Lines:** 31-70

Update your contact details:
```
contact: {
  email: "your.email@example.com",
  tel: "+1234567890",
  social: {
    GitHub: { url: "https://github.com/yourprofile", ... },
    LinkedIn: { url: "https://linkedin.com/in/yourprofile", ... },
    X: { url: "https://x.com/yourprofile", ... },
    Youtube: { url: "https://youtube.com/@yourprofile", ... },
  }
}
```

**Social Icons:** Icons are imported from `@/components/icons`

---

### 4. **Work Experience**
**Lines:** 72-145

Add your work experiences:
```
work: [
  {
    company: "Company Name",
    href: "https://company.com",
    location: "City, Country",
    title: "Your Job Title",
    logoUrl: "/company-logo.png",
    start: "Month Year",
    end: "Month Year",
    description: "What you did and accomplished",
    badges: ["Optional", "Technologies"],
  },
]
```

**Company Logos:** Store in `public/` folder (e.g., `/shopify.svg`)

---

### 5. **Education**
**Lines:** 146-179

Add your educational background:
```
education: [
  {
    school: "School/University Name",
    href: "https://school.edu",
    degree: "Your Degree",
    logoUrl: "/school-logo.png",
    start: "Year",
    end: "Year",
  },
]
```

**School Logos:** Store in `public/` folder

---

### 6. **Projects**
**Lines:** 180-303

Add your projects:
```
projects: [
  {
    title: "Project Name",
    href: "https://project.com",
    dates: "Month Year - Month Year",
    active: true,
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    links: [
      {
        type: "Website",
        href: "https://project.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video: "https://video-url.mp4",
  },
]
```

**Media:** Use video URLs or image URLs (external links recommended)

---

### 7. **Hackathons**
**Lines:** 304-688

Add hackathon projects:
```
hackathons: [
  {
    title: "Hackathon Name",
    dates: "Month Day - Day, Year",
    location: "City, Country",
    description: "What you built",
    image: "https://image-url.png",
    win: "Award (optional)",
    mlh: "https://mlh-badge-url.svg",
    links: [
      {
        title: "Link Title",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://link.com",
      },
    ],
  },
]
```

---

## 📁 File Structure Reference

```
portfolio/
├── public/                    # Store all images/logos here
│   ├── me.png                # Your avatar
│   ├── company-logo.png      # Company logos
│   └── school-logo.png       # School logos
├── src/
│   ├── data/
│   │   └── resume.tsx        # ⭐ MAIN CONFIG FILE
│   ├── components/
│   │   └── icons.tsx         # Icon definitions
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Layout
│   │   └── blog/             # Blog posts
│   └── lib/
├── content/                  # Blog content (markdown files)
└── docs/                     # Documentation
```

---

## 🖼️ Image Guidelines

- **Avatar:** Square image (recommended 400x400px)
- **Company/School Logos:** PNG or SVG (recommended 200x200px)
- **Project Images:** 16:9 aspect ratio
- **Hackathon Images:** 16:9 aspect ratio
- **Location:** All images go in `public/` folder

---

## 🔗 External Links

- **Social Media:** Use full URLs (e.g., `https://github.com/yourprofile`)
- **Company/School:** Use official website URLs
- **Projects:** Link to live site or GitHub repo
- **Videos:** Use direct video URLs (MP4 recommended)

---

## ✅ Quick Checklist

- [ ] Update name, location, and bio
- [ ] Add your avatar to `public/`
- [ ] Update contact email and social links
- [ ] Add your skills
- [ ] Add work experience with company logos
- [ ] Add education with school logos
- [ ] Add your projects
- [ ] Add hackathon projects
- [ ] Test locally: `pnpm dev`

---

## 🚀 Deployment

After updating `src/data/resume.tsx`:

1. Test locally: `pnpm dev`
2. Commit changes: `git add . && git commit -m "Update portfolio info"`
3. Push to GitHub: `git push`
4. Deploy on Vercel (auto-deploys on push)

---

## 📝 Notes

- All data is in **one file** (`src/data/resume.tsx`)
- Images must be in the `public/` folder
- Use relative paths for images (e.g., `/logo.png`)
- The portfolio is fully responsive and mobile-friendly
- Blog posts go in the `content/` folder (markdown files)

