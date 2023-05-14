import streamlit as st
name = "James Njoroge"
sidebar = st.sidebar
with sidebar:
    st.write("App Side Bar")
st.set_page_config(layout='wide')

consignee_form = st.form(key="consignee_form")
destinations = [
    "Mombasa", "Nairobi", "Kilifi", "Nakuru"
]
with consignee_form:
    col1, col2, col3= st.columns(spec=[2,2,1])
    with col1:
        st.write('# Consignor Details')

        st.text_input("Name of Consignor", key="consignor")
        st.text_input("Phone Number", key="consignor_phone")
        st.selectbox("Location", options=destinations)

    with col2:
        st.write("# Consignee Details")
        st.text_input("Name of Consignee", key="consignee")
        st.text_input("Phone Number", key="consignee_phone")
        st.selectbox("Location", options=destinations, key='origin')
    with col3:
        st.write('# Parcel Details')
        st.text_input(':red[Parcel Description]', key='description')
        st.number_input("Weight in Kgs", key='weight')
        st.checkbox("Perishable?", key='perishable')
        st.number_input("Value in Kshs", key='value')
        st.form_submit_button()
