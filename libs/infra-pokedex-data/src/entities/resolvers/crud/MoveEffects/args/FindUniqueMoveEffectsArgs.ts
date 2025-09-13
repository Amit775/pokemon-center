import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsWhereUniqueInput } from "../../../inputs/MoveEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveEffectsArgs {
  @TypeGraphQL.Field(_type => MoveEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveEffectsWhereUniqueInput;
}
