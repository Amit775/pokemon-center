import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentUpdateManyMutationInput } from "../../../inputs/MoveMetaAilmentUpdateManyMutationInput";
import { MoveMetaAilmentWhereInput } from "../../../inputs/MoveMetaAilmentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveMetaAilmentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentWhereInput | undefined;
}
