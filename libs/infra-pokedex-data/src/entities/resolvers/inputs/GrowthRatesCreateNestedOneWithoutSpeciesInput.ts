import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCreateOrConnectWithoutSpeciesInput } from "../inputs/GrowthRatesCreateOrConnectWithoutSpeciesInput";
import { GrowthRatesCreateWithoutSpeciesInput } from "../inputs/GrowthRatesCreateWithoutSpeciesInput";
import { GrowthRatesWhereUniqueInput } from "../inputs/GrowthRatesWhereUniqueInput";

@TypeGraphQL.InputType("GrowthRatesCreateNestedOneWithoutSpeciesInput", {})
export class GrowthRatesCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => GrowthRatesCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: GrowthRatesCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: GrowthRatesCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: true
  })
  connect?: GrowthRatesWhereUniqueInput | undefined;
}
