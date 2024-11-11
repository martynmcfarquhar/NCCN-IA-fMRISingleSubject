Search.setIndex({"alltitles": {"About the Author": [[0, "about-the-author"]], "Advanced: Interpretation of the SPM Scaling": [[5, null]], "Advanced: Time-series and Regression Perspectives": [[4, null]], "Advanced: Why is an AR(1) Model?": [[5, null]], "Building the Design Matrix": [[2, "building-the-design-matrix"], [3, "building-the-design-matrix"]], "Categorical Predictor Variables": [[2, "categorical-predictor-variables"]], "Contents": [[0, "contents"]], "Continuous Predictor Variables": [[2, "continuous-predictor-variables"]], "Creating Predictors for the Time Series": [[4, "creating-predictors-for-the-time-series"]], "Dataset": [[3, "dataset"]], "Dynamic drift correction": [[5, null]], "Estimating the Parameters": [[2, "estimating-the-parameters"]], "Example Experiment": [[6, "example-experiment"]], "How Do We Model fMRI Data?": [[1, "how-do-we-model-fmri-data"]], "Inference": [[2, "inference"], [3, "inference"], [4, "inference"]], "Interpreting the Parameters": [[2, "interpreting-the-parameters"], [3, "interpreting-the-parameters"]], "Introduction": [[0, null]], "Issue 1: The Shape and Timing of the BOLD Response": [[5, "issue-1-the-shape-and-timing-of-the-bold-response"]], "Issue 2: Autocorrelation": [[5, "issue-2-autocorrelation"]], "Issue 3: Low-frequency Noise": [[5, "issue-3-low-frequency-noise"]], "Issue 4: Image Scaling": [[5, "issue-4-image-scaling"]], "Modelling Approach": [[6, "modelling-approach"]], "Multiple Regression": [[2, "multiple-regression"]], "Multiple Regression in Matrix Form": [[2, "multiple-regression-in-matrix-form"]], "Parameter Estimates for Categorical Predictors": [[2, "parameter-estimates-for-categorical-predictors"]], "Parameter Estimates for Continuous Predictors": [[2, "parameter-estimates-for-continuous-predictors"]], "Parameter Estimation": [[3, "parameter-estimation"]], "Practical Applications of Whitening": [[5, null]], "Problems With Using the GLM to Model fMRI Data": [[5, null]], "Quiz": [[7, "quiz"]], "Simple Regression": [[2, "simple-regression"]], "Single-subject Modelling in SPM": [[6, null]], "Specifying a Single-subject Model in SPM": [[6, "specifying-a-single-subject-model-in-spm"]], "Specifying the Outcome Vector": [[3, "specifying-the-outcome-vector"]], "Standard Errors of the Estimates": [[2, "standard-errors-of-the-estimates"]], "Summary and Quiz": [[7, null]], "The Adapted GLM": [[5, "the-adapted-glm"]], "The GLM: A Worked Example": [[3, null]], "The General Linear Model": [[2, null]], "The General Linear Model Framework": [[2, "the-general-linear-model-framework"]], "The Mass-univariate Framework": [[4, "the-mass-univariate-framework"]], "The Need for Statistical Modelling": [[1, null]], "Understanding the term model": [[1, null]], "Using fitlm": [[3, "using-fitlm"]], "Using the GLM to Model fMRI Data": [[4, null]], "Visualising the Design Matrix": [[4, "visualising-the-design-matrix"]], "Why Do We Want to Model fMRI Data?": [[1, "why-do-we-want-to-model-fmri-data"]]}, "docnames": ["0.intro", "1.need-for-modelling", "2.glm", "3.glm-example", "4.glm-fmri", "5.glm-fmri-problems", "6.single-subject-spm", "7.summary-quiz"], "envversion": {"sphinx": 62, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1}, "filenames": ["0.intro.ipynb", "1.need-for-modelling.ipynb", "2.glm.ipynb", "3.glm-example.ipynb", "4.glm-fmri.ipynb", "5.glm-fmri-problems.ipynb", "6.single-subject-spm.ipynb", "7.summary-quiz.ipynb"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [4, 5], "0": [0, 2, 3, 4, 5], "000": 1, "0000": 3, "0048": 3, "0048303": 3, "005": 3, "008": 5, "008hz": 5, "0236": 3, "023622": 3, "024": 3, "03": 5, "063752": 3, "0638": 3, "064": 3, "0640": 3, "075": 3, "0750": 3, "0840": 3, "1": [1, 2, 3, 4], "10": 4, "100": 5, "1000": 3, "1000lb": 3, "105": [3, 4], "11": [2, 4], "110": [3, 4], "12": [2, 4], "128": 5, "1287": 3, "129": 3, "13": 4, "14": [4, 5], "1447": 3, "145": [3, 6], "15": [4, 5, 6], "150": 1, "16": [4, 5], "161": 0, "17": [4, 5], "175": [3, 4], "18": [3, 4, 5], "19": [3, 4, 5], "1994": 4, "1k": 2, "1st": 6, "2": [1, 2, 3, 4, 6], "20": [3, 4, 5], "2000": 5, "2014": [], "2017": 5, "20448": 3, "2045": 3, "205": 3, "21": [2, 3, 5], "215": [3, 4], "2150": 3, "22": [2, 3, 5], "23": [3, 6], "2375": 3, "24": 6, "249": 3, "24908": 3, "2491": 3, "25": 6, "26": [3, 6], "264": 3, "2640": 3, "2688": 0, "27": 6, "2713": 3, "275": 0, "288": 3, "2k": 2, "3": [1, 2, 3, 4], "300": 1, "30m": 6, "31": [0, 2], "32": 2, "320": [3, 4], "3200": 3, "344": 2, "36": 3, "3k": 2, "3mm": 6, "4": [0, 2, 3, 4], "400": 5, "4000": 3, "44": 0, "440": [3, 4], "4400": 3, "442": 3, "4422": 3, "45": 1, "460": [3, 4], "4600": 3, "493": 3, "4985": 3, "499": 3, "4x1": 3, "5": [2, 3, 4, 6], "50": 1, "52": 6, "53": 6, "555": 3, "55526": 3, "5553": 3, "5813": 3, "6": [2, 3, 4, 5, 6], "60": [1, 5], "608": 3, "6081": 3, "62": 3, "620": [3, 4], "6200": 3, "63": 6, "6x1": 3, "6x4": 3, "7": [2, 3, 4], "700": 3, "7000": 3, "7003": 3, "702": 3, "7022": 3, "70224": 3, "715": 3, "7150": 3, "7385": 3, "739": 3, "7625": 3, "763": 3, "7686": 3, "769": 3, "797": 3, "8": [2, 3, 4], "8000": 3, "8447": 3, "8569": 3, "857": 3, "875": [3, 4], "8750": 3, "8mm": 6, "9": [3, 4], "90": 5, "93": [3, 4], "940": 2, "9448": 3, "945": 3, "946": 3, "984": 3, "9840": 3, "9pl": 0, "A": [0, 1, 2, 5], "As": [0, 1, 2, 3, 4, 5, 6], "At": [2, 4], "By": [1, 5], "For": [1, 2, 3, 4, 5, 7], "If": [2, 4, 5], "In": [0, 1, 2, 3, 4, 5, 6], "It": [2, 3, 4, 5, 7], "Not": 4, "Of": [5, 6], "One": [2, 5], "The": [0, 6, 7], "There": 2, "These": [2, 3, 4, 5, 6], "To": [1, 2, 3, 4, 5], "With": 0, "_": [2, 4, 5], "________": 3, "__________": 3, "ab": [2, 3], "abl": [1, 2, 4], "about": [1, 2, 3, 4, 5], "abov": [1, 2, 3, 4], "absenc": 4, "abstract": [2, 3], "ac": 0, "accommod": 5, "accompani": 6, "accord": 3, "account": [2, 3, 5], "accur": [2, 4, 5], "accuraci": 5, "achiev": [1, 2, 3], "acknowledg": 5, "acquaint": 2, "acquisit": 5, "across": [1, 3, 4, 5], "act": 5, "action": [4, 6], "activ": 1, "actual": 5, "ad": [2, 3, 5], "adapt": 2, "add": 3, "addit": 4, "adjunct": 7, "adjust": [3, 5], "advantag": 1, "afni": 5, "after": [1, 2, 4, 5], "ag": 2, "again": [2, 5], "aim": 2, "akin": [2, 5], "al": 4, "align": [2, 5], "all": [0, 1, 2, 3, 4, 5], "allow": [1, 2, 4, 5], "along": 2, "alongsid": 2, "alreadi": [2, 4, 6], "also": [1, 2, 4, 5, 6, 7], "alter": 2, "altern": 4, "although": [0, 2, 3, 5], "alwai": 2, "amount": [1, 2], "an": [0, 1, 2, 3, 4, 6, 7], "analys": [0, 1, 3, 4], "analysi": [0, 1, 2, 3, 5, 7], "ancova": 2, "ani": [2, 3, 4, 5], "anoth": [1, 2, 4, 5], "anova": 2, "apart": 5, "appear": [2, 3], "appli": [1, 2, 4, 5], "applic": [1, 2, 3, 7], "approach": [0, 1, 4, 5], "appropri": 2, "ar": [0, 1, 2, 3, 4, 6], "arbitrari": 5, "argument": 3, "around": [2, 3, 5], "arrang": [3, 6], "articl": 7, "asid": [], "ask": 6, "assign": 2, "associ": [1, 2, 3, 4, 5, 6], "assum": [1, 2, 4, 5], "assumpt": 1, "author": 5, "autom": 6, "automat": [3, 5], "autoregress": 5, "avail": 1, "averag": [2, 3, 4, 6], "avoid": 5, "awai": 5, "awar": [2, 5], "axi": 4, "b": 2, "back": [4, 5], "backbon": 0, "background": 5, "base": [3, 4], "baselin": [5, 6], "basi": 5, "basic": [1, 2], "batch": 6, "becaus": [1, 2, 4, 5], "becom": 2, "becuas": [], "been": [2, 5, 6], "befor": [0, 1, 2, 4, 5, 6], "begin": [1, 2, 3, 4, 5], "behaviour": 1, "behind": [0, 2, 5], "being": [2, 4, 5], "below": [2, 3, 5, 6, 7], "best": 2, "beta": [2, 3, 4, 5], "beta_": [2, 3, 4, 5], "better": [2, 5], "between": [1, 2, 3, 4, 5, 6], "beyond": [2, 4], "bia": 5, "bias": [], "bisect": 4, "bit": 2, "block": [4, 6], "blood": 2, "bmatrix": [2, 3, 4], "bold": [1, 4], "boldsymbol": [2, 3, 4, 5], "booth": 0, "both": [2, 3, 4, 5, 7], "bottom": 4, "box": 1, "brain": [4, 5, 7], "break": 5, "brief": 4, "brighter": 4, "brightest": 4, "build": [4, 6], "built": [1, 2, 5], "calcul": [2, 3, 5], "calibr": 5, "call": 5, "can": [1, 2, 3, 4, 5, 6], "cannot": [5, 7], "canon": [5, 6], "captur": [1, 5], "car": 3, "care": 5, "carefulli": 5, "case": [2, 4, 5], "categor": 4, "categori": [2, 4, 6], "caus": 5, "certain": 2, "challeng": 4, "chang": [1, 2, 4, 5, 6], "check": [2, 5], "chen": 5, "choos": [2, 5, 6], "circumst": 2, "classifi": 2, "clear": [2, 4, 5], "clearer": 3, "close": [1, 2, 5], "closer": 5, "cluster": 1, "clutter": 5, "code": [2, 4, 6], "coeffici": [2, 3], "colleagu": 5, "collect": [4, 5, 6], "colormap": 4, "colour": [4, 5], "column": [2, 3, 4, 5], "combin": [0, 3, 5], "come": [2, 4, 5], "comfort": [2, 7], "common": 5, "commun": [0, 2], "compani": 2, "compar": [2, 4, 5], "comparison": [2, 5], "complet": [0, 2, 3, 5], "complex": 2, "complic": 4, "complimentari": 4, "comput": 5, "conatin": [], "concept": [0, 2, 7], "conceptu": 2, "concern": 5, "conclud": 3, "conclus": [2, 3], "concret": 3, "condit": [4, 5, 6], "confirm": 3, "connect": [2, 5], "consequ": 5, "consid": [1, 2, 4, 5], "consist": [1, 2, 6], "constant": [1, 3, 4, 5, 6], "construct": [1, 2, 3], "contain": [1, 2, 3, 4, 5], "contamin": 5, "content": 7, "contenti": 5, "context": [1, 2, 4], "continu": 4, "control": 2, "convert": [2, 3, 4], "convolut": 5, "convolv": [5, 6], "core": 2, "correct": 4, "correl": [2, 5], "correspond": [4, 5], "cortex": 4, "cosin": 5, "could": [2, 6], "cours": [0, 1, 2, 5, 6, 7], "cov": [2, 5], "covari": [2, 3, 5], "covbeta": 3, "cover": [6, 7], "cox": 5, "creat": [1, 5], "cross": 6, "current": 3, "cutoff": 5, "dai": 5, "darker": 4, "darkest": 4, "data": [0, 2, 3, 6, 7], "dataset": [0, 1, 2], "dct": 5, "ddot": 2, "de": 5, "decis": [2, 3], "deconvolut": [], "decreas": [2, 3, 5], "default": 5, "defin": 2, "degre": [1, 3], "delai": 5, "demand": 2, "demonstr": 5, "denot": 3, "depend": [2, 4, 5], "deriv": [2, 3, 5], "describ": 5, "descript": 1, "design": [1, 5, 6], "desir": 5, "despit": 2, "detail": [2, 3, 6], "determin": [1, 2], "deviat": 2, "diag": 3, "diagnosi": 2, "diagnost": 2, "diagon": 2, "differ": [2, 3, 4, 5, 6], "difficult": [3, 5], "difficulti": 2, "digest": 1, "dimens": [1, 6], "dimension": 2, "diminish": 5, "direct": [1, 2], "directli": [2, 5], "discern": [4, 7], "discount": 3, "discret": 5, "discuss": [1, 2, 3, 5], "displai": [1, 6], "distanc": 2, "distinct": [1, 5], "distribut": [1, 2, 3, 5], "diverg": 3, "divid": [2, 3, 4], "divis": 0, "do": [2, 3, 4, 5], "doe": [5, 7], "done": [2, 5], "dot": 2, "doubl": [3, 5, 6], "down": [1, 2], "dr": 0, "draw": [1, 4], "due": 3, "dummi": [2, 3, 4, 5, 6], "dure": [1, 2, 4, 5, 6], "e": [0, 2, 3, 5], "each": [0, 1, 2, 3, 4, 5, 6], "earli": 5, "earlier": [4, 5, 6], "easi": [], "easier": 1, "easiest": 4, "east": 0, "edg": 2, "effect": [1, 2, 3, 4, 5], "effici": [3, 5], "either": [2, 5], "element": [2, 3, 4, 5], "emerg": 3, "encapsul": 2, "encod": 4, "end": [2, 3, 4, 5, 6], "enhanc": 2, "enough": [1, 3], "enter": 2, "entir": 2, "epsilon": [2, 3, 4, 5], "epsilon_": [2, 3, 4, 5], "equal": 5, "equat": [2, 3, 4], "equival": [2, 5], "error": [1, 3, 4, 5], "essenti": [4, 5], "estim": [1, 4, 5, 6], "et": 4, "ethnic": 2, "even": [1, 4, 5], "everi": [1, 2, 4, 5], "everydai": 1, "everyth": 2, "everywher": 5, "evid": 3, "exact": 1, "exampl": [0, 1, 2, 4, 5], "except": 2, "expand": 2, "expect": [1, 2, 4], "experi": [1, 4, 5], "experiment": [0, 1, 4, 5, 6], "explain": 6, "explan": 4, "explicitli": 6, "explor": 7, "exponenti": 5, "express": 5, "extra": 5, "extract": 3, "f": 3, "facil": 5, "fact": [2, 3, 5], "factor": [1, 2], "fall": [], "familiar": 2, "far": 5, "fashion": [1, 2, 5], "featur": 5, "feel": 2, "few": 2, "fewer": [1, 2], "fhea": 0, "field": 5, "fig": [1, 2, 4, 5, 6], "figur": 5, "filter": 5, "final": [2, 5, 6], "find": [2, 5], "finger": 4, "first": [0, 2, 3, 4, 5, 6], "firstli": 2, "fit": [2, 4, 5], "fix": 1, "fixat": 6, "flat": 2, "fmri": [0, 2, 7], "focu": 1, "focus": 3, "focuss": [], "follow": [2, 3, 4], "forev": 7, "form": [1, 3, 4, 5, 6], "forward": [], "found": 5, "fourier": 5, "frac": [2, 5], "framework": [1, 3, 5, 7], "freedom": 3, "frequent": 7, "fristion": 4, "friston": 5, "from": [0, 1, 2, 3, 4, 5, 6, 7], "fsl": 5, "fuel": 3, "fulli": [6, 7], "function": [2, 3, 4, 5, 6], "fundament": [], "further": [1, 2, 5], "furthermor": 4, "fwhm": 6, "g": [3, 5], "gallon": 3, "gamma": 5, "gaussian": 6, "ge": 5, "gener": [0, 1, 6, 7], "georg": 1, "get": [2, 5, 7], "give": 2, "given": [1, 2, 3, 4, 5, 6], "glm": [0, 1, 2, 6, 7], "go": [2, 4], "good": [1, 2], "govern": 3, "gradient": 4, "grai": 4, "grand": 5, "graphic": 6, "grasp": 7, "gross": 4, "group": [0, 2], "guid": 6, "h": 2, "ha": [1, 3, 4, 5, 6, 7], "happen": 2, "harder": 2, "hat": [2, 3, 5], "have": [1, 2, 3, 4, 5, 7], "health": 0, "heart": 7, "heat": 5, "height": 4, "help": [3, 5], "hemodynam": 5, "here": 5, "high": [2, 5], "highlight": 1, "hire": 2, "histor": 7, "home": 5, "hopefulli": 5, "horsepow": 3, "hour": 2, "how": [0, 2, 3, 4, 5, 6], "howev": [1, 2, 3, 5], "hphantom": 3, "hrf": [5, 6], "huge": 1, "human": 0, "hypothes": 2, "hypothesi": [1, 2], "hz": 5, "i": [0, 1, 2, 3, 4, 6, 7], "i1": 2, "i2": 2, "ident": [2, 3, 5], "identifi": 5, "ij": 2, "ik": 2, "illustr": [1, 2, 4, 5, 6], "imag": [1, 3, 4, 6, 7], "imagesc": 4, "imagin": 4, "impact": 5, "implement": [4, 5], "impli": 5, "implicit": [2, 6], "import": [0, 2, 4, 5, 7], "importantli": [2, 4, 6], "impress": 5, "improv": 5, "inaccur": [], "includ": [2, 5, 6], "increas": [2, 3, 5], "independ": 5, "indic": [1, 2, 3, 4, 5], "individu": 2, "infer": 1, "inferenti": 4, "influenc": [1, 5], "influenti": 2, "inform": [1, 3, 5, 6], "initi": 5, "insight": 7, "instanc": [1, 2, 3, 4, 5], "instantan": 5, "instead": [1, 5, 6], "intens": 4, "intercept": [2, 3, 4], "interest": [0, 1, 2, 3, 4, 5, 7], "interfac": 6, "interpret": [1, 4, 6], "intim": 2, "introduc": [0, 4, 7], "introduct": 7, "intuit": 5, "inv": 3, "invers": 2, "invert": 2, "involv": [1, 2, 4, 6], "iq": 2, "irrespect": 4, "isotrop": 6, "issu": [2, 4], "iter": 5, "its": [1, 2, 4, 5], "j": 2, "just": [0, 1, 5], "justif": 5, "k": 2, "keep": 3, "kei": 2, "kernel": 6, "know": [2, 3, 4, 5], "known": [1, 2, 4, 5, 6], "label": 2, "lack": 5, "larg": [1, 3], "larger": [4, 5], "largest": 4, "last": [2, 7], "later": [0, 2, 6], "lb": 3, "lead": [3, 5], "learn": [0, 3, 4], "least": [], "leav": 4, "lectur": 0, "left": [2, 4, 5], "less": 5, "lesson": [0, 1, 2, 4, 5, 6, 7], "level": [2, 5, 6], "like": [2, 3, 5], "likelihood": [2, 3, 5], "limit": [3, 5], "line": [2, 4], "linear": [0, 1, 3, 5, 7], "littl": 6, "localis": 1, "locat": 1, "longer": 2, "look": [2, 3, 5], "loop": 4, "lot": [2, 3], "love": 7, "m13": 0, "machin": 3, "magnitud": [1, 2, 4, 5], "mai": [1, 2, 5, 7], "main": [1, 5], "make": [2, 3, 4, 5, 7], "manag": [1, 2], "manchest": 0, "mani": [0, 1, 2, 4], "manipul": [1, 4, 5], "manual": 3, "map": 1, "martyn": 0, "mass": [1, 5], "mathbf": [2, 3, 4, 5], "mathcal": [2, 5], "mathemat": [1, 2], "matlab": [3, 4, 6], "matric": 2, "matrix": [5, 6], "matter": 5, "maximum": [2, 3, 5], "mcfarquhar": 0, "mean": [1, 2, 3, 4, 5, 6, 7], "meaningfulli": 5, "measur": [1, 2, 4, 5], "mention": 5, "messag": 5, "method": [2, 3, 4, 5, 7], "mid": 5, "middl": 5, "might": [], "mile": 3, "minim": 3, "minimis": 2, "minut": 5, "miss": 3, "mni": 6, "model": [0, 3, 7], "modern": 5, "modul": [0, 2, 5, 6], "more": [1, 2, 3, 5], "most": [0, 1, 2, 3, 4, 7], "motiv": 1, "motor": 4, "mpg": 3, "much": [1, 2, 5], "multipl": 4, "multipli": [2, 5], "must": [2, 5, 6], "mutlipl": 2, "n": [2, 3, 5], "n1": 2, "n2": 2, "name": 5, "natur": [2, 4, 5], "necessari": 5, "need": [0, 2, 3, 5, 6, 7], "neg": [4, 6], "neuroimag": [0, 2, 7], "neurosci": 0, "neutral": 6, "never": 5, "next": [1, 2, 4], "nk": 2, "nois": 1, "non": [1, 2, 3, 4], "none": 3, "normal": 2, "normalis": 6, "notabl": 3, "notat": 2, "note": [5, 6], "notic": [2, 4, 5], "notion": [], "now": [2, 3, 4, 5], "nu": 4, "null": [2, 3], "number": [1, 2, 3, 4, 5], "numer": 2, "o": 2, "observ": [1, 2, 3], "occur": [4, 5], "off": [2, 4, 5, 6], "offset": 5, "often": [0, 2, 5], "onc": [1, 2, 3, 5], "one": [0, 1, 2, 3, 4, 5, 7], "onli": [1, 2, 3, 4, 5], "onset": 5, "oper": [2, 5], "opper": [], "opposit": 5, "optimis": 5, "order": [2, 4, 5], "origin": [3, 5], "other": [1, 2, 4, 5], "our": [1, 2, 3, 4, 5], "ourselv": 5, "out": 3, "outcom": [2, 4], "outlin": 4, "over": [4, 5], "overlai": 1, "overst": 7, "own": 2, "p": [2, 3, 4, 5], "pack": 2, "paper": 5, "paramet": [1, 4, 5, 6], "parametr": 1, "part": [2, 4], "particular": 2, "particularli": [5, 7], "pass": [3, 5], "patient": 2, "pattern": [1, 4, 5], "peak": 5, "per": 3, "percentag": 5, "perfect": [1, 2], "perform": [0, 2, 4, 5, 6], "period": [4, 5, 6], "pernet": [], "perspect": [2, 5], "phd": 0, "phenomena": [1, 2], "philip": 5, "pictur": [3, 6], "plane": [2, 3], "plot": 4, "plu": 2, "point": [1, 2, 3, 4, 5], "pool": 5, "poor": 5, "popul": [1, 2], "posibl": 3, "posit": [4, 6], "possibl": 2, "power": 5, "practic": [], "pre": [5, 6], "predict": [1, 2, 3, 4, 5], "predictor": [3, 5], "preprocess": 6, "presenc": [4, 5], "present": [2, 4], "previou": [3, 4, 5], "prevou": [], "primari": 4, "prime": 2, "principl": 0, "probabl": [1, 2, 3], "problem": [0, 2, 4], "proce": 2, "procedur": [4, 5], "process": [1, 4, 5, 6], "produc": [1, 2, 4, 5], "product": 2, "pronounc": 3, "propos": 2, "provid": [1, 2, 3, 5, 7], "pseudo": [], "psychologi": 0, "purport": 5, "put": [3, 5], "pval": 3, "pvalu": 3, "quanitif": 1, "quantif": 1, "quantifi": [1, 2], "queri": 3, "question": 3, "quiz": 0, "r": 3, "rais": 5, "rare": 2, "rather": [2, 5], "raw": [2, 3, 4], "re": 5, "reach": [2, 5], "reaction": 2, "read": [2, 5], "real": [1, 2, 5], "realign": 6, "realist": 5, "realiti": [1, 5], "reason": [5, 6], "recal": [1, 2], "recalibr": 5, "recent": 5, "recognis": 2, "recreat": 2, "reduc": 1, "reduct": 3, "refer": [2, 5], "refin": 1, "reflect": [1, 2], "region": 4, "regress": 3, "reject": 2, "rel": 5, "relat": 5, "relationship": [1, 2, 3], "relationsip": 3, "relev": 3, "reli": [2, 5], "relianc": [], "remain": 5, "rememb": [2, 3, 4, 5], "remov": 5, "render": [], "repeat": [4, 5], "repetit": 6, "replic": 1, "repres": [0, 1, 2, 3, 4, 5, 6], "requir": [2, 4], "rescal": 5, "research": 5, "resourc": 2, "respect": 4, "respond": 4, "respons": 0, "respoons": 1, "rest": [0, 4, 6], "result": [0, 1, 2, 4, 5], "return": [2, 3, 7], "revisit": 5, "rho": 5, "right": [2, 4, 5], "risk": 5, "root": [2, 3], "run": 5, "same": [1, 2, 4, 5, 6], "sampl": [2, 3], "save": 4, "saw": [4, 6], "sca": 4, "scale": [2, 4], "scan": [5, 6], "scanner": 5, "scatterplot": 2, "schemat": 6, "school": 0, "scienc": 0, "scope": [2, 4], "score": 2, "screen": 6, "se": [2, 3], "second": [3, 4, 5, 6], "section": [1, 2, 3, 4, 5, 6], "see": [0, 1, 2, 3, 4, 5, 6], "seem": 3, "seen": [4, 5], "select": 3, "sens": [1, 5], "sensit": 5, "separ": [0, 1, 2, 4], "sequenc": [1, 5], "seri": [1, 5], "set": [3, 5], "setup": 5, "sever": 5, "shape": 4, "shorten": 5, "shorter": 2, "shorthand": 2, "should": 5, "show": [2, 4, 5], "shown": [1, 2, 3, 4, 5, 6], "siemen": 5, "sigma": [2, 5], "sigma2": 3, "signal": [1, 4, 5, 6], "signific": [1, 2, 4], "significantli": 3, "sim": [2, 5], "similar": [1, 4, 5], "similarli": 4, "simpl": [3, 4, 5, 6], "simpli": [2, 3, 5], "simplif": 1, "simplifi": 1, "singl": [0, 1, 2, 4, 5], "sit": 2, "situat": 2, "size": [2, 3, 6], "slightli": 5, "slope": [2, 4], "slower": 5, "small": 3, "smaller": [2, 4], "smooth": 6, "so": [2, 3, 5, 7], "softwar": [], "solid": 4, "solut": 5, "solv": [2, 5], "some": [1, 2, 5, 7], "someth": [1, 2], "sometim": 5, "somewhat": [2, 3], "sort": [2, 4, 5], "space": [2, 6], "spatial": 1, "special": 2, "specialis": 2, "specif": [2, 5], "specifi": [1, 2, 4], "specifii": [1, 6], "spend": 2, "split": 1, "spm": [0, 1, 2, 4], "spm12": 6, "spm_desmtx": 4, "spm_spm": 6, "spread": 2, "sqrt": 3, "squar": [2, 3], "stabil": 5, "stage": 2, "standard": [3, 4, 5], "standardis": [], "star": 5, "start": [2, 5], "state": 1, "statist": [0, 2, 3, 4, 5], "statistician": 1, "steadi": 5, "step": [0, 2, 4, 5], "still": [1, 2, 5], "stimuli": [4, 5], "stimulu": [4, 5], "straight": 2, "street": 0, "strength": 2, "strong": [4, 7], "structur": [2, 4, 5], "studi": [1, 2, 5], "subject": [0, 1, 2, 4, 5], "subtract": 2, "suggest": 2, "suitabl": 5, "sum": [2, 5], "sum_": 2, "summari": [0, 1, 2], "summaris": [1, 2, 4], "superimpos": 4, "sure": [4, 5, 7], "sx": 5, "sy": 5, "symbol": 5, "system": [2, 6], "t": [0, 2, 3, 4, 5], "tabl": 3, "tail": 3, "take": [1, 2, 3, 4, 5, 7], "taken": [2, 3, 5], "talk": 2, "tap": 4, "tau_": 5, "taylor": 5, "tcdf": 3, "te": 6, "techniqu": [0, 1], "tell": [2, 4], "tempor": 1, "temptat": [], "term": [2, 3, 4, 5, 6], "test": [1, 2, 5, 7], "text": [2, 5], "than": [1, 2, 5], "thei": [1, 2, 5, 6], "them": [2, 3], "theori": [0, 1, 2, 3, 5, 7], "therefor": [1, 2, 3, 4, 5], "thi": [0, 1, 2, 3, 4, 5, 6, 7], "thing": [], "think": [4, 5], "third": 5, "those": [1, 2, 3, 4, 7], "thought": 1, "threshold": 1, "through": [2, 4, 5, 6], "thu": 5, "tightli": 2, "time": [1, 2, 6, 7], "togeth": [3, 5], "took": 5, "tool": 4, "toolbox": 3, "top": 4, "topic": [2, 5, 7], "toward": 0, "tr": [4, 6], "transform": 5, "transmiss": 3, "trap": [], "treatment": 2, "true": [1, 5], "try": [3, 4], "tstat": 3, "turn": [2, 6], "twice": 4, "two": [1, 2, 3, 4, 5], "type": [2, 3], "typic": [1, 2, 3, 4, 5], "u": [1, 2, 4], "uk": 0, "unbias": [], "uncertain": 2, "uncertainti": [1, 3], "uncorrel": 5, "under": [1, 2], "underset": 2, "understand": [2, 3, 4, 5, 7], "understood": [1, 2, 4], "unfortun": [4, 5], "uniqu": [3, 4, 5], "unit": [2, 3, 5], "univari": [1, 5], "univers": 0, "unknown": 2, "until": 4, "up": [2, 5], "upon": [1, 2, 4, 5], "us": [0, 1, 2, 6, 7], "usual": [2, 5], "util": 1, "v": 3, "valenc": 6, "valu": [1, 2, 3, 4, 5], "variabl": [1, 3, 4, 5, 6], "varianc": [2, 3, 5], "vdot": 2, "vector": [2, 4], "verbatim": [], "veri": [4, 5, 7], "version": 5, "vertic": 2, "via": 2, "video": 6, "view": [4, 6], "visibl": 4, "visual": 2, "visualis": 2, "vital": 2, "volum": [1, 5, 6], "voxel": [1, 4, 5, 6], "w": 5, "wa": [3, 4, 5, 6], "wage": 2, "wai": [1, 2, 5], "want": 2, "we": [0, 2, 3, 4, 5, 6], "weak": [4, 5], "weaker": 5, "week": 4, "weigh": 3, "weight": [2, 3], "well": [0, 1, 2, 5], "were": [2, 3, 4, 6], "what": [2, 4, 5], "when": [2, 4, 5], "where": [1, 2, 4, 5], "wherea": 4, "whether": [1, 2], "which": [0, 1, 2, 3, 4, 5, 7], "while": [1, 3], "whilst": 2, "white": 5, "whiten": [], "why": 2, "wide": [2, 7], "width": 2, "within": [1, 5], "without": [2, 3, 5], "word": 5, "work": [0, 2, 5], "worker": 2, "world": [1, 7], "worth": [1, 2, 5], "would": [2, 3, 4, 5], "write": 2, "written": 2, "wrong": 1, "wx": 5, "wy": 5, "x": [2, 3, 4], "x1": 3, "x2": 3, "x3": 3, "x_": 2, "x_scale": 4, "xi": 4, "y": [2, 3, 4, 5], "y_": [2, 4], "year": [0, 5], "yhat": 3, "you": [0, 2, 4, 5, 6, 7], "your": 7, "zero": [2, 3]}, "titles": ["Introduction", "The Need for Statistical Modelling", "The General Linear Model", "The GLM: A Worked Example", "Using the GLM to Model fMRI Data", "Problems With Using the GLM to Model fMRI Data", "Single-subject Modelling in SPM", "Summary and Quiz"], "titleterms": {"1": 5, "2": 5, "3": 5, "4": 5, "A": 3, "The": [1, 2, 3, 4, 5], "With": 5, "about": 0, "adapt": 5, "advanc": [4, 5], "an": 5, "applic": 5, "approach": 6, "ar": 5, "author": 0, "autocorrel": 5, "bold": 5, "build": [2, 3], "categor": 2, "content": 0, "continu": 2, "correct": 5, "creat": 4, "data": [1, 4, 5], "dataset": 3, "design": [2, 3, 4], "do": 1, "drift": 5, "dynam": 5, "error": 2, "estim": [2, 3], "exampl": [3, 6], "experi": 6, "fitlm": 3, "fmri": [1, 4, 5], "form": 2, "framework": [2, 4], "frequenc": 5, "gauss": [], "gener": 2, "glm": [3, 4, 5], "how": 1, "i": 5, "imag": 5, "infer": [2, 3, 4], "interpret": [2, 3, 5], "introduct": 0, "issu": 5, "linear": 2, "low": 5, "markov": [], "mass": 4, "matrix": [2, 3, 4], "model": [1, 2, 4, 5, 6], "multipl": 2, "need": 1, "nois": 5, "outcom": 3, "paramet": [2, 3], "perspect": 4, "practic": 5, "predictor": [2, 4], "problem": 5, "quiz": 7, "regress": [2, 4], "respons": 5, "scale": 5, "seri": 4, "shape": 5, "simpl": 2, "singl": 6, "specifi": [3, 6], "spm": [5, 6], "standard": 2, "statist": 1, "subject": 6, "summari": 7, "term": 1, "theorem": [], "time": [4, 5], "understand": 1, "univari": 4, "us": [3, 4, 5], "variabl": 2, "vector": 3, "visualis": 4, "want": 1, "we": 1, "whiten": 5, "why": [1, 5], "work": 3}})