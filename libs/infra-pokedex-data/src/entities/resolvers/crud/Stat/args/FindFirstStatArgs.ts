import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatOrderByWithRelationInput } from "../../../inputs/StatOrderByWithRelationInput";
import { StatWhereInput } from "../../../inputs/StatWhereInput";
import { StatWhereUniqueInput } from "../../../inputs/StatWhereUniqueInput";
import { StatScalarFieldEnum } from "../../../../enums/StatScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstStatArgs {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StatOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  cursor?: StatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StatScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "damage_class_id" | "identifier" | "is_battle_only" | "game_index"> | undefined;
}
