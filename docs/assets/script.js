    (function(){
      const body = document.body;
      let lastTrigger = null;

      const FOCUSABLE = [
        'a[href]', 'button:not([disabled])', 'input:not([disabled])',
        'select:not([disabled])', 'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
      ].join(',');

      function lockScroll(){ body.style.overflow = 'hidden'; }
      function unlockScroll(){ body.style.overflow = ''; }

      function trapFocus(modal){
        const focusables = Array.from(modal.querySelectorAll(FOCUSABLE));
        if(focusables.length === 0){
          const dlg = modal.querySelector('.modal-dialog');
          if(dlg){ dlg.setAttribute('tabindex','-1'); dlg.focus(); }
          return;
        }
        const first = focusables[0];
        const last  = focusables[focusables.length - 1];
        function onKey(e){
          if(e.key !== 'Tab') return;
          if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
          else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
        }
        modal.addEventListener('keydown', onKey);
        (modal.querySelector('.close') || first).focus();
        modal.__trapHandler = onKey;
      }

      function releaseFocus(modal){
        if(modal.__trapHandler){ modal.removeEventListener('keydown', modal.__trapHandler); modal.__trapHandler=null; }
      }

      function openModal(id, trigger){
        const m = document.getElementById(id);
        if(!m) return;
        lastTrigger = trigger || document.activeElement;
        m.setAttribute('aria-hidden','false');
        lockScroll();
        trapFocus(m);
      }

      function closeModal(id){
        const m = document.getElementById(id);
        if(!m) return;
        m.setAttribute('aria-hidden','true');
        releaseFocus(m);
        unlockScroll();
        if(lastTrigger && document.contains(lastTrigger)){ lastTrigger.focus(); }
      }

      // Delegation: abrir/fechar
      document.addEventListener('click', function(e){
        const openBtn = e.target.closest('[data-open]');
        if(openBtn){
          e.preventDefault();
          openModal(openBtn.getAttribute('data-open'), openBtn);
          return;
        }
        const closeBtn = e.target.closest('[data-close]');
        if(closeBtn){
          e.preventDefault();
          closeModal(closeBtn.getAttribute('data-close'));
          return;
        }
        // clique no overlay fecha
        const overlay = e.target.classList.contains('modal') ? e.target : null;
        if(overlay && overlay.getAttribute('aria-hidden') === 'false'){
          closeModal(overlay.id);
        }
      });

      // ESC fecha modais visíveis
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
          document.querySelectorAll('.modal[aria-hidden="false"]').forEach(m => closeModal(m.id));
        }
      });
    })();
