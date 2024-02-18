---
title: "广度优先搜索算法"
date: 2024-02-17
categories:
  - unity
tags:
  - 算法
---

## 广度优先搜索算法 BFS

### 定义

广度优先搜索算法是一种盲目搜寻法，目的是系统地展开并检查图中的所有节点，以找寻结果。

### 应用场景

1.从 A 节点出发，有前往节点 B 的路径吗？  
2.从 A 节点出发，前往节点 B 的哪条路径最短？

unity 中的应用：战棋游戏搜索显示棋子的移动距离

### unity c# 中的实现

```c#
using System.Collections;
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
    public Dictionary<string, Point> finds;

    public _BFS(int row,int col)
    {
        finds = new Dictionary<string, Point>();
        this.RowCount = row;
        this.ColCount = col;
    }

    /// <summary>
    /// 搜索行走区域
    /// </summary>
    /// <param name="row">开始点的行坐标</param>
    /// <param name="col">开始点的列坐标</param>
    /// <param name="step">步数</param>
    /// <returns></returns>
    public List<Point> Search(int row, int col, int step)
    {
        // 定义搜索集合
        List<Point> searchs = new List<Point>();
        // 开始点
        Point startPoint = new Point(row, col);
        // 将开始点存到搜索集合
        searchs.Add(startPoint);
        // 开始点默认找到，存储到已经找到的字典里
        finds.Add($"{row}_{col}",startPoint);
        // 遍历步数，相当于可搜索的次数
        for (int i = 0; i < step; i++)
        {
            // 定义一个临时的集合 用于存储目前找到满足条件的点
            List<Point> temps = new List<Point>();
            // 遍历搜索集合
            for (int j = 0; j < searchs.Count; j++)
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
    public void FindAroundPoints(Point current, List<Point> temps)
    {
        // 上
        if (current.RowIndex-1>=0)
        {
            AddFinds(current.RowIndex -1,current.ColIndex,current,temps);
        }
        // 下
        if (current.RowIndex + 1 < RowCount)
        {
            AddFinds(current.RowIndex + 1, current.ColIndex, current, temps);
        }
        // 左
        if (current.ColIndex - 1 >= 0)
        {
            AddFinds(current.RowIndex, current.ColIndex - 1, current, temps);
        }
        // 右
        if (current.ColIndex + 1 < ColCount)
        {
            AddFinds(current.RowIndex, current.ColIndex + 1, current, temps);
        }
    }

    // 添加到查找到的字典
    public void AddFinds(int row,int col,Point father,List<Point> temps)
    {
        // 不在查找的节点 且对应地图格子的类型不是障碍物，才能加入查找字典
        if (finds.ContainsKey($"{row}_{col}") == false && GameApp.MapManager.GetBlockType(row,col) != BlockType.Obstacle)
        {
            Point p = new Point(row, col, father);
            // 添加查找到的字典
            finds.Add($"{row}_{col}",p);
            // 添加到临时集合 用于下次继续查找
            temps.Add(p);
        }
    }
}
```
