from django import forms

TOUR_OPTIONS =(
	("1", "Morning"),
	("2", "Evening"),
	("3", "Private"),
)
class TimeForm(forms.Form):
	Tour_Schedule = forms.MultipleChoiceField(choices = TOUR_OPTIONS)
	
