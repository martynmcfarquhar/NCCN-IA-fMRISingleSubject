Search.setIndex({"docnames": ["0.intro", "1.need-for-modelling", "2.glm", "3.glm-example", "4.glm-fmri", "5.glm-fmri-problems", "6.single-subject-spm", "7.summary-quiz"], "filenames": ["0.intro.ipynb", "1.need-for-modelling.ipynb", "2.glm.ipynb", "3.glm-example.ipynb", "4.glm-fmri.ipynb", "5.glm-fmri-problems.ipynb", "6.single-subject-spm.ipynb", "7.summary-quiz.ipynb"], "titles": ["Introduction", "The Need for Statistical Modelling", "The General Linear Model", "The GLM: A Worked Example", "Using the GLM to Model fMRI Data", "Problems With Using the GLM to Model fMRI Data", "Single-subject Modelling in SPM", "Summary and Quiz"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 6, 7], "lesson": [0, 1, 2, 4, 6, 7], "introduc": [0, 4, 7], "gener": [0, 1, 6, 7], "linear": [0, 1, 3, 5, 7], "model": [0, 3, 7], "glm": [0, 1, 6, 7], "which": [0, 1, 2, 3, 4, 5, 7], "i": [0, 1, 2, 3, 4, 5, 6, 7], "one": [0, 1, 2, 3, 4, 5, 7], "most": [0, 1, 2, 3, 4, 7], "import": [0, 2, 4, 5, 7], "concept": [0, 2, 7], "you": [0, 2, 5, 6, 7], "learn": [0, 3, 4], "year": [0, 5], "The": [0, 6, 7], "backbon": 0, "all": [0, 1, 2, 3, 4, 5], "statist": [0, 2, 3, 4, 5], "analys": [0, 1, 2, 3, 4], "we": [0, 2, 3, 4, 5, 6], "perform": [0, 2, 4, 5, 6], "modul": [0, 2, 5, 6], "well": [0, 1, 2, 5], "mani": [0, 1, 2, 4], "analysi": [0, 1, 2, 3, 5, 7], "techniqu": [0, 1], "see": [0, 1, 2, 3, 4, 5, 6], "rest": [0, 4, 6], "cours": [0, 1, 2, 5, 6, 7], "In": [0, 1, 2, 3, 4, 5, 6], "theori": [0, 1, 2, 3, 5, 7], "principl": 0, "behind": [0, 2, 5], "befor": [0, 1, 2, 4, 5, 6], "how": [0, 2, 3, 4, 5, 6], "us": [0, 1, 2, 6, 7], "fmri": [0, 2, 7], "data": [0, 2, 3, 6, 7], "from": [0, 1, 2, 3, 4, 5, 6, 7], "singl": [0, 1, 2, 4, 5], "subject": [0, 1, 2, 4, 5], "although": [0, 2, 3, 5], "ar": [0, 1, 2, 3, 4, 5, 6], "often": [0, 2, 5], "interest": [0, 1, 2, 3, 4, 5, 7], "result": [0, 1, 2, 4, 5], "just": [0, 1, 5], "approach": [0, 1, 2, 4, 5], "first": [0, 2, 3, 4, 5, 6], "experiment": [0, 1, 2, 4, 5, 6], "respons": 0, "each": [0, 1, 2, 3, 4, 5, 6], "separ": [0, 1, 2, 4], "later": [0, 2, 6], "combin": [0, 2, 3, 5], "group": [0, 2], "As": [0, 1, 2, 3, 4, 5, 6], "repres": [0, 1, 2, 3, 4, 5, 6], "step": [0, 2, 4, 5], "toward": 0, "complet": [0, 2, 3], "an": [0, 1, 2, 3, 4, 5, 6, 7], "dataset": [0, 1, 2], "need": [0, 2, 3, 4, 5, 6, 7], "A": [0, 1, 2, 5], "work": [0, 2, 5], "exampl": [0, 1, 2, 4, 5], "problem": [0, 2, 4], "With": 0, "spm": [0, 1, 2, 4, 5], "summari": [0, 1, 2], "quiz": 0, "dr": 0, "martyn": 0, "mcfarquhar": 0, "phd": 0, "fhea": 0, "lectur": 0, "neuroimag": [0, 2, 7], "4": [0, 2, 3, 4], "31": [0, 2], "booth": 0, "street": 0, "east": 0, "divis": 0, "psychologi": 0, "commun": [0, 2], "human": 0, "neurosci": 0, "school": 0, "health": 0, "scienc": 0, "univers": 0, "manchest": 0, "m13": 0, "9pl": 0, "t": [0, 2, 3, 4, 5], "44": 0, "0": [0, 2, 3, 4, 5], "161": 0, "275": 0, "2688": 0, "e": [0, 2, 3, 5], "ac": 0, "uk": 0, "begin": [1, 2, 3, 4, 5], "discuss": [1, 2, 3, 5], "worth": [1, 5], "take": [1, 2, 3, 4, 5, 7], "some": [1, 2, 5, 7], "time": [1, 2, 6, 7], "motiv": 1, "whether": [1, 2], "appli": [1, 2, 4, 5], "other": [1, 2, 4, 5], "form": [1, 3, 4, 5, 6], "built": [1, 2, 5], "upon": [1, 2, 4, 5], "assumpt": 1, "effect": [1, 2, 3, 4, 5], "constant": [1, 3, 4, 5, 6], "across": [1, 3, 4, 5], "observ": [1, 2, 3], "phenomena": [1, 2], "context": [1, 2, 4], "involv": [1, 2, 4, 5, 6], "assum": [1, 2, 4, 5], "bold": [1, 4], "signal": [1, 4, 5, 6], "chang": [1, 2, 4, 5, 6], "respoons": 1, "manipul": [1, 2, 4, 5], "consist": [1, 2, 6], "howev": [1, 2, 3, 5], "becaus": [1, 2, 4, 5], "factor": [1, 2], "influenc": [1, 5], "measur": [1, 2, 4, 5], "degre": [1, 3], "variabl": [1, 3, 4, 5, 6], "quantifi": [1, 2], "draw": [1, 4], "probabl": [1, 2, 3], "distribut": [1, 2, 3, 5], "fix": 1, "paramet": [1, 4, 5, 6], "By": [1, 5], "avail": 1, "estim": [1, 4, 5, 6], "those": [1, 2, 3, 4, 7], "allow": [1, 2, 4, 5], "u": [1, 2, 4], "nois": 1, "quanitif": 1, "uncertainti": [1, 3], "our": [1, 2, 3, 4, 5], "construct": [1, 2, 3], "test": [1, 2, 3, 5, 7], "hypothesi": [1, 2], "about": [1, 2, 3, 4, 5], "true": [1, 5], "valu": [1, 2, 3, 4, 5], "popul": [1, 2], "sequenc": [1, 5], "illustr": [1, 2, 4, 5, 6], "fig": [1, 2, 4, 5, 6], "1": [1, 2, 3, 4], "split": 1, "error": [1, 3, 4, 5], "quantif": 1, "ha": [1, 2, 3, 4, 5, 6, 7], "anoth": [1, 2, 4, 5], "distinct": [1, 2], "advantag": 1, "To": [1, 2, 3, 4, 5], "consid": [1, 2, 4, 5], "spatial": 1, "dimens": [1, 6], "50": 1, "60": 1, "tempor": 1, "300": 1, "point": [1, 2, 3, 4, 5], "within": [1, 5], "45": 1, "000": 1, "huge": 1, "amount": [1, 2], "given": [1, 2, 3, 4, 5, 6], "typic": [1, 2, 3, 4, 5], "have": [1, 2, 3, 4, 5, 7], "fewer": [1, 2], "than": [1, 2, 5], "can": [1, 2, 3, 4, 5, 6], "simplifi": 1, "onli": [1, 2, 3, 4, 5], "For": [1, 2, 3, 4, 5, 7], "instanc": [1, 2, 3, 4, 5], "basic": [1, 2], "mai": [1, 2, 5, 7], "abl": [1, 2, 4], "summaris": [1, 2, 4], "seri": [1, 5], "two": [1, 2, 3, 4, 5], "reduc": 1, "inform": [1, 3, 5, 6], "while": [1, 3], "still": [1, 2, 5], "larg": [1, 2, 3], "number": [1, 2, 3, 4, 5], "much": [1, 2, 5], "more": [1, 2, 3, 5], "manag": [1, 2], "down": [1, 2], "even": [1, 4, 5], "further": [1, 2, 5], "signific": [1, 2, 4], "also": [1, 2, 4, 5, 6, 7], "highlight": 1, "where": [1, 2, 4, 5], "imag": [1, 3, 4, 6, 7], "thought": 1, "process": [1, 4, 5, 6], "refin": 1, "similar": [1, 5], "fashion": [1, 2, 5], "its": [1, 2, 4, 5], "everydai": 1, "same": [1, 2, 4, 5, 6], "wai": [1, 2, 5], "replic": 1, "someth": [1, 2], "simplif": 1, "realiti": [1, 5], "sens": [1, 5], "design": [1, 5, 6], "creat": [1, 5], "exact": 1, "predict": [1, 2, 3, 4, 5], "under": [1, 2], "studi": [1, 2], "instead": [1, 5, 6], "good": [1, 2], "captur": [1, 5], "pattern": [1, 4, 5], "relationship": [1, 2, 3], "between": [1, 2, 3, 4, 5, 6], "produc": [1, 2, 4, 5], "close": [1, 2, 5], "enough": [1, 3], "util": 1, "expect": [1, 2, 4], "perfect": [1, 2], "descript": 1, "everi": [1, 2, 4, 5], "thei": [1, 2, 5, 6], "behaviour": [1, 2], "real": [1, 2, 5], "world": [1, 7], "statistician": 1, "georg": 1, "box": [1, 2, 5], "state": 1, "wrong": 1, "achiev": [1, 2, 3], "recal": [1, 2], "voxel": [1, 4, 5, 6], "volum": [1, 5, 6], "reflect": [1, 2], "dure": [1, 2, 4, 5, 6], "experi": [1, 2, 4, 5], "2": [1, 2, 3, 4, 6], "therefor": [1, 2, 3, 4, 5], "locat": 1, "associ": [1, 2, 3, 4, 5, 6], "parametr": 1, "map": 1, "specifi": [1, 2, 4], "known": [1, 2, 4, 5, 6], "mass": [1, 5], "univari": [1, 5], "framework": [1, 3, 7], "abov": [1, 2, 3, 4], "mean": [1, 2, 3, 4, 5, 6, 7], "specifii": [1, 6], "150": 1, "provid": [1, 2, 3, 5, 7], "indic": [1, 2, 3, 4, 5], "magnitud": [1, 2, 4, 5], "direct": [1, 2], "determin": [1, 2], "contain": [1, 2, 3, 4, 5], "displai": [1, 6], "overlai": 1, "activ": 1, "cluster": 1, "localis": 1, "interpret": [1, 4, 5, 6], "shown": [1, 2, 3, 4, 5, 6], "3": [1, 2, 3, 4], "threshold": 1, "mathemat": [1, 2, 5], "infer": 1, "main": [1, 5], "focu": [1, 2], "next": [1, 2, 4], "section": [1, 2, 3, 4, 5, 6], "non": [1, 2, 3, 4], "after": [1, 2, 4, 5], "onc": [1, 2, 3, 5], "understood": [1, 2], "applic": [1, 2, 3, 7], "easier": 1, "digest": 1, "high": [2, 5], "level": [2, 5, 6], "perspect": [2, 5], "ani": [2, 3, 4, 5], "appear": [2, 3], "somewhat": [2, 3], "abstract": [2, 3], "read": 2, "At": [2, 4], "talk": 2, "specif": [2, 5], "specialis": 2, "order": [2, 4, 5], "understand": [2, 3, 4, 5, 7], "know": [2, 3, 4, 5], "outcom": [2, 4], "y": [2, 3, 4, 5], "x": [2, 3, 4], "y_": [2, 4], "beta_": [2, 3, 4, 5], "x_": 2, "epsilon_": [2, 3, 4, 5], "defin": 2, "straight": 2, "line": [2, 4], "fit": [2, 4, 5], "intercept": [2, 3, 4], "slope": [2, 4], "term": [2, 3, 4, 5, 6], "epsilon": [2, 3, 4, 5], "fact": [2, 3, 5], "rare": 2, "possibl": 2, "compani": 2, "want": 2, "requir": [2, 4], "hour": 2, "size": [2, 3, 6], "lot": [2, 3], "through": [2, 4, 5, 6], "scatterplot": 2, "strength": 2, "raw": [2, 3, 4], "sit": 2, "tightli": 2, "pack": 2, "around": [2, 3, 5], "suggest": 2, "smaller": [2, 4], "shorter": 2, "vertic": 2, "distanc": 2, "These": [2, 3, 4, 5, 6], "sim": [2, 5], "mathcal": [2, 5], "n": [2, 3, 5], "sigma": [2, 5], "normal": 2, "along": 2, "5": [2, 3, 4, 6], "oper": [2, 5], "equival": [2, 5], "deviat": 2, "wide": [2, 7], "spread": 2, "There": 2, "connect": [2, 5], "width": 2, "rememb": [2, 3, 4, 5], "aim": 2, "sampl": [2, 3], "both": [2, 3, 4, 5, 7], "varianc": [2, 3, 5], "depend": [2, 4, 5], "must": [2, 5, 6], "find": [2, 5], "best": [2, 5], "null": [2, 3], "hypothes": 2, "align": [2, 5], "h": 2, "_": [2, 4], "end": [2, 3, 4, 5, 6], "reject": 2, "usual": [2, 5], "If": [2, 5], "would": [2, 3, 4, 5], "zero": [2, 3], "present": [2, 4], "what": [2, 4, 5], "hat": [2, 3], "beta": [2, 3, 4, 5], "tell": [2, 4], "being": [2, 4, 5], "worker": 2, "hire": 2, "product": 2, "demand": 2, "scale": [2, 4], "up": [2, 5], "expand": 2, "k": 2, "i1": 2, "i2": 2, "dot": 2, "ik": 2, "sum_": 2, "j": 2, "ij": 2, "left": [2, 4, 5], "right": [2, 4, 5], "express": 2, "conceptu": 2, "except": 2, "few": 2, "detail": [2, 3, 6], "firstli": 2, "rather": [2, 5], "plane": [2, 3], "dimension": 2, "space": [2, 6], "visualis": 2, "6": [2, 3, 4, 5, 6], "longer": 2, "becom": 2, "individu": 2, "edg": 2, "importantli": [2, 4, 6], "coeffici": [2, 3], "account": [2, 3, 5], "ad": [2, 3, 5], "alter": 2, "decis": [2, 3], "notion": 2, "control": 2, "base": [2, 3, 4], "directli": [2, 5], "despit": 2, "differ": [2, 3, 4, 5, 6], "proce": 2, "function": [2, 3, 4, 5, 6], "again": [2, 5], "now": [2, 3, 4, 5], "show": [2, 4, 5], "vdot": 2, "like": [2, 3, 5], "accur": [2, 5], "enhanc": 2, "wage": 2, "ag": 2, "alongsid": 2, "influenti": 2, "should": [2, 5], "when": [2, 4, 5], "adapt": 2, "return": [2, 3, 7], "topic": [2, 7], "simpli": [2, 3, 5], "alreadi": [2, 4, 6], "refer": [2, 5], "variant": 2, "histor": [2, 7], "below": [2, 3, 5, 6, 7], "could": [2, 6], "categoris": 2, "either": 2, "method": [2, 3, 4, 5, 7], "anova": 2, "wa": [2, 3, 4, 5, 6], "sought": 2, "mutlipl": 2, "wherea": [2, 4], "investig": 2, "relat": [2, 5], "recognis": 2, "1950": 2, "sinc": 2, "equivel": 2, "been": [2, 5, 6], "though": 2, "taught": 2, "isol": 2, "reserv": 2, "write": 2, "notat": 2, "start": [2, 5], "alwai": 2, "equat": [2, 3, 4], "11": [2, 4], "12": [2, 4], "1k": 2, "21": [2, 3, 5], "22": [2, 3, 5], "2k": 2, "32": 2, "3k": 2, "n1": 2, "n2": 2, "nk": 2, "system": [2, 6], "them": [2, 3], "vector": [2, 4], "matric": 2, "give": 2, "follow": [2, 3, 4], "structur": [2, 4, 5], "bmatrix": [2, 3, 4], "ddot": 2, "written": 2, "shorthand": 2, "mathbf": [2, 3, 4, 5], "boldsymbol": [2, 3, 4, 5], "It": [2, 3, 7], "encapsul": 2, "entir": 2, "intim": 2, "familiar": 2, "make": [2, 3, 4, 5, 7], "clear": [2, 4, 5], "column": [2, 3, 4, 5], "multipli": [2, 5], "recreat": 2, "look": [2, 3, 5], "plu": 2, "underset": 2, "text": [2, 5], "natur": [2, 4, 5], "core": 2, "part": [2, 4], "element": [2, 3, 4, 5], "bit": 2, "includ": [2, 5, 6], "come": [2, 5], "kei": 2, "choos": [2, 5, 6], "vital": 2, "numer": 2, "sort": [2, 4, 5], "classifi": 2, "iq": 2, "reaction": 2, "score": 2, "weight": [2, 3, 4], "type": [2, 3], "enter": 2, "verbatim": 2, "do": [2, 3, 5], "special": 2, "treatment": 2, "categori": [2, 4, 6], "diagnost": 2, "blood": 2, "ethnic": 2, "compar": [2, 4, 5], "complex": 2, "fundament": 2, "label": 2, "convert": [2, 4, 5], "done": [2, 5], "dummi": [2, 3, 4, 5, 6], "conatin": 2, "were": [2, 3, 4, 6], "patient": 2, "assign": 2, "so": [2, 3, 4, 5, 7], "b": 2, "ab": [2, 3], "o": 2, "case": [2, 4, 5], "notic": [2, 4, 5], "diagnosi": 2, "last": [2, 7], "maximum": [2, 3, 5], "likelihood": [2, 3, 5], "beyond": [2, 4], "scope": [2, 4], "deriv": [2, 3, 5], "minimis": 2, "prime": 2, "notabl": [2, 3, 5], "relianc": 2, "invers": 2, "invert": 2, "issu": [2, 4], "softwar": 2, "pseudo": 2, "solv": [2, 5], "own": 2, "limit": [2, 3, 5], "doe": [2, 5, 7], "subtract": 2, "frac": [2, 5], "sum": [2, 5], "squar": [2, 3, 5], "root": [2, 3], "turn": [2, 6], "reach": [2, 5], "conclus": [2, 3], "unit": [2, 3, 5], "344": 2, "7": [2, 3, 4], "decreas": [2, 3, 5], "increas": [2, 3, 5], "why": [2, 5], "happen": 2, "8": [2, 3, 4], "code": [2, 4, 6], "940": 2, "calcul": [2, 3, 5], "covari": [2, 3, 5], "cov": [2, 5], "akin": 2, "correl": [2, 5], "diagon": 2, "off": [2, 4, 5, 6], "taken": [2, 3, 5], "final": [2, 5, 6], "divid": [2, 3, 4], "se": [2, 3], "particular": 2, "implicit": [2, 6], "comparison": [2, 5], "propos": 2, "flat": 2, "averag": [2, 3, 4, 6], "ident": [2, 3, 5], "p": [2, 3, 4, 5], "via": 2, "appropri": 2, "earlier": [2, 4, 5, 6], "previou": [3, 4, 5], "minim": 3, "try": [3, 4], "concret": 3, "simpl": [3, 4, 5, 6], "mile": 3, "per": 3, "gallon": 3, "mpg": 3, "select": 3, "car": 3, "question": 3, "horsepow": [3, 4], "transmiss": 3, "fuel": 3, "effici": [3, 5], "keep": 3, "set": [3, 5], "110": [3, 4], "620": [3, 4], "manual": 3, "875": [3, 4], "93": [3, 4], "320": [3, 4], "215": [3, 4], "automat": [3, 5], "18": [3, 4, 5], "175": [3, 4], "440": [3, 4], "105": [3, 4], "460": [3, 4], "6x1": 3, "doubl": [3, 5, 6], "0000": 3, "8000": 3, "4000": 3, "7000": 3, "1000": 3, "6x4": 3, "6200": 3, "8750": 3, "3200": 3, "2150": 3, "4400": 3, "4600": 3, "togeth": [3, 5], "current": 3, "predictor": [3, 5], "arrang": [3, 6], "inv": 3, "4x1": 3, "36": 3, "7003": 3, "0048": 3, "9448": 3, "7150": 3, "denot": 3, "yhat": 3, "4985": 3, "20": [3, 4, 5], "2375": 3, "23": [3, 6], "0640": 3, "2713": 3, "8447": 3, "19": [3, 4, 5], "0840": 3, "regress": 3, "focuss": 3, "weigh": 3, "lb": 3, "7625": 3, "2640": 3, "1287": 3, "1447": 3, "9840": 3, "diverg": 3, "origin": 3, "700": 3, "005": 3, "945": 3, "715": 3, "499": 3, "hphantom": 3, "763": 3, "264": 3, "129": 3, "145": [3, 6], "984": 3, "help": [3, 5], "put": 3, "tabl": 3, "lead": [3, 5], "1000lb": 3, "946": 3, "reduct": 3, "seem": 3, "difficult": [3, 5], "due": 3, "g": [3, 5], "v": 3, "standard": [3, 4, 5], "sigma2": 3, "5813": 3, "extract": 3, "covbeta": 3, "sqrt": 3, "diag": 3, "9": [3, 4], "7385": 3, "0236": 3, "0750": 3, "4422": 3, "add": 3, "739": 3, "024": 3, "075": 3, "442": 3, "7686": 3, "2045": 3, "6081": 3, "7022": 3, "queri": 3, "freedom": 3, "pval": 3, "tcdf": 3, "tail": 3, "0638": 3, "8569": 3, "2491": 3, "5553": 3, "769": 3, "064": 3, "205": 3, "857": 3, "608": 3, "249": 3, "702": 3, "555": 3, "conclud": 3, "none": 3, "significantli": 3, "relev": 3, "accord": 3, "evid": 3, "discount": 3, "posibl": 3, "relationsip": 3, "govern": 3, "small": 3, "clearer": 3, "pictur": [3, 6], "emerg": 3, "confirm": 3, "matlab": [3, 4, 6], "machin": 3, "toolbox": 3, "pass": [3, 5], "argument": 3, "miss": 3, "out": 3, "second": [3, 4, 5, 6], "x1": 3, "x2": 3, "x3": 3, "tstat": 3, "pvalu": 3, "__________": 3, "________": 3, "063752": 3, "0048303": 3, "023622": 3, "20448": 3, "24908": 3, "70224": 3, "55526": 3, "26": [3, 6], "r": 3, "797": 3, "adjust": [3, 5], "493": 3, "f": 3, "62": 3, "288": 3, "seen": [4, 5], "tool": 4, "far": [4, 5], "primari": 4, "loop": 4, "fristion": 4, "et": 4, "al": 4, "1994": 4, "brief": 4, "build": [4, 6], "stimuli": [4, 5], "nu": 4, "uniqu": [4, 5], "save": 4, "think": [4, 5], "back": [4, 5], "continu": 4, "similarli": 4, "categor": 4, "brighter": 4, "larger": [4, 5], "darker": 4, "posit": [4, 6], "neg": [4, 6], "region": 4, "darkest": 4, "brightest": 4, "inferenti": 4, "procedur": [4, 5], "easiest": 4, "presenc": [4, 5], "stimulu": [4, 5], "absenc": 4, "imagin": 4, "finger": 4, "tap": 4, "period": [4, 5, 6], "brain": [4, 5, 7], "action": [4, 6], "10": 4, "motor": 4, "cortex": 4, "condit": [4, 5, 6], "": [4, 5], "repeat": [4, 5], "twice": 4, "tr": [4, 6], "13": 4, "14": [4, 5], "15": [4, 5, 6], "16": [4, 5], "17": [4, 5], "largest": 4, "occur": [4, 5], "veri": [4, 5, 7], "Not": 4, "encod": 4, "respond": 4, "essenti": [4, 5], "solid": 4, "block": [4, 6], "colour": [4, 5], "gradient": 4, "imagesc": 4, "xi": 4, "rescal": [4, 5], "colormap": 4, "grai": 4, "addit": 4, "complic": 4, "collect": [4, 5, 6], "complimentari": 4, "view": [4, 6], "axi": 4, "intens": 4, "gross": 4, "shape": 4, "over": [4, 5], "superimpos": 4, "correspond": [4, 5], "altern": 4, "multipl": 4, "plot": 4, "bisect": 4, "strong": [4, 7], "top": 4, "weak": 4, "bottom": 4, "height": 4, "implement": [4, 5], "saw": [4, 6], "respect": 4, "sever": [4, 5], "discern": [4, 7], "unfortun": [4, 5], "leav": 4, "until": 4, "week": 4, "furthermor": 4, "outlin": 4, "correct": 4, "describ": 5, "prevou": 5, "arbitrari": 5, "earli": 5, "research": 5, "concern": 5, "identifi": 5, "solut": 5, "paper": 5, "friston": 5, "colleagu": 5, "call": 5, "revisit": 5, "demonstr": 5, "took": 5, "accompani": [5, 6], "dai": 5, "contenti": 5, "purport": 5, "go": 5, "forward": 5, "onset": 5, "offset": 5, "impli": 5, "instantan": 5, "peak": 5, "baselin": [5, 6], "run": 5, "risk": 5, "lack": 5, "impact": 5, "less": 5, "sensit": 5, "poor": 5, "delai": 5, "One": 5, "accommod": 5, "improv": 5, "actual": 5, "convolut": 5, "convolv": [5, 6], "hemodynam": 5, "realist": 5, "middl": 5, "hrf": [5, 6], "deconvolut": 5, "author": 5, "mid": 5, "90": 5, "version": 5, "canon": [5, 6], "gamma": 5, "sometim": 5, "justif": 5, "optimis": 5, "without": 5, "hopefulli": 5, "better": 5, "acknowledg": 5, "particularli": [5, 7], "independ": 5, "word": 5, "matter": 5, "thu": 5, "accuraci": 5, "awai": 5, "becuas": 5, "sure": [5, 7], "least": 5, "unbias": 5, "uncorrel": 5, "situat": 5, "bias": 5, "inaccur": 5, "initi": 5, "autoregress": 5, "shorten": 5, "rho": 5, "tau_": 5, "here": 5, "consequ": 5, "get": [5, 7], "weaker": 5, "apart": 5, "pool": 5, "everywher": 5, "name": 5, "comput": 5, "never": 5, "whiten": 5, "matrix": [5, 6], "w": 5, "remov": 5, "pre": [5, 6], "wy": 5, "wx": 5, "practic": 5, "break": 5, "reason": [5, 6], "third": 5, "contamin": 5, "steadi": 5, "caus": 5, "bia": 5, "impress": 5, "closer": 5, "opposit": 5, "scanner": 5, "opper": 5, "heat": 5, "avoid": 5, "modern": 5, "scan": [5, 6], "facil": 5, "acquisit": 5, "stabil": 5, "philip": 5, "field": 5, "ge": 5, "siemen": 5, "recalibr": 5, "calibr": 5, "featur": 5, "check": 5, "setup": 5, "diminish": 5, "filter": 5, "discret": 5, "cosin": 5, "transform": 5, "dct": 5, "basi": 5, "desir": 5, "cutoff": 5, "extra": 5, "fourier": 5, "act": 5, "mention": 5, "reli": 5, "clutter": 5, "recent": 5, "iter": 5, "slightli": 5, "sy": 5, "sx": 5, "ourselv": 5, "default": 5, "128": 5, "008": 5, "hz": 5, "008hz": 5, "slower": 5, "minut": 5, "Of": [5, 6], "remain": 5, "suitabl": 5, "asid": 5, "cannot": [5, 7], "meaningfulli": 5, "equal": 5, "100": 5, "grand": 5, "background": 5, "awar": 5, "care": 5, "temptat": 5, "might": 5, "render": 5, "standardis": 5, "percentag": 5, "pernet": 5, "2014": 5, "note": [5, 6], "easi": 5, "necessari": 5, "common": 5, "star": 5, "symbol": 5, "400": 5, "rel": 5, "spm12": 6, "1st": 6, "cover": [6, 7], "fulli": [6, 7], "valenc": 6, "schemat": 6, "24": 6, "25": 6, "neutral": 6, "repetit": 6, "ask": 6, "fixat": 6, "cross": 6, "screen": 6, "27": 6, "te": 6, "30m": 6, "3mm": 6, "isotrop": 6, "53": 6, "63": 6, "52": 6, "preprocess": 6, "realign": 6, "normalis": 6, "mni": 6, "gaussian": 6, "smooth": 6, "kernel": 6, "8mm": 6, "fwhm": 6, "explicitli": 6, "explain": 6, "video": 6, "guid": 6, "graphic": 6, "interfac": 6, "spm_spm": 6, "littl": 6, "autom": 6, "batch": 6, "heart": 7, "grasp": 7, "comfort": 7, "frequent": 7, "overst": 7, "explor": 7, "articl": 7, "love": 7, "forev": 7, "insight": 7, "introduct": 7, "adjunct": 7, "content": 7, "your": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "content": 0, "about": 0, "author": 0, "The": [1, 2, 3, 4, 5], "need": 1, "statist": 1, "model": [1, 2, 4, 5, 6], "why": 1, "do": 1, "we": 1, "want": 1, "fmri": [1, 4, 5], "data": [1, 4, 5], "understand": 1, "term": 1, "how": 1, "gener": 2, "linear": 2, "framework": [2, 4], "simpl": 2, "regress": [2, 4], "multipl": 2, "matrix": [2, 3, 4], "form": 2, "histori": 2, "glm": [2, 3, 4, 5], "build": [2, 3], "design": [2, 3, 4], "continu": 2, "predictor": [2, 4], "variabl": 2, "categor": 2, "estim": [2, 3], "paramet": [2, 3], "interpret": [2, 3], "standard": 2, "error": 2, "infer": [2, 3, 4], "A": 3, "work": 3, "exampl": [3, 6], "dataset": 3, "specifi": [3, 6], "outcom": 3, "vector": 3, "us": [3, 4, 5], "fitlm": 3, "mass": 4, "univari": 4, "creat": 4, "time": [4, 5], "seri": 4, "visualis": 4, "perspect": 4, "problem": 5, "With": 5, "issu": 5, "1": 5, "shape": 5, "bold": 5, "respons": 5, "2": 5, "autocorrel": 5, "gauss": 5, "markov": 5, "theorem": 5, "3": 5, "low": 5, "frequenc": 5, "nois": 5, "dynam": 5, "drift": 5, "correct": 5, "4": 5, "imag": 5, "scale": 5, "adapt": 5, "singl": 6, "subject": 6, "spm": 6, "experi": 6, "approach": 6, "summari": 7, "quiz": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Introduction": [[0, "introduction"]], "Contents": [[0, "contents"]], "About the Author": [[0, "about-the-author"]], "The Need for Statistical Modelling": [[1, "the-need-for-statistical-modelling"]], "Why Do We Want to Model fMRI Data?": [[1, "why-do-we-want-to-model-fmri-data"]], "Understanding the term model": [[1, null]], "How Do We Model fMRI Data?": [[1, "how-do-we-model-fmri-data"]], "The General Linear Model": [[2, "the-general-linear-model"]], "The General Linear Model Framework": [[2, "the-general-linear-model-framework"]], "Simple Regression": [[2, "simple-regression"]], "Multiple Regression": [[2, "multiple-regression"]], "Multiple Regression in Matrix Form": [[2, "multiple-regression-in-matrix-form"]], "The history of the GLM": [[2, null]], "Building the Design Matrix": [[2, "building-the-design-matrix"], [3, "building-the-design-matrix"]], "Continuous Predictor Variables": [[2, "continuous-predictor-variables"]], "Categorical Predictor Variables": [[2, "categorical-predictor-variables"]], "Estimating the Parameters": [[2, "estimating-the-parameters"]], "Interpreting the Parameters": [[2, "interpreting-the-parameters"], [3, "interpreting-the-parameters"]], "Parameter Estimates for Continuous Predictors": [[2, "parameter-estimates-for-continuous-predictors"]], "Parameter Estimates for Categorical Predictors": [[2, "parameter-estimates-for-categorical-predictors"]], "Standard Errors of the Estimates": [[2, "standard-errors-of-the-estimates"]], "Inference": [[2, "inference"], [3, "inference"], [4, "inference"]], "The GLM: A Worked Example": [[3, "the-glm-a-worked-example"]], "Dataset": [[3, "dataset"]], "Specifying the Outcome Vector": [[3, "specifying-the-outcome-vector"]], "Parameter Estimation": [[3, "parameter-estimation"]], "Using fitlm": [[3, "using-fitlm"]], "Using the GLM to Model fMRI Data": [[4, "using-the-glm-to-model-fmri-data"]], "The Mass-univariate Framework": [[4, "the-mass-univariate-framework"]], "Creating Predictors for the Time Series": [[4, "creating-predictors-for-the-time-series"]], "Visualising the Design Matrix": [[4, "visualising-the-design-matrix"]], "Time Series and Regression Perspectives": [[4, "time-series-and-regression-perspectives"]], "Problems With Using the GLM to Model fMRI Data": [[5, "problems-with-using-the-glm-to-model-fmri-data"]], "Issue 1: The Shape and Timing of the BOLD Response": [[5, "issue-1-the-shape-and-timing-of-the-bold-response"]], "Issue 2: Autocorrelation": [[5, "issue-2-autocorrelation"]], "The Gauss\u2013Markov theorem": [[5, null]], "Issue 3: Low-frequency Noise": [[5, "issue-3-low-frequency-noise"]], "Dynamic drift correction": [[5, null]], "Issue 4: Image Scaling": [[5, "issue-4-image-scaling"]], "The Adapted GLM": [[5, "the-adapted-glm"]], "Single-subject Modelling in SPM": [[6, "single-subject-modelling-in-spm"]], "Example Experiment": [[6, "example-experiment"]], "Modelling Approach": [[6, "modelling-approach"]], "Specifying a Single-subject Model in SPM": [[6, "specifying-a-single-subject-model-in-spm"]], "Summary and Quiz": [[7, "summary-and-quiz"]], "Quiz": [[7, "quiz"]]}, "indexentries": {}})