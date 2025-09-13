import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasScalarWhereInput } from "../inputs/LocationAreasScalarWhereInput";
import { LocationAreasUpdateManyMutationInput } from "../inputs/LocationAreasUpdateManyMutationInput";

@TypeGraphQL.InputType("LocationAreasUpdateManyWithWhereWithoutLocationInput", {})
export class LocationAreasUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationAreasScalarWhereInput, {
    nullable: false
  })
  where!: LocationAreasScalarWhereInput;

  @TypeGraphQL.Field(_type => LocationAreasUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationAreasUpdateManyMutationInput;
}
