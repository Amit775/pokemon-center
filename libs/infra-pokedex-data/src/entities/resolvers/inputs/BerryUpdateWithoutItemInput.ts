import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput } from "../inputs/BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput";
import { BerryFlavorUpdateManyWithoutBerryNestedInput } from "../inputs/BerryFlavorUpdateManyWithoutBerryNestedInput";
import { TypeUpdateOneWithoutNaturalGiftTypesNestedInput } from "../inputs/TypeUpdateOneWithoutNaturalGiftTypesNestedInput";

@TypeGraphQL.InputType("BerryUpdateWithoutItemInput", {})
export class BerryUpdateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  natural_gift_power?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_harvest?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  growth_time?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  soil_dryness?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  smoothness?: number | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput, {
    nullable: true
  })
  firmness?: BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneWithoutNaturalGiftTypesNestedInput, {
    nullable: true
  })
  naturalGiftType?: TypeUpdateOneWithoutNaturalGiftTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateManyWithoutBerryNestedInput, {
    nullable: true
  })
  flavors?: BerryFlavorUpdateManyWithoutBerryNestedInput | undefined;
}
