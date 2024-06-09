---
title:      Note of TALENT summer school in Seattle
date:       2018-07-01
tags:
    - note
uselatex: true
---

### Standard model overview

Electroweak symmetry breaking.

CKM matrix comes from the fact that fermion mass-eigenstates not coincident with flavor eigenstates.

Precision tests.

Open questions:
- SHOULD answer question: 
- If there is a new field coupled with Higgs bosons, the bosons mass will be influenced.
- Another bigger problem is from $\Lambda_\text{cosmological}$ 
- $\theta_\text{QCD}$, parity, unification... 
- MUST answer question: 
- Dark matter & dark energy 
- Fermion masses 

### Beyond the standard model: EFT perspective
Models of new physics: 
- Extended gauge group: (SU(2)L x SU(2)R x U(1), ...), 
- Grand Unified group (SU(5),SU(10),...), 
- Extended particle 
- SUSY 
- Composite models (QCD-like EWSB) 
- Dark sectors 
- Combinations of the above 

### Neutrino oscillations in cosmology and astrophysics
To incorporate the massive neutrinos, we need  to keep track of coherent flavor oscillations & de-cohering inelastic collisions with the medium.

QKE: ...

### Precision tests: electroweak radiation corrections

1. Motivation: Precision observable: $\theta_\text{SM}\neq 0$

    1. $\|\theta\|\equiv \Delta \theta \neq 0 \Rightarrow \delta \theta^\text{EWPT} \neq 0$

       or $\delta \theta_\text{BSM} \neq 0 \text{ or } \delta \theta^\text{THY}_\text{SM} \neq 0$  

    2. How big is $\delta \theta_\text{BSM}$?

        $$
        	\frac{\delta \theta_\text{BSM}}{\theta_\text{SM}}=\left\{
        	\begin{array}{l}
        		(\frac{\bar{g}}{g})^2 (\frac{M_W}{M_\text{BSM}} )^2 & \text{ from tree digram} \\
        		(\frac{\bar{g}}{g})^2 (\frac{M_W}{M_\text{BSM}} )^2 (\frac{\bar{g}}{4\pi})^2 & \text{ from loop digram} 
        	\end{array}
        	\right. 
        $$
        
        Supposing $\frac{\delta \theta_\text{BSM}}{\theta_\text{SM}} \approx 10^{-3}$, how large would it imply to $M_\text{BSM}$? 

    3. Standard model radiative correction: 

        $[1+\delta_{RC}] \theta^{THY}_{SM}$
        
        $$
        	\delta_{RC}=\left\{
        	\begin{array}{l}
        		(\alpha/4\pi) \text{QCD, }(\alpha_s/\pi) & \text{pQCD} > 10^{-3} \\
        		(\alpha/\pi) & \text{EW}
        	\end{array}
        	\right.
        $$

2. Precision observables

    Low-Energy: $T_\mu, ft_{\frac{1}{2} }, A_{PV}, \beta E_1, R_{e,\mu}, (g-2)_\mu, 2\nu\beta\beta$ 

    High-Energy: $M_z, \Gamma_z, \sigma(e^+ e^-\to z\to f\bar{f}), M_W, $ 

3. Basics of E.W. corrections 

    QED 

    1. $e+\mu -\gamma- e+\mu$ to $e+\mu -\gamma-\text{F loop}-\gamma- e+\mu$ (vacuum polarization), (vertex correction), (Self-energy  on external leg), (BOX), 

    2. Vacuum polarization & running coupling (resum large logs)
        $$
        		M=\epsilon^\mu(q) \epsilon^\nu(q) \Pi_{\mu\nu}(q) \Rightarrow i[\tilde{D}^T(q^2 T_{\mu\nu})+\tilde{D}^L(q^2)L_{\mu \nu}] \text{Photon propagator}.
        $$

        $$
        	T_{\mu\nu} = -g_{\mu\nu} + q_\mu q_\nu /q^2, L_{\mu\nu} = q_\mu q_\nu/q^2, \tilde{D}^T[0]=-\tilde{D}^L[0]=\frac{1}{q^2+i \epsilon} 
        $$

        $$
        	\Pi_{\mu \nu}=T_{\mu\nu} \Pi^T+ L_{\mu\nu} \Pi^L
        $$

        Ward Identity gives $\Pi^L=0$ 

        $[D_{\mu\nu}]_T = \tilde{D}^T T_{\mu\nu}, D^T(q^2)=[q^2+\Pi^T(q^2)]^{-1}$ for running diagrams 

        $M_0\sim \frac{4\pi\alpha}{q^2} Q_e Q_\mu $ 

        $~~~~~~~~\Downarrow$ 

        $M=\frac{4\pi \alpha}{q^2} \frac{1}{[1+\frac{\Pi^T(q^2)}{q^2} ]} Q_e Q_\mu  $ where the denominator means modification or "screening" of charge 

        $$
        	\Pi_{(f)}^T (q^2) = \frac{2 \alpha}{\pi} Q^2_f q^2 \left\{ \frac{1}{6} (\frac{1}{\epsilon} -\gamma +\ln 4\pi ) - \bar{F}(m_f^2,m_f^2,q^2) \right\}
        $$

        $$
        	\bar{F}(a,b,c)= \int_0^1 dx x(1-x) \ln \left[ \frac{(1-x)a+xb-x(x-1)c-i \epsilon}{\mu^2}  \right]
        $$

        $$
        	\bar{F}(m_f^2,m_f^2,q^2)= \int_0^1 dx x(1-x) \ln \left[ \frac{m^2_f-x(1-x)q^2-i \epsilon}{\mu^2}  \right]
        $$

        Renormalize $\bar{MS}$ remove $(1/\epsilon-\gamma+\ln 4\pi)$ 

        $$\Pi_{\gamma \gamma}^T(q^2)^R_{\bar{MS}}\equiv \hat{\Pi}_{\gamma \gamma}^T(q^2) = -\frac{2\hat{\alpha}}{\pi} q^2 \sum_f Q^2_f N_\text{color}^f \bar{F}(m_f^2,m_f^2,q^2) $$ 

        $$\alpha_{eff} = \hat{\alpha} (\mu) [1+\hat{\pi}_{\gamma \gamma}^T(q^2)/q^2]^{-1} \approx \hat{\alpha} (\mu) [1-\hat{\pi}_{\gamma \gamma}^T(q^2)/q^2]$$

        $q^2>0$ for $e^+e^-$ annilation 

        $q^2<0$ for scattering 

    3. $\bar{F(m_F^2)} = \int_0^1dx x(1-x) \ln[\frac{m^2_e-x(1-x)M_z^2-i \epsilon}{\mu^2}] \sim \ln \frac{M_Z^2}{m_e^2} \mathcal{O}(10) $ 

        $\frac{d}{d\ln \mu} \alpha_\text{eff} = 0 \Rightarrow \text{renormalization group equation for } \alpha(\mu) $ 
    
        solution $\hat{\alpha}(\mu)=\frac{\hat{\alpha}(\mu_0)}{1-\hat{\alpha}(\mu_0)\beta \ln \frac{\mu}{\mu_0} } $ running coupling $\hat{\alpha}(\mu_e)\approx \frac{1}{132}, \hat{\alpha}(\mu_Z)\approx \frac{1}{127} $ where $\beta=\frac{1}{2 \pi} (\frac{4}{3\pi} ) \sum_f Q_f^2 N_c^f $ for all flavors with $\mu_f<\mu$. 

4. Electroweak Radiation correction 

    1. Muon decay: massive G. B. 

        $i \Gamma$ 

        $$S_F^{-1}(k) = \slashed{k}-\hat{m}_f(\mu) + \left[ \hat{A}_L(k^2)\slashed{k} + \hat{B}_L(k^2) \right]P_L (+(L\to R) \text{ for } N.C.)$$ 

    2. $\beta$-decay $d\to u+e+\bar{\nu}_e$

        $$M_\beta = \frac{\hat{g}^2}{8\hat{M}_W^2} V_{ud} \left[ 1+\frac{\hat{\Pi}_{WW}^T(0)}{M_W^2} +\hat{\delta}_{VB}^(\beta)  \right] $$
    
    3. Neutral currents 

        weak mixing angle 

        1. $\sin^2 \theta_W=1-M_W^2/M_Z^2=e^2/g^2=g'^2/(g'^2+g^2)$ Tree! 

            no longer true @ 1-loop 

            $\bar{MS}$ $\sin^2 \hat{\theta}_W$ 

5. Open issures / complications

    QCD effects

    1. Current ALG
    2. hardonic systems
    3. Vacuum polarization
    4. Two-loop corrections
