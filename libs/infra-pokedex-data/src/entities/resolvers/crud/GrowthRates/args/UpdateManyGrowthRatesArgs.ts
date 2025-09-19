import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesUpdateManyMutationInput } from "../../../inputs/GrowthRatesUpdateManyMutationInput";
import { GrowthRatesWhereInput } from "../../../inputs/GrowthRatesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGrowthRatesArgs {
  @TypeGraphQL.Field(_type => GrowthRatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: GrowthRatesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  where?: GrowthRatesWhereInput | undefined;
}
