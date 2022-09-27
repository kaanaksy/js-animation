const timeLine = gsap.timeline({ default: { ease: 'power1.out' } })

timeLine.to('.text', { x: '0%', duration: 1, stagger: 0.3 })
timeLine.to('.slider', { x: '-260%', duration: 1.5, delay: 0.5 })
timeLine.to('.intro', { x: '-260%', duration: 1 }, "-=1")
timeLine.fromTo('nav', { opacitiy: 0 }, { opacitiy: 1, duration: 1 })
timeLine.fromTo('.big-text', { opacitiy: 0 }, { opacitiy: 1, duration: 1 }, "-=1")