import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateOrConnectWithoutEncountersInput } from "../inputs/LocationAreaCreateOrConnectWithoutEncountersInput";
import { LocationAreaCreateWithoutEncountersInput } from "../inputs/LocationAreaCreateWithoutEncountersInput";
import { LocationAreaUpdateToOneWithWhereWithoutEncountersInput } from "../inputs/LocationAreaUpdateToOneWithWhereWithoutEncountersInput";
import { LocationAreaUpsertWithoutEncountersInput } from "../inputs/LocationAreaUpsertWithoutEncountersInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaUpdateOneRequiredWithoutEncountersNestedInput", {})
export class LocationAreaUpdateOneRequiredWithoutEncountersNestedInput {
  @TypeGraphQL.Field(_type => LocationAreaCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: LocationAreaCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: LocationAreaCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpsertWithoutEncountersInput, {
    nullable: true
  })
  upsert?: LocationAreaUpsertWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationAreaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpdateToOneWithWhereWithoutEncountersInput, {
    nullable: true
  })
  update?: LocationAreaUpdateToOneWithWhereWithoutEncountersInput | undefined;
}
