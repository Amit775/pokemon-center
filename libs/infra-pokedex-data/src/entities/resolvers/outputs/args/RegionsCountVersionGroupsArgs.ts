import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionsWhereInput } from "../../inputs/VersionGroupRegionsWhereInput";

@TypeGraphQL.ArgsType()
export class RegionsCountVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereInput, {
    nullable: true
  })
  where?: VersionGroupRegionsWhereInput | undefined;
}
