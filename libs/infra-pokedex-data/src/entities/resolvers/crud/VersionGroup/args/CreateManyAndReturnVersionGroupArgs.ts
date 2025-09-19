import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupCreateManyInput } from "../../../inputs/VersionGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnVersionGroupArgs {
  @TypeGraphQL.Field(_type => [VersionGroupCreateManyInput], {
    nullable: false
  })
  data!: VersionGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
