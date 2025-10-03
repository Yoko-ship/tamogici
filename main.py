import numpy as np
import pandas as pd
from graph import draw_graph,draw_histogram,draw_scatter_plot
from regression import machine_learnig



def load_and_clean(path):
    df = pd.read_csv(path)
    df = df[df['budget'] > 10000].copy()
    df['release_date'] = pd.to_datetime(df['release_date'],errors='coerce')
    df['year'] = df['release_date'].dt.year
    df['month'] = df['release_date'].dt.month
    return df


def add_features(df):
    df['budget_log'] = np.log1p(df['budget'])
    df['revenue_log'] = np.log1p(df['revenue'])
    df['success'] = (df['revenue'] > df['budget']).astype(int)
    average_rating = df.groupby("year")['vote_average'].mean().reset_index()
    average_rating.columns = ['Год','Средний рейтинг']

    return df,average_rating


def main():
    df = load_and_clean('tmdb_5000_movies.csv')
    df,average_rating = add_features(df)
    draw_graph(average_rating)
    draw_histogram(df['vote_average'])
    draw_scatter_plot(df['budget'],df['vote_average'])

    X = df[['budget_log','vote_average']]
    Y = df['success']
    machine_learnig(X,Y)


if __name__ == "__main__":
    main()




