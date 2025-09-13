import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsScalarWhereInput } from "../inputs/LocationsScalarWhereInput";
import { LocationsUpdateManyMutationInput } from "../inputs/LocationsUpdateManyMutationInput";

@TypeGraphQL.InputType("LocationsUpdateManyWithWhereWithoutRegionInput", {})
export class LocationsUpdateManyWithWhereWithoutRegionInput {
  @TypeGraphQL.Field(_type => LocationsScalarWhereInput, {
    nullable: false
  })
  where!: LocationsScalarWhereInput;

  @TypeGraphQL.Field(_type => LocationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationsUpdateManyMutationInput;
}
