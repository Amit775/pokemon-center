import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaWhereInput } from "../../inputs/MoveMetaWhereInput";

@TypeGraphQL.ArgsType()
export class MoveCountMetaArgs {
  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  where?: MoveMetaWhereInput | undefined;
}
