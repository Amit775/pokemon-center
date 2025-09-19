import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaWhereUniqueInput } from "../../../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLocationAreaArgs {
  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaWhereUniqueInput;
}
