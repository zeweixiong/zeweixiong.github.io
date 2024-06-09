---
title:      Note of NS merger summer school in MSU
date:       2018-05-01
tags:
    - note
uselatex: true
---

### Neutron star merger simulations - D. Radice

The main topic is about the structure & different aspects (like ejecta components) of NS merger and GR hydro simulation.

When doing the GR hydro simulation, the time is no longer as the label of one frame because it is GR. They are actually evolving the hyper-surface, $\Sigma$, gradually. 

Slicing freedom can help to avoid the singularity of black holes.

According to David, the normal vector always points upward vertically in the spherically symmetric case.

Difference between classical picture and relativistic picture of hydrodynamics:
Instead of describing the state at a time, we describe the flux of particles through spacetime.

No microscopic viscosity in GR hydrodynamics, because the hydrodynamical tensor and EM tensor can describe the angular momentum exchange for accretion and equivalently the viscosity.

### r-process nucleosynthesis - L. Roberts 

Galactic r-process budget: The mass yield from r-process in Milky-way galaxy is $M_r \sim t_{MW} R_\text{merger} M_\text{ej}$, where $t_{MW} \sim 10^{10} yr$, $R_\text{merger} \sim 10^{-4} /yr$, $M_\text{ej} \sim 0.01 M_\odot$, so $M_\text{r,merger} \sim 10^4 M_\odot$. And now we estimate $M_\text{r,galaxy} \sim 10^4 M_\odot$. In this sense, they fit very well, but $t_\text{coalesce} \sim 10^{6-8} \text{year}$ and the halo stars could a problem because in that early stage there may not be enough halo stars.

Calculating r-process: Since typically $v \propto r$, so $\rho=\rho_0 (t/t_0)^{-3}$.

The r-process network is a LARGE and coupled system of stiff ODEs. So we need SkyNet! Given the initial condition of Ye, we can calculate NSE & Yn/Yseed & La/Ac abundance & fission cycle. At around 0.1-1GK, there is still a self-heating or say the temperature rising due to neutron captures and beta decays.

### Kilonova - B. Metzger 

Not a bad idea to think the ejecta as a spherical for the scale of more than $100$km to several AU.

Kilonova : peaks at thousands time classical nova $10^{38}$ erg/s, so $10^{41}$ erg/s.

The most easy model of kilonova: 
- t=time since merger = expansion time = $R_\text{ej}/V_\text{ej}$ 
- $R_\text{ej}= V_\text{ej} t = 3\times 10^{14} cm \cdot V_{0.1} t_\text{days}$ 
- $\rho_\text{ej}=M_\text{ej}/ (4 \pi/3 R_\text{ej}^3)  = 3\times 10^{-13} g/cc \cdot M_{0.01} V_{0.1}^{-3} t_\text{day}^{-3}$ 
- $\tau_\text{ej}
=R_\text{ej}/\lambda_\text{mfp} (\text{mean free path})
=\rho_\text{ej} K R_\text{ej}= 73 K_1 M_{0.01} V_{0.1}^{-2} t_\text{day}^{-2}$, 
where K is the opacity, the cross section per unit mass $K_\text{es}=\sigma_T/m_P$. The opacity is composition-dependent, bound-bound opacity ($cm^2/g$) sets the photon mean free path.

Opacity is strongly sensitive to the lines density per unit wavelength in spectrum: $N_\text{level} \approx g!/(n!(g-n)!)$  where n electrons, g holes in which to place them & $N_\text{lines} \approx N^2\_\text{level}$ for Lanthanides, $f_\text{shell}(g=14)$  (Kasen 2013).

$\lambda_\text{mfp} $ is defined from random walk, and the time between single scattering is just $\lambda_\text{mfp}/c$. From the random walk, we know $t_\text{diffusion}=N \lambda_\text{mfp} = (R_\text{ej}^2/\lambda_\text{mfp}^2) \lambda_\text{mfp}/c = 7.3\text{ days }K_1 M_{0.01} V_\text{ej}^{-1} t_\text{day}^{-1}$.
TWO EPOCHS are divided based on the time scale: $t_\text{diff} \gg t$ : PHOTONS TRAPPED & $t_\text{diff} \ll t$ : PHOTONS ESCAPE. Equating $t_\text{diff}=t$ gives the critical time:

