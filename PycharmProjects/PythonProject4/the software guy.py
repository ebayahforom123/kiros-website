class Bank_Account:
    def __init__(self,balance):
        self.__balance=balance
    def deposit(self,amount):
        self.__balance += amount
    def with_draw(self,amount):
        if self.__balance > amount:
            self.__balance-=amount
        else:
            print(balance is insuffcient)
    def get_balance(self):
        return self.__balance
a = Bank_Account(2000)
a.deposit(200000)
a.with_draw(6000)
print(a.get_balance())