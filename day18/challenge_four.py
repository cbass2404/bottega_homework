object_of_stuff = {
  "blue": "falcon",
  "red": "devil",
  "pink": "ranger",
  "green": "lantern",
}


def object_printer(obj):
    obj_list = []
    for k in obj:
        obj_list.append(obj[k])
    return obj_list


print(object_printer(object_of_stuff))
