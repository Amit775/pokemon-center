import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesUpdateInput } from "../../../inputs/GrowthRatesUpdateInput";
import { GrowthRatesWhereUniqueInput } from "../../../inputs/GrowthRatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGrowthRatesArgs {
  @TypeGraphQL.Field(_type => GrowthRatesUpdateInput, {
    nullable: false
  })
  data!: GrowthRatesUpdateInput;

  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: false
  })
  where!: GrowthRatesWhereUniqueInput;
}
