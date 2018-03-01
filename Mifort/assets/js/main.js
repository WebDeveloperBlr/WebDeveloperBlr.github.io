$(document).ready(function () {

  function ProfileBuilder(elem) {
    this.photoContainer = elem;
    this.photoInput = document.getElementById('photo');
    this.previewBlock = $(this.photoContainer).find('#profilePreview');
    this.previewText = $(this.photoContainer).find('#createProfile__filename-preview');

    this.bindEvents();
  }

  ProfileBuilder.prototype.bindEvents = function () {
    var self = this;

    if (this.photoInput) {
      $(this.photoInput).change(function (event) {
        event.preventDefault();
        self.addPreview(event);
      });
    }
  };
  ProfileBuilder.prototype.addPreview = function (evt) {
    if ($(this.photoInput).length > 0) {
      $(this.previewBlock).attr('src', window.URL.createObjectURL(this.photoInput.files[0]));
      $(this.previewText).html(this.photoInput.files[0].name);
    }
  };

  function HrAppBuilder(elem) {
    this.hrAppSection = elem;
    this.filterSection = $(this.hrAppSection).find('.vacancies-block__hr-app__filters-bar');
    this.table = $(this.hrAppSection).find('#vacancies-block__table');
    this.sidebar = $(this.hrAppSection).find('.hr-app-section__sidebar');

    if (window.matchMedia('(max-width: 515px)').matches) {
      this.collapseElems = $(this.hrAppSection).find('[data-toggle="collapse"]');
      this.tableCollapseElems = $(this.table).find('[data-toggle="collapse"]');
      this.toggleButton = $(this.hrAppSection).find('.icon-HAMBURGER');
      this.crossButton = $(this.sidebar).find('.icon-CLOSE');
      this.canSlide = true;
      this.adaptToMobile();
      this.bindMobileEvents();
    } else {
      this.bindEvents();
    }

  }

  HrAppBuilder.prototype.addCollapse = function addCollapse(elem, target) {
    var collapseTarget = ($(target).attr("id")) ? "#" + $(target).attr("id") : "." + $(target).attr("class");
    $(target).addClass("collapse");
    $(elem).attr("data-target", collapseTarget);
    $(elem).attr("aria-controls", collapseTarget.slice(1));
  };
  HrAppBuilder.prototype.bindEvents = function () {
    var self = this;

    var previousScroll = 0;
    $(this.table).on('scroll', function (event) {
      var currentScroll = $(this).scrollTop();
      previousScroll = self.slideFilterBar(previousScroll, currentScroll);
    });
  };
  HrAppBuilder.prototype.bindMobileEvents = function () {
    var self = this;

    $(self.tableCollapseElems.next()).on('show.bs.collapse', function () {
      $(this).prev().find('.icon-ARROW').addClass('rotate270');
      $(self.filterSection).addClass('slide-up');
      self.canSlide = false;
    });
    $(self.tableCollapseElems.next()).on('hide.bs.collapse', function () {
      $(this).prev().find('.icon-ARROW').removeClass('rotate270');
      self.canSlide = true;
    });

    var previousScroll = 0;
    $(this.table).on('scroll', function (event) {
      var currentScroll = $(this).scrollTop();
      previousScroll = self.slideFilterBarMobile(previousScroll, currentScroll);
    });

    $(this.toggleButton).on('click', function () {
      self.showSidebar();
    });

    $(this.crossButton).on('click', function () {
      self.hideSidebar();
    });
  };
  HrAppBuilder.prototype.showSidebar = function () {
    $(this.sidebar).addClass('slide-in');
  };
  HrAppBuilder.prototype.hideSidebar = function () {
    $(this.sidebar).removeClass('slide-in');
  };
  HrAppBuilder.prototype.slideFilterBar = function (previousScroll, currentScroll) {
    if (currentScroll > previousScroll) {
      $(this.filterSection).addClass('slide-up');
    } else {
      $(this.filterSection).removeClass('slide-up');
    }
    return previousScroll = currentScroll;
  };
  HrAppBuilder.prototype.slideFilterBarMobile = function (previousScroll, currentScroll) {
    if (currentScroll > previousScroll || !this.canSlide) {
      $(this.filterSection).addClass('slide-up');
    } else {
      $(this.filterSection).removeClass('slide-up');
    }
    return previousScroll = currentScroll;
  };
  HrAppBuilder.prototype.adaptToMobile = function () {
    var self = this;
    var tableRows = $(self.hrAppSection).find('.vacancies-block__table__row');

    tableRows.each(function (index, el) {
      $(el).children().slice(1).wrapAll('<div class="vacancies-block__table__xs-cols-wrap" data-parent="#vacancies-block__table" id="vacancies-block__table__xs-cols-wrap-' + index + '"></div>');
    });


    $(self.collapseElems).each(function (index, el) {
      self.addCollapse(el, $(el).next());
    });

    $('.vacancies-block__table-editor__text').html('Rows');
  };

  var hrAppWrapper = $(document).find(".hr-app-section");
  if (hrAppWrapper.length > 0) {
    new HrAppBuilder(hrAppWrapper);
  }

  var createProfileWrapper = $(document).find(".createProfile__edit-block");
  if (createProfileWrapper.length > 0) {
    new ProfileBuilder(createProfileWrapper);
  }
});




