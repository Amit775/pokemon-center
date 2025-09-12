import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateOrConnectWithoutEncountersInput } from "../inputs/LocationAreasCreateOrConnectWithoutEncountersInput";
import { LocationAreasCreateWithoutEncountersInput } from "../inputs/LocationAreasCreateWithoutEncountersInput";
import { LocationAreasUpdateToOneWithWhereWithoutEncountersInput } from "../inputs/LocationAreasUpdateToOneWithWhereWithoutEncountersInput";
import { LocationAreasUpsertWithoutEncountersInput } from "../inputs/LocationAreasUpsertWithoutEncountersInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasUpdateOneRequiredWithoutEncountersNestedInput", {})
export class LocationAreasUpdateOneRequiredWithoutEncountersNestedInput {
  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: LocationAreasCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: LocationAreasCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpsertWithoutEncountersInput, {
    nullable: true
  })
  upsert?: LocationAreasUpsertWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationAreasWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateToOneWithWhereWithoutEncountersInput, {
    nullable: true
  })
  update?: LocationAreasUpdateToOneWithWhereWithoutEncountersInput | undefined;
}
