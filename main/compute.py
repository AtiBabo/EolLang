def lineToInteger(string : str):
    results = string.replace("엄격느슨", "엄격토끼느슨")\
                    .replace(".", "+727")\
                    .replace(",", "-3302")\
                    .replace("토끼", "*")\
                    .replace("달팽이", "/")\
                    .replace("빠름", "+")\
                    .replace("느림", "-")\
                    .replace("느슨", "(")\
                    .replace("엄격", ")")
    
    return eval(results)