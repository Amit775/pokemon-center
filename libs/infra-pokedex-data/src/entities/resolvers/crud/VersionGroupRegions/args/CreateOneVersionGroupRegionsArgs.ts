import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionsCreateInput } from "../../../inputs/VersionGroupRegionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersionGroupRegionsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateInput, {
    nullable: false
  })
  data!: VersionGroupRegionsCreateInput;
}
