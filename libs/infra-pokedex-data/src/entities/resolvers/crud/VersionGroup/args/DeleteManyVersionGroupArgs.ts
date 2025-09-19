import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupWhereInput } from "../../../inputs/VersionGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVersionGroupArgs {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
