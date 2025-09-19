import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectUpdateManyMutationInput } from "../../../inputs/MoveEffectUpdateManyMutationInput";
import { MoveEffectWhereInput } from "../../../inputs/MoveEffectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveEffectArgs {
  @TypeGraphQL.Field(_type => MoveEffectUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveEffectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  where?: MoveEffectWhereInput | undefined;
}
