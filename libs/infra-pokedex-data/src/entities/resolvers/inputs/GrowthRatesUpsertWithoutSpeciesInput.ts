import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCreateWithoutSpeciesInput } from "../inputs/GrowthRatesCreateWithoutSpeciesInput";
import { GrowthRatesUpdateWithoutSpeciesInput } from "../inputs/GrowthRatesUpdateWithoutSpeciesInput";
import { GrowthRatesWhereInput } from "../inputs/GrowthRatesWhereInput";

@TypeGraphQL.InputType("GrowthRatesUpsertWithoutSpeciesInput", {})
export class GrowthRatesUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => GrowthRatesUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: GrowthRatesUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => GrowthRatesCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: GrowthRatesCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  where?: GrowthRatesWhereInput | undefined;
}
