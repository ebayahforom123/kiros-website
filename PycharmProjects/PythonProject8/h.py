

class Sw:
    def __init__(self,balance,grade):
        self.__balance = balance
        self.grade = grade
    def get__balance(self):
        return self.get__balance()
    def grade(self):
        return self.grade()
    def withdraw(self,amount):
        if amount >=self.__balance:
            return false
        else:
            self.__balance -= amount
            return self.__balance
    def deposit(self,amount):
        self.__balance += amount
        return self.__balance

a=Sw(1000,"A")
print(a.withdraw(100))
print(a.deposit(100))
print(a.grade())
