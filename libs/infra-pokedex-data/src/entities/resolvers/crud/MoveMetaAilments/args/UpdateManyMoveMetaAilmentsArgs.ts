import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsUpdateManyMutationInput } from "../../../inputs/MoveMetaAilmentsUpdateManyMutationInput";
import { MoveMetaAilmentsWhereInput } from "../../../inputs/MoveMetaAilmentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveMetaAilmentsArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveMetaAilmentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentsWhereInput | undefined;
}
