import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectWhereInput } from "../../inputs/MoveEffectWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveEffectArgs {
  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  where?: MoveEffectWhereInput | undefined;
}
