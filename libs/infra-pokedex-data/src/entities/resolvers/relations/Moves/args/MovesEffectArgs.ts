import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsWhereInput } from "../../../inputs/MoveEffectsWhereInput";

@TypeGraphQL.ArgsType()
export class MovesEffectArgs {
  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  where?: MoveEffectsWhereInput | undefined;
}
