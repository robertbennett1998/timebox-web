import { DropTargetBase } from "./drop-target-base";

export class DraggableBase {
  private _targetables: string[];
  public get targetables(): string[] {
    return this._targetables;
  }

  private _dropTarget: DropTargetBase | null;
  public get dropTarget() : DropTargetBase | null {
    return this._dropTarget;
  }
  public set dropTarget(value: DropTargetBase | null) {
    this._dropTarget = value;
  }

  constructor(targetables : string[] = ["default"], dropTarget : DropTargetBase | null = null) {
    this._dropTarget = dropTarget;
    this._targetables = targetables;
  }
}
