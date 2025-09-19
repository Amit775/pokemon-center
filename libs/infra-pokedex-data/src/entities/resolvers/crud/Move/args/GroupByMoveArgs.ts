import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveOrderByWithAggregationInput } from "../../../inputs/MoveOrderByWithAggregationInput";
import { MoveScalarWhereWithAggregatesInput } from "../../../inputs/MoveScalarWhereWithAggregatesInput";
import { MoveWhereInput } from "../../../inputs/MoveWhereInput";
import { MoveScalarFieldEnum } from "../../../../enums/MoveScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveArgs {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "generation_id" | "type_id" | "power" | "pp" | "accuracy" | "priority" | "target_id" | "damage_class_id" | "effect_id" | "effect_chance" | "contest_type_id" | "contest_effect_id" | "super_contest_effect_id">;

  @TypeGraphQL.Field(_type => MoveScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
