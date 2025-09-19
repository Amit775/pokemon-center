import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaUpdateManyMutationInput } from "../../../inputs/MoveMetaUpdateManyMutationInput";
import { MoveMetaWhereInput } from "../../../inputs/MoveMetaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveMetaArgs {
  @TypeGraphQL.Field(_type => MoveMetaUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveMetaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  where?: MoveMetaWhereInput | undefined;
}
