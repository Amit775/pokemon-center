import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaWhereInput } from "../../../inputs/LocationAreaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLocationAreaArgs {
  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  where?: LocationAreaWhereInput | undefined;
}
