package=freetype
$(package)_version=2.6.1
$(package)_download_path=https://download.savannah.gnu.org/releases/$(package)
$(package)_file_name=$(package)-$($(package)_version).tar.bz2
$(package)_sha256_hash=2f6e9a7de3ae8e85bdd2fe237e27d868d3ba7a27495e65906455c27722dd1a17

define $(package)_set_vars
  $(package)_config_opts=--without-zlib --without-png --without-harfbuzz --without-bzip2 --disable-static
  $(package)_config_opts_linux=--with-pic
endef

define $(package)_config_cmds
  $($(package)_autoconf)
endef

define $(package)_build_cmds
  $(MAKE)
endef

define $(package)_stage_cmds
  $(MAKE) DESTDIR=$($(package)_staging_dir) install
endef
