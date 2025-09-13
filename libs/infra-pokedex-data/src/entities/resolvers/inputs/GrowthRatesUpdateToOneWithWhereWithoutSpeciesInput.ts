import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesUpdateWithoutSpeciesInput } from "../inputs/GrowthRatesUpdateWithoutSpeciesInput";
import { GrowthRatesWhereInput } from "../inputs/GrowthRatesWhereInput";

@TypeGraphQL.InputType("GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput", {})
export class GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  where?: GrowthRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: GrowthRatesUpdateWithoutSpeciesInput;
}
