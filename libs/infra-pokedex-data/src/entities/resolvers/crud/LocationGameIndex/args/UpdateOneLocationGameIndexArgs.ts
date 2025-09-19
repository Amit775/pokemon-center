import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexUpdateInput } from "../../../inputs/LocationGameIndexUpdateInput";
import { LocationGameIndexWhereUniqueInput } from "../../../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocationGameIndexArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexUpdateInput, {
    nullable: false
  })
  data!: LocationGameIndexUpdateInput;

  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndexWhereUniqueInput;
}
