using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HorisontalMotion : MonoBehaviour
{
    Vector3 motion;

    [SerializeField] float speed = 0.5f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
        motion.x = Input.GetAxisRaw("Horizontal");
        transform.position = transform.position + motion * speed;
    }
}