$$t_\text{peak}=(3 K M_\text{ej}/4 \pi V_\text{ej} c)^1/2 = 2.7day \cdot K_1^1/2 M_{0.01}^{1/2} V_{0.1}^{1/2}$$

and correspondingly

$$R_\text{peak} = V_\text{ej} t_\text{peak} = [7\times 10^9 \text{ km or few }10AU] K_1^{1/2}  M_{0.01}^{1/2} V_{0.1}^{-1/2}.$$

- Energy estimation: the radiation (thermal) energy is $E_{th} = 4\pi/3 R_\text{ej}^3 a T^4 \propto R_\text{ej}^{-1}$, the kinetic energy is $E_0 = 0.5 M_\text{ej} V_\text{ej}^2$. By comparing them, we can find the peak time from $E_{th} (t_\text{peak}) = E_0 (R_\text{peak}/R_0)^{-1}$. 
- $L=E_\text{th}(t_\text{peak})/t_\text{peak}$ 
- $\dot{q}\_\text{radiated} = 10^{10} E_{th} t_{day}^{1.3} erg/s/g$ 
- $\dot{Q}=\dot{q}\_r M_\text{ej} \approx 2\times 10^{41} erg/s \cdot M_{0.01} t_\text{day}^{-1.3}$

### Colloquium - B. Metzger 

Usually the open angle of jet is roughly $1/\Gamma$. From LIGO observation, the GRB is delayed 2s after the coalescence. The observation angle is approximately $0.6 ^{\circ}$ (??? need to check), but $\Gamma \approx 100$, so it could result from that the observation is too much deviated so we need to wait more time for the jet to slow down by sweeping up ISM.

Immediate black hole, indefinitely stable NS, rigidly rotating rotationally-supported supra-massive is ruled out.
So is it a differentially rotating supra-massive NS remnant?

1. View angle
2. NS staying time, will influence the ratio of different color light-curves.

Primordial black hole are formed in the early universe when high densities and inhomogeneous conditions could lead sufficiently dense regions to undergo gravitational collapse.

### Dense matter and the equation of state - C. Horowitz

- $1 MeV/fm^3 = 1.6 \times 10^{33} erg/cm^3$ 
- Nuclear density: $n_0=0.16 fm^3$ from Pb experiment 
- $\rho_0 = m n_0 =2.7 \times 10^{14} g/cm^3$ 
- $\epsilon_0 = m c^2 n_0 = 150 MeV/fm^3$ 
- Central density of NS $\approx 3-5 \epsilon_0$ ???

EoS: 
- $P=P(\epsilon,T,Y_p),  Y_P=Z/(N+Z)$ 
- $k_B T \ll \epsilon_F$ so we take $T \approx 0$ 
- Beta equilibrium $e+p \leftrightarrow n+\nu_e$ 
- When $\epsilon \ll \epsilon_0, Y_P\approx 1/2$ 
- when $\epsilon\approx \epsilon_0, Y_P\approx \text{few} \%$ 
- So our EoS becomes now $P=P(\epsilon,0,Y_P^{eq})$ 
- When $\epsilon>\epsilon_0$, strong interaction of neutrons favor to make electron and proton (when neutron get closer to each other), so Ye get back and we have $\sim 90\%$ n and $\sim 10\%$ p+e.

EOS with only NN can not support the NS with $M > 1.6 M_\odot$ so it is ruled out and we need three body interaction NN+NNN.

The EoS of neutron rich matter at high densities must be stiff enough (have a high enough $P$) to support this mass against collapse to a black hole. All soft EOS are immediately ruled out. Due to the observation of $2M_\odot$ neutron star.
But this does not tell the chemical composition of the NS interior.
NS cool by neutrino emission from high density interior which can shed light on composition.
We can detect the surface of NS by X-ray, equivalently saying we can detect neutrino cooling.

There is also minimal mass for NS because it needs gravitational confinement.

### Deformability of neutron stars - K. Chatziioannou 
Deformability is defined as the ability for a star to be deformed in a distorted gravitational field. When it is small, it means the star is more compact so that the gradient of gravitational field is small.

