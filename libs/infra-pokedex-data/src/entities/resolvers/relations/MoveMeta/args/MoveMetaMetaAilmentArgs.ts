import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsWhereInput } from "../../../inputs/MoveMetaAilmentsWhereInput";

@TypeGraphQL.ArgsType()
export class MoveMetaMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentsWhereInput | undefined;
}
