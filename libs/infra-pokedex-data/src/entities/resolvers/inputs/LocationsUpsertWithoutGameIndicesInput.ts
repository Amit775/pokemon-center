import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateWithoutGameIndicesInput } from "../inputs/LocationsCreateWithoutGameIndicesInput";
import { LocationsUpdateWithoutGameIndicesInput } from "../inputs/LocationsUpdateWithoutGameIndicesInput";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";

@TypeGraphQL.InputType("LocationsUpsertWithoutGameIndicesInput", {})
export class LocationsUpsertWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => LocationsUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  update!: LocationsUpdateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => LocationsCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: LocationsCreateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;
}
