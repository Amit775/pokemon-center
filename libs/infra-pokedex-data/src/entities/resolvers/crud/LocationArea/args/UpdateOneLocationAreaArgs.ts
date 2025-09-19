import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaUpdateInput } from "../../../inputs/LocationAreaUpdateInput";
import { LocationAreaWhereUniqueInput } from "../../../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocationAreaArgs {
  @TypeGraphQL.Field(_type => LocationAreaUpdateInput, {
    nullable: false
  })
  data!: LocationAreaUpdateInput;

  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaWhereUniqueInput;
}
