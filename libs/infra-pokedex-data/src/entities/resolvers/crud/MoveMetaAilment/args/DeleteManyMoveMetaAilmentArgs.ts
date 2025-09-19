import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentWhereInput } from "../../../inputs/MoveMetaAilmentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentWhereInput | undefined;
}
