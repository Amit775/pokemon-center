import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesCreateInput } from "../../../inputs/GrowthRatesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGrowthRatesArgs {
  @TypeGraphQL.Field(_type => GrowthRatesCreateInput, {
    nullable: false
  })
  data!: GrowthRatesCreateInput;
}
