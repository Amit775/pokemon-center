import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionCreateManyInput } from "../../../inputs/RegionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRegionArgs {
  @TypeGraphQL.Field(_type => [RegionCreateManyInput], {
    nullable: false
  })
  data!: RegionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
