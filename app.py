import streamlit as st
from PIL import  Image
col1, col2 = st.columns(spec=[1,1])
me = Image.open('images/me.jpg')
sunday = Image.open('images/sunday.jpg')

with col1:
    st.image(me)
with col2:
    st.image(sunday)