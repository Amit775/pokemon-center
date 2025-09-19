import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionUpdateInput } from "../../../inputs/VersionGroupRegionUpdateInput";
import { VersionGroupRegionWhereUniqueInput } from "../../../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersionGroupRegionArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateInput, {
    nullable: false
  })
  data!: VersionGroupRegionUpdateInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionWhereUniqueInput;
}
