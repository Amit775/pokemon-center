import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesOrderByWithAggregationInput } from "../../../inputs/MovesOrderByWithAggregationInput";
import { MovesScalarWhereWithAggregatesInput } from "../../../inputs/MovesScalarWhereWithAggregatesInput";
import { MovesWhereInput } from "../../../inputs/MovesWhereInput";
import { MovesScalarFieldEnum } from "../../../../enums/MovesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovesArgs {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "generation_id" | "type_id" | "power" | "pp" | "accuracy" | "priority" | "target_id" | "damage_class_id" | "effect_id" | "effect_chance" | "contest_type_id" | "contest_effect_id" | "super_contest_effect_id">;

  @TypeGraphQL.Field(_type => MovesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
