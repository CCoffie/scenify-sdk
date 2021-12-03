import { FabricCanvas, HandlerOptions, RootHandlerOptions } from '../common/interfaces'
import { PROPERTIES_TO_INCLUDE } from '../common/constants'
import CanvasHandler from './CanvasHandler'
import EventsHandler from './EventsHandler'
import FrameHandler from './FrameHandler'
import ObjectsHandler from './ObjectsHandler'
import HistoryHandler from './HistoryHandler'
import ZoomHandler from './ZoomHandler'
import PersonalizationHandler from './PersonalizationHandler'
import TemplateHandler from './TemplateHandler'
import ScrollbarHandler from './ScrollbarHandler'
import DesignHandler from './design-handler/design-handler'
import GuidelinesHandler from './GuidelinesHandler'
import BackgroundHandler from './BackgroundHandler'
import CropHandler from './CropHandler'
class Handlers {
  canvas: FabricCanvas
  public frameHandler: FrameHandler
  public eventsHandler: EventsHandler
  public canvasHandler: CanvasHandler
  public objectsHandler: ObjectsHandler
  public historyHandler: HistoryHandler
  public templateHandler: TemplateHandler
  public zoomHandler: ZoomHandler
  public scrollbarHandler: ScrollbarHandler
  public propertiesToInclude: string[]
  public personalizationHandler: PersonalizationHandler
  public designHandler: DesignHandler
  public guidelinesHandler: GuidelinesHandler
  public backgroundHandler: BackgroundHandler
  public cropHandler: CropHandler
  constructor(props: RootHandlerOptions) {
    this.propertiesToInclude = PROPERTIES_TO_INCLUDE
    this.canvas = props.canvas
    const handlerOptions: HandlerOptions = {
      handlers: this,
      canvas: props.canvas,
      context: props.context,
      config: props.config,
      editor: props.editor
    }
    this.canvasHandler = new CanvasHandler(handlerOptions)
    this.frameHandler = new FrameHandler(handlerOptions)
    this.objectsHandler = new ObjectsHandler(handlerOptions)
    this.historyHandler = new HistoryHandler(handlerOptions)
    this.zoomHandler = new ZoomHandler(handlerOptions)
    this.eventsHandler = new EventsHandler(handlerOptions)
    this.personalizationHandler = new PersonalizationHandler(handlerOptions)
    this.templateHandler = new TemplateHandler(handlerOptions)
    this.scrollbarHandler = new ScrollbarHandler(handlerOptions)
    this.designHandler = new DesignHandler(handlerOptions)
    this.guidelinesHandler = new GuidelinesHandler(handlerOptions)
    this.backgroundHandler = new BackgroundHandler(handlerOptions)
    this.cropHandler = new CropHandler(handlerOptions)
  }

  destroy = () => {}
}

export default Handlers
