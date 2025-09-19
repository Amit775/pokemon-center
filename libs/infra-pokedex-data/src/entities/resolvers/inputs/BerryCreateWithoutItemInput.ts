import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessCreateNestedOneWithoutBerriesInput } from "../inputs/BerryFirmnessCreateNestedOneWithoutBerriesInput";
import { BerryFlavorCreateNestedManyWithoutBerryInput } from "../inputs/BerryFlavorCreateNestedManyWithoutBerryInput";
import { TypeCreateNestedOneWithoutNaturalGiftTypesInput } from "../inputs/TypeCreateNestedOneWithoutNaturalGiftTypesInput";

@TypeGraphQL.InputType("BerryCreateWithoutItemInput", {})
export class BerryCreateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  natural_gift_power?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  size!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  max_harvest!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  growth_time!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  soil_dryness!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  smoothness!: number;

  @TypeGraphQL.Field(_type => BerryFirmnessCreateNestedOneWithoutBerriesInput, {
    nullable: false
  })
  firmness!: BerryFirmnessCreateNestedOneWithoutBerriesInput;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  naturalGiftType?: TypeCreateNestedOneWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCreateNestedManyWithoutBerryInput, {
    nullable: true
  })
  flavors?: BerryFlavorCreateNestedManyWithoutBerryInput | undefined;
}
