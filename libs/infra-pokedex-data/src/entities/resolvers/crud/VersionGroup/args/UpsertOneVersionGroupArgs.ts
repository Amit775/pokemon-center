import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupCreateInput } from "../../../inputs/VersionGroupCreateInput";
import { VersionGroupUpdateInput } from "../../../inputs/VersionGroupUpdateInput";
import { VersionGroupWhereUniqueInput } from "../../../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersionGroupArgs {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateInput, {
    nullable: false
  })
  create!: VersionGroupCreateInput;

  @TypeGraphQL.Field(_type => VersionGroupUpdateInput, {
    nullable: false
  })
  update!: VersionGroupUpdateInput;
}
