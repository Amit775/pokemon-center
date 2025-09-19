import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectWhereInput } from "../../../inputs/MoveEffectWhereInput";

@TypeGraphQL.ArgsType()
export class MoveEffectArgs {
  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  where?: MoveEffectWhereInput | undefined;
}
