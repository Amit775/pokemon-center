import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityOrderByWithAggregationInput } from "../../../inputs/AbilityOrderByWithAggregationInput";
import { AbilityScalarWhereWithAggregatesInput } from "../../../inputs/AbilityScalarWhereWithAggregatesInput";
import { AbilityWhereInput } from "../../../inputs/AbilityWhereInput";
import { AbilityScalarFieldEnum } from "../../../../enums/AbilityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAbilityArgs {
  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  where?: AbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AbilityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AbilityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "generation_id" | "is_main_series">;

  @TypeGraphQL.Field(_type => AbilityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AbilityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
