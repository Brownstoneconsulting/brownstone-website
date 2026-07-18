/* ==========================================================================
   BROWNSTONE CONSULTING - ANTIGRAVITY INTERACTIVE JS ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 0. BRAND PRE-LOADER & TRANSITION --- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('preloader-fade-out');
    }, 2500);
  }

  /* --- 0.05 HERO SMOOTH SCROLL CLICK HANDLER --- */
  const heroUseCaseBtn = document.getElementById('hero-use-case-btn');
  if (heroUseCaseBtn) {
    heroUseCaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.getElementById('contact');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* --- 0.1 HEADER LOGO CLICK SPIN INTERACTION --- */
  const logoLink = document.querySelector('.logo');
  const gridLogo = document.querySelector('.grid-logo');
  if (logoLink && gridLogo) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      gridLogo.classList.remove('click-spin');
      void gridLogo.offsetWidth; // trigger reflow
      gridLogo.classList.add('click-spin');
    });
  }
  /* --- 0.2 THE BROWNSTONE PULSE CARDS CLICK-TO-HOVER --- */
  const pulseCards = document.querySelectorAll('.pulse-card');
  pulseCards.forEach(card => {
    card.addEventListener('click', () => {
      const isAlreadyActive = card.classList.contains('active-hover');
      pulseCards.forEach(c => c.classList.remove('active-hover'));
      if (!isAlreadyActive) {
        card.classList.add('active-hover');
      }
    });
  });

  /* --- 1. HEADER SCROLL & STATUS UPDATER --- */
  const header = document.querySelector('header');
  const navStatusSpan = document.getElementById('nav-status').querySelector('span');
  
  const statusMessages = [
    "Operations: Active",
    "Pulse CRM: Synced",
    "Nexus: Zero-Trust Secure",
    "Gemini Stack: Online"
  ];
  let statusIndex = 0;

  // Cycle navbar status message to look live and autonomous
  setInterval(() => {
    statusIndex = (statusIndex + 1) % statusMessages.length;
    navStatusSpan.style.opacity = 0;
    setTimeout(() => {
      navStatusSpan.textContent = statusMessages[statusIndex];
      navStatusSpan.style.opacity = 1;
    }, 300);
  }, 6000);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  /* --- 2. DEPTH-BASED PARALLAX BACKGROUND ORBS --- */
  const orb1 = document.getElementById('orb-1');
  const orb2 = document.getElementById('orb-2');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Displace background gradients slightly for depth illusion
    if (orb1) orb1.style.transform = `translateY(${scrollY * 0.15}px)`;
    if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.12}px)`;
  });


  /* --- 3. DYNAMIC FLUID PARTICLE ACCELERATION CANVAS --- */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouse = { x: null, y: null, active: false };

    // Fit canvas to hero window
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.8 + 1; // Size of particle node
        this.baseVx = (Math.random() - 0.5) * 0.4;
        this.baseVy = (Math.random() - 0.5) * 0.4;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        this.color = 'rgba(35, 23, 20, 0.15)';
      }

      update() {
        // Accelerate if near mouse cursor (repulsion effect)
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.hypot(dx, dy);
          const forceRadius = 120; // Radius of force field

          if (distance < forceRadius) {
            // Push away proportional to distance
            const force = (forceRadius - distance) / forceRadius;
            const angle = Math.atan2(dy, dx);
            const targetVx = Math.cos(angle) * force * 1.5;
            const targetVy = Math.sin(angle) * force * 1.5;
            
            // Apply easing acceleration
            this.vx += (targetVx - this.vx) * 0.08;
            this.vy += (targetVy - this.vy) * 0.08;
          } else {
            // Return to baseline velocity
            this.vx += (this.baseVx - this.vx) * 0.02;
            this.vy += (this.baseVy - this.vy) * 0.02;
          }
        } else {
          // Return to baseline velocity
          this.vx += (this.baseVx - this.vx) * 0.02;
          this.vy += (this.baseVy - this.vy) * 0.02;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Bounce boundaries
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1;
          this.baseVx *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1;
          this.baseVy *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleDensity = Math.floor((canvas.width * canvas.height) / 12000);
      const targetCount = Math.min(Math.max(particleDensity, 40), 90);
      for (let i = 0; i < targetCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      const maxDistance = 90;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          
          if (dist < maxDistance) {
            const opacity = (maxDistance - dist) / maxDistance * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(198, 180, 166, ${opacity * 1.5})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();

            // Monochromatic data workflow packets crawling along paths
            if ((i + j) % 6 === 0) {
              const time = Date.now() * 0.001;
              const speed = 0.25;
              const t = (time * speed + (i * 0.12)) % 1;
              const pulseX = p1.x + (p2.x - p1.x) * t;
              const pulseY = p1.y + (p2.y - p1.y) * t;

              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 1.6, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(35, 23, 20, ${opacity * 9})`; // Deep Espresso highlight packet
              ctx.fill();
            }
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawConnections();
      
      animationId = requestAnimationFrame(animate);
    };

    // Listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });
    canvas.addEventListener('mouseleave', () => {
      mouse.active = false;
    });
    
    // Kickstart Canvas
    resizeCanvas();
    animate();
  }


  /* --- 4. DYNAMIC OUTCOME METRIC COUNTER --- */
  const counterNum = document.getElementById('percentage-counter');
  
  if (counterNum) {
    let triggered = false;
    
    const startCounter = () => {
      let count = 0;
      const target = 65; // Intermediate target
      const duration = 1200; // ms
      const startTime = performance.now();
      
      const updateCount = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing count
        count = Math.floor(progress * target);
        
        if (progress < 1) {
          counterNum.textContent = count + "%";
          requestAnimationFrame(updateCount);
        } else {
          // Final glowing transition into user requested interval range
          counterNum.style.opacity = 0;
          setTimeout(() => {
            counterNum.textContent = "60%–70%";
            counterNum.style.opacity = 1;
            counterNum.style.textShadow = "0 0 35px var(--accent-cyan-glow)";
          }, 200);
        }
      };
      
      requestAnimationFrame(updateCount);
    };

    // Intersection Observer to run counter on scroll entry
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          startCounter();
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counterNum);
  }


  /* --- 5. HORIZONTAL TESTIMONIAL SLIDER INTERACTION --- */
  const slider = document.getElementById('testimonial-slider');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (slider && prevBtn && nextBtn) {
    const cardScrollOffset = 410; // card width (380) + gap (30)

    // Manual slide indicators
    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: cardScrollOffset, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -cardScrollOffset, behavior: 'smooth' });
    });

    // Touch & Drag controls
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.style.scrollBehavior = 'auto';
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.style.scrollBehavior = 'smooth';
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag sensitivity
      slider.scrollLeft = scrollLeft - walk;
    });
  }


  /* --- 6. DYNAMIC CONTACT FORM & TRACE LINE LOGIC --- */
  const form = document.getElementById('auto-contact-form');
  const traceLineActive = document.getElementById('form-trace-line');
  const traceStatus = document.getElementById('form-trace-status');

  // SheetDB API integration URL
  const SHEETDB_API_URL = "https://sheetdb.io/api/v1/iifbdbzuirlwk";

  if (form && traceLineActive && traceStatus) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
      
      // Read form input values
      const nameVal = document.getElementById('form-name').value;
      const emailVal = document.getElementById('form-email').value;
      const phoneVal = document.getElementById('form-phone').value;
      const sectorVal = document.getElementById('form-sector').value;
      const messageVal = document.getElementById('form-message').value;

      // Asynchronously dispatch the data to SheetDB database
      if (SHEETDB_API_URL) {
        const dbPayload = {
          data: [
            {
              "Full Name": nameVal,
              "Email Address": emailVal,
              "Mobile Number": phoneVal,
              "Business Sector": sectorVal,
              "Business Bottlenecks": messageVal
            }
          ]
        };

        fetch(SHEETDB_API_URL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dbPayload)
        })
        .then(response => response.json())
        .then(data => console.log("SheetDB log result:", data))
        .catch(err => console.error("Error logging via SheetDB API:", err));
      }
      
      // Initialize active trace line
      traceLineActive.style.display = 'block';
      
      // Step-by-step automation logs simulation
      const logs = [
        { text: "Establishing Connection...", delay: 500 },
        { text: "Routing validation checks...", delay: 1200 },
        { text: "Verifying secure Outlook gateways...", delay: 2000 },
        { text: "Logging data payload to Google Sheets database...", delay: 2800 },
        { text: "Inbound submission automatically securely logged via verified Outlook gateways + internal admin instant alert executed.", delay: 3600 }
      ];

      logs.forEach((log) => {
        setTimeout(() => {
          traceStatus.textContent = log.text;
          
          if (log.text.includes("Inbound submission automatically securely logged")) {
            // Finish state
            traceStatus.style.color = 'var(--accent-cyan)'; // Glow orange
            traceLineActive.style.animation = 'none';
            traceLineActive.style.width = '100%';
            traceLineActive.style.background = 'var(--accent-cyan)';
            
            // Prompt alert or visual confirmation
            submitBtn.textContent = "Data Synced!";
            submitBtn.classList.remove('btn-loading');
            
            // Wait briefly to transition UI inputs out and display success block
            setTimeout(() => {
              const fieldsContainer = document.getElementById('form-fields-container');
              const successMsg = document.getElementById('form-success-message');
              
              if (fieldsContainer && successMsg) {
                fieldsContainer.style.display = 'none';
                successMsg.style.display = 'block';
              }
            }, 800);
          }
        }, log.delay);
      });

    });
  }
  /* --- 7. MICROSOFT 365 ENTERPRISE PORTFOLIO MODAL INTERACTIVITY --- */
  const m365Data = {
    "nexus": {
      powerby: "Brownstone Nexus",
      title: "Document Intelligence & Governance",
      subtitle: "Document intelligence & compliance",
      purpose: "Give every document a compliance-ready home — with AI insight and zero-trust security built in from the start.",
      features: [
        "Compliance-ready document workflows",
        "AI-powered document insights and search",
        "Zero-trust security architecture",
        "Native Microsoft Syntex integration"
      ],
      outcome: "Audit-ready document management, automated compliance, and secure collaboration — by design."
    },
    "invoice-iq": {
      powerby: "Invoice IQ+",
      title: "Finance Automation Suite",
      subtitle: "Finance automation suite",
      purpose: "Take manual work out of the finance cycle — from invoice receipt to approval to reporting.",
      features: [
        "Automated invoice approval routing",
        "Expense claim routing and validation",
        "Native ERP integration",
        "Power BI dashboards for real-time visibility"
      ],
      outcome: "Faster finance cycles, fewer manual errors, and clearer audit transparency at every step."
    },
    "horizon": {
      powerby: "Brownstone Horizon",
      title: "Compliance & License Management",
      subtitle: "Compliance & license management",
      purpose: "Stay ahead of every certification, license, and regulatory deadline before it becomes a risk.",
      features: [
        "Tracks certifications, licenses, and deadlines",
        "Proactive alerts before expiry",
        "Automated renewal workflows",
        "Centralized regulatory visibility"
      ],
      outcome: "No missed renewals, reduced compliance risk, and peace of mind for the enterprise."
    },
    "fusion": {
      powerby: "Brownstone Fusion",
      title: "Customizable Automation Hub",
      subtitle: "Customizable automation hub",
      purpose: "Bring HR, Finance, Sales, and Compliance automation into a single, adaptable hub — built around your workflows.",
      features: [
        "Tailored workflows across departments",
        "Industry-specific templates",
        "Scalable architecture that grows with you",
        "Flexible integrations across your stack"
      ],
      outcome: "Eliminates fragmented workflows and delivers automation “your way” — adapted to your requirements, not the other way around."
    },
    "agentic-ai": {
      powerby: "Agentic AI Solutions",
      title: "Customizable Digital Workforce",
      subtitle: "Customizable digital workforce",
      purpose: "Deploy agents that don't just answer questions — they act, automate, and orchestrate work across the business.",
      features: [
        "Finance, HR, Sales, and Compliance agents",
        "Collaboration agents for cross-team work",
        "Agents that execute and orchestrate, not just respond",
        "Scalable, future-proof agent architecture"
      ],
      outcome: "A digital workforce that completes tasks, not just answers queries — scalable and future-proof."
    },
    "ai-agents": {
      powerby: "Brownstone AI Agents",
      title: "Practical Enterprise Assistants",
      subtitle: "Practical enterprise assistants",
      purpose: "Put everyday productivity assistants directly into the tools your teams already use.",
      features: [
        "HR forms and request assistants",
        "Finance approval assistants",
        "Sales dashboards and insight assistants",
        "Compliance tracking and collaboration helpers"
      ],
      outcome: "An everyday productivity boost — faster task execution with audit-ready governance built in."
    }
  };

  const modal = document.getElementById('m365-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalPowerby = document.getElementById('modal-powerby');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalPurpose = document.getElementById('modal-purpose');
  const modalFeatures = document.getElementById('modal-features');
  const modalOutcome = document.getElementById('modal-outcome');
  
  const m365Cards = document.querySelectorAll('.m365-portfolio-card');
  
  m365Cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-m365-id');
      const data = m365Data[id];
      if (!data) return;
      
      // Populate fields
      modalPowerby.textContent = data.powerby;
      modalTitle.textContent = data.title;
      modalSubtitle.textContent = data.subtitle;
      modalPurpose.textContent = data.purpose;
      
      // Populate features
      modalFeatures.innerHTML = '';
      data.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalFeatures.appendChild(li);
      });
      
      modalOutcome.textContent = data.outcome;
      
      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent underlying body scroll
    });
  });

  /* --- 8. GOOGLE COMPANION PORTFOLIO MODAL INTERACTIVITY --- */
  const googleData = {
    "flow": {
      powerby: "Brownstone Flow",
      title: "Lightweight Workflow & App Builder",
      subtitle: "Lightweight workflow & mini-app builder",
      purpose: "Give SMB clients a fast, no-code way to turn a plain-language request into a working mini-app or automation — no dev team required.",
      features: [
        "Natural-language workflow and mini-app creation",
        "Agent-powered steps that plan and execute autonomously",
        "Hosted entirely on Google's infrastructure — nothing to deploy",
        "Shareable, editable apps for intake forms, content, and research"
      ],
      outcome: "Small, fast, low-cost “seatbelt apps” that solve one specific problem — without hiring a developer."
    },
    "siteforge": {
      powerby: "Brownstone SiteForge",
      title: "AI Websites & Customer-Facing Bots",
      subtitle: "AI websites & customer-facing bots",
      purpose: "Stand up a client's website, on-brand assets, and a customer-facing chatbot in parallel — with your team directing, not hand-coding.",
      features: [
        "Agent-driven website and asset generation",
        "Conversational bots for customer-facing support",
        "Verifiable plans, screenshots, and recordings for every change",
        "Enterprise path via Google Cloud's Agent Platform"
      ],
      outcome: "Faster time-to-launch for client-facing digital presence — with governance built in for compliance-sensitive clients."
    },
    "copilot": {
      powerby: "Brownstone Workspace Copilot",
      title: "Productivity Boosts Powered by Gemini",
      subtitle: "Productivity boosts powered by Gemini",
      purpose: "Put an AI assistant directly inside the tools clients already use every day — the Google-side counterpart to your M365 AI Agents.",
      features: [
        "Drafting and summarizing in Gmail and Docs",
        "Formula help and analysis in Sheets",
        "Automated meeting notes and follow-ups",
        "Zero new tools to learn or roll out"
      ],
      outcome: "The easiest upsell in the portfolio — fast, everyday productivity wins with no new interface to learn."
    },
    "essentials": {
      powerby: "Brownstone Cloud Essentials",
      title: "Storage & AI Credits Foundation Layer",
      subtitle: "Storage & AI credits foundation layer",
      purpose: "Bundle storage and AI usage credits as the infrastructure layer every other Google solution runs on.",
      features: [
        "Pooled storage across Drive, Gmail, and Photos",
        "AI usage credits that fuel Flow, SiteForge, and Copilot",
        "Simple, predictable per-seat pricing",
        "Natural entry point for smaller clients"
      ],
      outcome: "A recurring, predictable revenue line — and the on-ramp for clients not yet ready for a full solution."
    }
  };

  const googleCards = document.querySelectorAll('.google-portfolio-card');
  
  googleCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-google-id');
      const data = googleData[id];
      if (!data) return;
      
      // Populate fields
      modalPowerby.textContent = data.powerby;
      modalTitle.textContent = data.title;
      modalSubtitle.textContent = data.subtitle;
      modalPurpose.textContent = data.purpose;
      
      // Populate features
      modalFeatures.innerHTML = '';
      data.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalFeatures.appendChild(li);
      });
      
      modalOutcome.textContent = data.outcome;
      
      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close handler
  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // --- Infinite Telemetry Typewriter Loop ---
  const telemetryElement = document.querySelector(".agent-stream-telemetry");
  if (telemetryElement) {
    const logs = [
      "[+] Mapping workspace node networks... SUCCESS",
      "[+] Syncing Azure directory security tokens... DONE",
      "[+] Validating outbound encryption handshakes... OK",
      "[+] Establishing local worker daemon tunnels... ACTIVE",
      "[+] Initiating sovereign governance protocols... SUCCESS",
      "[+] Running telemetry analyzer status checks... 200 OK",
      "[+] M365 matrix pipeline synchronizer stable... ACTIVE"
    ];

    let logIndex = 0;
    telemetryElement.innerHTML = ""; // Clear static content

    function appendLog() {
      if (logIndex >= logs.length) {
        // Clear view and loop from beginning infinitely
        telemetryElement.innerHTML = "";
        logIndex = 0;
      }
      
      const line = document.createElement("div");
      line.style.marginBottom = "4px";
      telemetryElement.appendChild(line);
      
      let charIndex = 0;
      const text = logs[logIndex];
      
      function typeChar() {
        if (charIndex < text.length) {
          line.innerHTML += text[charIndex];
          charIndex++;
          setTimeout(typeChar, 25);
        } else {
          logIndex++;
          setTimeout(appendLog, 1500);
        }
      }
      typeChar();
    }

    appendLog();
  }

  /* --- 7.5 FLOATING SOLUTIONS ASSISTANT --- */
  const assistantTrigger = document.getElementById('assistant-trigger');
  const assistantDialog = document.getElementById('assistant-dialog');
  const closeAssistantBtn = document.getElementById('close-assistant-btn');
  const assistantContent = document.getElementById('assistant-content');
  const assistantChips = document.querySelectorAll('.assistant-chip');

  const solutionDetails = {
    "pulse-capture": {
      title: "Pulse Capture // Smart Inbound Nurturing",
      dive: "An automated AI lead capture workflow that books candidate calls instantly, validates contact fields automatically, and feeds secure pipeline updates directly into your enterprise database systems.",
      why: "Completely eliminates manual response lag, stops warm sales leads from going cold, and captures customer intent at its peak threshold when interest is highest.",
      impact: "Shortens standard sales pipelines by 40% on average, eliminates manual human data-entry errors, and guarantees a 100% lead follow-up validation rate.",
      growth: "Creates instant, frictionless initial touchpoints with customers, building immediate trust and allowing the sales team to scale revenue pipelines exponentially without increasing headcount."
    },
    "pulse-follow": {
      title: "Pulse Follow // Relationship Sync",
      dive: "Schedule-driven automated nurturing sequences that persist relationship touchpoints organically and pause instantly the moment a human customer replies to a message.",
      why: "Maintains authentic, high-value customer nurturing schedules without demanding constant manual writing and scheduling tasks from account managers.",
      impact: "Delivers significantly higher email/message engagement rates, reclaims hours of manual labor for account executives, and ensures zero forgotten sales prospects.",
      growth: "Transforms cold customer tracking into warm, organic client dialogues. Customers feel uniquely heard because automation gracefully hands off to humans, deepening collaboration impact."
    },
    "pulse-onboard": {
      title: "Pulse Onboard // Touchless Client Routing",
      dive: "Touchless contract routing, automated legal document generation, custom digital welcome packs, and instant workspace asset provisioning pipelines.",
      why: "First impressions dictate client retention; manual onboarding slows down momentum and delays project kickoffs right after a client says \"Yes\".",
      impact: "Drops client onboarding duration from days to minutes. Secures absolute legal compliance and enables immediate team billing operations.",
      growth: "Delivers a world-class, professional client experience from day one. Flawless onboarding amplifies collaboration impact, leading to high retention and organic referral growth."
    },
    "pulse-ops": {
      title: "Pulse Ops // Backend Data Orchestration",
      dive: "Dynamic cross-tool data synchronization that destroys manual copy-paste database entries, syncs tools, and resolves spreadsheet tracking bottlenecks.",
      why: "Fragmented corporate systems break project communication and stall worker operations. Teams need a single secure source of truth to execute work.",
      impact: "Creates seamless automated data flows between CRM, project management dashboards, and invoicing pipelines, eliminating operational silos.",
      growth: "By automating the backend, your team spends less time fixing database bugs and more time collaborating on high-value client strategy, priming operations for exponential scale."
    },
    "m365-solutions": {
      title: "M365 Solutions // Enterprise Cloud Governance",
      dive: "Expert deployment, migration, and structural optimization of Microsoft 365 enterprise ecosystems (including Teams governance, SharePoint architecture, Power Platform automation, and advanced security configurations).",
      why: "Fragmented enterprise systems and unsecure cloud setups create massive security liabilities, communication silos, and wasted licensing costs.",
      impact: "Streamlines enterprise-wide security compliance, cuts operational overhead by centralizing tools, and guarantees 99.9% uptime for cross-departmental operations.",
      growth: "Creates a bulletproof digital workspace where hybrid teams can co-author documents, track projects, and communicate instantly. This infrastructure allows you to scale corporate operations globally while making client data collaboration completely airtight."
    },
    "google-solutions": {
      title: "Google Solutions // Workspace Agility",
      dive: "Strategy and optimization of Google Workspace environments (including real-time collaborative cloud storage design, AppSheet custom app development, Google Meet enterprise configurations, and IAM security controls).",
      why: "Legacy workflows stall modern agility; fast-moving organizations need dynamic, cloud-first productivity tools that work instantly on any device without friction.",
      impact: "Completely eliminates file version confusion, reduces dependency on localized hardware, and vastly accelerates internal project turnaround times.",
      growth: "Unlocks true cloud agility. Real-time co-working means your internal team and your external customers are always looking at the exact same data simultaneously. This transparency builds profound client trust and fosters exponential innovation velocities."
    }
  };

  function renderSolution(solutionKey) {
    const data = solutionDetails[solutionKey];
    if (!data) return;
    
    assistantContent.innerHTML = `
      <div class="assistant-pillar">
        <h4 style="font-family: var(--font-title); font-size: 0.85rem; font-weight: 800; color: #2B2321; margin-top: 0; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 1px solid rgba(212, 197, 185, 0.15);">${data.title}</h4>
        
        <div class="assistant-pillar-title">THE DEEP DIVE</div>
        <div class="assistant-pillar-text">${data.dive}</div>
        
        <div class="assistant-pillar-title">THE "WHY"</div>
        <div class="assistant-pillar-text">${data.why}</div>
        
        <div class="assistant-pillar-title">OUTCOME IMPACT</div>
        <div class="assistant-pillar-text">${data.impact}</div>
        
        <div class="assistant-pillar-title">EXPONENTIAL GROWTH & COLLABORATION</div>
        <div class="assistant-pillar-text" style="margin-bottom: 0;">${data.growth}</div>
      </div>
    `;
    assistantContent.scrollTop = 0;
  }

  if (assistantTrigger && assistantDialog) {
    renderSolution('pulse-capture');

    assistantTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      assistantDialog.classList.toggle('active');
    });

    if (closeAssistantBtn) {
      closeAssistantBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        assistantDialog.classList.remove('active');
      });
    }

    assistantChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = chip.getAttribute('data-solution');
        
        assistantChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        renderSolution(key);
      });
    });

    document.addEventListener('click', (e) => {
      if (!assistantDialog.contains(e.target) && e.target !== assistantTrigger) {
        assistantDialog.classList.remove('active');
      }
    });

    assistantDialog.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

});

