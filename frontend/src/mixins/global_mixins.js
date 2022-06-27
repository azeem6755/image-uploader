export const globalMixin = {
    methods: {
      getBaseURL: function () {
        /** Function to get the base url for API request */
        let baseUrl = '';
        if (process.env.NODE_ENV === 'development') {
          baseUrl =
            window.location.protocol +
            '//' +
            window.location.hostname +
            ':8000/';
        } else {
          baseUrl = window.location.origin + '/';
        }
        return baseUrl;
      },
      getCurrentDevice: function () {
        let width = window.innerWidth;
        if (width > 922) {
          return 'desktop';
        } else if (width < 575) {
          return 'mobile';
        } else {
          return 'tablet';
        }
      },
      deepCopy: function (payload) {
        try {
          return JSON.parse(JSON.stringify(payload));
        } catch (e) {
          console.log('error in payload', payload);
        }
      },
      getLanguageOfPage: function() {
        let path = this.getPathName()
        if (path === 'en') {
          return 1
        }
        else if (path === 'hi') {
          return 2
        }
        return 1
      },
      getPathName: function() {
        let prop = document.createElement('a')
        prop.href = decodeURIComponent(window.location.href)
        return prop.pathname.split('/')[1]
      },
      chunks: function (arr, size) {
        let chunks = []
        let i = 0
        const n = arr.length
  
        while (i < n) {
          chunks.push(arr.slice(i, i += size))
        }
        return chunks
      }
    }
  };
  