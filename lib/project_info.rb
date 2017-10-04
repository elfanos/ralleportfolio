module ProjectInfo
  def get_values(param)
    if param === "onebas"
      get_onebas_content
    elsif param === "magazinos"
      logger.info "tjajta?"
      get_magazinos_content
    elsif param === "googleglass"
      logger.info "hajgoogle"
      get_google_glass_content
    elsif param === "thirty"
      get_thirty_content
    elsif param === "livingmaps"
      get_living_maps_content
    elsif param === "moodify"
      logger.info "tjajta? mod-------"
      get_moodify_content
    end
  end
  def get_onebas_content
    @more_info = "http://onebas.herokuapp.com/"
    @header = "oneBAS.com"
    @previous = "livingmaps"
    @next = "googleglass"
    @header_test = ['o','n','e','B','A','S','.','c','o','m']
    @text = "This was my first ruby on rails project from start to finish. I developed the site with a friend during a summer internship. The site is for artist that can upload music, a lot like soundcloud. I did mostly front-end and developed a global music player that wasnt realsed on the site"
    @values = {
        url: "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
        description: @text,
        header: @header_test,
        git: @more_info,
        prev: @previous,
        next: @next
    }


    return @values

  end
  def get_google_glass_content
    @more_info = "https://github.com/elfanos/GgLAGG"
    @header = "googleglass"
    @previous = "onebas"
    @next = "magazinos"
    @header_test = ['l','a','g','g']
    @text = "In this project we developed a service for the amublance. With the purpose of applying better interaction while talking to a patient in need. We used in the project google glasses as a tool for navigation and reading information about the patient. In the project we used a webservice which send out information to the amublance user. Then we had an android application that was ment for normal user."
    @values = {
        url: "https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
        description: @text,
        header: @header_test,
        git: @more_info,
        prev: @previous,
        next: @next
    }

    return @values

  end
  def get_thirty_content
    @more_info = "https://github.com/elfanos/"
    @header = ['T','h','i','r','t', 'y']
    @previous = "magazinos"
    @next = "moodify"
    @text = "This is an android application developed as a dice game thirty. This was my first game application that Iv'e developed on my own for android. Since I didnt put on app-store the application is only avaible on github where its possible to fork the code"
    @values = {
        url: "http://marcianosmx.com/wp-content/uploads/2015/03/dados.jpg",
        description: @text,
        header: @header,
        git: @more_info,
        prev: @previous,
        next: @next
    }

    return @values

  end
  def get_moodify_content
    @more_info = "https://github.com/elfanos/"
    @header = ['m','o','o','d','i','f','y']
    @previous = "thirty"
    @next = "livingmaps"
    @text = "This was a project develope as an multi service for a person to keep track of there stresslevels. During this project we used empatic bracelet which analyse the heart rate which we calculated if the person is feeling any stress. Our goal was to use music as an stress reliver for the user so we implemented the spotify api. There we just a prepared playlist with music to calm the user if an stressful siuation occured or they felt stressful."
    @values = {
        url: "https://images.unsplash.com/photo-1423068657086-889315a2eba8?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
        description: @text,
        header: @header,
        git: @more_info,
        prev: @previous,
        next: @next
    }

    return @values

  end
  def get_living_maps_content
    @more_info = "http://onebas.herokuapp.com/"
    @header = "LivingMaps"
    @previous = "moodify"
    @next = "onebas"
    @header_test = ['L','i','v','i','n','g','M','a','p','s']
    @text = "LivingMaps is an interface and drone, that was developed with a team containing designers and one interface designer me for skogforsk. It was ment to help harvester gather information about the forest. With the purpose of making the work more attractive in the labour marke. The drone was design for the reason of gather information to complete a map in the interface therefore the name living map. The map is designed for helping the harvester track forest which is suposed to be gathered"
    @values = {
        url: "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?dpr=2&auto=format&fit=crop&w=1500&h=1874&q=80&cs=tinysrgb&crop=",
        description: @text,
        header: @header_test,
        git: @more_info,
        prev: @previous,
        next: @next
    }

    return @values

  end

  def get_magazinos_content
    @previous = "googleglass"
    @next = "thirty"
    @more_info = "https://www.magazinos.com/"
    @header = ['m','a','g','a','z','i','n','o','s','.','c','o','m']
    @text = "In this project I was assigned to fetch a e-book api. In the project I learned a lot about coding in ruby and rails. Also how to structure a project involving a group of engineers. I worked during this project only in the back-end section. It was about 1 month of work and with my friend we managed to achive a good interface as well as a good api code for retrive all information necessary from the api"
    @values = {
        url: "https://images.unsplash.com/photo-1415769177894-634a98172336?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
        description: @text,
        header: @header,
        git: @more_info,
        prev: @previous,
        next: @next
    }

    return @values
  end
end