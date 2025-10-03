from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score,confusion_matrix,classification_report
from sklearn.linear_model import LogisticRegression

def machine_learnig(X,Y):
    X_train,X_test,y_train,y_test = train_test_split(X,Y,test_size=0.2,random_state=42)
    model = LogisticRegression(max_iter=1000)
    model.fit(X_train,y_train)
    
    y_pred = model.predict(X_test)

    print("Точность:",accuracy_score(y_test,y_pred))
    print("Конфуций",confusion_matrix(y_test,y_pred))
    print(classification_report(y_test,y_pred))