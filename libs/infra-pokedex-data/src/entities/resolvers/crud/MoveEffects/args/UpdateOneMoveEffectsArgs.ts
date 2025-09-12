import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsUpdateInput } from "../../../inputs/MoveEffectsUpdateInput";
import { MoveEffectsWhereUniqueInput } from "../../../inputs/MoveEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveEffectsArgs {
  @TypeGraphQL.Field(_type => MoveEffectsUpdateInput, {
    nullable: false
  })
  data!: MoveEffectsUpdateInput;

  @TypeGraphQL.Field(_type => MoveEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveEffectsWhereUniqueInput;
}
