import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupWhereInput } from "../../inputs/VersionGroupWhereInput";

@TypeGraphQL.ArgsType()
export class GenerationCountVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
