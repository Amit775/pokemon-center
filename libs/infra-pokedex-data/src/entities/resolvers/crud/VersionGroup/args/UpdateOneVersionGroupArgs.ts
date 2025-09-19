import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupUpdateInput } from "../../../inputs/VersionGroupUpdateInput";
import { VersionGroupWhereUniqueInput } from "../../../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersionGroupArgs {
  @TypeGraphQL.Field(_type => VersionGroupUpdateInput, {
    nullable: false
  })
  data!: VersionGroupUpdateInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;
}
