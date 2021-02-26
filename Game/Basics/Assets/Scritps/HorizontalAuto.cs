using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HorizontalAuto : MonoBehaviour
{
    Vector3 motion;
    [SerializeField]float speed;
    [SerializeField]float limit;

    float direction = 1;
    bool right = true;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(transform.position.x > limit && right)
        {
            direction = -1;
            right = false;
        }
        if(transform.position.x < -limit && !right)
        {
            direction = 1;
            right = true;
        }
        motion.x = direction;
        transform.position = transform.position + motion * speed;

    }
}
