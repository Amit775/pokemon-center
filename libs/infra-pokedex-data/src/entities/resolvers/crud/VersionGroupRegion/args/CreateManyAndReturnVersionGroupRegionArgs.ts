import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionCreateManyInput } from "../../../inputs/VersionGroupRegionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnVersionGroupRegionArgs {
  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateManyInput], {
    nullable: false
  })
  data!: VersionGroupRegionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
