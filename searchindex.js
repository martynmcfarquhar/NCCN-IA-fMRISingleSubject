Search.setIndex({"docnames": ["0.intro", "1.need-for-modelling", "2.glm", "3.glm-example", "4.glm-fmri", "5.glm-fmri-problems", "6.single-subject-spm", "7.summary-quiz"], "filenames": ["0.intro.ipynb", "1.need-for-modelling.ipynb", "2.glm.ipynb", "3.glm-example.ipynb", "4.glm-fmri.ipynb", "5.glm-fmri-problems.ipynb", "6.single-subject-spm.ipynb", "7.summary-quiz.ipynb"], "titles": ["Introduction", "The Need for Statistical Modelling", "The General Linear Model", "The GLM: A Worked Example", "Using the GLM to Model fMRI Data", "Problems With Using the GLM to Model fMRI Data", "Single-subject Modelling in SPM", "Summary and Quiz"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 6, 7], "lesson": [0, 1, 2, 4, 6, 7], "introduc": [0, 4], "gener": [0, 1, 7], "linear": [0, 1, 5], "model": [0, 3], "glm": [0, 1, 2, 6], "which": [0, 1, 2, 3, 4, 5, 6], "one": [0, 1, 2, 3, 4, 5, 7], "most": [0, 1, 2, 3, 4], "import": [0, 1, 2, 4, 5], "concept": [0, 1, 2], "you": [0, 1, 2, 4, 5, 6, 7], "learn": [0, 1, 4], "year": [0, 5], "The": [0, 4, 6, 7], "backbon": 0, "all": [0, 1, 2, 3, 4, 5, 7], "statist": [0, 2, 3, 5, 6, 7], "analys": [0, 2], "we": [0, 2, 3, 4, 5, 6, 7], "perform": [0, 7], "modul": [0, 1, 2, 4, 5, 6], "well": [0, 1, 4, 5, 7], "mani": [0, 1, 2, 4], "analysi": [0, 2, 3, 5, 6, 7], "techniqu": 0, "see": [0, 2, 3, 4, 5, 7], "rest": [0, 4, 6], "cours": [0, 1, 2, 5, 7], "In": [0, 1, 2, 3, 4, 5, 6, 7], "theori": [0, 2, 5], "principl": [0, 2, 5], "behind": [0, 5], "befor": [0, 3, 4, 6], "how": [0, 2, 3, 4, 5, 6, 7], "us": [0, 1, 2, 3, 6, 7], "fmri": [0, 3, 7], "data": [0, 2, 3, 6, 7], "from": [0, 1, 2, 3, 4, 5, 6, 7], "singl": [0, 1, 2, 5], "subject": [0, 1, 2, 4, 5, 7], "although": [0, 2, 3, 5, 6], "ar": [0, 1, 2, 3, 4, 5, 6, 7], "often": [0, 5], "interest": [0, 1, 4, 5], "result": [0, 5], "just": [0, 2, 5], "approach": [0, 1, 2, 4, 5, 6], "first": [0, 2, 3, 4, 5, 6], "experiment": [0, 1, 2, 4, 5, 6, 7], "respons": [0, 1], "each": [0, 1, 2, 3, 4, 5, 6], "separ": [0, 1, 2, 4, 5], "later": [0, 4, 6, 7], "combin": [0, 1, 2, 3, 5], "group": [0, 2], "As": [0, 1, 2, 3, 4, 5, 6], "repres": [0, 1, 2, 3, 4, 5, 6], "step": [0, 2, 4, 5, 6, 7], "toward": 0, "complet": [0, 2, 3, 5, 7], "need": [0, 2, 3, 5, 7], "A": [0, 1, 2, 5], "work": [0, 2, 5], "exampl": [0, 2, 4, 5], "problem": [0, 4], "With": 0, "spm": [0, 1, 2, 4, 5, 7], "summari": [0, 2, 4], "quiz": 0, "dr": 0, "martyn": 0, "mcfarquhar": 0, "phd": 0, "fhea": 0, "lectur": 0, "neuroimag": [0, 2], "g28": 0, "zochoni": 0, "build": [0, 4], "divis": 0, "psycholog": [0, 2], "commun": [0, 2], "human": 0, "neurosci": 0, "school": 0, "health": 0, "scienc": [0, 2], "univers": 0, "manchest": 0, "m13": 0, "9pl": 0, "t": [0, 3, 5, 6], "44": 0, "0": [0, 2, 3, 4, 5], "161": 0, "275": 0, "2688": 0, "e": [0, 3], "ac": 0, "uk": 0, "order": [1, 2, 4, 5], "understand": [1, 2, 4, 5, 7], "consid": [1, 2, 4, 5], "an": [1, 2, 3, 4, 5, 6], "dataset": [1, 2, 4, 6], "dimens": [1, 6], "50": 1, "time": [1, 2, 6], "60": 1, "volum": [1, 5, 6], "alon": 1, "contain": [1, 2, 3, 4, 5], "150": 1, "000": 1, "voxel": [1, 4, 5, 6], "If": [1, 2, 4, 7], "had": 1, "tr": [1, 6], "2": [1, 2, 3, 4], "scan": [1, 6], "onli": [1, 2, 3, 4, 5], "10": 1, "minut": [1, 5], "would": [1, 2, 3, 5, 7], "collect": [1, 4, 6], "300": 1, "lead": [1, 3, 5], "total": 1, "45": 1, "point": [1, 2, 3, 4, 5], "basic": 1, "part": [1, 2, 4, 5], "aim": [1, 2], "help": [1, 3, 4, 5], "make": [1, 2, 3, 4, 5, 7], "sens": [1, 5], "huge": 1, "amount": 1, "mean": [1, 2, 4, 5, 6], "condens": [1, 2], "valu": [1, 2, 3, 4, 5, 6], "smaller": [1, 4], "set": [1, 3, 4, 5], "provid": [1, 2, 3, 5, 7], "inform": [1, 3, 6], "magnitud": [1, 4, 5], "effect": [1, 2, 3, 4, 5, 7], "relat": [1, 4, 5], "allow": 1, "nois": 1, "know": [1, 2, 3, 4, 5], "variat": 1, "bold": [1, 4], "signal": [1, 4, 5, 6], "could": [1, 2, 7], "come": [1, 2, 4, 5, 7], "varieti": 1, "sourc": 1, "includ": [1, 2], "motion": 1, "scanner": [1, 5], "true": [1, 5], "chang": [1, 2, 4, 5, 6], "associ": [1, 2, 4, 6], "our": [1, 2, 3, 4, 5, 6], "experi": [1, 4, 5], "out": [1, 5], "so": [1, 2, 3, 4, 5], "can": [1, 2, 3, 4, 5, 6, 7], "focu": 1, "those": [1, 4, 5], "discount": [1, 3], "ani": [1, 2, 3, 4, 5], "illustr": [1, 4, 5, 6], "below": [1, 2, 3, 4, 5, 6, 7], "also": [1, 2, 4, 5, 6], "quantifi": [1, 2], "degre": [1, 3], "certainti": 1, "about": [1, 2, 3, 4, 5, 7], "given": [1, 2, 3, 4, 5, 6], "form": [1, 2, 3, 4, 5, 6], "answer": 1, "question": 1, "brain": [1, 4, 5, 7], "region": [1, 4], "task": [1, 6], "across": [1, 2, 3, 4, 5], "differ": [1, 2, 3, 4, 5, 6], "condit": [1, 4, 5, 6], "simplifi": 1, "down": [1, 2], "reach": [1, 5, 7], "conclus": [1, 3, 7], "between": [1, 2, 3, 4, 5, 6], "term": [1, 2, 3, 4, 5, 6], "thought": 1, "recal": 1, "seri": [1, 5], "reflect": 1, "measur": [1, 2, 4, 5], "dure": [1, 2, 4, 5, 6], "everi": [1, 2, 4, 5, 7], "parametr": 1, "map": 1, "fit": [1, 2, 5], "timeseri": [1, 4, 5], "estim": [1, 4, 5, 6], "paramet": [1, 4, 5, 6], "some": [1, 2, 5, 7], "indic": [1, 2, 3, 4, 5], "direct": 1, "tool": [1, 2], "known": [1, 2, 4, 5, 6], "willl": 1, "main": [1, 2, 5], "wai": [1, 2, 4, 5, 7], "whole": 1, "To": [2, 3, 4, 5], "have": [2, 3, 4, 5, 7], "start": [2, 5], "multipl": [2, 4, 7], "regress": [2, 3, 5], "synchron": 2, "session": 2, "touch": 2, "simpl": [2, 3, 4, 5, 6], "outcom": [2, 3, 4], "essenti": [2, 4, 5], "same": [2, 4, 5, 6], "except": 2, "k": 2, "therefor": [2, 4, 5], "y_": 2, "i": 2, "beta_": [2, 3, 4], "1": [2, 3, 4], "x_": 2, "i1": 2, "i2": 2, "dot": 2, "ik": 2, "epsilon_": [2, 3, 5], "where": [2, 4, 5], "usual": 2, "assum": [2, 4, 5], "normal": 2, "probabl": 2, "begin": [2, 3], "align": 2, "sim": 2, "mathcal": 2, "n": [2, 3, 5], "mu_": 2, "sigma": [2, 4, 5], "end": [2, 3, 4, 5, 6], "conceptu": 2, "few": 2, "detail": [2, 5, 6], "firstli": 2, "rather": 2, "than": [2, 4, 5], "line": [2, 4], "plane": [2, 3], "dimension": 2, "space": [2, 4, 6], "For": [2, 3, 4, 5, 7], "instanc": [2, 3, 4, 5], "visualis": 2, "shown": [2, 3, 4, 5, 6], "obvious": 2, "when": [2, 4, 5], "becom": [2, 5], "imposs": 2, "stai": 2, "basi": [2, 5], "distribut": [2, 3, 5], "individu": 2, "slope": [2, 4, 5], "edg": 2, "importantli": [2, 4, 6], "coeffici": 2, "after": [2, 5], "take": [2, 3, 4, 5], "other": [2, 4], "account": [2, 3, 5], "becaus": [2, 4, 5], "ad": [2, 4, 5], "more": [2, 3, 4, 5, 6], "decis": [2, 3], "built": 2, "fact": [2, 3], "simpli": [2, 5], "written": 2, "notat": 2, "larg": [2, 3, 5], "beyond": 2, "method": [2, 3, 5, 7], "exactli": 2, "system": [2, 6, 7], "ha": [2, 3, 4, 5, 6], "long": 2, "been": [2, 5, 6], "statistician": 2, "taken": [2, 3, 5, 6], "branch": 2, "catch": 2, "up": [2, 4, 5], "jacob": 2, "cohen": 2, "wrote": 2, "back": [2, 5], "1968": 2, "still": [2, 5], "caught": 2, "defin": 2, "kind": 2, "treat": 2, "them": [2, 3, 5, 7], "entiti": 2, "anova": 2, "taught": 2, "thei": [2, 5, 6, 7], "both": [2, 3, 4], "specifi": [2, 4, 6], "within": [2, 5], "flexibl": 2, "precis": 2, "why": [2, 5, 7], "adopt": 2, "write": 2, "observ": 2, "alwai": 2, "equat": [2, 3, 4], "11": 2, "12": 2, "1k": 2, "21": [2, 3], "22": [2, 3], "2k": 2, "3": [2, 3, 4], "31": 2, "32": 2, "3k": 2, "vdot": 2, "n1": 2, "n2": 2, "nk": 2, "notic": [2, 5], "error": [2, 3, 4, 5], "someth": [2, 5], "consist": [2, 6], "thu": [2, 5], "small": [2, 3], "number": [2, 5], "vector": [2, 3, 4], "matric": 2, "give": [2, 4, 5, 7], "follow": [2, 3, 4], "structur": [2, 4, 5], "bmatrix": [2, 3], "ddot": 2, "shorthand": 2, "mathbf": [2, 3, 4, 5], "y": [2, 3, 4, 5], "x": [2, 3, 4, 6], "boldsymbol": [2, 3, 4, 5], "beta": [2, 3, 4, 5], "epsilon": [2, 3, 4, 5], "It": [2, 3, 4], "encapsul": 2, "entir": 2, "should": [2, 5], "intim": 2, "familiar": 2, "column": [2, 3, 4, 5], "\u03b2": 2, "represnt": 2, "\u03b5": 2, "here": [2, 4, 5, 6], "recognis": 2, "multipli": [2, 5], "recreat": 2, "predict": [2, 3, 4, 5], "particular": [2, 7], "hat": [2, 3], "anoth": [2, 5], "look": [2, 3, 5], "plu": 2, "alignat": 2, "underset": 2, "text": [2, 5], "hphantom": [2, 3], "do": [2, 3, 4, 5, 6], "worri": 2, "stage": 2, "seem": [2, 3], "bit": [2, 5], "abstract": 2, "next": [2, 3, 6], "section": [2, 3], "appli": [2, 3, 4, 5], "real": 2, "At": 2, "core": 2, "refer": [2, 4, 5], "its": [2, 4, 5], "abil": 2, "accommod": [2, 5], "through": [2, 3, 4, 7], "specif": [2, 5], "type": [2, 4], "numer": 2, "sort": [2, 5], "classifi": 2, "phenomena": 2, "iq": 2, "reaction": 2, "score": 2, "test": [2, 3, 7], "ag": 2, "weight": [2, 3, 4], "etc": 2, "These": [2, 3, 4, 6], "straightforward": [2, 4], "add": [2, 3], "verbatim": 2, "requir": 2, "special": [2, 5], "treatment": 2, "world": 2, "categori": [2, 4, 6], "sex": 2, "patient": 2, "blood": 2, "ethnic": 2, "compar": [2, 4, 5], "complex": [2, 6], "fundament": 2, "what": [2, 4, 5], "turn": [2, 3, 5, 6], "put": [2, 3, 5], "dummi": [2, 3, 4, 5, 6], "depend": [2, 4, 5], "were": [2, 3, 4, 5, 6, 7], "male": 2, "femal": 2, "assign": 2, "like": [2, 3, 4, 5], "control": 2, "two": [2, 3, 4, 5], "b": 2, "ab": [2, 3], "o": 2, "fewer": 2, "4": [2, 3], "diagnosi": 2, "last": 2, "row": 2, "second": [2, 4, 5, 6], "wherea": [2, 4], "go": [2, 4, 5], "lot": 2, "clear": [2, 4, 5], "yet": 2, "plenti": 2, "press": 2, "forward": [2, 5], "onc": [2, 3, 5, 7], "construct": [2, 3], "fulli": [2, 6], "left": [2, 4, 5], "right": [2, 4, 5], "maximum": [2, 3, 5], "likelihood": [2, 3, 5], "deriv": [2, 3, 5], "simultan": 2, "prime": 2, "notabl": [2, 3], "invers": 2, "mai": [2, 4, 5], "rememb": [2, 3, 4, 5], "comput": 2, "function": [2, 4, 5, 6, 7], "neuroanatomi": [2, 5], "invert": 2, "tricki": 2, "busi": 2, "exist": 2, "tell": [2, 4], "limit": [2, 3, 5], "name": [2, 5], "want": 2, "thorni": 2, "issu": 2, "thankfulli": 2, "rare": 2, "concern": [2, 5], "try": [2, 5], "much": [2, 5, 6], "unit": [2, 3, 5], "increas": [2, 3, 5], "5": [2, 3, 6], "344": 2, "decreas": [2, 3], "By": [2, 4, 5], "comparison": 2, "happen": 2, "goe": 2, "7": [2, 3, 4], "94": 2, "intercept": [2, 4], "code": [2, 4, 7], "think": [2, 5], "own": 2, "enough": [2, 3], "trust": 2, "done": [2, 5], "calcul": [2, 3, 4, 5, 6], "standard": [2, 3, 4, 5], "deviat": 2, "sampl": [2, 3], "varianc": [2, 3, 5], "frac": [2, 5], "p": [2, 3, 6], "squar": 2, "produc": 2, "covari": [2, 3, 5], "cov": [2, 5], "too": 2, "root": 2, "diagon": 2, "element": [2, 3, 4, 5, 6], "fairli": [2, 4], "veri": [2, 4, 5], "challeng": 2, "pick": 2, "week": [2, 6, 7], "non": [3, 4], "imag": [3, 4, 6], "re": 3, "again": [3, 5], "mile": 3, "per": 3, "gallon": 3, "mpg": 3, "select": 3, "car": [3, 4], "keep": [3, 4], "6": [3, 5, 6], "horsepow": [3, 4], "transmiss": 3, "110": [3, 4], "620": [3, 4], "manual": [3, 7], "875": [3, 4], "8": [3, 4, 6], "93": [3, 4], "320": [3, 4], "215": [3, 4], "automat": [3, 5], "18": 3, "175": [3, 4], "440": [3, 4], "105": [3, 4], "460": [3, 4], "variabl": [3, 4, 5, 6], "6x1": 3, "doubl": [3, 6], "0000": 3, "8000": 3, "4000": 3, "7000": 3, "1000": 3, "1s": 3, "constant": [3, 4, 5, 6], "6x4": 3, "6200": 3, "8750": 3, "3200": 3, "2150": 3, "4400": 3, "4600": 3, "togeth": [3, 5], "current": [3, 5], "predictor": [3, 5], "arrang": [3, 6], "previou": [3, 4, 5], "inv": 3, "4x1": 3, "36": 3, "7003": 3, "0048": 3, "9448": 3, "7150": 3, "popul": 3, "base": [3, 4, 5], "denot": [3, 5], "yhat": 3, "4985": 3, "20": [3, 5], "2375": 3, "23": 3, "0640": 3, "2713": 3, "8447": 3, "19": 3, "0840": 3, "focuss": 3, "weigh": 3, "lb": 3, "achiev": 3, "7625": 3, "2640": 3, "1287": 3, "1447": 3, "9840": 3, "diverg": 3, "origin": 3, "now": [3, 4, 5, 7], "700": 3, "005": 3, "945": 3, "715": 3, "499": 3, "763": 3, "264": 3, "129": 3, "145": [3, 6], "984": 3, "tabl": 3, "1000lb": 3, "946": 3, "averag": [3, 4, 6], "reduct": 3, "while": 3, "raw": [3, 4, 5], "difficult": [3, 5], "due": 3, "g": 3, "vs": 3, "uncertainti": [3, 4], "size": [3, 6], "sigma2": 3, "5813": 3, "extract": 3, "covbeta": 3, "se": 3, "sqrt": 3, "diag": 3, "9": 3, "7385": 3, "0236": 3, "0750": 3, "4422": 3, "abov": [3, 4, 5], "739": 3, "024": 3, "075": 3, "442": 3, "typic": [3, 4, 5], "divid": 3, "7686": 3, "2045": 3, "6081": 3, "7022": 3, "queri": 3, "null": 3, "freedom": 3, "pval": 3, "tcdf": 3, "tail": 3, "0638": 3, "8569": 3, "2491": 3, "5553": 3, "769": 3, "064": 3, "205": 3, "857": 3, "608": 3, "249": 3, "702": 3, "555": 3, "conclud": 3, "none": 3, "significantli": 3, "zero": 3, "appear": 3, "relev": 3, "accord": 3, "evid": 3, "posibl": 3, "relationsip": 3, "govern": 3, "clearer": 3, "pictur": [3, 6], "relationship": [3, 5], "emerg": 3, "seen": [4, 5], "focus": 4, "primari": 4, "context": 4, "loop": 4, "mass": 4, "univari": 4, "framework": 4, "wa": [4, 5, 6], "friston": [4, 5], "et": 4, "al": 4, "1994": 4, "alreadi": [4, 6], "call": [4, 5], "nu": 4, "_": 4, "uniqu": [4, 5], "save": 4, "residu": [4, 5], "moment": 4, "show": [4, 5, 6], "interpret": [4, 5, 6], "continu": [4, 5], "similarli": 4, "categor": 4, "case": [4, 5], "brighter": 4, "larger": [4, 5], "darker": 4, "posit": [4, 6], "neg": [4, 6], "darkest": 4, "brightest": 4, "grei": 4, "hover": 4, "around": [4, 5], "even": [4, 5], "further": [4, 5], "upon": [4, 5], "easiest": 4, "presenc": 4, "stimulu": [4, 5], "absenc": 4, "imagin": 4, "finger": 4, "tap": 4, "instruct": [4, 7], "repeat": [4, 5, 7], "off": [4, 6], "pattern": 4, "period": [4, 5], "action": 4, "motor": 4, "cortex": 4, "block": [4, 6], "optimis": [4, 5], "box": 4, "regressor": 4, "s": [4, 5], "largest": 4, "occur": [4, 5], "baselin": [4, 5, 6], "No": 4, "encod": 4, "expect": 4, "respond": 4, "abl": [4, 5], "draw": 4, "present": 4, "drawn": 4, "greyscal": 4, "solid": 4, "colour": [4, 5], "gradient": 4, "imagesc": 4, "matlab": [4, 7], "rescal": 4, "scale": 4, "colormap": 4, "grai": 4, "addit": 4, "complic": 4, "natur": 4, "actual": [4, 5], "complimentari": 4, "view": [4, 6], "correct": [4, 5], "find": [4, 5], "intuit": 4, "plot": 4, "axi": 4, "intens": 4, "gross": 4, "shape": 4, "over": [4, 5], "superimpos": 4, "correspond": 4, "figur": 4, "strong": 4, "top": 4, "weak": 4, "bottom": 4, "whether": 4, "gather": 4, "cluster": 4, "sever": 5, "earli": 5, "research": 5, "identifi": 5, "solut": 5, "paper": 5, "colleagu": 5, "revisit": 5, "took": 5, "dai": 5, "somewhat": 5, "contenti": 5, "hrf": [5, 6], "earlier": [5, 6], "onset": 5, "offset": 5, "howev": 5, "impli": 5, "instantan": 5, "rel": 5, "slow": 5, "sluggish": 5, "On": 5, "peak": 5, "run": [5, 7], "risk": 5, "lack": 5, "directli": 5, "impact": 5, "less": 5, "sensit": 5, "One": 5, "delai": 5, "improv": 5, "extent": 5, "captur": 5, "process": [5, 6, 7], "convolut": 5, "discuss": 5, "convolv": [5, 6], "hemodynam": 5, "creat": 5, "realist": 5, "de": 5, "author": 5, "mid": 5, "90": 5, "version": 5, "canon": [5, 6], "gamma": 5, "sai": 5, "justif": 5, "neural": 5, "invari": 5, "lti": 5, "design": [5, 6], "good": 5, "idea": 5, "final": 5, "longer": 5, "akin": 5, "unintuit": 5, "luckili": 5, "height": 5, "far": 5, "acknowledg": 5, "littl": 5, "independ": 5, "correl": 5, "doe": 5, "matter": 5, "quit": 5, "big": 5, "unfortun": 5, "close": 5, "closer": 5, "awai": 5, "otherwis": 5, "wrong": 5, "subsequ": 5, "infer": 5, "inaccur": 5, "initi": 5, "autoregress": 5, "rho": 5, "tau_": 5, "enhanc": 5, "saw": [5, 6], "previous": 5, "\u03c1\u03b5t": 5, "\u03c1": 5, "\u03b5t": 5, "influenc": 5, "higher": 5, "consequ": 5, "get": [5, 7], "weaker": 5, "apart": 5, "effici": 5, "Of": [5, 6], "note": [5, 6], "instead": [5, 6], "pool": 5, "surviv": 5, "threshold": 5, "everywher": 5, "speed": 5, "clearli": 5, "desir": 5, "assumpt": 5, "made": 5, "whiten": 5, "matrix": 5, "page": 5, "195": 5, "poldrack": 5, "mumford": 5, "nichol": 5, "2011": 5, "curiou": 5, "w": 5, "remov": 5, "pre": [5, 6], "wy": 5, "wx": 5, "procedur": 5, "break": 5, "connect": 5, "sure": [5, 7], "accur": 5, "reason": [5, 6], "third": 5, "face": 5, "contamin": 5, "drift": 5, "steadi": 5, "bia": 5, "impress": 5, "caus": 5, "themselv": 5, "avoid": 5, "high": 5, "pass": 5, "filter": 5, "discret": 5, "cosin": 5, "transform": 5, "dct": 5, "cutoff": 5, "enact": 5, "extra": 5, "similar": 5, "fashion": 5, "fourier": 5, "act": 5, "clutter": 5, "slightli": 5, "sy": 5, "sx": 5, "ourselv": 5, "default": 5, "choos": 5, "128": 5, "equival": 5, "008hz": 5, "practic": 5, "slower": 5, "facil": 5, "suitabl": [5, 7], "itself": 5, "arbitrari": 5, "\u03b21": 5, "cannot": 5, "meaningfulli": 5, "equal": 5, "100": 5, "grand": 5, "background": 5, "care": 5, "temptat": 5, "might": 5, "render": 5, "standardis": 5, "percentag": 5, "convert": 5, "involv": [5, 6], "explain": [5, 6], "pernet": 5, "2014": 5, "easi": 5, "metric": 5, "common": 5, "star": 5, "symbol": 5, "best": 5, "match": 5, "level": [5, 6], "400": 5, "perspect": 5, "spm12": 6, "1st": 6, "cover": [6, 7], "4d": 6, "download": 6, "valenc": 6, "intern": 6, "affect": 6, "neutral": 6, "repetit": 6, "ask": 6, "15": 6, "fixat": 6, "cross": 6, "screen": 6, "2s": 6, "te": 6, "30m": 6, "3mm": 6, "isotrop": 6, "53": 6, "63": 6, "52": 6, "realign": 6, "normalis": 6, "mni": 6, "gaussian": 6, "smooth": 6, "kernel": 6, "8mm3": 6, "implicit": 6, "explicitli": 6, "leav": 6, "stop": 6, "short": 6, "purpos": 6, "seemingli": 6, "affair": 6, "until": 6, "preprocess": 7, "format": 7, "studi": 7, "batch": 7, "autom": 7, "snippet": 7, "insight": 7, "though": 7, "ultim": 7, "recommend": 7, "graphic": 7, "interfac": 7, "file": 7, "explor": 7, "manipul": 7, "comfort": 7, "your": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "content": 0, "about": 0, "author": 0, "The": [1, 2, 3, 5], "need": 1, "statist": 1, "model": [1, 2, 4, 5, 6], "why": 1, "do": 1, "we": 1, "want": 1, "fmri": [1, 4, 5], "data": [1, 4, 5], "how": 1, "gener": 2, "linear": 2, "framework": 2, "build": [2, 3], "design": [2, 3, 4], "matrix": [2, 3, 4], "continu": 2, "predictor": [2, 4], "variabl": 2, "categor": 2, "estim": [2, 3], "paramet": [2, 3], "interpret": [2, 3], "infer": [2, 3, 6], "glm": [3, 4, 5], "A": 3, "work": 3, "exampl": [3, 6], "dataset": 3, "us": [4, 5], "creat": 4, "time": [4, 5], "seri": 4, "visualis": 4, "regress": 4, "perspect": 4, "problem": 5, "With": 5, "issu": 5, "1": 5, "shape": 5, "bold": 5, "respons": 5, "2": 5, "autocorrel": 5, "3": 5, "low": 5, "frequenc": 5, "nois": 5, "4": 5, "imag": 5, "scale": 5, "adapt": 5, "singl": 6, "subject": 6, "spm": 6, "experi": 6, "video": 6, "summari": 7, "quiz": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})