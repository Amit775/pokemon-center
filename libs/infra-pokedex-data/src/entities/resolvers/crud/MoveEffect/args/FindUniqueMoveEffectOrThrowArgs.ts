import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectWhereUniqueInput } from "../../../inputs/MoveEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveEffectOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveEffectWhereUniqueInput, {
    nullable: false
  })
  where!: MoveEffectWhereUniqueInput;
}
