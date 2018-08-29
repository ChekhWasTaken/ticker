import dateformat from 'dateformat';

export default (broker, symbol, tickerData) => {
  const ticker = {
    broker: `${broker}`,
    symbol: `${symbol}`,
    datetime: dateformat(new Date(), 'yyyy-mm-dd HH:MM:ss'),

    ask_quantity: tickerData[3],
    ask_price: tickerData[2],
    bid_quantity: tickerData[1],
    bid_price: tickerData[0],
  };

  ticker.key = `${ticker.broker}_${ticker.symbol}`;

  return ticker;
};
