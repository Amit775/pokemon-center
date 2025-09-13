import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilitiesOrderByWithAggregationInput } from "../../../inputs/AbilitiesOrderByWithAggregationInput";
import { AbilitiesScalarWhereWithAggregatesInput } from "../../../inputs/AbilitiesScalarWhereWithAggregatesInput";
import { AbilitiesWhereInput } from "../../../inputs/AbilitiesWhereInput";
import { AbilitiesScalarFieldEnum } from "../../../../enums/AbilitiesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  where?: AbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AbilitiesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "generation_id" | "is_main_series">;

  @TypeGraphQL.Field(_type => AbilitiesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AbilitiesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
