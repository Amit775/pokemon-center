import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesOrderByWithRelationInput } from "../../../inputs/MovesOrderByWithRelationInput";
import { MovesWhereInput } from "../../../inputs/MovesWhereInput";
import { MovesWhereUniqueInput } from "../../../inputs/MovesWhereUniqueInput";
import { MovesScalarFieldEnum } from "../../../../enums/MovesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SuperContestEffectsMovesArgs {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MovesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "type_id" | "power" | "pp" | "accuracy" | "priority" | "target_id" | "damage_class_id" | "effect_id" | "effect_chance" | "contest_type_id" | "contest_effect_id" | "super_contest_effect_id"> | undefined;
}
