import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessCreateNestedOneWithoutBerriesInput } from "../inputs/BerryFirmnessCreateNestedOneWithoutBerriesInput";
import { BerryFlavorsCreateNestedManyWithoutBerryInput } from "../inputs/BerryFlavorsCreateNestedManyWithoutBerryInput";
import { TypesCreateNestedOneWithoutNaturalGiftTypesInput } from "../inputs/TypesCreateNestedOneWithoutNaturalGiftTypesInput";

@TypeGraphQL.InputType("BerriesCreateWithoutItemInput", {})
export class BerriesCreateWithoutItemInput {
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

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  naturalGiftType?: TypesCreateNestedOneWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateNestedManyWithoutBerryInput, {
    nullable: true
  })
  flavors?: BerryFlavorsCreateNestedManyWithoutBerryInput | undefined;
}
