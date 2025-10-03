import matplotlib.pyplot as plt
import numpy as np

def draw_graph(average_frame):

    year = average_frame['Год']
    average_count = average_frame['Средний рейтинг']

    plt.figure(figsize=(12,6))
    plt.plot(year,average_count,color='green',marker='o',markersize=4,linewidth=2)
    plt.xlabel("Год")
    plt.ylabel("Средний рейтинг")
    plt.title("Средний рейтинг по годам")
    plt.grid(True,linestyle='-',alpha=0.6)
    plt.xticks(range(year.min(),year.max() + 1,5))
    plt.xticks(rotation=45)
    plt.show()

def draw_histogram(votes):
    plt.hist(votes,bins=20,color='skyblue',edgecolor='black')
    plt.xlabel("Рейтинг")
    plt.ylabel("Количество фильмов")
    plt.show()

def draw_scatter_plot(x,y):
    plt.figure(figsize=(8,5))
    plt.scatter(np.log10(x),y,alpha=0.5)
    plt.xlabel("Бюджет фильма")
    plt.ylabel("Рейтинг фильма")
    plt.title("Зависимость рейтинга от бюджета")
    plt.show()