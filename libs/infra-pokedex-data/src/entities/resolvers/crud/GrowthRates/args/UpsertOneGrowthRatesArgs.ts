import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesCreateInput } from "../../../inputs/GrowthRatesCreateInput";
import { GrowthRatesUpdateInput } from "../../../inputs/GrowthRatesUpdateInput";
import { GrowthRatesWhereUniqueInput } from "../../../inputs/GrowthRatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGrowthRatesArgs {
  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: false
  })
  where!: GrowthRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => GrowthRatesCreateInput, {
    nullable: false
  })
  create!: GrowthRatesCreateInput;

  @TypeGraphQL.Field(_type => GrowthRatesUpdateInput, {
    nullable: false
  })
  update!: GrowthRatesUpdateInput;
}
