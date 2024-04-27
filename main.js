var tablinks = document.GetElementsByClassName("tab-links");
        var tabcontents = document.GetElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.Classlist.remove(active-link);
            }
            for(tabcontent of tabcontents){
                tablcontent.Classlist.remove(active-tab);
            }
            event.CurrentTarget.CLasslist.add("active-link");
            document.GetElementById(tabname).ClassList.add("active-tab");
        }