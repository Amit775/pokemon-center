import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaScalarWhereInput } from "../inputs/LocationAreaScalarWhereInput";
import { LocationAreaUpdateManyMutationInput } from "../inputs/LocationAreaUpdateManyMutationInput";

@TypeGraphQL.InputType("LocationAreaUpdateManyWithWhereWithoutLocationInput", {})
export class LocationAreaUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationAreaScalarWhereInput, {
    nullable: false
  })
  where!: LocationAreaScalarWhereInput;

  @TypeGraphQL.Field(_type => LocationAreaUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationAreaUpdateManyMutationInput;
}
