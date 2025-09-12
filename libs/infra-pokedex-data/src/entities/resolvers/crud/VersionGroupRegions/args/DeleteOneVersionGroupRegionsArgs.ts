import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionsWhereUniqueInput } from "../../../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneVersionGroupRegionsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionsWhereUniqueInput;
}
