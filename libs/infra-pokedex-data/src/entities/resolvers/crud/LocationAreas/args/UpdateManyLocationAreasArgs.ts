import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasUpdateManyMutationInput } from "../../../inputs/LocationAreasUpdateManyMutationInput";
import { LocationAreasWhereInput } from "../../../inputs/LocationAreasWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocationAreasArgs {
  @TypeGraphQL.Field(_type => LocationAreasUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationAreasUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;
}
