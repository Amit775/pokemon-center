import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsCreateManyInput } from "../../../inputs/RegionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRegionsArgs {
  @TypeGraphQL.Field(_type => [RegionsCreateManyInput], {
    nullable: false
  })
  data!: RegionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
