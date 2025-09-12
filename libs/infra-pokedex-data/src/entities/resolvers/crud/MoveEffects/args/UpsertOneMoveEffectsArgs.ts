import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsCreateInput } from "../../../inputs/MoveEffectsCreateInput";
import { MoveEffectsUpdateInput } from "../../../inputs/MoveEffectsUpdateInput";
import { MoveEffectsWhereUniqueInput } from "../../../inputs/MoveEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveEffectsArgs {
  @TypeGraphQL.Field(_type => MoveEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveEffectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveEffectsCreateInput, {
    nullable: false
  })
  create!: MoveEffectsCreateInput;

  @TypeGraphQL.Field(_type => MoveEffectsUpdateInput, {
    nullable: false
  })
  update!: MoveEffectsUpdateInput;
}
