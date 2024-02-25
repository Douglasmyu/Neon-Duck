#ignore this python file
import pygame
import sys

pygame.init()

SCREEN_WIDTH, SCREEN_HEIGHT = 800, 600
screen = pygame.display.set_model((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Piano Game")

#colors 
white = (255, 255, 255)
black = (0,0,0)

#the keys the user will be using which is  
keys = { "A": (100, 300), "W": (250, 300), "S": (400, 300), "D": (550, 300),}