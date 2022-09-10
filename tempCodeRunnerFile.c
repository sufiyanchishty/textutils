#include<stdio.h>
void main()
{
    int electricity_bill,gas_bill,food_expense,monthly_income;
    printf("Please enter the vale of electricity bill");
    scanf("%d",&electricity_bill);
    printf("Please the value of gas bill");
    scanf("%d",&gas_bill);
    printf("Please enter the value of food expense");
    scanf("%d",&food_expense);
    printf("please enter you monthly income");
    scanf("%d",&monthly_income);
    int total_monthly_expense= electricity_bill+gas_bill+food_expense;
    printf("your total monthly expense is %d",total_monthly_expense);
    int total_yearly_expense=total_monthly_expense*12;
    printf("your total yearly expense is %d",total_yearly_expense);
    int monthly_savings=monthly_income-total_monthly_expense;
    printf("your total monthly savings are %d",monthly_savings);
    int yrsly_savings=monthly_savings*12;
    printf("your total yearly savings are %d",yrsly_savings);
    int ave_monthly_savings=monthly_savings;
    printf("your total average monthly savings are %d",ave_monthly_savings);
    int ave_monthly_expense=total_monthly_expense;
    printf("your total monthly expenses are %d",ave_monthly_expense);
}