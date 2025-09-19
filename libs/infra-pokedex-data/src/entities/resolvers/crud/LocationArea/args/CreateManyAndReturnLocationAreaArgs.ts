import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaCreateManyInput } from "../../../inputs/LocationAreaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnLocationAreaArgs {
  @TypeGraphQL.Field(_type => [LocationAreaCreateManyInput], {
    nullable: false
  })
  data!: LocationAreaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
