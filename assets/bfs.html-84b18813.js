import{_ as n,o as i,c as e,a as s}from"./app-d5c63569.js";const l={},d=s(`<h2 id="广度优先搜索算法-bfs" tabindex="-1"><a class="header-anchor" href="#广度优先搜索算法-bfs" aria-hidden="true">#</a> 广度优先搜索算法 BFS</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>广度优先搜索算法是一种盲目搜寻法，目的是系统地展开并检查图中的所有节点，以找寻结果。</p><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p>1.从 A 节点出发，有前往节点 B 的路径吗？<br> 2.从 A 节点出发，前往节点 B 的哪条路径最短？</p><p>unity 中的应用：战棋游戏搜索显示棋子的移动距离</p><h3 id="unity-c-中的实现" tabindex="-1"><a class="header-anchor" href="#unity-c-中的实现" aria-hidden="true">#</a> unity c# 中的实现</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

// 广度优先搜索算法
public class _BFS
{
    // 搜索点
    public class Point
    {
        public int RowIndex; // 行坐标
        public int ColIndex; // 列坐标
        public Point Father; // 父节点 用来查找路径

        public Point(int row, int col)
        {
            this.RowIndex = row;
            this.ColIndex = col;
        }

        public Point(int row, int col,Point father)
        {
            this.RowIndex = row;
            this.ColIndex = col;
            this.Father = father;
        }
    }

    public int RowCount;
    public int ColCount;
    // 存储查找到的点的字典 key:点的行列索引拼接的字符串 value:搜索点
    public Dictionary&lt;string, Point&gt; finds;

    public _BFS(int row,int col)
    {
        finds = new Dictionary&lt;string, Point&gt;();
        this.RowCount = row;
        this.ColCount = col;
    }

    /// &lt;summary&gt;
    /// 搜索行走区域
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;row&quot;&gt;开始点的行坐标&lt;/param&gt;
    /// &lt;param name=&quot;col&quot;&gt;开始点的列坐标&lt;/param&gt;
    /// &lt;param name=&quot;step&quot;&gt;步数&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public List&lt;Point&gt; Search(int row, int col, int step)
    {
        // 定义搜索集合
        List&lt;Point&gt; searchs = new List&lt;Point&gt;();
        // 开始点
        Point startPoint = new Point(row, col);
        // 将开始点存到搜索集合
        searchs.Add(startPoint);
        // 开始点默认找到，存储到已经找到的字典里
        finds.Add($&quot;{row}_{col}&quot;,startPoint);
        // 遍历步数，相当于可搜索的次数
        for (int i = 0; i &lt; step; i++)
        {
            // 定义一个临时的集合 用于存储目前找到满足条件的点
            List&lt;Point&gt; temps = new List&lt;Point&gt;();
            // 遍历搜索集合
            for (int j = 0; j &lt; searchs.Count; j++)
            {
                Point current = searchs[j];
                // 查找当前四周的点
                FindAroundPoints(current, temps);
            }
            if (temps.Count ==0)
            {
                // 临时集合一个点都没找到 死路
                break;
            }
            // 搜索的集合要清空
            searchs.Clear();
            // 临时集合的点添加到搜索集合
            searchs.AddRange(temps);
        }
        // 将查找到的点转换成集合 返回
        return finds.Values.ToList();

    }

    // 找周围的点 上下左右 （可拓展斜方向）
    public void FindAroundPoints(Point current, List&lt;Point&gt; temps)
    {
        // 上
        if (current.RowIndex-1&gt;=0)
        {
            AddFinds(current.RowIndex -1,current.ColIndex,current,temps);
        }
        // 下
        if (current.RowIndex + 1 &lt; RowCount)
        {
            AddFinds(current.RowIndex + 1, current.ColIndex, current, temps);
        }
        // 左
        if (current.ColIndex - 1 &gt;= 0)
        {
            AddFinds(current.RowIndex, current.ColIndex - 1, current, temps);
        }
        // 右
        if (current.ColIndex + 1 &lt; ColCount)
        {
            AddFinds(current.RowIndex, current.ColIndex + 1, current, temps);
        }
    }

    // 添加到查找到的字典
    public void AddFinds(int row,int col,Point father,List&lt;Point&gt; temps)
    {
        // 不在查找的节点 且对应地图格子的类型不是障碍物，才能加入查找字典
        if (finds.ContainsKey($&quot;{row}_{col}&quot;) == false &amp;&amp; GameApp.MapManager.GetBlockType(row,col) != BlockType.Obstacle)
        {
            Point p = new Point(row, col, father);
            // 添加查找到的字典
            finds.Add($&quot;{row}_{col}&quot;,p);
            // 添加到临时集合 用于下次继续查找
            temps.Add(p);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[d];function v(a,c){return i(),e("div",null,r)}const u=n(l,[["render",v],["__file","bfs.html.vue"]]);export{u as default};
