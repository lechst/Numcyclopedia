function statsNDimPoints (points){

    var minDistSq = Infinity;
    var maxDistSq = 0;

    var minX = Math.min.apply(this,points.x);
    var maxX = Math.max.apply(this,points.x);
    var minY = Math.min.apply(this,points.y);
    var maxY = Math.max.apply(this,points.y);

    for(var i = 1;i<points.x.length;i++)
    {
        for(var j = 0;j<i;j++)
        {
            var distSq =
                (points.x[i]-points.x[j])*(points.x[i]-points.x[j])
                +(points.y[i]-points.y[j])*(points.y[i]-points.y[j]);

            if(distSq>0 && distSq<minDistSq)
            {
                minDistSq = distSq;
            }

            if(distSq>maxDistSq)
            {
                maxDistSq = distSq;
            }
        }
    }

    return {
        minX:minX,
        maxX:maxX,
        minY:minY,
        maxY:maxY,
        minDist:Math.sqrt(minDistSq),
        maxDist:Math.sqrt(maxDistSq)
    };

}