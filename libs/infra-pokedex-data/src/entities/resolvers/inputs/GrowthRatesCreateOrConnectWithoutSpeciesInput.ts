import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCreateWithoutSpeciesInput } from "../inputs/GrowthRatesCreateWithoutSpeciesInput";
import { GrowthRatesWhereUniqueInput } from "../inputs/GrowthRatesWhereUniqueInput";

@TypeGraphQL.InputType("GrowthRatesCreateOrConnectWithoutSpeciesInput", {})
export class GrowthRatesCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: false
  })
  where!: GrowthRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => GrowthRatesCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: GrowthRatesCreateWithoutSpeciesInput;
}
