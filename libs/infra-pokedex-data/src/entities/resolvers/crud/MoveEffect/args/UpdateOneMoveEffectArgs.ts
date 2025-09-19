import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectUpdateInput } from "../../../inputs/MoveEffectUpdateInput";
import { MoveEffectWhereUniqueInput } from "../../../inputs/MoveEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveEffectArgs {
  @TypeGraphQL.Field(_type => MoveEffectUpdateInput, {
    nullable: false
  })
  data!: MoveEffectUpdateInput;

  @TypeGraphQL.Field(_type => MoveEffectWhereUniqueInput, {
    nullable: false
  })
  where!: MoveEffectWhereUniqueInput;
}
