import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectCreateInput } from "../../../inputs/MoveEffectCreateInput";
import { MoveEffectUpdateInput } from "../../../inputs/MoveEffectUpdateInput";
import { MoveEffectWhereUniqueInput } from "../../../inputs/MoveEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveEffectArgs {
  @TypeGraphQL.Field(_type => MoveEffectWhereUniqueInput, {
    nullable: false
  })
  where!: MoveEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveEffectCreateInput, {
    nullable: false
  })
  create!: MoveEffectCreateInput;

  @TypeGraphQL.Field(_type => MoveEffectUpdateInput, {
    nullable: false
  })
  update!: MoveEffectUpdateInput;
}
