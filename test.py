import random

ITEMS = [
    "marble",
    "coin", 
    "button", 
    "candy", 
    "key"
]

questions = [
    "memory",
    "reality",
    "first_order",
    "second_order",
]

verbs_for_putting_marble = [
    "puts", "places"
]


# LOCATIONS= [
#     "box", "basket", "jar", "drawer", "bin", "bucket", "pouch", "backpack", "suitcase", "bowl", "crate", "jug", "container", "bottle"
# ]
LOCATIONS= [
    "box", "basket", "jar", "drawer", "bin"
]
# ACTORS = [
#     "Ava", "Liam", "Zoe", "Ethan", "Maya", "Oliver", "Nora", "Leo", "Isla", "Jack",
#     "Ella", "Noah", "Lily", "James", "Sophia", "Benjamin", "Aria", "Lucas", "Amelia",
#     "Mason", "Olivia", "Logan", "Chloe", "Alexander", "Mia", "Jacob", "Emma", "Michael",
#     "Charlotte", "Daniel", "Grace", "Henry", "Ruby", "Jackson", "Ava", "Sebastian", 
#     "Harper", "Carter", "Lucy", "Wyatt", "Mila", "Jayden", "Ellie", "John", "Layla",
#     "Owen", "Zoe", "Dylan", "Anna", "Luke", "Bella", "Gabriel", "Emily", "Anthony", 
#     "Lily", "Isaac", "Madison", "Grayson", "Eva", "Matthew", "Sofia", "David", "Aurora",
#     "Joseph", "Abigail", "Muhammad", "Riley", "Samuel", "Ariana", "Joshua", "Alice", 
#     "Christopher", "Scarlett", "Andrew", "Victoria", "Theodore", "Sienna", "Caleb", "Ivy",
#     "Ryan", "Elena", "Asher", "Penelope", "Nathan", "Layla", "Thomas", "Natalie", "Leo",
#     "Hazel", "Charles", "Leah", "Eli", "Naomi", "Landon", "Eleanor", "Adrian", "Eliza",
#     "Julian", "Isabel", "Hudson"
# ]

ACTORS = [
    "Zak", "Chloe", "Max", "Steve", "Kausik", "Krissy", "Vino", "Isaac", "Meghan", "Dan"
]

example_script="""Assume we have a room with people and containers in it. Any actions taken within the room can be observed by everyone else who is in the room. If someone is outside the room, they can not observe these actions.
Sally puts a marble in her basket.
Sally leaves the room.
Anne moves the marble to a box.
David moves the marble to a red bin.
Anne leaves the room.
Sally enters the room.
Answer using only a single word: Where would Anne say that Sally would think the marble is?"""


def generate_scenario(number_actors=2, number_items=1, number_locations=3, number_actions=3, seed_value=42):
    # random.seed(seed_value)  # Set seed for reproducibility
    actors = random.sample(ACTORS, number_actors)
    items = random.sample(ITEMS, number_items)
    locations = random.sample(LOCATIONS, number_locations)

    memory = {item: locations[0] for item in items}  # Initial locations of all items
    reality = {item: locations[0] for item in items}
    actor_locations = {actor: "room" for actor in actors}
    first_order = {actor: {item: locations[0] for item in items} for actor in actors}
    second_order = {
        actor1: {actor2: {item: locations[0] for item in items} for actor2 in actors if actor1 != actor2}
        for actor1 in actors
    }

    actions = []

    for actor in actors:
        actions.append(f"{actor} is in the room.")
    for item in items:
        initial_action = f"The {item} is in the {reality[item]}."
        actions.append(initial_action)

    run_scenario_simulation(actors, items, locations, reality, actor_locations, actions, first_order, second_order, number_actions)


    prompt = "Assume we have a room with people in it. Any actions taken within the room can be observed by everyone else who is in the room. If someone is outside the room, they can not observe these actions."
    
    scenario = prompt + "\n\n" + "\n".join(actions)

    # Generate questions
    memory_item = random.choice(list(memory.keys()))
    memory_question = f"Where was the {memory_item} initially?"
    memory_answer = memory[memory_item]

    reality_item = random.choice(list(reality.keys()))
    reality_question = f"Where is the {reality_item} now?"
    reality_answer = reality[reality_item]


    first_order_item = random.choice(list(reality.keys()))
    first_order_actor = random.choice(list(first_order.keys()))
    first_order_question = f"Where does {first_order_actor} think the {first_order_item} is?"
    first_order_answer = first_order[first_order_actor][first_order_item]

    second_order_item = random.choice(list(reality.keys()))
    second_order_actor = random.choice(list(second_order.keys()))
    second_order_actor2 = random.choice(list(second_order[second_order_actor].keys()))
    second_order_question = f"Where does {second_order_actor} think {second_order_actor2} thinks the {second_order_item} is?"
    second_order_answer = second_order[second_order_actor][second_order_actor2][second_order_item]

    return scenario, [
        memory_question+"\n"+memory_answer, 
        reality_question+"\n"+reality_answer,
        first_order_question+"\n"+first_order_answer,
        second_order_question+"\n"+second_order_answer
    ]

def run_scenario_simulation(actors, items, locations, reality, actor_locations, actions, first_order, second_order, remaining_actions):
    if remaining_actions == 0:
        return

    # Possible actions are either moving items or changing locations (entering or leaving the room)
    possible_actions = []

    # Actors currently in the room can move items or leave
    actors_in_room = [actor for actor in actors if actor_locations[actor] == "room"]
    if actors_in_room:
        for actor in actors_in_room:
            possible_actions.append(('move', actor))  # Add moving action
            possible_actions.append(('leave', actor))  # Add leaving action

    # Actors outside can only re-enter
    actors_outside = [actor for actor in actors if actor_locations[actor] == "outside"]
    for actor in actors_outside:
        possible_actions.append(('enter', actor))

    # Select a random action from the list of possible actions
    action_type, actor = random.choice(possible_actions)

    if action_type == 'move':
        # Actor moves an item to a new location
        item = random.choice(items)
        new_location = random.choice(locations)
        verb = random.choice(verbs_for_putting_marble)
        reality[item] = new_location
        action = f"{actor} {verb} the {item} in the {new_location}."
        actions.append(action)

        # Update first and second order beliefs for all actors in the room
        for a in actors_in_room:
            first_order[a][item] = new_location
            for other_actor in actors_in_room:
                if other_actor != a:
                    second_order[other_actor][a][item] = new_location
    elif action_type == 'leave':
        # Actor leaves the room
        actor_locations[actor] = "outside"
        actions.append(f"{actor} leaves the room.")
    elif action_type == 'enter':
        # Actor re-enters the room
        actor_locations[actor] = "room"
        actions.append(f"{actor} enters the room.")

    # Recursive call with one less remaining action
    run_scenario_simulation(actors, items, locations, reality, actor_locations, actions, first_order, second_order, remaining_actions - 1)

# Generate a scenario and print the actions
scenario, questions = generate_scenario(number_actors=2, number_items=3, number_locations=3, number_actions=20)

print(scenario)
print("")
for question in questions:
    print(question)

