import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesWhereUniqueInput } from "../../../inputs/GrowthRatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGrowthRatesOrThrowArgs {
  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: false
  })
  where!: GrowthRatesWhereUniqueInput;
}
