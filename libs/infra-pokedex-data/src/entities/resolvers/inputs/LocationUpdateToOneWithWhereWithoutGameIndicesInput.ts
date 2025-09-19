import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutGameIndicesInput } from "../inputs/LocationUpdateWithoutGameIndicesInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutGameIndicesInput", {})
export class LocationUpdateToOneWithWhereWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutGameIndicesInput;
}
