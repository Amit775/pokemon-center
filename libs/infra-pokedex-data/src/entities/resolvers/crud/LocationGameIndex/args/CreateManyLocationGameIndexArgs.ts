import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexCreateManyInput } from "../../../inputs/LocationGameIndexCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLocationGameIndexArgs {
  @TypeGraphQL.Field(_type => [LocationGameIndexCreateManyInput], {
    nullable: false
  })
  data!: LocationGameIndexCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
