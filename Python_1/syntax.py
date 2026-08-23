x = 5   #integer
y = 5.0  #float
z = "hello" #string
a = True # boolean
nothing = None #Nonetype, not null

print(type(nothing))
print(int("42") + 3)


## Strings

name, score = "Deepesh", 90

f"{name} score {score:.1f}" # string literals 
print(f"{name} score {score:.1f}")

### if else 

if score > 90:
    grade = "A"
elif score > 80:
    grade = "B"
else:
    grade = "C"


low = list(range(5))
print(low[2:])
print(low[::2]) # every alternate element 

print(low)





