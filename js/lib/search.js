mixins.search = {
    data() {
        return { rawSearch: "" };
    },
    watch: {
        search(value) {
            const mian_time_line = document.getElementById('all-timeline');
            if(mian_time_line!=null)
            {
                const timelines = mian_time_line.childNodes;
                for (let i of timelines)
                {
                    if (!value || i.id.toLowerCase().includes(value.toLowerCase())) 
                    {
                        i.style.opacity = 1;
                        i.style.visibility = "visible";
                        i.style.display = "block";
                        //i.style.marginTop = 0;
                    } 
                    else 
                    {
                        i.style.opacity = 0;
                        i.style.visibility = "hidden";
                        i.style.display = "none";
                        //i.style.marginTop = - i.offsetHeight + "px";
                    }
                }
            }
        },
    },
    computed: {
        search() {
            return this.rawSearch.toLowerCase().replace(/\s+/g, "");
        },
    },
};
