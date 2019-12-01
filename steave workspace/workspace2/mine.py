Username = input("what is your name?")
Workshours = int(input("How long do you work usually per a day?"))
Hourlyrate = int(input("What is your hourly rate in dollar"))
if Workshours < 8:
    print((Workshours * 5) * 2 + (Workshours * Hourlyrate) * 5 * 2 + Hourlyrate * 5 * 2)
else:
    print((Workshours - 8) * (Hourlyrate * 1.5) + (8 * Hourlyrate))
