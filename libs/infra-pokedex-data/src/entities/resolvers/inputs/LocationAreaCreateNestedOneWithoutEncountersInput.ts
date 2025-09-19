import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateOrConnectWithoutEncountersInput } from "../inputs/LocationAreaCreateOrConnectWithoutEncountersInput";
import { LocationAreaCreateWithoutEncountersInput } from "../inputs/LocationAreaCreateWithoutEncountersInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaCreateNestedOneWithoutEncountersInput", {})
export class LocationAreaCreateNestedOneWithoutEncountersInput {
  @TypeGraphQL.Field(_type => LocationAreaCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: LocationAreaCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: LocationAreaCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationAreaWhereUniqueInput | undefined;
}
