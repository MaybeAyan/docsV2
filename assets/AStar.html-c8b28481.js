import{_ as n,o as i,c as e,a as l}from"./app-d5c63569.js";const d={},s=l(`<h2 id="a-寻路算法" tabindex="-1"><a class="header-anchor" href="#a-寻路算法" aria-hidden="true">#</a> A* 寻路算法</h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p>unity 战棋游戏中计算两个单位之间的最短路线</p><h3 id="unity-c-中的实现" tabindex="-1"><a class="header-anchor" href="#unity-c-中的实现" aria-hidden="true">#</a> unity c# 中的实现</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// 路径点类
public class AStarPoint
{
    public int RowIndex;
    public int ColIndex;
    public int G; // 当前节点到开始点的距离
    public int H; // 当前节点到终点的距离
    public int F; // F = G + H
    public AStarPoint Parent; // 找到当前点的父节点

    public AStarPoint(int row, int col)
    {
        this.RowIndex = row;
        this.ColIndex = col;
        Parent = null;
    }

    public AStarPoint(int row, int col,AStarPoint parent)
    {
        this.RowIndex = row;
        this.ColIndex = col;
        this.Parent = parent;
    }

    // 计算G值
    public int GetG()
    {
        int _g = 0;
        AStarPoint parent = this.Parent;
        while (parent != null)
        {
            _g = _g + 1;
            parent = parent.Parent;
        }
        return _g;
    }

    public int GetH(AStarPoint end)
    {
        return Mathf.Abs(RowIndex- end.RowIndex) + Mathf.Abs(ColIndex- end.ColIndex);
    }
}

// A星寻路类
public class AStar
{
    private int rowCount;
    private int colCount;
    private List&lt;AStarPoint&gt; open; // open表
    private Dictionary&lt;string, AStarPoint&gt; close;  // close表 已经超找过的路径点会存到这个表
    private AStarPoint start; // 开始点
    private AStarPoint end; // 终点

    public AStar(int rowCount, int colCount)
    {
        this.rowCount = rowCount;
        this.colCount = colCount;
        open = new List&lt;AStarPoint&gt;();
        close = new Dictionary&lt;string, AStarPoint&gt; ();
    }

    // 找到open表的路径点
    public AStarPoint IsInOpen(int rowIndex,int colIndex)
    {
        for (int i = 0; i &lt; open.Count; i++)
        {
            if (open[i].RowIndex == rowIndex &amp;&amp; open[i].ColIndex == colIndex)
            {
                return open[i];
            }
        }
        return null;
    }

    // 某个点是否已经存在 close 表
    public bool IsInClose(int rowIndex, int colIndex)
    {
        if (close.ContainsKey($&quot;{rowIndex}_{colIndex}&quot;))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    /*
     *A星寻路
     *1.将起点添加到open点
     *2.查找open表中 f值最小的路径点
     *3.将找到最小f值的点从open表中移除，并添加到close表
     *4.将当前的路径点周围的点添加到open表
     *5.判断终点是否在open点，如果不在 从步骤2继续执行逻辑
     */
    public bool FindPath(AStarPoint start,AStarPoint end, System.Action&lt;List&lt;AStarPoint&gt;&gt; findCallBack)
    {
        this.start = start;
        this.end = end;
        open = new List&lt;AStarPoint&gt;();
        close = new Dictionary&lt;string, AStarPoint&gt;();

        // 1.起点添加到open表
        open.Add(start);
        while (true)
        {
            // 2.从open表获取f值最小的路径点
            AStarPoint current = GetMinFFromInOpen();
            if (current == null)
            {
                // 死路
                return false;
            }
            else
            {
                // 3.1 从open表中移除
                open.Remove(current);
                // 3.2 添加到close表
                close.Add($&quot;{current.RowIndex}_{current.ColIndex}&quot;, current);
                // 4. 将当前的路径点周围点添加到open表
                AddAroundInOpen(current);
                // 5. 判断终点是否在open表
                AStarPoint endPoint = IsInOpen(end.RowIndex, end.ColIndex);
                if (endPoint != null)
                {
                    // 找到路径了
                    findCallBack(GetPath(endPoint));
                    return true;
                }
                // 排序open表 f从小到大
                open.Sort(OpenSort);
            }
        }
    }

    public List&lt;AStarPoint&gt; GetPath(AStarPoint point)
    {
        List&lt;AStarPoint&gt; paths = new List&lt;AStarPoint&gt;();
        paths.Add(point);
        AStarPoint parent = point.Parent;
        while (parent != null)
        {
            paths.Add(parent);
            parent = parent.Parent;
        }
        // 倒置
        paths.Reverse();
        return paths;
    }

    public int OpenSort(AStarPoint a,AStarPoint b)
    {
        return a.F-b.F;
    }

    public void AddAroundInOpen(AStarPoint current)
    {
        // 上下左右
        if (current.RowIndex -1 &gt;=0)
        {
            AddOpen(current, current.RowIndex - 1, current.ColIndex);
        }
        if (current.RowIndex + 1 &lt; rowCount)
        {
            AddOpen(current, current.RowIndex + 1, current.ColIndex);
        }
        if (current.ColIndex - 1 &gt;= 0)
        {
            AddOpen(current, current.RowIndex, current.ColIndex - 1);
        }
        if (current.ColIndex + 1 &lt; colCount)
        {
            AddOpen(current, current.RowIndex, current.ColIndex + 1);
        }
    }

    public void AddOpen(AStarPoint current,int row,int col)
    {
        // 不在open表与close表，且格子类型不为障碍物
        if(IsInClose(row,col)==false &amp;&amp; IsInOpen(row,col)==null &amp;&amp;GameApp.MapManager.GetBlockType(row,col)==BlockType.Null)
        {
            AStarPoint newPoint = new AStarPoint(row,col,current);
            newPoint.G = newPoint.GetG();
            newPoint.H = newPoint.GetH(end);
            newPoint.F = newPoint.G + newPoint.H;
            open.Add(newPoint);
        }
    }

    public AStarPoint GetMinFFromInOpen()
    {
        if (open.Count==0)
        {
            return null;
        }
        // open表排序，最小F值在第一位
        return open[0];
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[s];function r(a,c){return i(),e("div",null,v)}const u=n(d,[["render",r],["__file","AStar.html.vue"]]);export{u as default};
