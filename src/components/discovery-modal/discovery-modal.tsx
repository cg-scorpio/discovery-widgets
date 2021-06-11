import {Tile} from "../../model/tile";
import {Component, h, Method, Prop, State, Watch} from "@stencil/core";
import {Dashboard} from "../../model/dashboard";
import {ChartType} from "../../model/types";
import {Utils} from "../../utils/utils";
import {Param} from "../../model/param";
import {Logger} from "../../utils/logger";

@Component({
  tag: 'discovery-modal',
  styleUrl: 'discovery-modal.scss',
  shadow: true,
})
export class DiscoveryModalComponent {
  @Prop({mutable: true}) data: Tile | Dashboard;
  @Prop({mutable: true}) options: Param | string = new Param();
  @Prop() url: string;
  @Prop() debug: boolean = false;

  @State() private tile: Tile;
  @State() private dashboard: Dashboard;

  private modal: HTMLDivElement;
  private LOG: Logger;


  @Watch('options')
  optionsUpdate(newValue: string, oldValue: string) {
    if (!!this.options && typeof this.options === 'string') {
      this.options = JSON.parse(this.options);
    }
    this.LOG.debug(['optionsUpdate'], {
      options: this.options,
      newValue, oldValue
    });
  }


  @Watch('data')
  dataUpdate(newValue: string, oldValue: string) {
    if (!!this.data && typeof this.data === 'string') {
      this.data = JSON.parse(this.data as string);
    }
    this.LOG.debug(['dataUpdate'], {
      data: this.data,
      newValue, oldValue
    });
    this.parseData();
  }

  @Method()
  public async open() {
    this.modal.style.display = 'block';
  }

  componentWillLoad() {
    this.LOG = new Logger(DiscoveryModalComponent, this.debug);
    this.parseData();
  }

  private parseData() {
    if (this.data) {
      if ((this.data as any).macro || (this.data as any).data) {
        this.dashboard = undefined;
        this.tile = this.data as Tile;
      } else {
        this.tile = undefined;
        this.dashboard = this.data as Dashboard;
      }
      this.LOG.debug(['parseData'], {tile: this.tile, dashboard: this.dashboard});
    }
  }

  private closeModal() {
    if (this.modal) {
      this.modal.style.display = 'none'
    }
  }

  render() {
    return <div class="modal" onClick={() => this.closeModal()}
                ref={(el) => this.modal = el as HTMLDivElement}>
      <div class="modal-content">
        <span class="close" onClick={() => this.closeModal()}>&times;</span>
        {!!this.tile ? <div class="modal-wrapper">{!!this.tile.macro
          ? <discovery-tile url={this.tile.endpoint || this.url}
                            type={this.tile.type as ChartType}
                            chart-title={this.tile.title}
                            options={JSON.stringify(Utils.merge(this.options, this.tile.options))}
          >{this.tile.macro + ' EVAL'}</discovery-tile>
          : <discovery-tile-result
            url={this.tile.endpoint || this.url}
            result={Utils.sanitize(this.tile.data)}
            type={this.tile.type as ChartType}
            unit={this.tile.unit}
            options={Utils.merge(this.options, this.tile.options)}
            debug={this.debug}
            chart-title={this.tile.title}
          />}</div> : ''
        }
        {!!this.dashboard ? <div class="modal-wrapper">
          <discovery-dashboard url={this.url} dashboard-title={this.dashboard.title}
                               cols={this.dashboard.cols} cell-height={this.dashboard.cellHeight}
                               debug={this.debug} options={this.options}
          >{`<%
<'
${JSON.stringify(this.dashboard)}
'>
JSON-> %> EVAL`}</discovery-dashboard>
        </div> : ''}
      </div>
    </div>
  }
}