import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateOrConnectWithoutAreasInput } from "../inputs/LocationsCreateOrConnectWithoutAreasInput";
import { LocationsCreateWithoutAreasInput } from "../inputs/LocationsCreateWithoutAreasInput";
import { LocationsUpdateToOneWithWhereWithoutAreasInput } from "../inputs/LocationsUpdateToOneWithWhereWithoutAreasInput";
import { LocationsUpsertWithoutAreasInput } from "../inputs/LocationsUpsertWithoutAreasInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsUpdateOneRequiredWithoutAreasNestedInput", {})
export class LocationsUpdateOneRequiredWithoutAreasNestedInput {
  @TypeGraphQL.Field(_type => LocationsCreateWithoutAreasInput, {
    nullable: true
  })
  create?: LocationsCreateWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateOrConnectWithoutAreasInput, {
    nullable: true
  })
  connectOrCreate?: LocationsCreateOrConnectWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpsertWithoutAreasInput, {
    nullable: true
  })
  upsert?: LocationsUpsertWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateToOneWithWhereWithoutAreasInput, {
    nullable: true
  })
  update?: LocationsUpdateToOneWithWhereWithoutAreasInput | undefined;
}
