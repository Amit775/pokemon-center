import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryUpdateManyMutationInput } from "../../../inputs/MoveMetaCategoryUpdateManyMutationInput";
import { MoveMetaCategoryWhereInput } from "../../../inputs/MoveMetaCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveMetaCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoryWhereInput | undefined;
}
