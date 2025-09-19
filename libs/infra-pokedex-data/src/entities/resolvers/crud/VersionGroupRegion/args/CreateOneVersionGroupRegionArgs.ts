import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionCreateInput } from "../../../inputs/VersionGroupRegionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersionGroupRegionArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionCreateInput, {
    nullable: false
  })
  data!: VersionGroupRegionCreateInput;
}
