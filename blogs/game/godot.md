## godot 



### 2d 俯视角



#### 鼠标点击移动（土豆兄弟）

```java
func _process(delta):
	# 获取鼠标坐标
	var mouse_pos = get_global_mouse_position()
	var self_pos = position
	
	# 动画贴图翻转实现转向
	if mouse_pos.x >= position.x : 
		flip = false
	else:
		flip = true
	playerAni.flip_h = flip
	
	dir = (mouse_pos - self_pos).normalized()
	if canMove and !stop:
		velocity = dir * speed
		move_and_slide()
		
func _input(event):
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and event.is_pressed():
		canMove = false
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and !event.is_pressed():
		canMove = true


func _on_stop_mouse_entered():
	stop = true


func _on_stop_mouse_exited():
	stop = false
```



#### 随机生成装饰性瓦片

```java
func random_title():
	# 清除图层
	tilemap.clear_layer(1)
    # 获取使用图层的所有坐标
	var bg1_cells = tilemap.get_used_cells(0)
	var ran = RandomNumberGenerator.new()
	for cell_pos in bg1_cells:
		var num = ran.randi_range(0,100)
		if num <= 5:
			tilemap.set_cell(1,cell_pos,0,Vector2(18,1))
```



#### 随机生成怪物

```java
func _on_timer_timeout():
	var ran = RandomNumberGenerator.new()
    # 限制在 tilemap 所绘图层范围内
	var num = ran.randi_range(0,len(tilemap.get_used_cells(0))- 1)
    # 转换 tilemap坐标 为全局坐标    
	var local_position = tilemap.map_to_local(tilemap.get_used_cells(0)[num])
	var enemyTemp = enemy.instantiate()
	enemyTemp.position = local_position * Vector2(6,6)
	
	self.add_child(enemyTemp)
```



