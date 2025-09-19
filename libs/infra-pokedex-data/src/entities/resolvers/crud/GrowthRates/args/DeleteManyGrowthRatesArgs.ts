import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesWhereInput } from "../../../inputs/GrowthRatesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGrowthRatesArgs {
  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  where?: GrowthRatesWhereInput | undefined;
}
