import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasCreateManyInput } from "../../../inputs/LocationAreasCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLocationAreasArgs {
  @TypeGraphQL.Field(_type => [LocationAreasCreateManyInput], {
    nullable: false
  })
  data!: LocationAreasCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
