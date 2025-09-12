import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsUpdateManyMutationInput } from "../../../inputs/MoveEffectsUpdateManyMutationInput";
import { MoveEffectsWhereInput } from "../../../inputs/MoveEffectsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveEffectsArgs {
  @TypeGraphQL.Field(_type => MoveEffectsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveEffectsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  where?: MoveEffectsWhereInput | undefined;
}
