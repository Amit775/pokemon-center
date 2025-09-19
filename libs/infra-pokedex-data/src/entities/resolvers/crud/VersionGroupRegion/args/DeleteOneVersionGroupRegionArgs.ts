import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionWhereUniqueInput } from "../../../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneVersionGroupRegionArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionWhereUniqueInput;
}
