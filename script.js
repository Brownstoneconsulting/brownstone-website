document.addEventListener('DOMContentLoaded', () => {

    /* ── 1. Header scroll shadow & Dropdown Handler ── */
    const siteHeader = document.getElementById('site-header');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            siteHeader?.classList.add('scrolled');
        } else {
            siteHeader?.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const focusAreasDropdown = document.getElementById('focus-areas-dropdown');
    const dropdownTrigger = focusAreasDropdown?.querySelector('.dropdown-trigger');

    dropdownTrigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = focusAreasDropdown.classList.contains('active');
        focusAreasDropdown.classList.toggle('active', !isOpen);
        dropdownTrigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
        if (focusAreasDropdown && !focusAreasDropdown.contains(e.target)) {
            focusAreasDropdown.classList.remove('active');
            dropdownTrigger?.setAttribute('aria-expanded', 'false');
        }
    });

    /* ── 2. Mobile Drawer Navigation ── */
    const mobileToggle = document.getElementById('mobile-toggle') || document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobile-drawer') || document.getElementById('mobileMenu');
    const drawerClose  = document.getElementById('drawer-close') || document.getElementById('mobileMenuClose');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item, .mobile-nav-link');

    const openDrawer = () => {
        mobileToggle?.classList.add('active');
        mobileDrawer?.classList.add('open');
        mobileToggle?.setAttribute('aria-expanded', 'true');
        mobileDrawer?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        mobileToggle?.classList.remove('active');
        mobileDrawer?.classList.remove('open');
        mobileToggle?.setAttribute('aria-expanded', 'false');
        mobileDrawer?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    mobileToggle?.addEventListener('click', () => {
        if (mobileDrawer?.classList.contains('open')) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });

    drawerClose?.addEventListener('click', closeDrawer);
    document.querySelectorAll('.mobile-nav-item, .mobile-nav-subitem').forEach(item => item.addEventListener('click', closeDrawer));

    /* ── 3. Modal Dialog Manager ── */
    const modalBackdrops = document.querySelectorAll('.modal-backdrop');
    
    const openModal = (targetId) => {
        const modal = document.getElementById(targetId);
        if (!modal) return;
        closeAllModals();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (targetId === 'audit-modal') {
            const form = document.getElementById('audit-form');
            const thankyou = document.getElementById('audit-thankyou');
            if (form) form.style.display = 'block';
            if (thankyou) thankyou.style.display = 'none';
        }
    };

    const closeAllModals = () => {
        modalBackdrops.forEach(modal => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        });
        document.body.style.overflow = '';
    };

    // Attach click listeners to data-modal-target buttons/links
    document.querySelectorAll('[data-modal-target]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute('data-modal-target');
            if (targetId) {
                if (mobileDrawer?.classList.contains('open')) {
                    closeDrawer();
                }
                openModal(targetId);
            }
        });
    });

    // Support modal switching from inside modal actions
    document.querySelectorAll('[data-modal-switch]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute('data-modal-switch');
            if (targetId) openModal(targetId);
        });
    });

    // Close buttons & dismissal
    document.querySelectorAll('.modal-close-btn, .modal-dismiss').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    modalBackdrops.forEach(backdrop => {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                closeAllModals();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
            closeDrawer();
        }
    });

    /* ── 4. Audit Form Submission Handling with Strict Lock ── */
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_RBsE5-ID52Ep3Oangr6Wyh1CY3eMH7zhzPhso9yXkp2znJ6IdHXh1baQdYUKVo04ug/exec";

    // Global Lock Flag to prevent double firing
    let isAuditSubmitting = false;

    const auditForm = document.getElementById("auditForm") || document.getElementById("auditModalForm") || document.getElementById("audit-form");

    if (auditForm) {
      auditForm.onsubmit = async function (e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }

        // Block duplicate clicks / submissions immediately
        if (isAuditSubmitting) return false;

        const fullName = (document.getElementById("auditFullName")?.value || document.getElementById("fullName")?.value || "").trim();
        const workEmail = (document.getElementById("auditEmail")?.value || document.getElementById("workEmail")?.value || "").trim();
        const companyName = (document.getElementById("auditCompany")?.value || document.getElementById("companyName")?.value || "").trim();
        const teamSize = (document.getElementById("auditTeamSize")?.value || document.getElementById("teamSize")?.value || "").trim();
        const bottleneck = (document.getElementById("auditBottleneck")?.value || document.getElementById("bottleneck")?.value || "").trim();
        const submitBtn = document.getElementById("auditSubmitBtn") || auditForm.querySelector('button[type="submit"]');
        const statusMsg = document.getElementById("auditStatusMsg");

        if (!fullName || !workEmail || !companyName || !teamSize || !bottleneck) {
          if (statusMsg) {
            statusMsg.className = "text-xs text-center font-semibold text-red-600 mt-2 block";
            statusMsg.innerText = "Please complete all required fields.";
          }
          return false;
        }

        // Lock process
        isAuditSubmitting = true;
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerText = "Logging to Ledger...";
        }

        // Single clean payload submission using URLSearchParams
        const params = new URLSearchParams();
        params.append("fullName", fullName);
        params.append("workEmail", workEmail);
        params.append("companyName", companyName);
        params.append("teamSize", teamSize);
        params.append("bottleneck", bottleneck);

        try {
          await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString()
          });

          if (submitBtn) {
            submitBtn.innerText = "Audit Request Logged ✓";
            submitBtn.className = "w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-xs tracking-wide shadow-md transition-all";
          }

          if (statusMsg) {
            statusMsg.className = "text-xs text-center font-medium text-emerald-700 mt-2 block";
            statusMsg.innerText = "Audit details registered. Managing partner will review within 2 business hours.";
          }

          setTimeout(() => {
            auditForm.reset();
            isAuditSubmitting = false;
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerText = "Submit Operational Audit Request";
              submitBtn.className = "w-full py-3 px-4 rounded-xl bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-semibold text-xs tracking-wide shadow-md transition-all cursor-pointer";
            }
          }, 3500);

        } catch (err) {
          isAuditSubmitting = false;
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Submit Operational Audit Request";
          }
          if (statusMsg) {
            statusMsg.className = "text-xs text-center font-semibold text-red-600 mt-2 block";
            statusMsg.innerText = "Network error. Please try again or reach out directly.";
          }
        }

        return false;
      };

      // Compatibility proxy function
      window.handleAuditSubmit = function (e) {
        return auditForm.onsubmit(e);
      };
    }

    /* ── 6. Interactive Department Workflows Engine ── */
    const workflowsData = {
        sales: {
            badge: 'AUTOMATED INBOUND QUALIFICATION',
            description: 'Accelerate lead triage from hours to seconds with automated API enrichment and CRM synchronization.',
            nodes: [
                { step: '01', title: 'Inbound Webhook', sub: 'Lead form submission' },
                { step: '02', title: 'API Enrichment', sub: 'Under 60s lookup' },
                { step: '03', title: 'AI Fit Score', sub: 'ICP & Intent scoring' },
                { step: '04', title: 'Slack Alert / Auto-Draft', sub: 'Rep notification' },
                { step: '05', title: 'HubSpot & Salesforce Sync', sub: '100% clean data' }
            ],
            metrics: ['< 60s Latency', '18.5 hrs Reclaimed', '100% CRM Cleanliness']
        },
        finance: {
            badge: 'CONTRACT & INVOICE PROCESSING',
            description: 'Eliminate manual document transcription with deterministic clause extraction and 1-click approvals.',
            nodes: [
                { step: '01', title: 'Contract/Invoice Intake', sub: 'PDF/Doc ingestion' },
                { step: '02', title: 'Clause Extraction', sub: 'NLP term parsing' },
                { step: '03', title: 'Deterministic Check', sub: 'Compliance rules' },
                { step: '04', title: '1-Click Human Approval Queue', sub: 'Risk sign-off' },
                { step: '05', title: 'ERP Execution', sub: 'SAP/NetSuite update' }
            ],
            metrics: ['99.4% Accuracy', '15+ hrs Reclaimed', '100% Audit Trail']
        },
        it: {
            badge: 'SERVERLESS MICRO-SERVICE CONNECTOR',
            description: 'Deploy event-driven background agents on zero-downtime serverless architecture.',
            nodes: [
                { step: '01', title: 'Production Event', sub: 'API webhook trigger' },
                { step: '02', title: 'AWS Serverless Lambda Node', sub: 'Isolated execution' },
                { step: '03', title: 'Vector Index (pgvector)', sub: 'Semantic context' },
                { step: '04', title: 'Parallel Micro-Service Connector', sub: '0% Downtime' },
                { step: '05', title: 'Enterprise System Sync', sub: 'Real-time state' }
            ],
            metrics: ['0% Disruption', '14-Day Pilot', 'SOC2 / HIPAA Ready']
        },
        cx: {
            badge: 'RAG KNOWLEDGE SYNTHESIS ENGINE',
            description: 'Synthesize cited responses for complex client inquiries with human-in-the-loop escalation.',
            nodes: [
                { step: '01', title: 'Ticket Intake', sub: 'Omnichannel routing' },
                { step: '02', title: 'RAG Knowledge Query', sub: 'Internal docs search' },
                { step: '03', title: 'Draft Synthesis (Cited)', sub: 'Verifiable sources' },
                { step: '04', title: 'Escalation Gate', sub: 'Tier-2 agent review' },
                { step: '05', title: 'Auto-Dispatch', sub: 'Instant client response' }
            ],
            metrics: ['< 2m Resolution', '20+ hrs Reclaimed', 'Zero Hallucination']
        }
    };

    const tabButtons = document.querySelectorAll('#workflow-tabs .tab-btn');
    const descText = document.getElementById('workflow-desc-text');
    const badgeTag = document.getElementById('workflow-badge-tag');
    const nodesContainer = document.getElementById('flowchart-nodes');
    const t1 = document.getElementById('telemetry-t1');
    const t2 = document.getElementById('telemetry-t2');
    const t3 = document.getElementById('telemetry-t3');

    const renderWorkflow = (key) => {
        const data = workflowsData[key];
        if (!data) return;

        if (descText) descText.textContent = data.description;
        if (badgeTag) badgeTag.textContent = data.badge;

        if (nodesContainer) {
            nodesContainer.innerHTML = data.nodes.map((node, index) => `
                <div class="flow-node">
                    <div>
                        <div class="node-step-tag">NODE ${node.step}</div>
                        <div class="node-title">${node.title}</div>
                        <div class="node-sub">${node.sub}</div>
                    </div>
                    ${index < data.nodes.length - 1 ? '<div class="node-arrow">➔</div>' : ''}
                </div>
            `).join('');
        }

        if (t1) t1.textContent = data.metrics[0];
        if (t2) t2.textContent = data.metrics[1];
        if (t3) t3.textContent = data.metrics[2];
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tabKey = btn.getAttribute('data-tab');
            renderWorkflow(tabKey);
        });
    });

    // Initial render for Sales
    renderWorkflow('sales');

    /* ── 7. Interactive 10-Second Operational Discovery Simulation ── */
    const simCard = document.getElementById('audit-sim-card');
    const dialogueP0 = document.getElementById('sim-dialogue-p0');
    const dialogueP1 = document.getElementById('sim-dialogue-p1');
    const phaseIndicator = document.getElementById('sim-phase-indicator');
    const progressBar = document.getElementById('sim-progress-bar');

    let currentSimPhase = 0;

    const toggleSimPhase = () => {
        currentSimPhase = currentSimPhase === 0 ? 1 : 0;
        if (currentSimPhase === 0) {
            if (dialogueP0) dialogueP0.style.display = 'block';
            if (dialogueP1) dialogueP1.style.display = 'none';
            if (phaseIndicator) phaseIndicator.textContent = 'PHASE 1/2';
        } else {
            if (dialogueP0) dialogueP0.style.display = 'none';
            if (dialogueP1) dialogueP1.style.display = 'block';
            if (phaseIndicator) phaseIndicator.textContent = 'PHASE 2/2';
        }
        if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.transition = 'width 5s linear';
                progressBar.style.width = '100%';
            }, 50);
        }
    };

    if (simCard) {
        simCard.addEventListener('click', toggleSimPhase);
        setInterval(toggleSimPhase, 5000);
    }

    /* ── 8. Finance & Compliance 5-Step Workflow Interactive Diagram ── */
    const financeWorkflowSteps = [
        {
            badge: "PHASE 01 // INSTANT INFLOW INGESTION",
            title: "Multi-Channel Inflow Catch",
            sub: "Bank APIs, Payment Gateways & Physical Ingest",
            desc: "Real-time webhook ingestion from host-to-host bank feeds, Stripe, Razorpay, and physical cheque scans consolidated automatically into a single unified queue.",
            metrics: "100% INFLOW COVERAGE",
            highlight: "Auto-ingest bank feeds & gateway webhooks with zero manual entry."
        },
        {
            badge: "PHASE 02 // INTELLIGENT PARSING",
            title: "Automated Document & Invoice Extraction",
            sub: "AI OCR, GSTIN Validation & Vendor Matching",
            desc: "Automatic OCR data extraction for unstructured PDFs, line-item PO matching, GSTIN tax validation, and duplicate invoice detection.",
            metrics: "< 3 SECONDS / INVOICE",
            highlight: "Zero manual data entry for vendor invoices and expense claims."
        },
        {
            badge: "PHASE 03 // GOVERNANCE ENFORCEMENT",
            title: "Programmatic Dual-Key Governance Check",
            sub: "Segregation of Duties & Policy Engine",
            desc: "Automated policy checks preventing single-user authorization. Requires dual-key signoff for payouts exceeding defined financial thresholds.",
            metrics: "100% SOD ENFORCEMENT",
            highlight: "Programmatically block unauthorized payouts before cash moves."
        },
        {
            badge: "PHASE 04 // CONTINUOUS RECONCILIATION",
            title: "Real-Time 3-Way Ledger Reconciliation",
            sub: "Bank Feed, ERP & Gateway Triangulation",
            desc: "Continuous automated 3-way matching across bank statements, internal ERP ledgers, and payment processor settlement reports.",
            metrics: "DAILY VIRTUAL CLOSE",
            highlight: "Spot cash mismatches and unallocated funds immediately."
        },
        {
            badge: "PHASE 05 // COMPLIANCE LOCK",
            title: "Immutable Cryptographic Vaulting & Lock",
            sub: "Audit Trail & Regulatory Archive",
            desc: "Every transaction, approval signature, and audit record is cryptographically timestamped and stored in a read-only vault for SEBI & DPDP compliance.",
            metrics: "ZERO-PREP AUDIT READY",
            highlight: "Reconstruct any transaction chain instantly during regulator audits."
        }
    ];

    const finTabBtns = document.querySelectorAll('.workflow-tab-btn');
    const finBadge = document.getElementById('panel-badge');
    const finTitle = document.getElementById('panel-title');
    const finSub = document.getElementById('panel-sub');
    const finDesc = document.getElementById('panel-desc');
    const finMetrics = document.getElementById('panel-metrics');
    const finHighlight = document.getElementById('panel-highlight');

    finTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const stepIdx = parseInt(btn.getAttribute('data-step') || '0', 10);
            const data = financeWorkflowSteps[stepIdx];
            if (!data) return;

            finTabBtns.forEach((b, idx) => {
                const titleDiv = b.querySelector('div:last-child');
                if (idx === stepIdx) {
                    b.classList.add('active');
                    b.style.background = '#1E40AF';
                    b.style.borderColor = '#1E40AF';
                    b.style.color = '#FFFFFF';
                    if (titleDiv) titleDiv.style.color = '#FFFFFF';
                    const tag = b.querySelector('span');
                    if (tag) {
                        tag.style.background = '#FFFFFF';
                        tag.style.color = '#1E40AF';
                    }
                } else {
                    b.classList.remove('active');
                    b.style.background = '#FFFFFF';
                    b.style.borderColor = '#E2E8F0';
                    b.style.color = '#475569';
                    if (titleDiv) titleDiv.style.color = '#0F172A';
                    const tag = b.querySelector('span');
                    if (tag) {
                        tag.style.background = '#F1F5F9';
                        tag.style.color = '#334155';
                    }
                }
            });


            if (finBadge) finBadge.textContent = data.badge;
            if (finTitle) finTitle.textContent = data.title;
            if (finSub) finSub.textContent = data.sub;
            if (finDesc) finDesc.textContent = data.desc;
            if (finMetrics) finMetrics.textContent = data.metrics;
            if (finHighlight) finHighlight.textContent = data.highlight;
        });
    });

    /* ── 5. Compact Autonomous Operations Agent Simulator ── */
    const simTabContainer = document.getElementById('sim-tab-container');
    if (simTabContainer) {
        const scenarios = [
            {
                id: 'docs',
                pill: '📄 Find Docs',
                userMsg: 'Find the signed Acme Corp contract and latest SLA agreement.',
                aiResponse: 'Located Acme_MSA_2026.pdf (Signed). Key clause: 99.9% uptime SLA. Link ready.',
                meta: 'Storage: Cloud Drive • Instant Match',
                badge: '1.2s RETRIEVAL'
            },
            {
                id: 'expiry',
                pill: '⚠️ Expiries',
                userMsg: 'Which vendor documents or compliance certs expire next month?',
                aiResponse: '2 items flagged: AWS Enterprise SLA (24 days) and Vendor NDA #8492. Renewal drafts prepared.',
                meta: 'SEBI CSCRF Audit Guard Active',
                badge: '2 FLAGGED'
            },
            {
                id: 'schedule',
                pill: '🗓️ Schedule',
                userMsg: 'Organize today, protect 2 hrs deep work, and email my team.',
                aiResponse: 'Blocked 10 AM–12 PM for focus, moved 2 syncs to Slack, and emailed briefing to your team.',
                meta: 'Google Workspace Synced',
                badge: 'DISPATCHED'
            },
            {
                id: 'board',
                pill: '📊 Board Deck',
                userMsg: 'Make a 6-slide PPT and PDF summary for tomorrow’s board review.',
                aiResponse: 'Generated Board_Review_Q3.pdf & 6-slide PPT. Awaiting your 1-click review to send.',
                meta: 'Human-in-the-loop • No auto-send',
                badge: 'READY FOR SIGN-OFF'
            }
        ];

        let activeIndex = 0;
        let isAutoplay = true;
        let autoplayInterval = null;

        const simPills = simTabContainer.querySelectorAll('.sim-pill');
        const userMsgEl = document.getElementById('chat-user-msg');
        const aiResponseEl = document.getElementById('chat-ai-response');
        const metaEl = document.getElementById('chat-meta');
        const badgeEl = document.getElementById('chat-badge');

        const renderScenario = (idx) => {
            const data = scenarios[idx];
            if (!data) return;

            simPills.forEach((pill, i) => {
                if (i === idx) {
                    pill.classList.add('active');
                    pill.style.background = '#1E40AF';
                    pill.style.color = '#FFFFFF';
                } else {
                    pill.classList.remove('active');
                    pill.style.background = 'transparent';
                    pill.style.color = '#475569';
                }
            });

            if (userMsgEl) userMsgEl.textContent = `"${data.userMsg}"`;
            if (aiResponseEl) aiResponseEl.textContent = data.aiResponse;
            if (metaEl) metaEl.textContent = data.meta;
            if (badgeEl) badgeEl.textContent = data.badge;
        };

        simPills.forEach((pill, i) => {
            pill.addEventListener('click', () => {
                activeIndex = i;
                isAutoplay = false;
                if (autoplayInterval) clearInterval(autoplayInterval);
                renderScenario(activeIndex);
            });
        });

        autoplayInterval = setInterval(() => {
            if (isAutoplay) {
                activeIndex = (activeIndex + 1) % scenarios.length;
                renderScenario(activeIndex);
            }
        }, 4500);

        renderScenario(0);
    }

    /* ── 6. Executive Scoping Case Study Card Toggle (Homepage Diagnostic) ── */
    const caseStudyBtn = document.getElementById('case-study-toggle-btn');
    const caseStudyStep0 = document.getElementById('case-study-step-0');
    const caseStudyStep1 = document.getElementById('case-study-step-1');
    const caseStudyBtnText = document.getElementById('case-study-btn-text');
    const caseStudyBtnArrow = document.getElementById('case-study-btn-arrow');
    if (caseStudyBtn && caseStudyStep0 && caseStudyStep1) {
        let currentStep = 0;
        caseStudyBtn.addEventListener('click', () => {
            currentStep = currentStep === 0 ? 1 : 0;
            if (currentStep === 0) {
                caseStudyStep0.style.display = 'block';
                caseStudyStep1.style.display = 'none';
                if (caseStudyBtnText) caseStudyBtnText.textContent = 'View Solution';
                if (caseStudyBtnArrow) caseStudyBtnArrow.textContent = '→';
            } else {
                caseStudyStep0.style.display = 'none';
                caseStudyStep1.style.display = 'block';
                if (caseStudyBtnText) caseStudyBtnText.textContent = 'View Problem';
                if (caseStudyBtnArrow) caseStudyBtnArrow.textContent = '←';
            }
        });
    }

});


