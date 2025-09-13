import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesScalarWhereInput } from "../inputs/LocationGameIndicesScalarWhereInput";
import { LocationGameIndicesUpdateManyMutationInput } from "../inputs/LocationGameIndicesUpdateManyMutationInput";

@TypeGraphQL.InputType("LocationGameIndicesUpdateManyWithWhereWithoutLocationInput", {})
export class LocationGameIndicesUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationGameIndicesScalarWhereInput, {
    nullable: false
  })
  where!: LocationGameIndicesScalarWhereInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationGameIndicesUpdateManyMutationInput;
}
