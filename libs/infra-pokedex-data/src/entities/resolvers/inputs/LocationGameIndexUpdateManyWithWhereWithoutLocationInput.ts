import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexScalarWhereInput } from "../inputs/LocationGameIndexScalarWhereInput";
import { LocationGameIndexUpdateManyMutationInput } from "../inputs/LocationGameIndexUpdateManyMutationInput";

@TypeGraphQL.InputType("LocationGameIndexUpdateManyWithWhereWithoutLocationInput", {})
export class LocationGameIndexUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationGameIndexScalarWhereInput, {
    nullable: false
  })
  where!: LocationGameIndexScalarWhereInput;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationGameIndexUpdateManyMutationInput;
}
