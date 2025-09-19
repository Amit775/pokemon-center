import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexUpdateManyMutationInput } from "../../../inputs/LocationGameIndexUpdateManyMutationInput";
import { LocationGameIndexWhereInput } from "../../../inputs/LocationGameIndexWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocationGameIndexArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationGameIndexUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocationGameIndexWhereInput, {
    nullable: true
  })
  where?: LocationGameIndexWhereInput | undefined;
}
