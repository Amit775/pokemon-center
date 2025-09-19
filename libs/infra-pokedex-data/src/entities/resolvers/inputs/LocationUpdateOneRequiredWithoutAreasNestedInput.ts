import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutAreasInput } from "../inputs/LocationCreateOrConnectWithoutAreasInput";
import { LocationCreateWithoutAreasInput } from "../inputs/LocationCreateWithoutAreasInput";
import { LocationUpdateToOneWithWhereWithoutAreasInput } from "../inputs/LocationUpdateToOneWithWhereWithoutAreasInput";
import { LocationUpsertWithoutAreasInput } from "../inputs/LocationUpsertWithoutAreasInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateOneRequiredWithoutAreasNestedInput", {})
export class LocationUpdateOneRequiredWithoutAreasNestedInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutAreasInput, {
    nullable: true
  })
  create?: LocationCreateWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutAreasInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutAreasInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateToOneWithWhereWithoutAreasInput, {
    nullable: true
  })
  update?: LocationUpdateToOneWithWhereWithoutAreasInput | undefined;
}
