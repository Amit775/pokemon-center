import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionsUpdateInput } from "../../../inputs/VersionGroupRegionsUpdateInput";
import { VersionGroupRegionsWhereUniqueInput } from "../../../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersionGroupRegionsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateInput, {
    nullable: false
  })
  data!: VersionGroupRegionsUpdateInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionsWhereUniqueInput;
}
