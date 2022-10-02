it('should calculate the monthly rate correctly', () => {
  const values = {
    amount: 10000,
    years: 5,
    rate: 8
  };
  expect(calculateMonthlyPayment(values)).toEqual('202.76');
});


it("should return a result with 2 decimal places", () => {
  const values = {
    amount: 10000,
    years: 5,
    rate: 8
  };
  expect(calculateMonthlyPayment(values)).toEqual('202.76');
});


