                    this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                >

                    this.state.onWebDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'

                <div
                  className={
                    this.state.onWebDesign
                      ? 'grid active'
                      : 'grid' && this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.onPhotography
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
