function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}


function toggleDark(){
    document.body.classList.toggle("dark");
}
const ctx=document.getElementById('myChart');

new Chart(ctx,{
    type:'bar',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','june','july','aug','sept','oct','nov','dec'],
        datasets:[{
            label:'Income',
            data:[1200,1900,3000,2500,2000,1100,5000,6000,7000,1000,2000,3000],
            backgroundColor:'#052b68'
        }]
    }
});