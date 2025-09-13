import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsUpdateManyWithoutBerryNestedInput } from "../inputs/BerryFlavorsUpdateManyWithoutBerryNestedInput";
import { ItemsUpdateOneRequiredWithoutBerriesNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutBerriesNestedInput";
import { TypesUpdateOneWithoutNaturalGiftTypesNestedInput } from "../inputs/TypesUpdateOneWithoutNaturalGiftTypesNestedInput";

@TypeGraphQL.InputType("BerriesUpdateWithoutFirmnessInput", {})
export class BerriesUpdateWithoutFirmnessInput {
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

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutBerriesNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutBerriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneWithoutNaturalGiftTypesNestedInput, {
    nullable: true
  })
  naturalGiftType?: TypesUpdateOneWithoutNaturalGiftTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateManyWithoutBerryNestedInput, {
    nullable: true
  })
  flavors?: BerryFlavorsUpdateManyWithoutBerryNestedInput | undefined;
}
