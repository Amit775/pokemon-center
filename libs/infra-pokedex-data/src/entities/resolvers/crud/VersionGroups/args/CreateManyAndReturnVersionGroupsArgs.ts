import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsCreateManyInput } from "../../../inputs/VersionGroupsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnVersionGroupsArgs {
  @TypeGraphQL.Field(_type => [VersionGroupsCreateManyInput], {
    nullable: false
  })
  data!: VersionGroupsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
