// Panel you want to modify
import UnitPromotion from '/base-standard/ui/unit-promotion/model-unit-promotion.js';

UnitPromotion.iconClassMap.LOC_DISCIPLINE_ARMY_KUNINGAZ_NAME = "promotion-assault";

engine.whenReady.then(() => {
  const updateModel = () => {
    engine.updateWholeModel(UnitPromotion);
  };
  engine.createJSModel("g_UnitPromotion", UnitPromotion);
  UnitPromotion.updateCallback = updateModel;
});