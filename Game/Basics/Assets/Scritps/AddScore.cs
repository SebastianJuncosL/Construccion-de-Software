using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AddScore : MonoBehaviour
{
    int score = 0;
    
    void Start()
    {
        print("Score: " + score);
    }

    void OnTriggerEnter2D(Collider2D col)
    {
        score++;
        print("Score: " + score);
    }
}
