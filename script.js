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
        labels:['Jan','Feb','Mar','Apr','May'],
        datasets:[{
            label:'Income',
            data:[1200,1900,3000,2500,2000],
            backgroundColor:'#3b82f6'
        }]
    }
});