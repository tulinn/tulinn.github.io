d = {}
def lattice_paths(x, y):
  print (x,y)
  if ((x,y) in d):
    return 1
  else:
    d[(x,y)] = 1
    if x == 2 and y == 2:
      return 0
    elif x == 2 or y == 2:
      return 1
    else:
      return lattice_paths(x, y+1) + lattice_paths(x+1, y) + 2
  
  print lattice_paths(0, 0)