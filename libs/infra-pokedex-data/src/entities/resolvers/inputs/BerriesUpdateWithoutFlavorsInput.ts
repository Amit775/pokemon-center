import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput } from "../inputs/BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ItemsUpdateOneRequiredWithoutBerriesNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutBerriesNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { TypesUpdateOneWithoutNaturalGiftTypesNestedInput } from "../inputs/TypesUpdateOneWithoutNaturalGiftTypesNestedInput";

@TypeGraphQL.InputType("BerriesUpdateWithoutFlavorsInput", {})
export class BerriesUpdateWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  natural_gift_power?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  size?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  max_harvest?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  growth_time?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  soil_dryness?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  smoothness?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutBerriesNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutBerriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput, {
    nullable: true
  })
  firmness?: BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneWithoutNaturalGiftTypesNestedInput, {
    nullable: true
  })
  naturalGiftType?: TypesUpdateOneWithoutNaturalGiftTypesNestedInput | undefined;
}
