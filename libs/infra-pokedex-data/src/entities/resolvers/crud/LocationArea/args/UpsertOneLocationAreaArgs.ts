import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaCreateInput } from "../../../inputs/LocationAreaCreateInput";
import { LocationAreaUpdateInput } from "../../../inputs/LocationAreaUpdateInput";
import { LocationAreaWhereUniqueInput } from "../../../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocationAreaArgs {
  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaCreateInput, {
    nullable: false
  })
  create!: LocationAreaCreateInput;

  @TypeGraphQL.Field(_type => LocationAreaUpdateInput, {
    nullable: false
  })
  update!: LocationAreaUpdateInput;
}
