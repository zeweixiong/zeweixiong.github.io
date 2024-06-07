---
title: "LaTeX in HTML"
date: 2024-06-07
tags:
    - latex
    - html
uselatex: true
---

### Implementation

Insert the follow code into `_layouts/post.html`.

```html
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        inlineMath: [['$','$']]
        }
    });
</script>
```

One can define a page variable & test `if uselatex`. Make sure to include `uselatex: true` at the front matter of the `md` file.

### Outcome

The followings demonstrate the $\LaTeX$ equations:

$$
H_n=1+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{n}=\sum_{i=1}^{n}\frac{1}{i}=O(\log n)
$$

$$
\begin{align}
x' &= \frac{x-ut/c^2}{\sqrt{1-u^2/c^2}} \\
t' &= \frac{t-ux/c^2}{\sqrt{1-u^2/c^2}}\\
y' &= y \\
z' &= z
\end{align}
$$

$$
\begin{align} \label{rotation}
x' &= x\cos(\theta) + y\sin(\theta) \\
y' &= y\cos(\theta) - x\sin(\theta) \\
z' &= z \\
t' &= t
\end{align}
$$

One can also use inline formula as $f_\nu(E) = \frac{1}{e^{E/T}+1}$.

It also works for different math fonts:

$ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz\alpha\beta\gamma\Gamma\delta\Delta\epsilon\varepsilon\zeta\eta\theta\vartheta\Theta\iota\kappa\lambda\Lambda\mu\nu\xi\Xi\pi\Pi\rho\varrho\sigma\Sigma\tau\upsilon\Upsilon\phi\varphi\Phi\chi\psi\Psi\omega\Omega$

$\mathit{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz\alpha\beta\gamma\Gamma\delta\Delta\epsilon\varepsilon\zeta\eta\theta\vartheta\Theta\iota\kappa\lambda\Lambda\mu\nu\xi\Xi\pi\Pi\rho\varrho\sigma\Sigma\tau\upsilon\Upsilon\phi\varphi\Phi\chi\psi\Psi\omega\Omega}$

$\mathbf{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz\alpha\beta\gamma\Gamma\delta\Delta\epsilon\varepsilon\zeta\eta\theta\vartheta\Theta\iota\kappa\lambda\Lambda\mu\nu\xi\Xi\pi\Pi\rho\varrho\sigma\Sigma\tau\upsilon\Upsilon\phi\varphi\Phi\chi\psi\Psi\omega\Omega}$

$\mathrm{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz\alpha\beta\gamma\Gamma\delta\Delta\epsilon\varepsilon\zeta\eta\theta\vartheta\Theta\iota\kappa\lambda\Lambda\mu\nu\xi\Xi\pi\Pi\rho\varrho\sigma\Sigma\tau\upsilon\Upsilon\phi\varphi\Phi\chi\psi\Psi\omega\Omega}$

$\mathsf{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz\alpha\beta\gamma\Gamma\delta\Delta\epsilon\varepsilon\zeta\eta\theta\vartheta\Theta\iota\kappa\lambda\Lambda\mu\nu\xi\Xi\pi\Pi\rho\varrho\sigma\Sigma\tau\upsilon\Upsilon\phi\varphi\Phi\chi\psi\Psi\omega\Omega}$

$\mathtt{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz}$

$\mathbb{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz}$

$\mathcal{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz}$

$\mathscr{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz}$

$\mathfrak{ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz}$

---

References:

1. [Make GitHub Page support Latex equations](https://zhuanlan.zhihu.com/p/36302775)
