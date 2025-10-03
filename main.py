import numpy as np
import pandas as pd
from graph import draw_graph,draw_histogram,draw_scatter_plot
from regression import machine_learnig

df = pd.read_csv("tmdb_5000_movies.csv")
budget = df.loc[df['budget'] > 10000,'budget']
title = df.loc[df['budget'] > 10000,'title']
release_date = df.loc[df['budget'] > 10000,'release_date']
revenue = df.loc[df['budget'] > 10000,'revenue']
vote_average = df.loc[df['budget'] > 10000,'vote_average']
revenue_logarifmed = np.log1p(df["revenue"])
budget_logarifmed = np.log1p(df["budget"])
hit = df.loc[((df['revenue'] - df['budget']) / df['budget']) > 3,'title']
datetime_series = pd.Series(pd.to_datetime(release_date))
year = pd.Series(datetime_series.dt.year.unique())
average_rating = df.groupby(year)['vote_average'].transform("mean")
average_rating_dropped = average_rating.dropna()
average_frame = pd.DataFrame({"Год":year,"Средний рейтинг":average_rating_dropped}).sort_values("Год")
month = datetime_series.dt.month_name()
dframe = pd.DataFrame({"Бюджет":budget,"Названия":title,"Дата выхода":release_date,"Доход":revenue,"Рейтинг":vote_average,"Хит":hit})
filled_frame = dframe.fillna("")
votes = df.loc[df['budget'] > 10000,'vote_average']

X = df[['budget','vote_average']]
Y = (df['revenue'] > df['budget']).astype(int)

draw_graph(average_frame)
draw_histogram(votes)
draw_scatter_plot(budget,vote_average)
machine_learnig(X,Y)



