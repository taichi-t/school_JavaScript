math =  int(input('Math Score'))
science =  int(input('Science Score'))
physics = int(input('Physics Score'))
average = (math + science + physics) / 3
if average >= 90:
    print ("You are greate")
elif average >= 80:
    print ("You are not bad")
elif average >= 70:
    print ("You are faild")
else:
    print ("You need to effort")