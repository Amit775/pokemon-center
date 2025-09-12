import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationsCreateManyInput } from "../../../inputs/LocationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnLocationsArgs {
  @TypeGraphQL.Field(_type => [LocationsCreateManyInput], {
    nullable: false
  })
  data!: LocationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
