import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsUpdateWithoutGameIndicesInput } from "../inputs/LocationsUpdateWithoutGameIndicesInput";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";

@TypeGraphQL.InputType("LocationsUpdateToOneWithWhereWithoutGameIndicesInput", {})
export class LocationsUpdateToOneWithWhereWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  data!: LocationsUpdateWithoutGameIndicesInput;
}
