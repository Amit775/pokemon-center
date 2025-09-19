import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexWhereUniqueInput } from "../../../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLocationGameIndexOrThrowArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndexWhereUniqueInput;
}
