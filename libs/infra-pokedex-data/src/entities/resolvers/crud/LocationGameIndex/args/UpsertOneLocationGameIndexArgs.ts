import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexCreateInput } from "../../../inputs/LocationGameIndexCreateInput";
import { LocationGameIndexUpdateInput } from "../../../inputs/LocationGameIndexUpdateInput";
import { LocationGameIndexWhereUniqueInput } from "../../../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocationGameIndexArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateInput, {
    nullable: false
  })
  create!: LocationGameIndexCreateInput;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateInput, {
    nullable: false
  })
  update!: LocationGameIndexUpdateInput;
}
