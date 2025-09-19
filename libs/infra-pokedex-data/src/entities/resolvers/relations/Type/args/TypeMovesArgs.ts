import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveOrderByWithRelationInput } from "../../../inputs/MoveOrderByWithRelationInput";
import { MoveWhereInput } from "../../../inputs/MoveWhereInput";
import { MoveWhereUniqueInput } from "../../../inputs/MoveWhereUniqueInput";
import { MoveScalarFieldEnum } from "../../../../enums/MoveScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TypeMovesArgs {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "generation_id" | "type_id" | "power" | "pp" | "accuracy" | "priority" | "target_id" | "damage_class_id" | "effect_id" | "effect_chance" | "contest_type_id" | "contest_effect_id" | "super_contest_effect_id"> | undefined;
}
